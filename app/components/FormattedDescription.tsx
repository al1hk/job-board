"use client";

import React from 'react';

interface FormattedDescriptionProps {
  description: string;
}

// Define strict types for our parsed elements
type DescriptionElement =
  | { type: 'p'; content: string }
  | { type: 'ul'; content: string[] };

const FormattedDescription: React.FC<FormattedDescriptionProps> = ({ description }) => {
  if (!description) return null;

  const lines = description.split('\n');
  const elements: DescriptionElement[] = [];
  let currentList: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('*')) {
      currentList.push(line.replace(/^\*\s*/, ''));
    } else {
      if (currentList.length > 0) {
        elements.push({ type: 'ul', content: currentList });
        currentList = [];
      }
      if (line) {
        elements.push({ type: 'p', content: line });
      }
    }
  }
  if (currentList.length > 0) {
    elements.push({ type: 'ul', content: currentList });
  }

  const KNOWN_HEADINGS = [
    'description',
    'requirements',
    'responsibilities',
    'job responsibilities',
    'what we offer',
    'about us',
    'about globalogic',
  ];

  return (
    <div className="prose prose-invert max-w-none text-slate-300 prose-headings:text-white prose-headings:font-semibold prose-ul:my-3 prose-p:my-3 prose-li:my-1">
      {elements.map((el, index) => {
        if (el.type === 'ul') {
          return (
            <ul key={index}>
              {el.content.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
            </ul>
          );
        }

        // Since it's not a list, el.content is a string.
        const isHeading = KNOWN_HEADINGS.includes(el.content.toLowerCase().replace(/:$/, ''));

        if (isHeading) {
          return <h3 key={index}>{el.content}</h3>;
        } else {
          return <p key={index}>{el.content}</p>;
        }
      })}
    </div>
  );
};

export default FormattedDescription;
