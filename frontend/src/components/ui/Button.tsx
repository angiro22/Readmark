import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-bronze text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none',
  secondary:
    'bg-white text-bronze-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none',
  ghost: 'bg-transparent text-bronze-dark border-transparent shadow-none hover:bg-cream',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={[
        'font-sans font-semibold uppercase tracking-widest',
        'border-2 border-black',
        'shadow-[6px_6px_0_0_#000]',
        'transition-all duration-75',
        'cursor-pointer',
        variantClasses[variant],
        sizeClasses[size],
        disabled
          ? 'opacity-50 cursor-not-allowed translate-x-[6px] translate-y-[6px] shadow-none! pointer-events-none'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
