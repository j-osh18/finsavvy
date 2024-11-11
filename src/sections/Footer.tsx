import React from 'react'
import KobodropLight from '../assets/logos/kobodrop_logo_bright.png'
import StoreLinksSection from '../common/StoreLinks'
import Twitter from '../assets/logo-wall/'

function Footer() {
  return (
    <section className='bg-gray-800'>
        <div className='flex max-w-7xl flex=col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto'>
            <div className='flex flex-col justify-between gap-12 md:flex-row md:gap-0'>
                <div>
                    <img className='mb-4 w-36' src={KobodropLight} alt='light version' />
                    <p>Start spending the smart way.</p>
                </div>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-400'>Product</p>
                        <a href='#'>OverView</a>
                        <a href='#'>Features</a>
                        <a href='#'>Solutions</a>
                        <a href='#'>Contact</a>
                        <a href='#'>Releases</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-400'>Resources</p>
                        <a href='#'>Blog</a>
                        <a href='#'>Newsletter</a>
                        <a href='#'>Solutions</a>
                        <a href='#'>Events</a>
                        <a href='#'>Help Centre</a>
                        <a href='#'>Support</a>
                    </div>
                </div>
                {/* <div className='w-fit'>
                    <h2>Get the app</h2>
                    <StoreLinksSection />
                </div> */}
                <div>
                    <p className='w-{16ch} text-gray-400 md:w-full'>&copy: 2024 Josh Finsavvy. All rights reserved</p>
                    {/* <div className='flex gap-6'>
                        <a href='https://titter.com' target='_blank'>
                        <img src={Twitter} alt='twitter icon' />
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer