import React from 'react'
import Hero from '../assets/About.png'
import { motion } from 'framer-motion'
function Aboutus() {
    return (

        <section id="about" className='w-full  flex'>
            <div className='flex md:flex-row flex-col '>
                <motion.div data-scroll 
                    className='md:py-10 py-1 px-10 flex flex-col justify-center w-full '>
                    <div className='font-semibold text-primary md:text-3xl text-[6vw]'>
                        We are Devlopers
                    </div>
                    <div className=' font-semibold text-white md:text-[3.5vw]  text-[8vw]  '>
                        We can develope per
                    </div>
                    <div className='font-semibold leading-7 text-white md:text-[3.7vw] text-[8vw] mb-8'>
                        Your Requirement
                    </div>
                    <div className=' text-gray-500 md:text-[1.3vw] text-1xl md:w-[40vw]  w-[80vw]'>
                        Welcome to AJ Tech Solution, where we turn your vision into reality. Our dedicated team specializes in crafting bespoke development solutions tailored to your needs. With a focus on excellence and innovation, we exceed expectations at every turn. Let us empower your business to thrive in today's dynamic landscape. Experience the difference with AJ Tech Solution.
                    </div>
                </motion.div>
                <img src={Hero} className='md:w-[60vw] lg:flex w-[100vw] px-8 md:h-[40vw] h-[80vw] ' />

            </div>
        </section>
    )
}

export default Aboutus