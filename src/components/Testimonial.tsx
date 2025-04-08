
import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 px-4 md:px-10 w-full bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <svg className="h-12 w-12 text-primary/50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <blockquote className="text-xl md:text-2xl font-medium mb-6">
            "This CX Checklist helped us identify critical gaps in our customer journey that we would have otherwise missed. After implementing the recommended changes, we saw a 27% increase in customer satisfaction and a significant boost in repeat purchases."
          </blockquote>
          <div>
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-sm text-muted-foreground">CMO, Tech Innovations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
