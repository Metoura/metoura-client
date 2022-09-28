import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Head, List } from './Footer.Style'

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
                        <Head>About</Head>
                        <List href='#'>Who are we?</List>
                        <List href='#'>Trust and Safety</List>
                        <List href='#'>Careers</List>
                        <List href='#'>Resource and policies</List>
                    </div>

                    <div className='flex-1'>
                        <Head>Explore</Head>
                        <List href='#'>Add a place</List>
                        <List href='#'>Join a tour</List>
                        <List href='#'>Write a review</List>
                        <List href='#'>Blog</List>
                        <List href='#'>Help center</List>
                    </div>

                    <div className='flex-1'>
                        <Head>Do business with us</Head>
                        <List href='#'>Owners</List>
                        <List href='#'>Ad placement</List>
                        <List href='#'>Become an affliate</List>
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