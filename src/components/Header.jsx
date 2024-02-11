import React from 'react'
import Navbar from './Navbar'
import Hero from '../assets/hero.png'
import Deco from '../assets/deco.png'
import { motion } from 'framer-motion'
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
                        <div className='text-yellow-300 mb-4 py-1 font-semibold'>
                            Hi, we are TechTonic
                        </div>
                        <h1 className='flex font-semibold md:text-[5vw] text-white text-4xl'>
                            TechTonic
                            Studio
                        </h1>
                        <h1 className='md:mt-[2.6vw] font-semibold md:text-[5vw] text-white text-4xl'>
                            Innovative <span className='text-[#9270ff] font-bold'>Excellence </span>
                        </h1>
                        <div className='text-gray-400 md:mt-10 mt-[4vw] md:w-[37vw] w-[80vw]'>
                            Welcome to our
                            TechTonic studio, where innovation thrives and visions take flight. With a fusion of creativity and cutting-edge technology, we craft bespoke websites and transformative applications tailored to elevate your brand. Let's
                            embark on a journey of digital excellence together
                        </div>

                        <motion.button
                            
                            className='bg-primary  font-bold py-3  md:px-10 px-10 rounded-full md:mt-[3.7vw] mt-9 text-white'>
                            Contect us
                        </motion.button>
                    </div>
                    <motion.div initial={{ y: "0%" }} 
                    animate={{ y: "3%" }}
                     transition={{ repeat: Infinity, duration: 2, easings: "linear", repeatType: "reverse" }}>

                        <img src={Hero} className=' pb-100 h-35 md:h-[33vw] md:mt-0 mt-1' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Header