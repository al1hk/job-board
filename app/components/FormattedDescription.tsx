"use client";

import React from 'react';

interface FormattedDescriptionProps {
  description: string;
}

const FormattedDescription: React.FC<FormattedDescriptionProps> = ({ description }) => {
  if (!description) return null;

  // A list of common headings to look for.
  const KNOWN_HEADINGS = [
    'description',
    'requirements',
    'responsibilities',
    'job responsibilities',
    'what we offer',
    'about us',
    'about globalogic',
  ];

  const blocks = description.split(/\n\s*\n/);

  return (
    <div className="mt-4 max-w-none text-slate-300 space-y-4">
      {blocks.map((block, index) => {
        const trimmedBlock = block.trim();

        // 1. Check if the block is a known heading
        if (KNOWN_HEADINGS.includes(trimmedBlock.toLowerCase().replace(/:$/, ''))) {
          return (
            <h3 key={index} className="font-semibold text-white text-lg">
              {trimmedBlock}
            </h3>
          );
        }

        // 2. Check if the block is a bulleted list
        if (trimmedBlock.startsWith('*')) {
          const listItems = trimmedBlock.split('\n').map(item => item.trim().replace(/^\*\s*/, ''));
          return (
            <ul key={index} className="list-disc list-inside space-y-1">
              {listItems.map((item, lIndex) => (
                <li key={lIndex}>{item}</li>
              ))}
            </ul>
          );
        }

        // 3. Otherwise, render as a standard paragraph
        return (
          <p key={index}>
            {trimmedBlock}
          </p>
        );
      })}
    </div>
  );
};

export default FormattedDescription;
