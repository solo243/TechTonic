import React from 'react'

function Services() {
    return (
        <section className='w-full h-screen bg-[#1d1d25]'>
            <div className='w-full flex justify-center text-primary
             md:text-2xl text-2xl py-10 '>
                What we do
            </div>
            <div className='flex justify-center text-white md:text-[2vw] font-bold text-[5.5vw]'>
                What Service Do We Provide
            </div>
            <div className='bg-red-900 flex-grow flex-auto  gap-10 overflow-hidden flex md:flex-row flex-col w-full md:mt-20 mt-10  ' >
                <div className='md:h-[20vw] max-w-[350px] items-center self-center  md:w-[20vw] w-[80vw] bg-pink-50 h-[30vh]'>
                    Ui design
                </div>
                <div className='md:h-[20vw] max-w-[350px]  items-center self-center  md:w-[20vw] w-[80vw] bg-pink-50 h-[30vh]'>
                    Ui design
                </div>

            </div>
        </section>
    )
}

export default Services