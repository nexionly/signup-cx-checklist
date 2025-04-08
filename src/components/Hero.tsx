
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-20 pb-12 px-4 md:px-10 w-full relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 fade-in text-foreground">
            Your Expert Guide to Customer Experience Excellence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl slide-up">
            Get your free guide to ensure you're hitting all the key elements of a winning CX strategy.
          </p>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#kit-form-container">
              <Button className="rounded-full text-base px-8 py-6 h-auto font-medium">
                Get the Checklist <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-40" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" aria-hidden="true" />
    </div>
  );
};

export default Hero;
