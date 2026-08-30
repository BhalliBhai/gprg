import React, { useState } from 'react';
import Image from 'next/image';
import { EditorState } from '../types';
import { AVAILABLE_SKILLS, CATEGORIES, type Skill } from '../data/skills';

interface StepProps {
  state: EditorState;
  setState: React.Dispatch<React.SetStateAction<EditorState>>;
  nextStep: () => void;
  prevStep: () => void;
}

export const SKILL_LABELS = AVAILABLE_SKILLS.reduce<Record<string, string>>((acc, skill) => {
  acc[skill.id] = skill.name;
  return acc;
}, {});

export const SKILL_ICONS = AVAILABLE_SKILLS.reduce<Record<string, string>>((acc, skill) => {
  acc[skill.id] = skill.icon;
  return acc;
}, {});

const iconUrl = (skill: Skill) => {
  if (skill.iconColor) {
    return `https://cdn.simpleicons.org/${skill.icon}/${skill.iconColor}`;
  }
  return `https://cdn.simpleicons.org/${skill.icon}`;
};

export function Step2Skills({ state, setState, nextStep, prevStep }: StepProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = AVAILABLE_SKILLS.filter((skill) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      skill.name.toLowerCase().includes(query) ||
      skill.id.toLowerCase().includes(query) ||
      skill.category.toLowerCase().includes(query);
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSkill = (id: string) => {
    setState((prev) => {
      const isSelected = prev.skills.includes(id);
      return {
        ...prev,
        skills: isSelected ? prev.skills.filter((s) => s !== id) : [...prev.skills, id]
      };
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 mb-1">
        <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">
          Select your stack, tools, and workflow
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-3xl">
          Pick everything you actively use. We generate cleaner badges and a stronger first impression in your
          profile README.
        </p>
      </div>

      <div className="sticky top-18 sm:top-21 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-4 mb-1 -mx-2 px-2 rounded-xl border border-slate-200/70 dark:border-primary/20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-primary/5 border-2 border-slate-200 dark:border-primary/20 focus:border-primary rounded-xl text-slate-900 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400"
              placeholder="Search by tech, language, cloud, AI, design or tools..."
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-background-dark'
                  : 'bg-slate-200 dark:bg-primary/10 text-slate-700 dark:text-slate-300 hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
          {filteredSkills.length} available, {state.skills.length} selected
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[300px] content-start">
        {filteredSkills.map((skill) => {
          const isSelected = state.skills.includes(skill.id);
          return (
            <button
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`group relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-primary shadow-[0_10px_24px_rgba(17,212,82,0.28)] bg-linear-to-b from-primary/10 to-white dark:to-primary/5'
                  : 'border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:border-primary/45'
              }`}
              style={{
                transform: isSelected ? 'translateY(-2px)' : undefined
              }}
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.55),transparent_55%)]" />
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                </div>
              )}
              <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-xl bg-linear-to-b from-white to-slate-100 dark:from-background-dark dark:to-[#0d1d13] border border-slate-200 dark:border-primary/15 shadow-inner shadow-black/5">
                <Image
                  className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                  alt={`${skill.name} logo icon`}
                  src={iconUrl(skill)}
                  onError={(e) => {
                    e.currentTarget.src = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${skill.icon}.svg`;
                    e.currentTarget.classList.add('fallback-icon');
                  }}
                  width={36}
                  height={36}
                />
              </div>
              <span
                className={`text-xs text-center leading-tight ${
                  isSelected
                    ? 'font-bold text-slate-900 dark:text-slate-100'
                    : 'font-semibold text-slate-600 dark:text-slate-400 group-hover:text-primary'
                }`}
              >
                {skill.name}
              </span>
            </button>
          );
        })}

        {filteredSkills.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl opacity-50">search_off</span>
            <p>No technologies found matching your search.</p>
          </div>
        )}
      </div>

      <div className="border-t border-primary/10 bg-slate-50 dark:bg-background-dark/20 p-4 mt-8 flex justify-between items-center rounded-xl shadow-sm">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg"
        >
          <span className="material-symbols-outlined font-bold">arrow_back</span>
          Back
        </button>
        <button
          onClick={nextStep}
          className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-black text-background-dark shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Continue to Step 3
          <span className="material-symbols-outlined font-bold">arrow_forward</span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .fallback-icon {
          filter: grayscale(1) brightness(0.2);
        }
        .dark .fallback-icon {
          filter: grayscale(1) invert(1) brightness(2);
        }
      ` }} />
    </div>
  );
}
