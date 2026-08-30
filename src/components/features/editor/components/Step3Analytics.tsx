import React from 'react';
import Image from 'next/image';
import { EditorState } from '../types';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

export function Step3Analytics({ state, setState, nextStep, prevStep }: StepProps) {
  const handleToggle = (field: keyof EditorState['analytics']) => {
    setState((prev) => ({
      ...prev,
      analytics: {
        ...prev.analytics,
        [field]: !prev.analytics[field as keyof EditorState['analytics']]
      }
    }));
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prev) => ({
      ...prev,
      analytics: {
        ...prev.analytics,
        theme: e.target.value
      }
    }));
  };

  const githubUser = state.profile.github || 'anuraghazra';
  const themeParam = state.analytics.theme !== 'default' ? `&theme=${state.analytics.theme}` : '';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Panel: Configuration */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">settings_suggest</span>
            Display Modules
          </h3>
          <div className="space-y-4">
            
            {/* General Stats Card */}
            <div 
              onClick={() => handleToggle('showStats')}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${state.analytics.showStats ? 'bg-primary/5 border-primary/40' : 'bg-slate-50 dark:bg-background-dark/60 border-slate-200 dark:border-primary/10'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${state.analytics.showStats ? 'text-primary' : 'text-slate-400'}`}>monitoring</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">General Stats Card</span>
              </div>
              <div className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors ${state.analytics.showStats ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-transform bg-white ${state.analytics.showStats ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </div>
            </div>

            {/* Streak Analytics */}
            <div 
              onClick={() => handleToggle('showStreak')}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${state.analytics.showStreak ? 'bg-primary/5 border-primary/40' : 'bg-slate-50 dark:bg-background-dark/60 border-slate-200 dark:border-primary/10'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${state.analytics.showStreak ? 'text-primary' : 'text-slate-400'}`}>bolt</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Streak Analytics</span>
              </div>
              <div className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors ${state.analytics.showStreak ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-transform bg-white ${state.analytics.showStreak ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </div>
            </div>

            {/* Top Languages */}
            <div 
              onClick={() => handleToggle('showLanguages')}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${state.analytics.showLanguages ? 'bg-primary/5 border-primary/40' : 'bg-slate-50 dark:bg-background-dark/60 border-slate-200 dark:border-primary/10'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${state.analytics.showLanguages ? 'text-primary' : 'text-slate-400'}`}>code_blocks</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Top Languages</span>
              </div>
              <div className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors ${state.analytics.showLanguages ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-transform bg-white ${state.analytics.showLanguages ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </div>
            </div>

            {/* Contribution Graph */}
            <div 
              onClick={() => handleToggle('showGraph')}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${state.analytics.showGraph ? 'bg-primary/5 border-primary/40' : 'bg-slate-50 dark:bg-background-dark/60 border-slate-200 dark:border-primary/10'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${state.analytics.showGraph ? 'text-primary' : 'text-slate-400'}`}>timeline</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Contribution Graph</span>
              </div>
              <div className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors ${state.analytics.showGraph ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-transform bg-white ${state.analytics.showGraph ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </div>
            </div>

            {/* GitHub Trophies */}
            <div 
              onClick={() => handleToggle('showTrophies')}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${state.analytics.showTrophies ? 'bg-primary/5 border-primary/40' : 'bg-slate-50 dark:bg-background-dark/60 border-slate-200 dark:border-primary/10'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${state.analytics.showTrophies ? 'text-primary' : 'text-slate-400'}`}>emoji_events</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">GitHub Trophies</span>
              </div>
              <div className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors ${state.analytics.showTrophies ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-transform bg-white ${state.analytics.showTrophies ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </div>
            </div>

            {/* Visitor Badge */}
            <div 
              onClick={() => handleToggle('showVisitorBadge')}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${state.analytics.showVisitorBadge ? 'bg-primary/5 border-primary/40' : 'bg-slate-50 dark:bg-background-dark/60 border-slate-200 dark:border-primary/10'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${state.analytics.showVisitorBadge ? 'text-primary' : 'text-slate-400'}`}>visibility</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Visitor Badge</span>
              </div>
              <div className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors ${state.analytics.showVisitorBadge ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-transform bg-white ${state.analytics.showVisitorBadge ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </div>
            </div>

          </div>

          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Appearance Settings</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 font-medium text-slate-700 dark:text-slate-200">Theme Palette</label>
                <select 
                  value={state.analytics.theme}
                  onChange={handleThemeChange}
                  className="w-full bg-slate-50 dark:bg-background-dark border border-slate-300 dark:border-primary/20 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none text-slate-900 dark:text-white"
                >
                  <option value="transparent">Transparent (Default)</option>
                  <option value="dark">Dark</option>
                  <option value="radical">Radical</option>
                  <option value="merko">Merko</option>
                  <option value="gruvbox">Gruvbox</option>
                  <option value="tokyonight">Tokyo Night</option>
                  <option value="onedark">One Dark</option>
                  <option value="cobalt">Cobalt</option>
                  <option value="synthwave">Synthwave</option>
                  <option value="highcontrast">High Contrast</option>
                  <option value="dracula">Dracula</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Username Warning if missing */}
        {!state.profile.github && (
          <div className="bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700/50 text-amber-800 dark:text-amber-200 rounded-xl p-4 flex items-start gap-3">
            <span className="material-symbols-outlined shrink-0 mt-0.5">warning</span>
            <div className="text-sm">
              <p className="font-bold mb-1">GitHub Username Missing</p>
              <p>You didn&apos;t provide a GitHub username in Step 1. The previews below are showing sample data.</p>
            </div>
          </div>
        )}

      </aside>

      {/* Right Panel: Preview Grid */}
      <section className="lg:col-span-8">
        <div className="relative rounded-xl border border-slate-200 dark:border-primary/10 overflow-hidden min-h-150 bg-slate-50/50 dark:bg-[#0a160e]">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(17, 212, 82, 0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="absolute top-4 left-4 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur border border-slate-200 dark:border-primary/20 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Live Preview</span>
          </div>

          <div className="flex flex-col items-center justify-center min-h-150 p-8 gap-6 relative z-0">
            
             {state.analytics.showVisitorBadge && (
              <div className="flex justify-start w-full max-w-123.75">
                <Image 
                  src={`https://komarev.com/ghpvc/?username=${githubUser}&color=11d452&style=for-the-badge`}
                  alt="Visitor Badge" 
                  className="rounded shadow-sm hover:scale-105 transition-transform duration-500 mx-auto"
                  width={200}
                  height={100}
                  style={{ height: 'auto' }}
                />
              </div>
            )}

            {state.analytics.showTrophies && (
              <Image 
                src={`https://github-profile-trophy-mu.vercel.app/?username=${githubUser}&theme=${state.analytics.theme === 'transparent' ? 'radical' : state.analytics.theme}&no-frame=true&no-bg=true&margin-w=15`}
                alt="GitHub Trophies" 
                className="w-full max-w-200 hover:scale-105 transition-transform duration-500"
                width={800}
                height={200}
                style={{ height: 'auto' }}
              />
            )}

            {state.analytics.showStats && (
              <Image 
                src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUser}&show_icons=true&hide_border=true&title_color=11d452&icon_color=11d452${themeParam}`}
                alt="GitHub Stats" 
                className="w-full max-w-123.75 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                width={495}
                height={192}
                style={{ height: 'auto' }}
              />
            )}
            
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-123.75 md:max-w-none justify-center items-center">
              {state.analytics.showLanguages && (
                <Image 
                  src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&hide_border=true&title_color=11d452${themeParam}`}
                  alt="Top Languages" 
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 w-full max-w-75"
                  width={300}
                  height={150}
                  style={{ height: 'auto' }}
                />
              )}
              
              {state.analytics.showStreak && (
                <Image 
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&hide_border=true&ring=11d452&fire=11d452&currStreakLabel=11d452${themeParam}`}
                  alt="GitHub Streak" 
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 w-full max-w-100"
                  width={400}
                  height={150}
                  style={{ height: 'auto' }}
                />
              )}
            </div>

            {state.analytics.showGraph && (
              <Image 
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=102216&color=11d452&line=11d452&point=11d452&area=true&hide_border=true`}
                alt="Activity Graph" 
                className="w-full max-w-200 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                width={800}
                height={200}
                style={{ height: 'auto' }}
              />
            )}

            {!state.analytics.showStats && !state.analytics.showStreak && !state.analytics.showLanguages && !state.analytics.showGraph && !state.analytics.showTrophies && !state.analytics.showVisitorBadge && (
              <div className="text-slate-400 dark:text-slate-500 flex flex-col items-center gap-3 p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl max-w-sm text-center">
                <span className="material-symbols-outlined text-4xl">visibility_off</span>
                <p>All analytics modules are currently hidden. Enable them on the left to see the live preview.</p>
              </div>
            )}

          </div>
        </div>

        <div className="border-t border-primary/10 bg-white dark:bg-background-dark/20 p-4 mt-8 flex justify-between items-center rounded-xl shadow-sm border dark:border-transparent">
          <button onClick={prevStep} className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg">
            <span className="material-symbols-outlined font-bold">arrow_back</span>
            Back
          </button>
          <button onClick={nextStep} className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            Continue to Step 4
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
