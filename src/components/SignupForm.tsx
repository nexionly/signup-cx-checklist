
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

const SignupForm = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if ConvertKit script is already loaded
    if (window.ck && typeof window.ck.loadForm === 'function') {
      console.log("ConvertKit script already loaded, initializing form");
      window.ck.loadForm();
      setScriptLoaded(true);
      return;
    }
    
    console.log("ConvertKit script not detected, attempting to load");
    
    // Check if script tag exists but hasn't initialized properly
    const existingScript = document.querySelector('script[src*="convertkit"]');
    
    if (existingScript) {
      console.log("ConvertKit script tag exists but not initialized, setting up listener");
      // Script exists but may not be fully loaded
      const checkCK = setInterval(() => {
        if (window.ck && typeof window.ck.loadForm === 'function') {
          console.log("ConvertKit initialized after delay");
          window.ck.loadForm();
          setScriptLoaded(true);
          clearInterval(checkCK);
        }
      }, 500);
      
      // Cleanup interval after 10 seconds if not loaded
      setTimeout(() => {
        clearInterval(checkCK);
        if (!scriptLoaded) {
          console.log("ConvertKit failed to initialize after waiting");
        }
      }, 10000);
    } else {
      console.log("No ConvertKit script found, adding to page");
      // Load the script dynamically
      const script = document.createElement('script');
      script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
      script.async = true;
      script.onload = () => {
        console.log("ConvertKit script loaded via dynamic insert");
        if (window.ck && typeof window.ck.loadForm === 'function') {
          window.ck.loadForm();
          setScriptLoaded(true);
        } else {
          console.error('Failed to initialize ConvertKit script after loading');
        }
      };
      document.body.appendChild(script);
    }

    return () => {
      // Clean up any intervals if component unmounts
      document.querySelectorAll('script[data-ck-interval]').forEach(el => {
        const intervalId = parseInt(el.getAttribute('data-ck-interval') || '0');
        if (intervalId) clearInterval(intervalId);
        el.remove();
      });
    };
  }, [scriptLoaded]);

  return (
    <div id="signup-section" className="w-full bg-background py-20 px-4 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Left side - Header and subheader */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Customer Experience <br /><span className="text-primary">Essentials Checklist</span></h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                This <strong>FREE</strong> checklist is your actionable guide to building a high-performing CX team from the ground up.
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                <span className="text-primary font-semibold">It's designed to help you systematically consider all the critical elements</span>, from defining your strategic vision to implementing the right processes and tools.
              </p>
              
              <div className="hidden lg:block space-y-4 mt-8">
                <div className="flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  <span className="text-gray-700">Optimize your customer onboarding</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  <span className="text-gray-700">Improve support effectiveness</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  <span className="text-gray-700">Boost customer success metrics</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="lg:w-1/2">
            <div 
              id="kit-form-container" 
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-border/30 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Get Your Free CX Checklist</h3>
              <form 
                action="https://app.kit.com/forms/7777858/subscriptions" 
                className="seva-form formkit-form" 
                method="post" 
                data-sv-form="7777858" 
                data-uid="3666d9f307" 
                data-format="modal" 
                data-version="5"
                data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Check your email for instructions.&quot;,&quot;redirect_url&quot;:&quot;https://mattegreenmedia.com/cx-checklist/&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;exit&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
              >
                <div className="formkit-background" style={{ 
                  backgroundImage: "url('https://embed.filekitcdn.com/e/xoL6VaUcUbq1GHKbjhnWWm/mYjDtD3P1pEmMgFyvCsfWQ')", 
                  opacity: 0.05 
                }}></div>
                
                <div data-style="minimal">
                  <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                  
                  <div data-element="fields" data-stacked="true" className="space-y-5">
                    <div className="formkit-field">
                      <input 
                        className="formkit-input w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" 
                        aria-label="First Name" 
                        name="fields[first_name]" 
                        required 
                        placeholder="First Name" 
                        type="text" 
                      />
                    </div>
                    
                    <div className="formkit-field">
                      <input 
                        className="formkit-input w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" 
                        name="email_address" 
                        aria-label="Email Address" 
                        placeholder="Email Address" 
                        required 
                        type="email" 
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      data-element="submit" 
                      className="formkit-submit formkit-submit w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <div className="formkit-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Get your FREE CX Essentials Checklist</span>
                    </button>
                  </div>
                  
                  <div className="formkit-guarantee text-center mt-4 text-sm text-gray-600" data-element="guarantee">
                    We respect your privacy. Unsubscribe at any time.
                  </div>
                  
                  <div className="formkit-powered-by-convertkit-container mt-4 text-center">
                    <a 
                      href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" 
                      data-element="powered-by" 
                      className="text-xs text-gray-500 hover:underline" 
                      target="_blank" 
                      rel="nofollow"
                    >
                      Built with Kit
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-secondary/50 to-transparent opacity-70" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl" aria-hidden="true" />
    </div>
  );
};

export default SignupForm;
