import React from 'react'
import Img from '../assets/about.jpg'
import { motion, spring } from 'framer-motion'
const About = () => {
  return (
    <div className='bg-[#FAF9F7] flex w-full md:gap-15 py-[30px] overflow-hidden md:flex-row flex-col items-centet justify-center'>
      <motion.div className="md:w-1/2 flex items-center justify-center"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3
        }}
      >
        <img src={Img} className='w-full md:w-[61%] object-cover md:rounded-md' alt='About Image' />
      </motion.div>
      <motion.div className="md:w-1/2 flex flex-col justify-center py-4 pl-6 md:p-0 md:mt-0 mt-4"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.5
        }}
      >
        <h1 className='text-3xl md:text-4xl font-bold tracking-wider'>About <span className='text-[#41B771] font-bold'>Us</span></h1>
        <p className='w-3/4 mt-3 tracking-wide font-[400]'>Driven by passion and fueled by innovation, Web Logic Labs was founded with a vision to revolutionize the digital space. Our team comprises seasoned professionals with diverse backgrounds in web development, marketing, and AI technologies. We believe in staying ahead of the curve, constantly exploring emerging trends and technologies to deliver exceptional results for our clients.</p>
      </motion.div>
    </div >
  )
}

export default About