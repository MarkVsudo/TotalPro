import React, { useState } from "react";

const ErrorAlert = ({ text }) => {
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
      className={`fixed bottom-5 right-1/2 translate-x-1/2 z-999 transition duration-300 bg-red-50 border border-red-200 text-sm text-red-800 rounded-lg p-4 ${
        isRemoving ? "translate-y-5 opacity-0" : ""
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
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <div className="ml-2">
          <h3 className="text-sm font-medium">{text}</h3>
        </div>
        <div className="pl-3 ml-auto">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-red-50 rounded-lg p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:bg-red-100"
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

export default ErrorAlert;
