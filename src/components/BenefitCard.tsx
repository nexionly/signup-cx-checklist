
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
      "p-6 rounded-lg bg-secondary border border-border/50 h-full transition-all duration-300 hover:border-border",
      className
    )}>
      {icon && <div className="mb-4 text-primary/90">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default BenefitCard;
