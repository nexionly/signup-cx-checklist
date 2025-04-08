
import React, { useEffect, useRef } from 'react';

const SignupForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a container for the KIT form
    const container = formRef.current;
    
    // We don't need to create the script here since it's already in index.html
    // This component just provides a place for the form to render
  }, []);

  return (
    <div className="w-full bg-secondary/50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div 
          ref={formRef} 
          id="kit-form-container" 
          className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-border/50"
        >
          {/* The KIT form will be injected here automatically via the script */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2">Get the CX Checklist</h3>
            <p className="text-muted-foreground">
              Fill out the form below to receive your copy of the Customer Experience Checklist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
