import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Simple in-memory rate limiter: 3 generations per user (identified by username/email) per hour
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (entry.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: RATE_LIMIT - entry.count };
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'AI bio generation is temporarily unavailable. Please try again later or write your bio manually using the editor.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, title, email, github, skills, tone } = body;

    if (!name || !github) {
      return NextResponse.json(
        { error: 'Please fill in your Name and GitHub Username first to generate a bio.' },
        { status: 400 }
      );
    }

    // Rate limit by github username (most unique identifier)
    const identifier = (github || email || name).toLowerCase().trim();
    const { allowed, remaining } = checkRateLimit(identifier);

    if (!allowed) {
      return NextResponse.json(
        { error: `You've used all ${RATE_LIMIT} AI generations for this hour. Please try again later or craft your bio manually - you've got this! ✍️` },
        { status: 429 }
      );
    }

    const toneDescriptions: Record<string, string> = {
      professional: 'formal, polished, and corporate-friendly',
      witty: 'clever, humorous, and personality-driven with emojis',
      casual: 'relaxed, friendly, and conversational',
      minimal: 'concise, clean, and to the point with minimal decoration',
    };

    const toneGuide = toneDescriptions[tone] || toneDescriptions.professional;
    const skillsList = skills && skills.length > 0 ? skills.join(', ') : 'not specified';

    const prompt = `You are an expert GitHub Profile README writer. Generate a compelling "About Me" section in Markdown format for a GitHub profile README.

User details:
- Name: ${name}
- Professional Title: ${title || 'Software Developer'}
- Email: ${email || 'not provided'}
- GitHub Username: ${github}
- Tech Stack/Skills: ${skillsList}
- Desired Tone: ${toneGuide}

Instructions:
- Write ONLY the "About Me" markdown content. Do NOT include any code fences, backticks wrapping the output, or language identifiers.
- Use appropriate markdown formatting: headers (##, ###), bullet points, bold, italic, emojis.
- Include a greeting, a brief intro, what they're working on, what they're learning, and how to reach them.
- If email is provided, include it as a contact method.
- Keep it between 150-300 words.
- Make it feel authentic and human, not robotic.
- The tone should be ${toneGuide}.
- Do NOT include GitHub stats, badges, or images - just text content.`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ bio: text, remaining });
  } catch (error: unknown) {
    // Log detailed error for developer debugging only (server-side console)
    console.error('[GPRM AI] Generation error (internal):', error);

    const errorMessage = error instanceof Error ? error.message : String(error);

    // All quota/rate/billing errors → same friendly message
    if (
      errorMessage.includes('429') ||
      errorMessage.includes('quota') ||
      errorMessage.includes('Too Many Requests') ||
      errorMessage.includes('billing') ||
      errorMessage.includes('RESOURCE_EXHAUSTED')
    ) {
      return NextResponse.json(
        { error: 'Our AI service is experiencing high demand right now. Please try again in a few minutes! ⏳' },
        { status: 429 }
      );
    }

    // Auth/key errors
    if (errorMessage.includes('401') || errorMessage.includes('403') || errorMessage.includes('API_KEY')) {
      return NextResponse.json(
        { error: 'AI bio generation is temporarily unavailable. Please try again later or write your bio manually using the editor.' },
        { status: 503 }
      );
    }

    // Generic fallback - always friendly
    return NextResponse.json(
      { error: 'Something went wrong while generating your bio. Please try again - it usually works on the second try! 🔄' },
      { status: 500 }
    );
  }
}

