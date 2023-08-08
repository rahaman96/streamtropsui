
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image23 from '../../src/public/assets/images/Image 23.png'
import styles from '../styles/Slider.module.css'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <div
                        className="relative float-left  -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-active
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src={image23}
                            className="block w-full"
                            alt="image23" />
                        <div
                            className="absolute inset-x-[20%] lg:bottom-[180px] md:bottom-[80px] bottom-[60px] hidde py-5 text-cente">
                            <h5 className={`font-bold lg:text-[70px] md:text-[40px] text-[14px] text-left  ${styles.Empowering}`}>Empowering Society Through Science</h5>
                            <p className={`text-[#121412] lg:text-[46px] md:text-[30px] text-[12px] font-semibold text-left ${styles.food}`}>
                                Food Lab is one point solution for <br /> all food safety needs
                            </p>
                            <div className="mt-5">
                                <button className={`absolute left-[0%] hover:bg-blue-700 text-white py-2 px-4 md:py-2 md-px-2 lg:py-2 lg:px-4 rounded ${styles.btn}`}>Get Started</button>

                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-active
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src={image23}
                            className="block w-full"
                            alt="image23" />
                        <div
                            className="absolute inset-x-[20%] lg:bottom-[180px] md:bottom-[80px] bottom-[60px] hidde py-5 text-cente">
                            <h5 className={`font-bold lg:text-[70px] md:text-[40px] text-[14px] text-left  ${styles.Empowering}`}>Empowering Society Through Science</h5>
                            <p className={`text-[#121412] lg:text-[46px] md:text-[30px] text-[12px] font-semibold text-left ${styles.food}`}>
                                Food Lab is one point solution for <br /> all food safety needs
                            </p>
                            <div className="mt-5">
                                <button className={`absolute left-[0%] hover:bg-blue-700 text-white py-2 px-4 md:py-2 md-px-2 lg:py-2 lg:px-4 rounded ${styles.btn}`}>Get Started</button>

                            </div>
                        </div>

                    </div>
                </div>
                <div>
                <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-active
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src={image23}
                            className="block w-full"
                            alt="image23" />
                        <div
                            className="absolute inset-x-[20%] lg:bottom-[180px] md:bottom-[80px] bottom-[60px] hidde py-5 text-cente">
                            <h5 className={`font-bold lg:text-[70px] md:text-[40px] text-[14px] text-left  ${styles.Empowering}`}>Empowering Society Through Science</h5>
                            <p className={`text-[#121412] lg:text-[46px] md:text-[30px] text-[12px] font-semibold text-left ${styles.food}`}>
                                Food Lab is one point solution for <br /> all food safety needs
                            </p>
                            <div className="mt-5">
                            <button className={`absolute left-[0%] hover:bg-blue-700 text-white py-2 px-4 md:py-2 md-px-2 lg:py-2 lg:px-4 rounded ${styles.btn}`}>Get Started</button>

                            </div>
                        </div>

                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider