import React, { useEffect, useState } from "react";

const defaultImages = [
  Images.home01_110_carousel_image_01.src, 
  Images.home01_111_carousel_image_02.src, 
  Images.home01_112_carousel_image_03.src, 
]

interface HeroSlide {
  title: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  buttonColor?: string;
  buttonHoverColor?: string;
}

interface M016_CTA_SLIDER_DS01V002_Props {
  slides?: HeroSlide[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const propOrDefaultImages = (slides: HeroSlide[], imgsStr: string[]): HeroSlide[] => {
  return slides.map((slide, idx) => ({
    ...slide,
    backgroundImage: isEmpty(slide.backgroundImage) ? imgsStr[idx % slides.length] : slide.backgroundImage
  }))
}

const defaultSlides: HeroSlide[] = [];

const M016_CTA_SLIDER_DS01V002: React.FC<M016_CTA_SLIDER_DS01V002_Props> = ({
  slides = defaultSlides,
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const curatedSlides = propOrDefaultImages(slides, defaultImages)

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % curatedSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + curatedSlides.length) % curatedSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval]);

  return (
    <div className="relative h-[50vh] w-full overflow-hidden ">
      {curatedSlides.map((slide, index) => (
        <section
          key={index}
          className={`absolute inset-0 w-full h-[50vh] transition-opacity duration-500 ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 w-full h-[50vh] bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content Container */}
          <div className="relative h-[50vh] flex items-end pb-12 mx-auto max-w-[85rem] 3xl:max-w-[120rem] px-4 sm:px-6 lg:px-8 md:items-center md:pt-10 md:pb-4">
            <div className="container">
              <div className="max-w-3xl px-6">
                <h1 className="text-neutro-50 text-4xl md:text-6xl font-bold mb-4 lg:mb-8">
                  {slide.title}
                </h1>
                <a
                  href={slide.buttonLink}
                  className="inline-block text-neutro-50 font-semibold py-3 px-8 rounded-full transition-colors duration-300 group"
                  style={{
                    backgroundColor: slide.buttonColor,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      slide.buttonHoverColor || "";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      slide.buttonColor || "";
                  }}
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute text-3xl left-4 top-1/2 -translate-y-1/2 text-neutro-50 opacity-75 hover:opacity-100 z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        className="absolute text-3xl right-4 top-1/2 -translate-y-1/2 text-neutro-50 opacity-75 hover:opacity-100 z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-opacity duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default M016_CTA_SLIDER_DS01V002;
