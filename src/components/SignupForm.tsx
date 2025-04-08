
import React from 'react';

const SignupForm = () => {
  return (
    <div id="signup-section" className="w-full bg-background py-16 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Left side - Header and subheader */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">Customer Experience <br />Essentials Checklist</h2>
              <p className="text-gray-600 text-base md:text-lg">
                This <strong>FREE</strong> checklist is your actionable guide to building a high-performing CX team from the ground up. <span className="text-pink-500 font-semibold">It's designed to help you systematically consider all the critical elements</span>, from defining your strategic vision to implementing the right processes and tools across Onboarding, Support, Customer Success, and more.
              </p>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="lg:w-1/2">
            <div 
              id="kit-form-container" 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-border/30"
            >
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
                  opacity: 0.2 
                }}></div>
                
                <div data-style="minimal">
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
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-secondary/50 to-transparent opacity-70" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl" aria-hidden="true" />
    </div>
  );
};

export default SignupForm;
