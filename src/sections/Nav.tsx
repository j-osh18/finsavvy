import React from 'react'
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; 
import Kobodrop from '../assets/logos/kobodrop_logo.svg';
import ButtonLink from '../common/ButtonLink';

function Nav() {
  const textLinksClasses = 'text-gray-500 hover:text-gray-900 active:text-gray-400';

  const navLinks = [
    { href: '#features', children: 'Features' },
    { href: '#partners', children: 'Partners' },
    { href: '#reviews', children: 'Reviews' },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className='flex h-[15vh] items-center max-w-7xl px-8 xl:m-auto lg:px-12 justify-between'>
            <div className='flex'>
              {/* Updated the href to the correct one */}
              <ButtonLink href='/' children={<img src={Kobodrop} alt='Finsavvy logo' />} />
              <div className='sm:flex space-x-4 items-center ml-4 hidden sm:ml-6 lg:ml-8 lg:space-x-8 '>
                {navLinks.map((link, index) => (
                  <ButtonLink key={index} href={link.href} children={link.children} className={textLinksClasses} />
                ))}
              </div>
            </div>
            <ButtonLink  href='https://play.google.com' target='_blank' children={"Install Finsavvy"} className='hidden sm:flex bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600' />
            

            {/* Mobile Menu Button */}
            <Disclosure.Button className='sm:hidden rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white'>
              {open ? (
                <XMarkIcon className='block h-6 w-6' />
              ) : (
                <Bars3Icon className='block h-6 w-6' />
              )}
            </Disclosure.Button>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className='space-y-1 sm:hidden px-4'>
            {navLinks.map((link, index) => (
              <Disclosure.Button 
                key={index}
                as="a" 
                href={link.href} 
                className="block text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
              >
                {link.children}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
