import { EDITOR_STEPS as steps } from '../config/steps';
import { CheckCircleIcon, RadioCheckedIcon, CircleIcon } from '@/components/Icons';

interface StepperProps {
  currentStep: number;
}

export function Stepper({ currentStep }: StepperProps) {
  const currentIndex = currentStep - 1;
  const currentStepData = steps[currentIndex];
  
  // Progress bar percentage based on step
  const progressPercentage = ((currentStep) / steps.length) * 100;

  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Step {currentStep} of {steps.length}
          </span>
          <h1 className="heading-lg text-2xl sm:text-3xl font-black text-text-light dark:text-text-dark">
            {currentStepData.title}
          </h1>
        </div>
        {currentStep < steps.length && (
          <div className="text-left sm:text-right hidden sm:block">
            <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
              Next: {currentStepData.nextLabel}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/10">
        <div 
          className="absolute inset-y-0 left-0 bg-primary transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Step Indicators */}
      <div className="mt-4 flex justify-between sm:flex">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          
          return (
            <div 
              key={step.id} 
              className={`flex items-center gap-2 ${isCurrent ? 'text-primary' : isCompleted ? 'text-primary/70' : 'opacity-40 text-text-muted-light dark:text-text-muted-dark'}`}
            >
              {isCompleted ? (
                <CheckCircleIcon size={16} className="text-primary" />
              ) : isCurrent ? (
                <RadioCheckedIcon size={16} className="text-primary" />
              ) : (
                <CircleIcon size={16} />
              )}
              <span className={`text-[10px] sm:text-xs font-bold uppercase hidden md:inline-block ${isCurrent ? 'text-primary' : ''}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
