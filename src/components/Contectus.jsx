import React from 'react'

function Contectus() {
    return (
        <section id="contect" className=' w-full'>
            <div className='w-full flex justify-center text-primary
             md:text-2xl text-2xl pt-10 pb-4 font-semibold '>
                Contact
            </div>
            <div className=' flex justify-center text-white md:text-[2vw] font-bold text-[5.5vw] '>
                I Want to Hear from You
            </div>

            <div className='w-full  items-center flex md:flex-row md:py-[5vw] py-[2vw]
             flex-col  justify-between '>
                <div className='md:w-[40vw] px-10
                 flex justify-center  text-gray-500 
                 items-center py-10 h-full'>

                    Got questions, ideas, or simply want to say hello? We'd love to hear from you!
                    Our team is here and ready to assist with anything from project inquiries to partnership opportunities
                    . Drop us a line using the form below,
                    and let's start building something amazing together. Your journey to digital success begins here.
                </div>
                <div className='md:px-[10vw]   '>
                    <div className='bg-[#1d1d25] md:px-10 
                    px-[5vw] 
                    rounded-2xl
                    md:w-[36vw]
                    w-[100vw]
                     py-10'>
                        <div className='text-center text-white font-semibold text-2xl flex justify-center mb-10'>
                            let's make magic together!                        </div>
                        {/* First name last name  */}
                        <div className='flex flex-col'>
                            <input type='text' placeholder='Name' className='bg-[#292930] px-4 text-white border-gray-500 h-12 border-2 rounded-md' />
                        </div>
                        {/* email */}
                        <div>
                            <div className='flex flex-col mt-7'>
                                <input type='email' placeholder='Email' className='bg-[#292930] px-4 text-white border-gray-500 h-12 border-2 rounded-md' />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col mt-7'>
                                <textarea type='text' placeholder='Meassage' className='bg-[#292930] py-2  px-4 text-white border-gray-500 h-20 border-2 rounded-md' />
                            </div>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button type='submit' className='bg-primary px-20 py-3 rounded-full mt-7 text-white font-semibold'> Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contectus