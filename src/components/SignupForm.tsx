
import React from 'react';

const SignupForm = () => {
  return (
    <div id="signup-section" className="w-full bg-background py-16 px-4 relative">
      <div className="max-w-2xl mx-auto relative z-10">
        <div 
          id="kit-form-container" 
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border/30"
        >
          <form 
            action="https://app.kit.com/forms/7777858/subscriptions" 
            className="seva-form formkit-form" 
            method="post" 
            data-sv-form="7777858" 
            data-uid="3666d9f307" 
            data-format="modal" 
            data-version="5"
          >
            <div className="formkit-background" style={{ 
              backgroundImage: "url('https://embed.filekitcdn.com/e/xoL6VaUcUbq1GHKbjhnWWm/mYjDtD3P1pEmMgFyvCsfWQ')", 
              opacity: 0.2 
            }}></div>
            
            <div data-style="minimal">
              <div className="formkit-header text-center mb-6" data-element="header">
                <h2 className="text-2xl font-bold text-gray-700">Customer Experience <br />Essentials Checklist</h2>
              </div>
              
              <div className="formkit-subheader mb-6" data-element="subheader">
                <p className="text-gray-600 text-justify">
                  This <strong>FREE</strong> checklist is your actionable guide to building a high-performing CX team from the ground up. <span className="text-pink-500 font-semibold">It's designed to help you systematically consider all the critical elements</span>, from defining your strategic vision to implementing the right processes and tools across Onboarding, Support, Customer Success, and more.
                </p>
              </div>
              
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              
              <div data-element="fields" data-stacked="true" className="space-y-4">
                <div className="formkit-field">
                  <input 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                    aria-label="First Name" 
                    name="fields[first_name]" 
                    required 
                    placeholder="First Name" 
                    type="text" 
                  />
                </div>
                
                <div className="formkit-field">
                  <input 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                    name="email_address" 
                    aria-label="Email Address" 
                    placeholder="Email Address" 
                    required 
                    type="email" 
                  />
                </div>
                
                <button 
                  data-element="submit" 
                  className="formkit-submit formkit-submit w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
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
                We won't send you spam. Unsubscribe at any time.
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
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-secondary/50 to-transparent opacity-70" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl" aria-hidden="true" />
    </div>
  );
};

export default SignupForm;
