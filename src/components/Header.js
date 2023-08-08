
import React, { useState } from 'react'
import Logo from '../../src/public/assets/images/Artboard – 1.png'
import styles from '../styles/Hedaer.module.css'
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div>
            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <button onClick={toggleMobileMenu}
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden md:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>

                    <div
                        className={`!visible hidde flex-grow basis-[100%] items-center lg:!flex md:flex lg:basis-auto  justify-between ${isMobileMenuOpen ? 'md:flex' : 'hidden'}`}
                        id="navbarSupportedContent1"
                        data-te-collapse-item>
                        <a
                            className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                            href="#">
                           
                            <img src={Logo} alt="" className='h-[8vh]' />
                        </a>

                        <ul className="flex flex-col pl-0 md:flex-row lg:flex-row ">
                            <li>
                                <a href="" className={`md:mr-4 lg:mr-10 text-[#519259] lg:text-[30px] md:text-[17px] ${styles.liList}`}
                                >Home</a>
                            </li>
                            <li>
                                <a href="" className={`md:mr-4 lg:mr-10 text-[#519259] lg:text-[30px] md:text-[17px] ${styles.liList}`}
                                >Service</a>
                            </li>
                            <li>
                                <a href="" className={`md:mr-4 lg:mr-10 text-[#519259] lg:text-[30px] md:text-[17px] ${styles.liList}`}
                                >Gallery</a>
                            </li>
                            <li>
                                <a href="" className={`md:mr-4 lg:mr-10 text-[#519259] lg:text-[30px] md:text-[17px] ${styles.liList}`}
                                >Co-Traveller</a>
                            </li>
                            <li>
                                <a href="" className={`md:mr-4 lg:mr-10 text-[#519259] lg:text-[30px] md:text-[17px] ${styles.liList}`}
                                >FAQs</a>
                            </li>
                            <li>
                                <a href="" className={`md:mr-6 lg:mr-10 text-[#519259] lg:text-[30px] md:text-[17px] ${styles.liList}`}
                                >Contact Us</a>
                            </li>
                            <li>
                                <a href="" className={`md:mr-6 lg:mr-10 text-[#519259] lg:text-[30px] md:text-[17px] ${styles.liList}`}
                                >Register</a>
                            </li>

                        </ul>
                    </div>

                  
                </div>
            </nav>
        </div>
    )
}

export default Header
