import React from 'react';
import { EditorState } from '../types';
import { generateMarkdown } from '../../../../utils/markdown';
import MDEditor from '@uiw/react-md-editor';
import { TEMPLATES } from '../templates/registry';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

const ReadmePreview = ({ state }: { state: EditorState }) => {
  const markdown = generateMarkdown(state);

  return (
    <div className="font-sans text-slate-100 bg-background-dark p-8 rounded-b-2xl min-h-150 border border-slate-800" data-color-mode="dark">
      <MDEditor.Markdown 
        source={markdown} 
        style={{ backgroundColor: 'transparent', color: 'inherit' }}
      />
    </div>
  );
};

export function Step4Templates({ state, setState, nextStep, prevStep }: StepProps) {
  const templates = TEMPLATES;


  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="">
        <div className="py-2">
          <h2 className="text-3xl font-bold mb-2"> Template Selection & Preview</h2>
          <p className="text-slate-500 dark:text-slate-400">Choose a layout style and watch your profile come to life instantly in the live preview.</p>
        </div>
        
        {/* Template Tabs/Toggles */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-primary/5 p-1 rounded-xl border border-slate-200 dark:border-primary/10">
              {templates.map(tpl => (
            <button 
              key={tpl.id}
              onClick={() => setState(s => ({ ...s, templateId: tpl.id }))}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                state.templateId === tpl.id 
                  ? 'bg-primary text-background-dark shadow-md rounded-lg cursor-default' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-primary/10 rounded-lg border-primary/20 border cursor-pointer'
              }`}
            >
              <span className="block text-left">{tpl.label}</span>
              <span className={`block text-[10px] leading-tight mt-1 ${state.templateId === tpl.id ? 'text-background-dark/80' : 'text-slate-500 dark:text-slate-400'}`}>{tpl.subtitle}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full relative shadow-[0_0_15px_rgba(17,212,82,0.2)] border-2 border-primary/30 rounded-2xl overflow-hidden bg-slate-900">
        
        {/* Mac OS Style Header */}
        <div className="bg-surface-dark px-6 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs font-mono opacity-50 text-white">README.md</span>
          </div>
          <div className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Live Sync</span>
          </div>
        </div>

        {/* The Live Render Component */}
        <div className="max-h-200 overflow-y-auto custom-scrollbar">
          <ReadmePreview state={state} />
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-primary/10 bg-white dark:bg-background-dark/20 p-4 flex justify-between items-center rounded-xl shadow-sm border dark:border-transparent transition-all">
        <button onClick={prevStep} className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg">
          <span className="material-symbols-outlined font-bold">arrow_back</span>
          Back
        </button>
        <button onClick={nextStep} className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all outline-none">
          Generate Final Code
          <span className="material-symbols-outlined font-bold">rocket_launch</span>
        </button>
      </div>

    </div>
  );
}
