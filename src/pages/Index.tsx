
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';
import DebugInfo from '@/components/DebugInfo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow">
        <Hero />
        <SignupForm />
        <Features />
      </main>
      <Footer />
      {/* Remove this in production */}
      <DebugInfo />
    </div>
  );
};

export default Index;
