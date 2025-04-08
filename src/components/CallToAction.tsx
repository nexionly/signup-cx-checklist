
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 md:px-10 w-full relative overflow-hidden" id="signup">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Customer Experience?</h2>
          <p className="text-lg text-muted-foreground">
            Get instant access to our comprehensive CX Checklist and start improving your customer journey today.
          </p>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-30" aria-hidden="true" />
    </section>
  );
};

export default CallToAction;
