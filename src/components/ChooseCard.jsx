import React from 'react'
import { motion } from "framer-motion"

const ChooseCard = ({ name, description }) => {
    return (
        <motion.div className='border w-[300px] h-[220px] bg-[#E8F2EA] px-3 py-5 rounded-md space-y-1 cursor-pointer shadow-sm'
            whileHover={{ scale: 1.05 }}
        >
            <h1 className='text-2xl font-bold'>{name}</h1>
            <h1 className='tracking-wider text-slate-600'>{description}</h1>
        </motion.div>
    )
}

export default ChooseCard