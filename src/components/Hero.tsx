
import React from 'react';

const Hero = () => {
  return (
    <div className="pt-16 pb-24 px-4 md:px-10 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 fade-in">
            Transform Your Customer Experience with Our Proven Checklist
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl slide-up">
            Get access to the same framework top companies use to create exceptional customer experiences that drive growth and loyalty.
          </p>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#signup"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get the CX Checklist
            </a>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-40" aria-hidden="true" />
    </div>
  );
};

export default Hero;
