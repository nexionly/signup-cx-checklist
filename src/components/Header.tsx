
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-5 px-4 md:px-10 border-b border-border/10 bg-white/70 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity text-primary">
          Matte Green Media
        </Link>
        <nav className="hidden md:flex space-x-8">
          <a 
            href="https://mattegreenmedia.com/#" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a 
            href="https://mattegreenmedia.com/cx-checklist/" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            CX Checklist
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
