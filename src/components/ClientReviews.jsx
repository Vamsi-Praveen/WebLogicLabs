import React from 'react'
import SwiperCard from './SwiperCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { ClientReviewsData } from '../constants/data';
import { motion } from "framer-motion"

const ClientReviews = () => {
    return (
        <div className='flex px-5 py-10 w-full items-center justify-center bg-[#fcf7f4] flex-col gap-7'>
            <motion.h1 className='font-bold text-2xl'
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.4
                }}
            >Happy <span className='font-bold text-[#41B771]'>Clients</span> Says</motion.h1>
            <div className='w-full flex flex-col md:flex-row'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={3} loop={true} spaceBetween={20}
                    autoplay={{ delay: 1000 }}
                >
                    {
                        ClientReviewsData.map((review, index) => {
                            return <SwiperSlide key={index} className='flex items-center justify-center'>
                                <SwiperCard review={review} />
                            </SwiperSlide>
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default ClientReviews