import React from 'react'
import Clients from './Clients'
import { motion } from "framer-motion"
import Service from './Service'
import { ServicesData } from '../constants/data'

const Services = () => {
    return (
        <section className='bg-[#FAF9F7] flex justify-center py-8 flex-col items-center'>
            <section className='flex flex-col my-4 w-full items-center justify-center'>
                <motion.div className='flex flex-col items-center -space-y-2'
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 1.7,
                        duration: 0.5
                    }}
                >
                    <h1 className='text-3xl font-bold text-slate-700'>What We <span className='text-[#41B771] font-bold'>Do</span></h1>
                </motion.div>
                <motion.div className='w-full mt-10 flex lg:gap-16 md:px-4 justify-center md:flex-row flex-col gap-5 items-center'
                    initial={{ y: -40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6
                    }}

                >
                    {
                        ServicesData.map((service, index) => {
                            return <Service key={index} name={service.name} description={service.description} image={service.image} />
                        })
                    }
                </motion.div>
            </section>
            <div className='flex items-center flex-col mt-4 justify-center'>
                <motion.h1 className='text-2xl font-bold text-slate-700 tracking-wide'
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.4
                    }}

                >Trusted <span className='text-[#41B771] font-bold'>by</span></motion.h1>
                <Clients />
            </div>
        </section>
    )
}

export default Services