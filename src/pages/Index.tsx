
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonial from '@/components/Testimonial';
import CallToAction from '@/components/CallToAction';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
