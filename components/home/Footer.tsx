import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer: NextPage = () => {
    return (
        <div className='flex flex-col w-full h-[850px] md:h-[500px] bg-lightPink '>
            <div className='px-4 pt-0 md:px-24'>
                <div className='flex flex-col md:flex-row md:h-[350px] h-[400px]'>
                    <div className='flex flex-col md:gap-4 md:flex-[1] justify-center items-start'>-
                        <Image
                            src={require('../assets/icons/metouraLogo.svg')}
                            alt="metoura logo"
                            width="150px"
                            height="30px"
                        />
                        <div className='flex gap-3'>
                            <MdFacebook size={30} />
                            <FaTwitter size={30} />
                            <FaInstagram size={30} />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div className='md:mt-24 mt-8 text-black md:text-2xl text-lg md:text-start text-center font-bold mb-2'>About</div>
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Who are we?</a>
                        <a className='flex justify-center md:justify-start mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Trust and Safety</a>
                        <a className='flex justify-center md:justify-start mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Careers</a>
                        <a className='flex justify-center md:justify-start mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Resource and policies</a>
                    </div>

                    <div className='flex-1'>
                        <div className='md:mt-24 mt-8 text-black md:text-2xl text-lg md:text-start text-center font-bold mb-2'>Explore</div>
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Add a place</a>
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Join a tour</a>
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Write a review</a>
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Blog</a>
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Help center</a>
                    </div>

                    <div className='flex-1 whitespace-nowrap'>
                        <div className='md:mt-24 mt-8 text-black md:text-2xl text-lg md:text-start text-center font-bold mb-2'>Do business with us</div>
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Owners</a >
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Ad placement</a >
                        <a className='flex justify-center md:justify-start  mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Become an affliate</a >
                    </div>
                </div>


                <div className='flex flex-col md:flex-row h-[60px] mt-[340px]  md:mt-9'>
                    <div className='flex justify-center items-center flex-[1] text-sm md:text-lg font-medium'>
                        &copy; 2022. Tourbuddy LLC All rights reserved
                    </div>
                    <div className='flex justify-around items-center flex-[2] font-medium text-sm md:text-[17px] leading-[25px] underline whitespace-nowrap gap-2 md:gap-0'>
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Cookies</a>
                        <a href="#"> Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer