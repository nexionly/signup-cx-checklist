
import React from 'react';

const Hero = () => {
  return (
    <div className="pt-16 pb-4 px-4 md:px-10 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 fade-in">
            Your Expert Guide to Customer Experience Excellence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl slide-up">
            Get your free guide to ensure you're hitting all the key elements of a winning CX strategy.
          </p>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-40" aria-hidden="true" />
    </div>
  );
};

export default Hero;
