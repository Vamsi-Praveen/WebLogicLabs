import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import logo from "../assets/logo1.png"
import menu from '../assets/menu.svg'

const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const handleNav = () => {
        setToggleNav((state) => !state)
    }

    const handleScroll = () => {
        if (window.scrollY > 2) {
            setToggleNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [toggleNav])
    return (
        <nav className='flex px-[5%] py-4 pt-5 justify-between w-full bg-[#EDF8F4] shadow-sm'>
            {/* <motion.h1 className='font-bold'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                }}

            >Web Logics Lab.</motion.h1> */}
            <motion.img src={logo} width={100}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                }}

            />
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


            {
                toggleNav && <ul className='flex items-center gap-4 fixed inset-0 bg-white h-[300px] w-[100vw] justify-center flex-col z-20 shadow-md'>
                    <motion.li className='cursor-pointer font-semibold'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        About
                    </motion.li>
                    <motion.li className='cursor-pointer font-semibold'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >Services</motion.li>
                    <motion.li className='cursor-pointer font-semibold'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >Contact</motion.li>

                </ul>
            }

            <motion.img height={24} width={24} src={menu} className='md:hidden absolute right-3
             top-8 z-30'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.8,
                }}
                onClick={handleNav}
            />
        </nav >
    )
}

export default NavBar