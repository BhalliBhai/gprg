import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from '../types';
import {
  UserIcon,
  LinkIcon,
  MailIcon,
  ShareIcon,
  EditNoteIcon,
  SparklesIcon,
  SpinnerIcon,
  ArrowForwardIcon,
} from '@/components/Icons';

// Dynamically import MDEditor with ssr disabled
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step1Profile({ state, setState, nextStep }: StepProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [aiTone, setAiTone] = useState('professional');
  const [aiError, setAiError] = useState('');
  const [aiRemaining, setAiRemaining] = useState<number | null>(null);

  const handleProfileChange = (field: keyof EditorState['profile'], value: string) => {
    setState((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value
      }
    }));
  };

  const clearAbout = () => handleProfileChange('about', '');

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    setAiError('');
    try {
      const res = await fetch('/api/generate-bio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: state.profile.fullName,
          title: state.profile.title,
          email: state.profile.email,
          github: state.profile.github,
          skills: state.skills,
          tone: aiTone,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAiError(data.error || 'Failed to generate bio.');
        return;
      }
      handleProfileChange('about', data.bio);
      if (data.remaining !== undefined) setAiRemaining(data.remaining);
      setShowAiPanel(false);
    } catch {
      setAiError('Network error. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
      {/* Left Side: Basic Info & Socials */}
      <div className="xl:col-span-5 flex flex-col gap-8">
        <section className="rounded-xl hairline-border-light dark:hairline-border bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-text-light dark:text-text-dark">
            <UserIcon className="text-primary" size={20} />
            Identity
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark">Full Name</label>
              <input
                suppressHydrationWarning
                value={state.profile.fullName}
                onChange={(e) => handleProfileChange('fullName', e.target.value)}
                className="input text-sm text-text-light dark:text-text-dark" 
                placeholder="e.g. Alex Rivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark">Professional Title</label>
              <input
                suppressHydrationWarning
                value={state.profile.title}
                onChange={(e) => handleProfileChange('title', e.target.value)}
                className="input text-sm text-text-light dark:text-text-dark" 
                placeholder="e.g. Senior Frontend Engineer" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark">Portfolio / Personal Website</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50 text-text-muted-light dark:text-text-muted-dark pointer-events-none">
                  <LinkIcon size={16} />
                </span>
                <input
                  suppressHydrationWarning
                  value={state.profile.website}
                  onChange={(e) => handleProfileChange('website', e.target.value)}
                  className="input pl-10 text-sm text-text-light dark:text-text-dark" 
                  placeholder="https://alexrivera.dev" 
                  type="url"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark">Email / Contact</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50 text-text-muted-light dark:text-text-muted-dark pointer-events-none">
                  <MailIcon size={16} />
                </span>
                <input
                  suppressHydrationWarning
                  value={state.profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                  className="input pl-10 text-sm text-text-light dark:text-text-dark" 
                  placeholder="alex@example.com" 
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark">GitHub Username (Required)</label>
              <input
                suppressHydrationWarning
                value={state.profile.github}
                onChange={(e) => handleProfileChange('github', e.target.value)}
                className="input text-sm text-text-light dark:text-text-dark font-bold border-primary/50! dark:border-primary! bg-primary/5!" 
                placeholder="e.g. arivera" 
                type="text"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl hairline-border-light dark:hairline-border bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-text-light dark:text-text-dark">
            <ShareIcon className="text-primary" size={20} />
            Social Presence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark">LinkedIn Profile</label>
              <input
                suppressHydrationWarning
                value={state.profile.linkedin}
                onChange={(e) => handleProfileChange('linkedin', e.target.value)}
                className="input p-2 text-sm text-text-light dark:text-text-dark" 
                placeholder="in/alexrivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark">Twitter/X Handle</label>
              <input
                suppressHydrationWarning
                value={state.profile.twitter}
                onChange={(e) => handleProfileChange('twitter', e.target.value)}
                className="input p-2 text-sm text-text-light dark:text-text-dark" 
                placeholder="@arivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark">Instagram</label>
              <input
                suppressHydrationWarning
                value={state.profile.instagram}
                onChange={(e) => handleProfileChange('instagram', e.target.value)}
                className="input p-2 text-sm text-text-light dark:text-text-dark" 
                placeholder="@alex" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark">Threads</label>
              <input
                suppressHydrationWarning
                value={state.profile.threads}
                onChange={(e) => handleProfileChange('threads', e.target.value)}
                className="input p-2 text-sm text-text-light dark:text-text-dark" 
                placeholder="@alex" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark">YouTube Channel</label>
              <input
                suppressHydrationWarning
                value={state.profile.youtube}
                onChange={(e) => handleProfileChange('youtube', e.target.value)}
                className="input p-2 text-sm text-text-light dark:text-text-dark" 
                placeholder="@alexrivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark">Twitch</label>
              <input
                suppressHydrationWarning
                value={state.profile.twitch}
                onChange={(e) => handleProfileChange('twitch', e.target.value)}
                className="input p-2 text-sm text-text-light dark:text-text-dark" 
                placeholder="alexriveradev" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark">Discord Tag</label>
              <input
                suppressHydrationWarning
                value={state.profile.discord}
                onChange={(e) => handleProfileChange('discord', e.target.value)}
                className="input p-2 text-sm text-text-light dark:text-text-dark" 
                placeholder="arivera#1234" 
                type="text"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Right Side: About Me Editor */}
      <div className="xl:col-span-7 h-full flex flex-col">
        <section className="flex flex-1 flex-col rounded-xl hairline-border-light dark:hairline-border bg-surface-light dark:bg-surface-dark shadow-sm min-h-125">
          <div className="flex items-center justify-between border-b border-border-light dark:border-border-dark bg-surface-hover-light dark:bg-surface-dark p-4 rounded-t-xl">
            <div className="flex items-center gap-3">
              <EditNoteIcon className="text-primary" size={20} />
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">About Me</h3>
              <span className="badge badge-neutral text-[10px] uppercase font-bold">Rich Text Support</span>
            </div>
            <button
              onClick={() => setShowAiPanel(!showAiPanel)}
              className="flex items-center gap-1.5 rounded-lg bg-primary/10 dark:bg-primary/20 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all cursor-pointer"
            >
              <SparklesIcon size={14} />
              Generate with AI
            </button>
          </div>
          {/* AI Generation Panel */}
          {showAiPanel && (
            <div className="border-b border-border-light dark:border-border-dark bg-primary/5 dark:bg-primary/10 p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                <div className="flex-1 w-full">
                  <label className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-2 block">Tone</label>
                  <div className="flex flex-wrap gap-2">
                    {(['professional', 'witty', 'casual', 'minimal'] as const).map((tone) => (
                      <button
                        key={tone}
                        onClick={() => setAiTone(tone)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize transition-all cursor-pointer ${
                          aiTone === tone
                            ? 'bg-primary text-background-dark shadow-md'
                            : 'bg-surface-light dark:bg-surface-dark text-text-muted-light dark:text-text-muted-dark border border-border-light dark:border-border-dark hover:border-primary/50'
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleGenerateAI}
                  disabled={isGenerating || !state.profile.fullName || !state.profile.github}
                  className="btn-primary flex items-center gap-2 py-2.5 text-sm whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <SpinnerIcon size={16} />
                      Generating...
                    </>
                  ) : (
                    <>
                      <SparklesIcon size={16} />
                      Generate Bio
                    </>
                  )}
                </button>
              </div>
              {!state.profile.fullName || !state.profile.github ? (
                <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-2 font-semibold">
                  Fill in your Name and GitHub Username above to enable AI generation.
                </p>
              ) : null}
              {aiError && (
                <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-2 font-semibold">{aiError}</p>
              )}
              {aiRemaining !== null && (
                <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-2">
                  {aiRemaining} generation{aiRemaining !== 1 ? 's' : ''} remaining this hour
                </p>
              )}
            </div>
          )}
          <div className="flex-1 p-0 flex flex-col [&>div]:flex-1" data-color-mode="dark">
            <style jsx global>{`
              .wmde-markdown-var {
                --color-canvas-default: transparent !important;
                --color-canvas-subtle: transparent !important;
                --color-border-default: transparent !important;
              }
              html:not(.dark) .wmde-markdown-var {
                --color-canvas-default: transparent !important;
                --color-canvas-subtle: transparent !important;
                --color-border-default: transparent !important;
              }
              .w-md-editor {
                border: 1px solid transparent !important;
                box-shadow: none !important;
                background-color: rgba(255, 255, 255, 0.5) !important;
                backdrop-filter: blur(12px) !important;
                -webkit-backdrop-filter: blur(12px) !important;
                transition: all 0.2s ease;
              }
              html.dark .w-md-editor {
                background-color: rgba(17, 212, 82, 0.02) !important;
              }
              .w-md-editor:focus-within {
                border-color: #11d452 !important;
                box-shadow: 0 0 0 1px #11d452 !important;
                outline: none !important;
              }
              .w-md-editor-toolbar {
                border-bottom: 1px solid rgba(17, 212, 82, 0.1) !important;
                background-color: rgba(17, 212, 82, 0.05) !important;
                padding: 8px !important;
              }
              html:not(.dark) .w-md-editor-toolbar {
                background-color: #f8fafc !important; 
              }
              .w-md-editor-text-pre > code,
              .w-md-editor-text-input {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                font-size: 14px !important;
                line-height: 1.5 !important;
              }
              .w-md-editor-content {
                background-color: transparent !important;
              }
              .w-md-editor-toolbar-divider + .w-md-editor-toolbar-child,
              .w-md-editor-toolbar li > ul {
                background-color: #ffffff !important;
                border: 1px solid rgba(0,0,0,0.1) !important;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
              }
              html.dark .w-md-editor-toolbar li > ul {
                background-color: #1e293b !important;
                border: 1px solid rgba(255,255,255,0.1) !important;
              }
              .w-md-editor-toolbar li.active > button {
                color: #11d452 !important;
              }
            `}</style>
            <div className="dark:hidden w-full h-full">
               <MDEditor
                value={state.profile.about}
                onChange={(val: string | undefined) => handleProfileChange('about', val || '')}
                preview="edit"
                height="100%"
                data-color-mode="light"
                className="w-full flex-1 border-none shadow-none font-mono"
              />
            </div>
            <div className="hidden dark:block w-full h-full">
               <MDEditor
                value={state.profile.about}
                onChange={(val: string | undefined) => handleProfileChange('about', val || '')}
                preview="edit"
                height="100%"
                data-color-mode="dark"
                className="w-full flex-1 border-none shadow-none font-mono"
              />
            </div>
          </div>
          <div className="border-t border-border-light dark:border-border-dark bg-surface-hover-light dark:bg-surface-dark p-4 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-b-xl">
            <p className="text-[10px] uppercase tracking-wider font-bold text-text-muted-light dark:text-text-muted-dark w-full sm:w-auto text-center sm:text-left">
              Characters: {state.profile.about.length} / 2000
            </p>
            <div className="flex gap-4 w-full sm:w-auto">
              <button onClick={clearAbout} className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity text-text-muted-light dark:text-text-muted-dark px-4 cursor-pointer">
                Clear All
              </button>
              <button onClick={nextStep} className="btn-primary flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 text-sm cursor-pointer">
                Continue to Step 2
                <ArrowForwardIcon size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
