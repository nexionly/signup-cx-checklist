
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
      "p-6 rounded-lg bg-white border border-border shadow-sm h-full transition-all duration-300 hover:shadow-md",
      className
    )}>
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default BenefitCard;
