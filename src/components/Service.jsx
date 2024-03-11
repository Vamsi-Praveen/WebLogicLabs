import React from 'react'
import { motion } from "framer-motion"


const Service = ({ name, description, image }) => {
    return (
        <motion.div className='h-[280px] w-[240px] border rounded-md p-3 flex items-center flex-col gap-3 cursor-pointer'
            whileHover={{ scale: 1.1 }}
        >
            <img src={image} className='w-[70px]' alt='Service Image' />
            <div className="space-y-1">
                <h1 className='text-xl font-bold tracking-wide'>{name}</h1>
                <p className='text-slate-600 text-sm tracking-wide'>{description}
                </p>
            </div>
        </motion.div>
    )
}

export default Service