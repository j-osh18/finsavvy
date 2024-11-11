import React, { useState } from 'react';

interface CarouselProps {
  slides: Slide[];
}

interface Slide {
  src: string;
  text: string;
  name: string;
  country: string;
}

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0); // Use state to track the current slide

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className='relative'>
      {/* Carousel container */}
      <div className='h-[400px] max-w-[400px] mx-auto overflow-hidden rounded-2xl relative'>
        <div 
          className='flex transition duration-300 ease-out' 
          style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className='w-full flex-shrink-0'
              style={{ width: '100%' }}
            >
              <img src={slide.src} alt={slide.name} className='w-full h-[400px] object-cover' />
              <div className='text-center'>
                <h2>{slide.name}</h2>
                <p>{slide.text}</p>
                <span>{slide.country}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Small arrows inside the bottom-right corner */}
        <div className='absolute bottom-4 right-4 flex items-center'>
          <button 
            onClick={prevSlide} 
            className='p-2 text-xs bg-gray-700 text-white rounded-full mx-1 hover:bg-gray-500 transition'
            aria-label="Previous Slide"
          >
            ←
          </button>
          <button 
            onClick={nextSlide} 
            className='p-2 text-xs bg-gray-700 text-white rounded-full mx-1 hover:bg-gray-500 transition'
            aria-label="Next Slide"
          >
            →
          </button>
        </div>
      </div>

      {/* Dots below the carousel - outside the container */}
      <div className='mt-4 flex justify-center'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full mx-1 ${index === current ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
