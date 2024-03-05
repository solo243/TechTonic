import React from 'react'
import appLogo from "../assets/app2.png"
import websiteLogo from '../assets/websiteicon.png'
import uiux from '../assets/uiux.png'
import market from '../assets/market.png'
import cyber from '../assets/cyber_security.svg'
import cloud from '../assets/cloud_computing.svg'
import service from '../assets/it_support.svg'
import data_anal from '../assets/data_analytics.svg'
import technology from '../assets/technology_consult.svg'
import { motion } from 'framer-motion'
function Services() {
    const servicesl = [
        {
            logo: appLogo,
            title: "Software Development",
            dis: "Custom software solutions for various platforms and industries.            "
        }, {
            logo: websiteLogo,
            title: "Web Design and Development",
            dis: "Creating visually appealing and user-friendly websites for businesses."
        },
        {
            logo: cyber,
            title: "Cybersecurity Solutions",
            dis: "Protecting digital assets through comprehensive cybersecurity measures."
        },
        {
            logo: service,
            title: "IT Support and Managed Services",
            dis: "Proactive IT support and management for businesses, including computer and laptop repair services."
        },
            {
            logo: data_anal,
            title: "Data Analytics and Business Intelligence",
            dis: "Extracting insights from data to drive informed business decisions."
        },
        {
            logo: cloud,
            title: "Cloud Computing Services",
            dis: "Providing scalable and efficient cloud infrastructure solutions."
        },
        {
            logo: technology,
            title: "Technology Consultation",
            dis: "Offering expert advice and guidance on IT strategies, including AI integration, printer solutions, and CCTV camera systems"
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
            justify-around  overflow-hidden flex md:flex-row flex-col w-full md:mt-10 mt-10 flex-wrap ' >
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