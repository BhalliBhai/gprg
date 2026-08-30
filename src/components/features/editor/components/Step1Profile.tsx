import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from '../types';

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
        <section className="rounded-xl border border-primary/10 bg-white dark:bg-primary/5 p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">person</span>
            Identity
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">Full Name</label>
              <input suppressHydrationWarning
                value={state.profile.fullName}
                onChange={(e) => handleProfileChange('fullName', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" 
                placeholder="e.g. Alex Rivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">Professional Title</label>
              <input suppressHydrationWarning
                value={state.profile.title}
                onChange={(e) => handleProfileChange('title', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" 
                placeholder="e.g. Senior Frontend Engineer" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">Portfolio / Personal Website</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50 text-slate-500 dark:text-slate-400">link</span>
                <input suppressHydrationWarning
                  value={state.profile.website}
                  onChange={(e) => handleProfileChange('website', e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-3 pl-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" 
                  placeholder="https://alexrivera.dev" 
                  type="url"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">📧 Email / Contact</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50 text-slate-500 dark:text-slate-400">mail</span>
                <input suppressHydrationWarning
                  value={state.profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-3 pl-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" 
                  placeholder="alex@example.com" 
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-80 text-slate-700 dark:text-slate-200">✨ GitHub Username (Required)</label>
              <input suppressHydrationWarning
                value={state.profile.github}
                onChange={(e) => handleProfileChange('github', e.target.value)}
                className="w-full rounded-lg border border-primary/50 dark:border-primary bg-primary/5 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-900 dark:text-white font-bold" 
                placeholder="e.g. arivera" 
                type="text"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-primary/10 bg-white dark:bg-primary/5 p-6 shadow-sm">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">share</span>
            Social Presence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">LinkedIn Profile</label>
              <input suppressHydrationWarning
                value={state.profile.linkedin}
                onChange={(e) => handleProfileChange('linkedin', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="in/alexrivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Twitter/X Handle</label>
              <input suppressHydrationWarning
                value={state.profile.twitter}
                onChange={(e) => handleProfileChange('twitter', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@arivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Instagram</label>
              <input suppressHydrationWarning
                value={state.profile.instagram}
                onChange={(e) => handleProfileChange('instagram', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@alex" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Threads</label>
              <input suppressHydrationWarning
                value={state.profile.threads}
                onChange={(e) => handleProfileChange('threads', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@alex" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">YouTube Channel</label>
              <input suppressHydrationWarning
                value={state.profile.youtube}
                onChange={(e) => handleProfileChange('youtube', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="@alexrivera" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Twitch</label>
              <input suppressHydrationWarning
                value={state.profile.twitch}
                onChange={(e) => handleProfileChange('twitch', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="alexriveradev" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold opacity-60 text-slate-700 dark:text-slate-200">Discord Tag</label>
              <input suppressHydrationWarning
                value={state.profile.discord}
                onChange={(e) => handleProfileChange('discord', e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-background-dark/50 p-2 text-sm focus:border-primary focus:outline-none text-slate-900 dark:text-white" 
                placeholder="arivera#1234" 
                type="text"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Right Side: About Me Editor */}
      <div className="xl:col-span-7 h-full flex flex-col">
        <section className="flex flex-1 flex-col rounded-xl border border-primary/10 bg-white dark:bg-primary/5 shadow-sm min-h-[500px]">
          <div className="flex items-center justify-between border-b border-primary/10 bg-slate-50 dark:bg-background-dark/20 p-4 rounded-t-xl">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">About Me</h3>
              <span className="rounded bg-primary/10 dark:bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">Rich Text Support</span>
            </div>
            <button
              onClick={() => setShowAiPanel(!showAiPanel)}
              className="flex items-center gap-1.5 rounded-lg bg-primary/10 dark:bg-primary/20 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-all"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Generate with AI
            </button>
          </div>
          {/* AI Generation Panel */}
          {showAiPanel && (
            <div className="border-b border-primary/10 bg-primary/5 dark:bg-primary/10 p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                <div className="flex-1 w-full">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2 block">Tone</label>
                  <div className="flex flex-wrap gap-2">
                    {(['professional', 'witty', 'casual', 'minimal'] as const).map((tone) => (
                      <button
                        key={tone}
                        onClick={() => setAiTone(tone)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize transition-all ${
                          aiTone === tone
                            ? 'bg-primary text-background-dark shadow-md'
                            : 'bg-white dark:bg-background-dark/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-primary/20 hover:border-primary/50'
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
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                >
                  {isGenerating ? (
                    <>
                      <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                      Generating...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">auto_awesome</span>
                      Generate Bio
                    </>
                  )}
                </button>
              </div>
              {!state.profile.fullName || !state.profile.github ? (
                <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-2 font-semibold">
                  ⚠️ Fill in your Name and GitHub Username above to enable AI generation.
                </p>
              ) : null}
              {aiError && (
                <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-2 font-semibold">💡 {aiError}</p>
              )}
              {aiRemaining !== null && (
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
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
                // color: #11d452 !important;
              }
              .w-md-editor-content {
                background-color: transparent !important;
              }
              /* Fix for dropdown menus in toolbar */
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
          <div className="border-t border-primary/10 bg-slate-50 dark:bg-background-dark/20 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-wider opacity-60 dark:opacity-40 font-bold text-slate-500 dark:text-slate-400 w-full sm:w-auto text-center sm:text-left">
              Characters: {state.profile.about.length} / 2000
            </p>
            <div className="flex gap-4 w-full sm:w-auto">
              <button onClick={clearAbout} className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity text-slate-600 dark:text-slate-300 px-4">
                Clear All
              </button>
              <button onClick={nextStep} className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Continue to Step 2
                <span className="material-symbols-outlined font-bold">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
