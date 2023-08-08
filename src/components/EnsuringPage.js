import React from 'react'
import GroupImg from '../../src/public/assets/images/Group 171.png'
import farmingImg from '../../src/public/assets/images/pexels-joão-jesus-1084540.png'
import group167 from '../../src/public/assets/images/Group 167.png'
import verticalLine from '../../src/public/assets/images/Path 1382.png'
import Image25 from '../../src/public/assets/images/Image 25.png'

import styles from '../styles/Ensuring.module.css'
const EnsuringPage = () => {
    return (
        <div className='container lg:px-10 md:px-10 px- mb-20 relative'>
            <div className='flex text-center justify-between items-center mx-auto '>
                <h1 className={`text-center flex justify-center mx-auto text-[#121412] font-normal lg:text-[50px] md:text-[30px] ${styles.EnsureHeader}`}>Ensuring safety of food from</h1>
                <img src={GroupImg} alt="GroupImg" className='lg:w-24 lg:h-24 md:h-24 md:w-24 w-6 h-6 ' />
            </div>
            <div className='text-center lg:-mt-[25px] md:-mt-[25px]'>
                <p className='text-[#F0BB62] lg:text-[70px] md:text-[40px] text-[18px] font-medium '> <span className='text-[#519259]'>Farm </span> to Fork</p>
            </div>
            <div className='flex flex-wra justify-between items-center mx-auto lg:mt-6 md:mt-16 mt-10 lg:px-0 md:px-0 px-4'>
                <div className='relative'>
                    <img src={farmingImg} alt="farmingImg" className='lg:h-full lg:w-full md:h-[169px] md:w-[247px] w-[120px] h-[100px] ' />
                    <img src={GroupImg} alt="GroupImg" className='lg:w-24 lg:h-24 md:h-24 md:w-24 w-6 h-6 absolute -z-10 lg:-bottom-[10%] lg:right-[85%] md:-bottom-[18%] md:right-[73%] lg:visible md:visible invisible' />

                </div>
                <div className='flex lg:mt-0 md:mt-0 mt-7'>
                    <div className={`text-[#000000] md:ml-[20px] ml-[14px] ${styles.Farming}`}>
                        <h1 className='lg:text-[20px]  md:text-[14px] text-[10px]  font-medium '><span className='text-[#519259] font-bold'>F</span>arming</h1>
                        <p className='lg:text-[20px] md:text-[14px] text-[10px] font-normal'>
                            Segregate crop <br /> Store crops safely. <br /> Wash before manufacturing <br /> Take care of work areas
                        </p>
                    </div>
                    <div className='md:-ml-[15%]'>
                        <img src={group167} alt="group167" className='lg:h-[50vh] lg:w-[20vw] md:h-[30vh] md:w-[20vw] w-[40vw] h-[20vh] lg:ml-[10%]' />

                    </div>
                </div>
                <div>
                    <img src={verticalLine} alt="verticalLine" className=' absolute w-[2px] lg:h-[45vh] md:h-[30vh] lg:top-[16%] md:top-[22%] lg:visible md:visible invisible ' />
                </div>
            </div>
          
            <div className='flex flex-wra lg:mt-24 md:mt-12 mt-5 justify-between'>

                <div className="flex lg:ml-[70px] lg:mt-0 md:mt-10 ">
                    <div className='lg:mt-4'>
                        <img src={group167} alt="group167" className='-rotate-90 lg:h-[30vh] lg:w-[24vw] md:h-[20vh] md:w-[26vw] w-[30vw] h-[10vh] lg:ml-0 md:ml-0 ml-[px]' />
                    </div>
                    <div className={`lg:-mt-[60px] md:-mt-[50px]  -mt-[20px] text-[#000000] font-medium  ${styles.manufacturing}`}>
                        <h1 className='lg:text-[20px]  md:text-[14px] text-[10px]'><span className='text-[#519259] font-bold lg:ml-[155px] md:ml-[90px] ml-[52px] lg:text-[20px]  md:text-[14px] text-[10px]'>M</span>anufacturing</h1>
                        <div className='text-right lg:-ml-[155px] md:-ml-[108px] lg:text-[20px] -ml-[70px]  md:text-[14px] font-normal text-[9px]'>
                            Working with Tools <br /> Maintaining Cleanliness <br /> Wear Safety Equipment (PPE) <br /> Keep Work Areas and Emergency Exits Clear
                        </div>
                    </div>
                </div>
                <div className='lg:-mt-[95px]  md:-mt-[50px] relative'>
                    
                    <img src={Image25} alt="Image25" className='lg:w-full lg:h-full md:h-[169px] md:w-[247px] w-[80px] h-[80px] lg:ml-0 md:ml-0 ml-[30%] lg:-mt-0 md:-mt-0 -mt-[20px]' />
                    <img src={GroupImg} alt="GroupImg"
                        className='lg:w-24 lg:h-24 md:h-24 md:w-24 w-6 h-6 absolute -z-10 lg:-top-[12%] lg:left-[85%] md:-top-[18%] md:left-[70%] lg:visible md:visible invisible' />


                </div>
            </div>


        </div>
    )
}

export default EnsuringPage