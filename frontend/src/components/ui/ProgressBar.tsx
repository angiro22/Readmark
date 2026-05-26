import React from 'react';

interface ProgressBarProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 'h-3', md: 'h-5', lg: 'h-7' };

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, size = 'md' }) => {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={`w-full ${sizeMap[size]} border-2 border-black bg-white`}>
      <div
        className="h-full bg-bronze transition-all duration-500"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
};
