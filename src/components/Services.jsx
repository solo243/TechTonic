import React from 'react'
import appLogo from "../assets/app2.png"
import websiteLogo from '../assets/websiteicon.png'
import uiux from '../assets/uiux.png'
import market from '../assets/market.png'
function Services() {
    const servicesl = [
        {
            logo: appLogo,
            title: "Application Devlope"

        }, {
            logo: websiteLogo,
            title: "Website Devlope"

        },
        {
            logo: uiux,
            title: "UI/UX Design"

        },
        {
            logo: market,
            title: "Digital Marketing"

        },
    ]

    return (
        <section className='w-full pb-11 bg-[#1d1d25]'>
            <div className='w-full flex justify-center text-primary
             md:text-2xl text-2xl pt-10 pb-4 font-semibold '>
                What we do
            </div>
            <div className=' flex justify-center text-white md:text-[2vw] font-bold text-[5.5vw] '>
                What Service Do We Provide
            </div>
            <div className='gap-6 flex-grow flex-auto  mb-10
            justify-around  overflow-hidden flex md:flex-row flex-col w-full md:mt-10 mt-10  ' >
                {servicesl.map((item, index) => (
                    <div className=' max-w-[350px]  flex-col items-center self-center flex md:w-[20vw] w-[80vw] 
                  '>
                        <img src={item.logo} className='md:w-[17vw]  ' />
                        <div className='text-white md:text-[1.3vw] mb-3 text-[5vw] mt-2 flex items-center text-center'>
                            {item.title}
                        </div>
                        <div className='text-gray-500 text-center'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Rerum nisi quisquam aliquam a amet consequatur
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Services