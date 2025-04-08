
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 px-4 md:px-10 border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Matte Green Media</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Helping businesses create exceptional customer experiences through strategic insights and actionable frameworks.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://mattegreenmedia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Website
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Matte Green Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
