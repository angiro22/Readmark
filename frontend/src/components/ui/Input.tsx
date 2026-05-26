import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rightElement?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  rightElement,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1.5">
          <label
            htmlFor={inputId}
            className="font-sans font-medium text-sm text-bronze-dark"
          >
            {label}
          </label>
          {rightElement}
        </div>
      )}
      <input
        id={inputId}
        className={[
          'w-full px-4 py-3',
          'border-2 border-black',
          'bg-white',
          'font-sans text-base text-bronze-dark',
          'placeholder:text-gray-mid',
          'outline-none',
          'focus:shadow-[3px_3px_0_0_#000]',
          'transition-shadow duration-75',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    </div>
  );
};
