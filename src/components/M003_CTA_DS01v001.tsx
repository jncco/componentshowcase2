import * as React from 'react';

import BaseButton from './BaseButton';
import type { BaseModelProps, MaxItems, processedIcon, processedImage, processedLink } from './models';

export interface M003_CTA_DS01v001Props extends BaseModelProps {
    textList: MaxItems<string, 4>;
    linkList: MaxItems<processedLink, 1>;
    imageList: MaxItems<processedImage, 2>;
    iconList: MaxItems<processedIcon, 1>;
    cssList: MaxItems<string, 1>;
}

export const M003_CTA_DS01v001: React.FC<M003_CTA_DS01v001Props> = ({
  textList: [tagline = '', title = '', imageAlt = ''],
  linkList: [buttonHref],
  imageList: [bgImage, fgImage],
  iconList: [downloadArrow],
  cssList: [showOverlay = '1'],
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      {/* Overlay to ensure text readability */}

      <div className="container mx-auto relative max-w-[85rem] 3xl:max-w-[120rem] px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-stretch h-full">
          {/* Text Column: Added flex flex-col justify-center */}
          <div className="col-span-12 md:col-span-7 order-2 md:order-none flex flex-col justify-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
              {/* Text Content */}
              <div className="w-full">
                <p className="text-neutro-700 text-xl sm:text-2xl md:text-xl lg:text-2xl mb-1">
                  {tagline}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-neutro-700 font-bold leading-tight mb-6">
                  {title}
                </h1>
                <div className="pt-4 flex justify-center md:justify-start w-full">
                  {buttonHref && (
                    <BaseButton
                      text={buttonHref.title}
                      href={buttonHref.target}
                      variant="primary"
                      tone="100"
                      size="lg"
                      icon={downloadArrow?.url || ''}
                      smallIcon={true}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Image Column: Removed flex alignment */}
          <div className="col-span-12 md:col-span-5 order-1 md:order-none">
            <img
              src={`${fgImage ? fgImage.url : bgImage?.url}`}
              alt={imageAlt}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default M003_CTA_DS01v001;
