import * as React from 'react';
import BaseButton from './BaseButton';

export interface ContentCard {
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  type?: 'testimonial' | 'content';
}

export interface ContentCardsSectionProps {
  title: string;
  cards: ContentCard[];
}

export const ContentCardsSection: React.FC<ContentCardsSectionProps> = ({
  title,
  cards,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutro-900 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-neutro-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutro-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-neutro-700 mb-4">
                  {card.description}
                </p>
                {card.ctaText && card.ctaLink && (
                  <BaseButton
                    text={card.ctaText}
                    href={card.ctaLink}
                    variant="primary"
                    size="sm"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCardsSection; 