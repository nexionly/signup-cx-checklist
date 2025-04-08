
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
    <div id="signup-section" className="w-full bg-background py-16 px-4 relative">
      <div className="max-w-2xl mx-auto relative z-10">
        <div 
          ref={formRef} 
          id="kit-form-container" 
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border/30"
        >
          {/* The KIT form will be injected here automatically via the script */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Get the CX Checklist</h3>
            <p className="text-muted-foreground">
              Fill out the form below to receive your copy of the Customer Experience Checklist.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-secondary/50 to-transparent opacity-70" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl" aria-hidden="true" />
    </div>
  );
};

export default SignupForm;
