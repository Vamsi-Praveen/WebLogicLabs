import React from 'react'
import { motion } from "framer-motion"
import banner from '../assets/banner.png'

const Hero = () => {
    return (
        <div className='px-[7%] md:py-3 md:items-center pt-[50px] h-full w-full flex justify-between bg-[#EDF8F4] overflow-hidden'>
            <div className='max-w-[500px]'>
                <motion.h1 className='text-4xl md:text-5xl font-bold tracking-wider'
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 1,
                        duration: 0.5
                    }}

                >A fusion of Creativity, Technology, and Innovation</motion.h1>
                <motion.p className='mt-3 tracking-wide font-[400]'

                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 1.2,
                        duration: 0.5
                    }}
                >We're your partners in navigating the dynamic landscape of online presence.&nbsp;We specialize in website design, digital marketing, and cutting-edge Artificial Intelligence and Machine Learning solutions.</motion.p>

                <motion.button className='anim-button'
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 1.4,
                        duration: 0.5
                    }}

                >Contact Us</motion.button>
            </div>
            <motion.img src={banner} className='w-[470px] hidden md:block'
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 1.6,
                    duration: 0.5,
                }}

            />
        </div>
    )
}

export default Hero