"use client";

import { useEffect, useState } from "react";

const WatermarkTag = () => {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (window.self !== window.top) {
      try {
        const parentHostname = window.top?.location.hostname;
        if (parentHostname?.includes('webild.io')) {
          setShouldShow(false);
        }
      } catch {
        setShouldShow(true);
      }
    }
  }, []);

  const handleClick = () => {
    window.open("https://webild.io", "_blank");
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes watermark-text-shine {
          0% { background-position: 100% center; }
          100% { background-position: -100% center; }
        }
        .watermark-text-shine {
          background: linear-gradient(90deg, currentColor 0%, currentColor 40%, #3d8bfa 50%, currentColor 60%, currentColor 100%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: watermark-text-shine 3s linear infinite;
        }
      `}</style>
      <button
        className="fixed z-99999 bottom-6 right-6 flex items-center gap-2 p-1 pr-3 rounded-[6px] cursor-pointer transition-all duration-200 hover:-translate-y-[3px] text-black bg-[#f3f3f3] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.025),0px_0px_0px_1px_rgba(0,0,0,0.07),inset_0px_1px_0px_rgba(255,255,255,0.75)]"
        onClick={handleClick}
      >
        <div className="relative flex items-center justify-center h-9 w-9 rounded-[6px] text-white bg-[linear-gradient(180deg,#3d8bfa_0%,#5ba2f9_100%)] shadow-[0_6px_12px_-5px_rgba(58,137,253,0.5)] transition-[filter] duration-300 ease-out">
          <img src="https://storage.googleapis.com/webild/default/platform/logo-icon.png" alt="Webild" className="h-1/2 w-1/2 object-contain brightness-0 invert" />
        </div>
        <span className="flex items-center gap-1 text-base font-medium leading-snug watermark-text-shine">Made with Webild</span>
      </button>
    </>
  );
};

export default WatermarkTag;
