import * as React from 'react';
import BaseButton from './BaseButton';

export interface ContactOption {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}

export interface WhatsAppContactSectionProps {
  title: string;
  subtitle: string;
  contactOptions: ContactOption[];
  backgroundImage: string;
}

export const WhatsAppContactSection: React.FC<WhatsAppContactSectionProps> = ({
  title,
  subtitle,
  contactOptions,
  backgroundImage,
}) => {
  return (
    <section 
      className="py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-500 bg-opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white opacity-90">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <img
                  src={option.icon}
                  alt={option.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-white opacity-80 mb-4">
                {option.subtitle}
              </p>
              <BaseButton
                text="Contact Us"
                href={option.link}
                variant="transparent"
                color="white"
                size="md"
                borderWidth="2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContactSection; 