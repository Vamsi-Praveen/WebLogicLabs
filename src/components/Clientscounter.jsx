import React from 'react'
import Counter from './Counter'
import { Count } from '../constants/data'
import { motion } from 'framer-motion'
const Clientscounter = () => {
    return (
        <div className='flex flex-col justify-center items-center py-8 w-full bg-[#FAF9F7]'>
            <motion.h1 className='text-2xl font-bold'
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.4
                }}
            >
                What We <span className='text-[#41B771] font-bold'>Have</span></motion.h1>
            <div className="flex mt-5 gap-7 flex-wrap items-center justify-center">
                {
                    Count.map((item, index) => {
                        return <Counter name={item.name} number={item.number} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Clientscounter