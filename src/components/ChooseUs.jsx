import React from 'react'
import { ChooseData } from '../constants/data'
import ChooseCard from './ChooseCard'
import { motion } from "framer-motion"

const ChooseUs = () => {
  return (
    <section className='bg-[#edf8f4] w-full py-6 px-2'>
      <motion.h1 className='font-bold tracking-wide text-2xl text-center'
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.4
        }}
      >Why <span className='text-[#41B771] font-bold'>Choose</span> Us?</motion.h1>
      <div className='w-full mt-6 flex items-center justify-center flex-col gap-5'>
        <div className='flex gap-6 flex-col md:flex-row flex-wrap justify-center'>
          {
            ChooseData.slice(0, 3).map((choose, index) => {
              return <ChooseCard key={index} name={choose.name} description={choose.description} />
            })
          }
        </div>
        <div className='flex gap-6 flex-col md:flex-row flex-wrap justify-center'>
          {
            ChooseData.slice(3, 6).map((choose, index) => {
              return <ChooseCard key={index} name={choose.name} description={choose.description} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ChooseUs