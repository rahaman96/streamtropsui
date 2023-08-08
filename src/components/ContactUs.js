import React, { useState } from 'react'
import styles from '../../src/styles/ContactUs.module.css'
import { RiMessageFill } from 'react-icons/ri'
import { MdLocalPhone } from 'react-icons/md'
import imageOne from '../../src/public/assets/images/Path 1385.png'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        toast.success('Message submitted successfully!')
        // Validation
        const errors = {};

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        // if (!formData.message) {
        //     errors.message = 'message is required';
        // } else if (formData.message.length < 6) {
        //     errors.message = 'message must be at least 6 characters long';
        // }
        if (!formData.message === '' || formData.message.length <= 100) {
            errors.message = 'message must be at least 100 characters long';

        }
        // else {
        //     errors.message = 'Message should not exceed 100 characters';
        // }

        // Update errors state
        setFormErrors(errors);

        // If there are errors, stop further processing
        if (Object.keys(errors).length > 0) {
            return;
        }

        // Proceed with form submission
        // ...
    };
    return (
        <div className='px-3'>
            <div className="flex flex-1">
                <p className="lg:pr-6"></p>
                <div
                    className="mt-2 h-[30px] min-h-[.1em w-[5px] self-stretch bg-[#519259]  dark:opacity-100"></div>
                <h1 className={`pl-6 mb-5 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white ${styles.contact}`}>Contact Us</h1>
            </div>
            <div className='relative'>
                <div>
                    <img src={imageOne} alt="imageOne" className='absolute lg:top-[-117px] rotate- lg:left-[95%] md:top-[-140px] md:left-[95%] top-[-71px] left-[97%] w-[20vw] ' />
                </div>
            </div>
            <div className=" dark:bg-gray-900 lg:px-0 md:px-16 px- ">
                <div className={`py-10 lg:px-16 md:px-10 px-6 lg:py- mx-auto max-w-screen-lg ${styles.contactMain}`}>
                    <form action="#" onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium ">Email</label>
                            <input
                                className="shadow-sm b text-sm rounded-lg w-full p-2.5 outline-0"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {formErrors.email && <span className='mt-4' style={{ color: 'red', }} >{formErrors.email}</span>}
                        </div>

                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                            <textarea
                                className="shadow-sm b text-sm rounded-lg w-full p-2.5 outline-0"
                                id="message"
                                rows="6"
                                type="text"
                                name="message"
                                placeholder="Enter text"
                                value={formData.message}
                                onChange={handleInputChange}
                            >

                            </textarea>
                            {formErrors.message && <span className='mt-4' style={{ color: 'red', }} >{formErrors.message}</span>}

                        </div>
                        <button type="submit" className={`py-3 px-10 text-sm font-medium text-center text-white rounded-[10px] bg-[#519259]  focus:outline-none ${styles.sendBtn}`}>Send</button>

                    </form>


                    <div className='mt-7 flex  justify-between'>
                        <div className={`flex items-center  lg:py-3 lg:px-6  md:py-3 md:px-6 py-2 px-4 lg:text-[20px] md:text-[20px] text-[10px] font-semibold focus:outline-none ${styles.sendMBtn}`}>
                            <RiMessageFill className='text-[#000000] opacity-1' />
                            <button type="submit" className='lg:px-4 md:px-4 px-2'>Send Message</button>

                        </div>
                        <div className={`flex items-center lg:mr-[170px] lg:py-3 lg:px-6  md:py-3 md:px-6 py-2 px-4 lg:text-[20px] md:text-[20px] text-[10px] font-semibold focus:outline-none ${styles.sendMBtn}`}>

                            {/* <div className={`flex items-center lg:mx-auto md:mx-auto  lg:py-3 lg:px-6  md:py-3 md:px-6 py-2 px-4 lg:text-[20px] md:text-[20px] text-[10px] font-semibold focus:outline-none ${styles.sendMBtn}`}> */}
                            <MdLocalPhone className='text-[#000000] opacity-1' />
                            <button type="submit" className='lg:px-4 md:px-4 px-2'>Get a call back</button>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src={imageOne} alt="imageOne" className='absolute lg:top-[-140px] rotate- lg:left-[97%] md:top-[-80px] md:left-[108%] top-[-40px] left-[101%] w-[20vw] ' />
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src={imageOne} alt="imageOne" className='absolute lg:top-[-220px] rotate-12 lg:-left-[15%] md:top-[-130px] md:-left-[26%] top-[-50px] -left-[20%] w-[20vw] ' />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ContactUs