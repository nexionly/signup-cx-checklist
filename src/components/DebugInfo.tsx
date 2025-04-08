
import React, { useEffect, useState } from 'react';

const DebugInfo = () => {
  const [info, setInfo] = useState({
    publicUrl: import.meta.env.BASE_URL || '/',
    currentLocation: window.location.href,
    routerMode: 'hash'
  });

  useEffect(() => {
    // Log debugging info to console
    console.log('Debug Info:', info);
  }, [info]);

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-black/80 text-white text-xs rounded-md max-w-[300px] z-50 opacity-50 hover:opacity-100 transition-opacity">
      <h3 className="font-bold mb-2">Debug Info:</h3>
      <ul className="list-disc pl-4 space-y-1">
        <li>Base URL: {info.publicUrl}</li>
        <li>Current URL: {info.currentLocation}</li>
        <li>Router: {info.routerMode}</li>
      </ul>
    </div>
  );
};

export default DebugInfo;
