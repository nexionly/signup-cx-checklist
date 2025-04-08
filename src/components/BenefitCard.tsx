
import React from 'react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const BenefitCard = ({ title, description, icon, className }: BenefitCardProps) => {
  return (
    <div className={cn(
      "p-8 rounded-xl bg-white border border-border/20 shadow-sm h-full transition-all duration-300 group",
      className
    )}>
      {icon && <div className="mb-5 text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default BenefitCard;
