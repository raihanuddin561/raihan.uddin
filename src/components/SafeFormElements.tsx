'use client';

import React, { forwardRef } from 'react';

// Input component that's safe from hydration warnings
export const SafeInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={className}
        suppressHydrationWarning={true}
        {...props}
      />
    );
  }
);

SafeInput.displayName = 'SafeInput';

// Textarea component that's safe from hydration warnings
export const SafeTextarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={className}
        suppressHydrationWarning={true}
        {...props}
      />
    );
  }
);

SafeTextarea.displayName = 'SafeTextarea';

// Button component that's safe from hydration warnings
export const SafeButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={className}
        suppressHydrationWarning={true}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SafeButton.displayName = 'SafeButton';

// Form component that's safe from hydration warnings
export const SafeForm = forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={className}
        suppressHydrationWarning={true}
        {...props}
      >
        {children}
      </form>
    );
  }
);

SafeForm.displayName = 'SafeForm';
