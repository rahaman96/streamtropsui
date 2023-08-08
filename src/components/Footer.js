import React from 'react'
import styles from '../styles/Footer.module.css'
import Logo from '../../src/public/assets/images/Artboard – 1.png'
const Footer = () => {
    return (
        <div className={`${styles.footer}`}>
            <footer className="">
                <div className="containe shadow-md bg-[#FFFFFF] px- py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="lg:w-96 md:w-64 container px-6 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <div>
                            <img src={Logo} alt="" className='w-[30p]' />
                        </div>
                        <div className={`lg:px-[9px] text-left font-normal ${styles.lastSec}`}>
                            <p className='lg:text-[18px] md:text-[14px]  flex items-center'>203, Abc road , xyz complex Chennai - 600 032, India</p>
                            <div className='flex gap-1 text-[#000000]  mt-1'>
                                <p className='lg:text-[17px] md:text-[13px] font-bold flex items-center'>Phone : </p>
                                <span className='lg:text-[17px] md:text-[13px] flex items-center'> +91 44 4269 2288</span>
                            </div>
                            <div className='flex gap-1 text-[#000000]  mt-1'>
                                <p className='font-bold lg:text-[17px] md:text-[13px] flex items-center'>Email : </p>
                                <span className='lg:text-[17px] md:text-[13px] flex items-center'>admin@parikshan.net.in</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow bg-[#F4EEA9] flex flex-wrap md:pl- -mb-10 md:mt-0 mt-10 md:text-left text-center lg:pl-10 md:pl-4">

                        <div className="lg:w-1/3 md:w-1/3 w-full px-4 lg:mt-[19px] md:mt-[19px]">
                            <div className="lg:visible md:visible invisible rotate-90 lg:mt-[13px md:mt-[13px ml-[20px] mt-[7px lg:h-[40px] md:h-[40px] h-[35px] w-[3px] self-stretch bg-[#519259]   dark:opacity-100">
                            </div>
                            <h2 className={`text-[#000000] text-[16px] font-bold mb-3 -mt-2 ${styles.useFul}`}>Useful Link</h2>
                            <nav className={`list-none  text-[#000000] lg:text-[14px] md:text-[12px] font-normal lg:mb-10 md:mb-10 mb-0 ${styles.useFul}`}>
                                <li className="">
                                    <a >Home</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a >Services</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a >Training Registration</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a >Home</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a>Services</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4 ">
                            <nav className={`list-none lg:mt-[85px]  text-[#000000] lg:text-[14px] md:text-[12px] font-normal lg:mb-10 md:mb-10 mt-5 ${styles.useFul}`}>
                                <li className="md:mt-[85px]">
                                    <a >Support</a>
                                </li>
                                <li className='mt-2'>
                                    <a >Contact Us</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4 lg:mt-[19px] md:mt-[19px]">
                            <div className="lg:visible md:visible invisible rotate-90 lg:mt-[13px md:mt-[13px ml-[20px] mt-[7px lg:h-[40px] md:h-[40px] h-[35px] w-[3px] self-stretch bg-[#519259]   dark:opacity-100">
                            </div>
                            <h2 className={`text-[#000000] text-[16px] font-bold mb-3 -mt-2 ${styles.useFul}`}>Site Map</h2>
                            <nav className={`list-none  text-[#000000] lg:text-[14px] md:text-[12px] font-normal lg:mb-4 md:mb-4 mb-3 ${styles.useFul}`}>
                                <li className="">
                                    <a >Home</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a >Services</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a >Training Registration</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a >Home</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a>Services</a>
                                </li>
                                <li className='lg:mt-2 md:mt-2 mt-1'>
                                    <a >Training Registration</a>
                                </li>
                            </nav>
                        </div>
                        <div className='text-center flex mx-auto justify-center mb-5'>
                            <p className={` text-[#000000] font-normal lg:text-[20px] md:text-[18px] text-[12px] ${styles.Labs}`}>Food Labs Inc. © Copyright 2022. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer