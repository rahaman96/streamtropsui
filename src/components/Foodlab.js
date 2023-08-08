import React from 'react'
import imageOne from '../../src/public/assets/images/Path 1385.png'
import imageTwo from '../../src/public/assets/images/Path 1377.png'
import image20 from '../../src/public/assets/images/Image 20.png'
import image21 from '../../src/public/assets/images/Image 21.png'
import image22 from '../../src/public/assets/images/Image 22.png'
import styles from '../styles/FoodLab.module.css'
const Foodlab = () => {
    return (
        <div classNameName='container px-3'>

            <div className="flex flex-1">
                <p className="pr-6"></p>
                <div
                    className="lg:h-[40px] md:h-[30px] h-[20px] lg:mt-4 md:mt-4 mt-1 min-h-[1em w-[5px] self-stretch bg-[#519259]  dark:opacity-100"></div>
                <h1 className={`lg:pl-6 md:pl-6 pl-3 text-[#080808] lg:text-[50px] md:text-[40px] text-[20px] ${styles.Food}`}>Food Lab Food Safety Service</h1>
            </div>
            <div className='relative'>
                <div>
                    <img src={imageOne} alt="imageOne"  className='absolute lg:top-[-117px] rotate- lg:left-[95%] md:top-[-102px] md:left-[94%] top-[-71px] left-[94%] w-[20vw] ' />
                </div>
            </div>

            <div className="text-gray-600 body-font">
                <div className="mx-auto flex px-5 lg:py-24 md:py-24 py-6 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <div className='relative'>
                            <div className=''>
                                <img src={imageOne} alt="imageOne" />
                            </div>
                            <div className='absolute top-[-6px] lg:top-[-40px] left-[20px] md:top-[-30px] md:left-[20px] lg:left-[30px]'>
                                <div className="relative w-[75vw] md:w-[50vw] lg:w-[40vw]">
                                    <img src={imageTwo} alt="imageTwo" className='' />
                                    <div className="absolute top-6 left-7 lg:top-10 md:left-10 lg:left-14">
                                        <div className="flex gap-4">
                                            <div>
                                                <img src={image20} alt="image20" className='w-full lg:w-[20vw]' />
                                                <img src={image22} alt="image22" className='py-3 md:py-5 lg:py-6  w-full lg:w-[20vw]' />
                                            </div>
                                            <div>
                                                <img src={image21} alt="image21" className='w-full lg:w-[17vw]' />

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex-gro md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
                        <p className={`h-full md:h-[315px] lg:h-[430px] text-[#080808] text-[16px] md:text-[20px] lg:text-[26px] text-left ${styles.text}`}>
                            Aperiam quia sapiente vel consequatur consequatur omnis sed autem quae. Ipsa et minus consequatur vero
                            et doloribus. Ex error illum consequatur amet ea occaecati odit. Quia similique dolorum officiis distinctio
                            magnam ut facilis. Et dolore est inventore ea et molestiae earum.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foodlab