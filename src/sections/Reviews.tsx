import React from 'react'
import StoreLinksSection from '../common/StoreLinks';
import Carousel from '../common/Carousel';

function Reviews() {
    const slides = [
        {
            src:"https://th.bing.com/th/id/OIP.Uhf3jOu9Dv_TnUO4g3xMcgHaEH?w=309&h=183&c=7&r=0&o=5&pid=1.7",
            text: '"Finsavvy has helped me send and receive money with little to nno complications. It`s what everyone should use."',
            name: "Haruka",
            country: "Japan",
        },
        {
            src:"https://th.bing.com/th/id/OIP.UzxGEG6SgxvcOD9hBXrecgHaEo?w=248&h=180&c=7&r=0&o=5&pid=1.7",
            text: '"Using Finsavvy has streamlined my financial transactions like never before."',
            name: "Josh",
            country: "Kenya",
        },
        {
            src:"https://th.bing.com/th/id/OIP.G1WkdLieWIX7p53tBNaV9wHaEK?w=276&h=180&c=7&r=0&o=5&pid=1.7",
            text: '"Finsavvy has been a game changer for my daily financial dealings."',
            name: "Tom",
            country: "Tanzania",
        },
    ];
  return (
    <section id='reviews' className='flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12'>
        <article className='mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start'>
            <h2 className='mb-4 max-w-{16h} text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left'>Join other thousands of people today!</h2>
            <StoreLinksSection />
        </article>
        <Carousel slides={slides} />
    </section>
  )
}

export default Reviews