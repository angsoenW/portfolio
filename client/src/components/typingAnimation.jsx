import React, { useState, useEffect } from 'react';

export default function TypingAnimation({ text, speed = 100, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <span className={className} style={{color: "black"}}>
      {displayText}
      <span 
        className={`inline-block w-[2px] h-5 ml-[2px] -mb-[2px] bg-current transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}