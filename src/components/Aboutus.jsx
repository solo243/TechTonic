import React from 'react'
import Hero from '../assets/About.png'
function Aboutus() {
    return (
        <section className='w-full  flex'>
            <div className='flex md:flex-row flex-col '>
                <div className='md:py-10 py-1 px-10 flex flex-col justify-center w-full '>
                    <div className='text-primary md:text-3xl text-[6vw]'>
                        We are Devlopers
                    </div>
                    <div className='text-white md:text-6xl text-[8vw] leading-none tracking-tight'>
                        We can develope per
                    </div>
                    <div className='text-white md:text-6xl text-[8vw] mb-6'>
                        Your Requirement
                    </div>
                    <div className=' text-gray-500 md:text-2xl text-1xl md:w-[40vw]  w-[80vw]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Distinctio, non sequi! Culpa quos, impedit, dignissimos, nam consequuntur placeat iusto excepturi quisquam deleniti
                        eligendi modi maiores id aperiam amet a eius.
                    </div>
                </div>
                <img src={Hero} className='md:w-[60vw] lg:flex w-[100vw] px-8 md:h-[40vw] h-[80vw] ' />

            </div>
        </section>
    )
}

export default Aboutus