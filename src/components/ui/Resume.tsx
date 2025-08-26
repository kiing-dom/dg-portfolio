"use client";

import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const Resume: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const GOOGLE_DRIVE_FILE_ID = "1w2rVPxk8DvZrMlr6CdMwgBlkUhPE4qsb";
  const resumeUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        closeOverlay();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    if (showOverlay) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "visible";
    };
  }, [showOverlay]);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      {/* Resume Button */}
      <button
        onClick={toggleOverlay}
        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
      >
        resume
      </button>

      {/* Resume Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div
            ref={overlayRef}
            className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <h2 className="text-lg font-medium text-black dark:text-white">Resume</h2>
              <div className="flex items-center gap-2">
                <a
                  href={`https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white rounded transition-colors"
                >
                  Open in new tab
                </a>
                <button
                  onClick={closeOverlay}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                  aria-label="Close resume"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[calc(100%-4rem)]">
              <iframe
                src={resumeUrl}
                className="w-full h-full border-0"
                title="Dominion Gbadamosi Resume"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
