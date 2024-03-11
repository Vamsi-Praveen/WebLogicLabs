import { motion } from "framer-motion";
import React from 'react';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { ClientReviewsData } from '../constants/data';
import SwiperCard from './SwiperCard';

const ClientReviews = () => {
    return (
        <div className='flex px-5 py-10 w-full items-center justify-center bg-[#edf8f4] flex-col gap-7'>
            <motion.h1 className='font-bold text-2xl'
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.4
                }}
            >Happy <span className='font-bold text-[#41B771]'>Clients</span> Says</motion.h1>
            <div className='w-full flex '>
                <Swiper className="mySwiper" slidesPerView={1} spaceBetween={20} loop={true}
                    breakpoints={{
                        '768': {
                            slidesPerView: 3
                        }
                    }}
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
        </div >
    )
}

export default ClientReviews