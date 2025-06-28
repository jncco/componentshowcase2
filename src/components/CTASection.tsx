import * as React from 'react';
import BaseButton from './BaseButton';

export interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  backgroundColor = 'bg-primary-500',
  textColor = 'text-white',
}) => {
  const sectionStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section 
      className={`py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative ${!backgroundImage ? backgroundColor : ''}`}
      style={sectionStyle}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${textColor}`}>
            {title}
          </h2>
          <p className={`text-xl mb-8 ${textColor} opacity-90`}>
            {subtitle}
          </p>
          <BaseButton
            text={ctaText}
            href={ctaLink}
            variant="transparent"
            color={textColor.includes('white') ? 'white' : 'neutro-900'}
            size="xl"
            borderWidth="2"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection; 