import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer: NextPage = () => {
    return (
        <div className='relative flex flex-col w-full h-[600px] top-10 bg-lightPink '>
            <div className='px-4 pt-16 md:px-24'>
                <div className='flex flex-col md:flex-row md:h-[350px]'>
                    <div className='flex flex-col gap-4 flex-[2] justify-center items-center'>-
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
                        <div className='mt-24 text-black text-2xl font-bold mb-2'>About</div>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Who are we?</a>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Trust and Safety</a>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Careers</a>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Resource and policies</a>
                    </div>

                    <div className='flex-1'>
                        <div className='mt-24 text-black text-2xl font-bold mb-2'>Explore</div>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Add a place</a>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Join a tour</a>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Write a review</a>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Blog</a>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary' href='#'>Help center</a>
                    </div>

                    <div className='flex-1'>
                        <div className='mt-24 text-black text-2xl font-bold mb-2'>Do business with us</div>
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary'  href='#'>Owners</a >
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary'  href='#'>Ad placement</a >
                        <a className='flex mt-1 text-black text-sm font-medium leading-8 hover:text-primary'  href='#'>Become an affliate</a >
                    </div>
                </div>


                <div className='flex h-[60px] mt-9'>
                    <div className='flex justify-center items-center flex-[1] text-lg font-medium'>
                        &copy; 2022. Tourbuddy LLC All rights reserved
                    </div>
                    <div className='flex justify-around items-center flex-[2] text-[17px] leading-[25px] underline'>
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