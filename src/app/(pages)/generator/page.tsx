"use client";

import { useState, useEffect, useRef } from 'react';
import { EditorState, INITIAL_STATE } from '@/components/features/editor/types';
import { Stepper } from '@/components/features/editor/components/Stepper';
import { Step1Profile } from '@/components/features/editor/components/Step1Profile';
import { Step2Skills } from '@/components/features/editor/components/Step2Skills';
import { Step3Analytics } from '@/components/features/editor/components/Step3Analytics';
import { Step4Templates } from '@/components/features/editor/components/Step4Templates';
import { Step5Export } from '@/components/features/editor/components/Step5Export';
import { EditorFaq } from '@/components/sections/editor/EditorFaq';
import { EditorIntro } from '@/components/sections/editor/EditorIntro';

export default function GeneratorPage() {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (typeof window === 'undefined') return 1;
    const savedStep = window.sessionStorage.getItem('gprg-step')
    if (!savedStep) return 1;
    const parsed = Number.parseInt(savedStep, 10);
    if (!Number.isFinite(parsed)) return 1;
    return Math.min(Math.max(Math.floor(parsed), 1), 5);
  });
  const [editorState, setEditorState] = useState<EditorState>(() => {
    if (typeof window === 'undefined') return INITIAL_STATE;
    const savedState = window.sessionStorage.getItem('gprg-state')
    if (!savedState) return INITIAL_STATE;
    try {
      return JSON.parse(savedState);
    } catch {
      return INITIAL_STATE;
    }
  });
  const isInitialMount = useRef(true);
  const totalSteps = 5;

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    sessionStorage.setItem('gprg-step', currentStep.toString());
    sessionStorage.setItem('gprg-state', JSON.stringify(editorState));
  }, [currentStep, editorState]);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-4 sm:p-6 md:p-10">
      <div className="container-app">
        <EditorIntro />
        <Stepper currentStep={currentStep} />
        
        <div className="mt-8">
          {currentStep === 1 && (
            <Step1Profile 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 2 && (
            <Step2Skills 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 3 && (
            <Step3Analytics 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 4 && (
            <Step4Templates 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 5 && (
            <Step5Export 
              state={editorState} 
              setState={setEditorState} 
              prevStep={prevStep} 
            />
          )}
        </div>
        <EditorFaq />
      </div>
    </div>
  );
}
