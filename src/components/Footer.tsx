
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-16 px-4 md:px-10 bg-secondary/40 mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-5 text-foreground">Matte Green Media</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Helping businesses create exceptional customer experiences through strategic insights and actionable frameworks.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-bold mb-5 text-foreground">Connect</h3>
            <div className="flex space-x-6">
              <a 
                href="https://mattegreenmedia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Website <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Matte Green Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
