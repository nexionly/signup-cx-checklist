
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-10 w-full relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 fade-in text-foreground">
          Your Expert Guide to Customer Experience Excellence
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 mx-auto max-w-3xl slide-up">
          Get your free guide to ensure you're hitting all the key elements of a winning CX strategy.
        </p>
        
        <Button 
          onClick={scrollToSignup} 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Your Free Checklist <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-40" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" aria-hidden="true" />
    </div>
  );
};

export default Hero;
