// src/components/features/editor/components/Step5Export.tsx
import React, { useEffect, useState } from 'react';
import { EditorState } from '../types';
import { generateMarkdown } from '../../../../utils/markdown';
import MDEditor from '@uiw/react-md-editor';
import { ConfirmDialog } from './ConfirmDialog';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  prevStep: () => void;
}

export function Step5Export({ state, prevStep }: StepProps) {
  const [markdown, setMarkdown] = useState<string>(() => generateMarkdown(state));
  const [isDirty, setIsDirty] = useState(false);
  const [copied, setCopied] = useState(false);
    const [showDiscardConfirm, setShowDiscardConfirm] = useState(false);

  // Auto-sync from state ONLY until the user makes a manual edit.
  useEffect(() => {
    if (!isDirty) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMarkdown(generateMarkdown(state));
    }
  }, [state, isDirty]);

  const handleEditorChange = (value?: string) => {
    setMarkdown(value ?? '');
    setIsDirty(true);
  };

   const handleDiscardClick = () => {
    if (!isDirty) return;
    setShowDiscardConfirm(true);
  };

  const confirmDiscard = () => {
    setMarkdown(generateMarkdown(state));
    setIsDirty(false);
    setShowDiscardConfirm(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = state.profile.github ? `${state.profile.github}-README.md` : 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header + actions row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Review &amp; Export</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Edit the markdown directly below if you want to tweak anything - the preview updates as you type.
              {isDirty && (
                <span className="ml-2 inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
                  <span className="material-symbols-outlined text-xs">edit</span> Unsaved manual edits
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleDiscardClick}
            disabled={!isDirty}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-primary/20 px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Discard Changes
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg bg-primary text-background-dark px-4 py-2 text-xs font-black shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-sm">{copied ? 'done_all' : 'content_copy'}</span>
            {copied ? 'Copied!' : 'Copy Markdown'}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 px-4 py-2 text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Download .MD
          </button>
        </div>
      </div>

      {/* Live split editor + preview */}
      <div className="rounded-2xl border-2 border-primary/30 shadow-[0_0_15px_rgba(17,212,82,0.2)] overflow-hidden bg-slate-900">
        <div className="bg-surface-dark px-6 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs font-mono opacity-50 text-white">README.md - editable</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">
            Live Preview
          </span>
        </div>

        <div data-color-mode="dark" className="[&_.w-md-editor]:min-h-150">
          <MDEditor
            value={markdown}
            onChange={handleEditorChange}
            preview="live"
            height={600}
          />
        </div>
      </div>

      <button
        onClick={prevStep}
        className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg"
      >
        <span className="material-symbols-outlined font-bold">arrow_back</span>
        Back to Templates
      </button>
      
      <ConfirmDialog
        open={showDiscardConfirm}
        title="Discard your changes?"
        description="Your manual edits to this README will be permanently lost and replaced with a fresh version generated from your current settings."
        confirmLabel="Discard Changes"
        onConfirm={confirmDiscard}
        onCancel={() => setShowDiscardConfirm(false)}
      />
    </div>
  );
}