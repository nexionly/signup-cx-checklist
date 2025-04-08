
import React, { useEffect, useState } from 'react';

interface DebugInfoState {
  publicUrl: string;
  currentLocation: string;
  routerMode: string;
  scriptStatus: Record<string, boolean>;
  buildInfo: {
    time: string;
    mode: string;
  };
}

const DebugInfo = () => {
  const [info, setInfo] = useState<DebugInfoState>({
    publicUrl: import.meta.env.BASE_URL || '/',
    currentLocation: window.location.href,
    routerMode: 'hash',
    scriptStatus: {
      convertKit: false,
      gptEngineer: false
    },
    buildInfo: {
      time: new Date().toISOString(),
      mode: import.meta.env.MODE || 'unknown'
    }
  });

  useEffect(() => {
    // Check script loading status
    const scripts = {
      convertKit: typeof window.ck !== 'undefined',
      gptEngineer: document.querySelector('script[src*="gptengineer.js"]') !== null
    };

    setInfo(prev => ({
      ...prev,
      scriptStatus: scripts,
      currentLocation: window.location.href
    }));

    // Log debugging info to console
    console.log('Debug Info:', {
      ...info,
      scriptStatus: scripts,
      window: {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        location: window.location.toString(),
        origin: window.location.origin
      },
      document: {
        readyState: document.readyState,
        visibilityState: document.visibilityState
      }
    });

    // Check if SignupForm is causing errors due to missing ConvertKit script
    if (!scripts.convertKit) {
      console.warn('ConvertKit script is not loaded - this may affect the SignupForm component');
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-black/80 text-white text-xs rounded-md max-w-[300px] z-50 opacity-50 hover:opacity-100 transition-opacity">
      <h3 className="font-bold mb-2">Debug Info:</h3>
      <ul className="list-disc pl-4 space-y-1">
        <li>Base URL: {info.publicUrl}</li>
        <li>Current URL: {info.currentLocation}</li>
        <li>Router: {info.routerMode}</li>
        <li>Build: {info.buildInfo.mode}</li>
        <li>Scripts: 
          <ul className="list-circle pl-4 mt-1">
            <li className={info.scriptStatus.convertKit ? "text-green-400" : "text-red-400"}>
              ConvertKit: {info.scriptStatus.convertKit ? "Loaded" : "Not Loaded"}
            </li>
            <li className={info.scriptStatus.gptEngineer ? "text-green-400" : "text-red-400"}>
              GPT Engineer: {info.scriptStatus.gptEngineer ? "Loaded" : "Not Loaded"}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DebugInfo;
