import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Logo from '../assets/logo11.png'
import { motion } from 'framer-motion';
function Navbar() {

    const [open, Setopen] = useState(false)
    const menuOption = ["Home", "Projects", "About", "Contect"]
    return (
        <nav className='flex justify-between h-14 items-center px-3'>
            {/* <img src={Logo} className='h-20 w-30 py-2' /> */}
            <p className='text-white'>LOGO HERE</p>
            <motion.ul initial={{ y: '-200%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.2, easings: "linear" }} className=' gap-10 md:flex hidden '>
                {menuOption.map((item, index) => (
                    <li className='hover:bg-[#9270ff]  text-white
                     px-3 py-1 rounded-full 
                     cursor-pointer '>
                        {item}
                    </li>
                ))}
            </motion.ul>
            {/* {Movible} */}
            <ul className={`fixed
             top-0 z-50 md:hidden 
             text-white
             flex flex-col gap-10 
             duration-500 p-7 ${open ? "right-[-1px]" : "right-[-100%]"}
              bg-[#3f3f4d] w-2/3 h-screen shadow-2xl`}>
                {menuOption.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ul>
            <div className='text-2xl  z-50 md:hidden text-white' onClick={() => Setopen(!open)}>
                {open ? <IoMdClose /> : <IoIosMenu className='' />}
            </div>
        </nav>
    )
}

export default Navbar