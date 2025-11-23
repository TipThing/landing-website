import React from 'react';

/**
 * Utility function to combine class names
 * @param classes - Class names to combine
 * @returns Combined class string
 */
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Button variant types
 */
type ButtonVariant = 'primary' | 'secondary' | 'outline';

/**
 * StandardButton component props
 */
export interface StandardButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Disable the button */
  disabled?: boolean;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** ARIA described by for accessibility */
  'aria-describedby'?: string;
}

/**
 * StandardButton - A variant-based button component with primary, secondary, and outline styles
 *
 * @example
 * ```tsx
 * // In an Astro file with client:load directive
 * <StandardButton variant="primary" onClick={() => console.log('clicked')}>
 *   Click Me
 * </StandardButton>
 * ```
 *
 * @component
 */
export const StandardButton: React.FC<StandardButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
}) => {
  const base =
    'w-full py-3 px-6 font-bold rounded-lg text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:hover:bg-white',
    secondary:
      'bg-zinc-900 border border-white/10 text-zinc-300 hover:bg-zinc-800 hover:text-white disabled:hover:bg-zinc-900 disabled:hover:text-zinc-300',
    outline:
      'bg-transparent border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 disabled:hover:text-zinc-400 disabled:hover:border-white/10',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(base, variants[variant], className)}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    >
      {children}
    </button>
  );
};

export default StandardButton;
