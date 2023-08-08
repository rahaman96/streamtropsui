import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import styles from '../../src/styles/Testtimonials.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Testtimonials = () => {
    return (
        <div className='lg:py-20 md:py-20 py-6 px-3'>
            <div className="flex flex-1">
                <p className="lg:pr-6"></p>
                <div className="lg:mt-[13px] md:mt-[13px] mt-[7px] lg:h-[50px] md:h-[50px] h-[35px] min-h-[.1em w-[5px] self-stretch bg-[#519259]  dark:opacity-100">
                </div>
                <h1 className={`lg:pl-6 md:pl-6 pl-3 mb-5 lg:text-[50px] md:text-[50px] text-[30px] font-bold text-center ${styles.testTi}`}>Testtimonials</h1>
            </div>
            <div className='px-0 md:px-10 lg:px-6 relative'>
                <Swiper slidesPerView={2} className={` ${styles.mySwiper}`}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                    }}
                >
                    <SwiperSlide >
                        <div className={`px-4 py-4 ${styles.userDetails}`}>
                            <div className='flex gap-4'>
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="lg:w-[68px] lg:h-[68px] md:w-[68px] w-[40px] rounded-full"
                                    alt="Avatar" />

                                <p className='flex items-center lg:text-[30px] md:text-[30px] text-[20px] '>User 123</p>
                            </div>
                            <p className='py-2 lg:text-[20px] md:text-[20px] text-[13px] font-normal'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={`px-4 py-4 ${styles.userDetails}`}>
                            <div className='flex gap-4'>
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="lg:w-[68px] lg:h-[68px] md:w-[68px] w-[40px] rounded-full"
                                    alt="Avatar" />

                                <p className='flex items-center lg:text-[30px] md:text-[30px] text-[20px] '>User 123</p>
                            </div>
                            <p className='py-2 lg:text-[20px] md:text-[20px] text-[13px] font-normal'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={`px-4 py-4 ${styles.userDetails}`}>
                            <div className='flex gap-4'>
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="lg:w-[68px] lg:h-[68px] md:w-[68px] w-[40px] rounded-full"
                                    alt="Avatar" />

                                <p className='flex items-center lg:text-[30px] md:text-[30px] text-[20px] '>User 123</p>
                            </div>
                            <p className='py-2 lg:text-[20px] md:text-[20px] text-[13px] font-normal'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={`px-4 py-4 ${styles.userDetails}`}>
                            <div className='flex gap-4'>
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="lg:w-[68px] lg:h-[68px] md:w-[68px] w-[40px] rounded-full"
                                    alt="Avatar" />

                                <p className='flex items-center lg:text-[30px] md:text-[30px] text-[20px] '>User 123</p>
                            </div>
                            <p className='py-2 lg:text-[20px] md:text-[20px] text-[13px] font-normal'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="absolute lg:top-[40%] lg:left-[89%] md:top-[30%] md:left-[75%] top-[32%] left-[85%] z-10 lg:w-[68px] lg:h-[68px] md:w-[68px] md:h-[68px] w-[40px] h-[40px] rounded-full bg-[#519259] cursor-pointer">
                    <div className='relative'>
                        <AiOutlineArrowRight className='absolute lg:left-1 lg:top-1 md:left-1 md:top-1  text-[#FFFFFF] lg:text-[62px] md:text-[62px] text-[40px] ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testtimonials