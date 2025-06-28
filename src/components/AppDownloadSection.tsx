import * as React from 'react';
import BaseButton from './BaseButton';

export interface AppDownloadSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  phoneImage: string;
}

export const AppDownloadSection: React.FC<AppDownloadSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  phoneImage,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-neutro-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutro-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-neutro-700 mb-8">
              {subtitle}
            </p>
            <BaseButton
              text={ctaText}
              href={ctaLink}
              variant="primary"
              size="lg"
            />
          </div>
          
          {/* Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src={phoneImage}
                alt="Mobile App"
                className="w-64 h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection; 