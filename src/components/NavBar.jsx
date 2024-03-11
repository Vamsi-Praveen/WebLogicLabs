import React from 'react'
import { motion } from "framer-motion"

const NavBar = () => {
    return (
        <nav className='flex px-[5%] py-4 pt-5 justify-between w-full bg-[#EDF8F4] shadow-sm'>
            <motion.h1 className='font-bold'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                }}

            >Web Logics Lab.</motion.h1>
            <ul className='md:flex items-center gap-4 hidden'>
                <motion.li className='cursor-pointer'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.75 }}
                >
                    About
                </motion.li>
                <motion.li className='cursor-pointer'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.85 }}
                >Services</motion.li>
                <motion.li className='cursor-pointer'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.95 }}
                >Contact</motion.li>

            </ul>
        </nav >
    )
}

export default NavBar