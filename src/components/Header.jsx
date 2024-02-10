import React from 'react'
import Navbar from './Navbar'
import Hero from '../assets/hero.png'
function Header() {
    return (
        <section className='bg-[#292930] w-full  '>
            <Navbar />
            <div>
                <div className='w-full
                 py-10 md:py-24 px-8 md:px-16 
                 flex md:flex-row flex-col justify-between 
                 overflow-hidden '>
                    <div>
                        <div className='text-yellow-300 mb-3 font-semibold'>
                            Hi, we are TechTonic
                        </div>
                        <h1 className='flex  md:text-7xl text-white text-4xl'>
                            TechTonic
                            Studio
                        </h1>
                        <h1 className='md:mt-3  md:text-6xl text-white text-4xl'>
                            Innovative <span className='text-[#9270ff]'>Excellence </span>
                        </h1>
                        <button className='bg-primary font-semibold py-3  md:px-10 px-10 rounded-full md:mt-[3.7vw] mt-9 text-white'>
                            Contect us
                        </button>
                    </div>
                    <img src={Hero} className='pb-100 h-35 md:h-[33vw] md:mt-0 mt-8' />
                </div>
            </div>
        </section>
    )
}

export default Header