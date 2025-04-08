
import React from 'react';
import BenefitCard from './BenefitCard';
import { CheckCircle, BarChart2, Users, Target } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 px-4 md:px-10 w-full bg-background relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Why You Need This Checklist</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive CX Checklist gives you the framework to evaluate and improve every touchpoint of your customer journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard 
            title="Identify Gaps" 
            description="Quickly spot weaknesses in your current customer experience that may be costing you revenue."
            icon={<CheckCircle size={24} className="text-primary" />}
            className="hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300"
          />
          <BenefitCard 
            title="Measure Impact" 
            description="Get concrete metrics to track improvements and demonstrate ROI to stakeholders."
            icon={<BarChart2 size={24} className="text-primary" />}
            className="hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300"
          />
          <BenefitCard 
            title="Boost Retention" 
            description="Create loyalty-building moments that keep customers coming back and referring others."
            icon={<Users size={24} className="text-primary" />}
            className="hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300"
          />
          <BenefitCard 
            title="Strategic Focus" 
            description="Prioritize improvements that will have the biggest impact on customer satisfaction and revenue."
            icon={<Target size={24} className="text-primary" />}
            className="hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300"
          />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-accent/20 to-transparent opacity-60 blur-3xl" aria-hidden="true" />
    </section>
  );
};

export default Features;
