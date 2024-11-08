import React from 'react';
import StoreLinks from '../common/StoreLinks';
import Phone from '../assets/logos/mockup.svg';
import HeroImage from '../assets/logos/hero.png';


function Hero() {
  return (
    <section className='relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h{85vh} md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden'>
      <div className='sm:w-fullmd:w-3/6 '>
        <h1 className='text-center mx-auto mb-8 w-{12ch} text-4xl font-semibold text-gray-800 sm:rext-5xl md:mx-0 md:text-left '>Start spending the smart way</h1>
        <p className='m-auto w-{34ch} text-center text-gray-500 md:m-0 md:text-left'>
          Take control of your finances anytime, anywhere with Finsavvy.
          Discover the smart way to use your money.
        </p>
        <StoreLinks />
      </div>
      <div className='md:w-3/6 xl:mb-12 xl:overflow-hidden'>
        <img className='right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80' src={Phone} alt='Finsavvy app frame' />
        <img className='hidden rounded-2xl xl:flex' src={HeroImage} alt='woman' />
      </div>
    </section>
  );
}

export default Hero;
