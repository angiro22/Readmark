import React from 'react';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-block px-3 py-1 text-xs font-sans font-semibold border-2 border-black bg-cream text-bronze-dark whitespace-nowrap">
      {label}
    </span>
  );
};
