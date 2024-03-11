import React from 'react'
import { motion } from "framer-motion"

const SwiperCard = ({ review }) => {
    return (
        <motion.div className='w-[400px] h-[220px] bg-[#d6f1e7] px-3 py-4 shadow-md rounded-md cursor-pointer border '
            whileHover={{ scale: 1.05 }}

        >
            <h1>{review.description}</h1>
            <h1 className='font-bold text-[#41B771] mt-3 text-md'>{review.name}</h1>
        </motion.div>
    )
}

export default SwiperCard