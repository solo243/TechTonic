import React from 'react'
import appLogo from "../assets/app2.png"
import websiteLogo from '../assets/websiteicon.png'
import uiux from '../assets/uiux.png'
import market from '../assets/market.png'
import { motion } from 'framer-motion'
function Services() {
    const servicesl = [
        {
            logo: appLogo,
            title: "Application Development",
            dis: "Setting new standards with robust mobile apps. Maximize ROI with our expert development services"
        }, {
            logo: websiteLogo,
            title: "Website Development",
            dis: "Design and developing immersive web applications and portals to drive digital transformation."
        },
        {
            logo: uiux,
            title: "UI/UX Design",
            dis: "Design expertise meets client insights for impactful solutions. Merging experience and industry knowledge for effective results."
        },
        {
            logo: market,
            title: "Digital Marketing",
            dis: "We constantly measure our efforts to engage new customers, increase ROI, and achieve unique business goals."
        },
    ]

    return (
        <section id="service" className='w-full pb-11 bg-[#1d1d25]'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  transition={{ duration: 1, easings: "linear" }}>
            <div  className='w-full flex justify-center text-primary
             md:text-2xl text-2xl pt-10 pb-4 font-semibold '>
                What we do
            </div>
            <div className=' flex justify-center text-white md:text-[2vw] font-bold text-[5.5vw] '>
                What Service Do We Provide
            </div>
            </motion.div>
          
            <div className='gap-6 flex-grow flex-auto  mb-10
            justify-around  overflow-hidden flex md:flex-row flex-col w-full md:mt-10 mt-10  ' >
                {servicesl.map((item, index) => (
                    <div key={index} className=' max-w-[350px]  flex-col items-center self-center flex md:w-[20vw] w-[80vw] 
                  '>
                        <motion.img src={item.logo} className='md:w-[17vw] transition-transform
                         duration-500 
                         hover:scale-105  ' />
                        <div className='text-white md:text-[1.3vw] mb-3 text-[5vw] mt-2 flex items-center text-center'>
                            {item.title}
                        </div>
                        <div className='text-gray-500 text-center'>
                            {item.dis}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Services