import React, { useState } from 'react';

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDismiss = () => {
    setIsRemoving(true);
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  

  return (
    <div 
      className={`fixed bottom-10 right-20 z-999  transition duration-300 bg-teal-50 border border-teal-200 text-sm text-teal-800 rounded-lg p-4 ${
        isRemoving ? 'translate-x-5 opacity-0' : ''
      }`}
      role="alert"
    >
      <div className="flex">
        <div className="shrink-0">
          <svg 
            className="shrink-0 w-4 h-4 mt-0.5" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <div className="ml-2">
          <h3 className="text-sm font-medium">
            Имейлът е изпратен успешно.
          </h3>
        </div>
        <div className="pl-3 ml-auto">
          <div className="-mx-1.5 -my-1.5">
            <button 
              type="button" 
              className="inline-flex bg-teal-50 rounded-lg p-1.5 text-teal-500 hover:bg-teal-100 focus:outline-none focus:bg-teal-100"
              onClick={handleDismiss}
            >
              <span className="sr-only">Dismiss</span>
              <svg 
                className="shrink-0 w-4 h-4" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;