import * as React from 'react';
import BaseButton from './BaseButton';

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  title: string;
  features: FeatureItem[];
  ctaText?: string;
  ctaLink?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  features,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-neutro-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutro-900 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutro-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutro-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {ctaText && ctaLink && (
          <div className="text-center mt-12">
            <BaseButton
              text={ctaText}
              href={ctaLink}
              variant="primary"
              size="lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection; 