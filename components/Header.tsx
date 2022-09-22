import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {MdMenu} from 'react-icons/md'



const Header  : NextPage= () => {
  return (

    <header className='flex justify-between items-center mb-14 md:mb-36'> 

        <div>
          <Image

            src={require('./assets/icons/metouraLogoWhite.svg')}
            alt="metoura white coloured logo"
          />
        </div>
      

      <nav className='hidden w-3/6 md:w-2/5 lg:w-2/6 text-white hover:text-lightPink  md:flex'>
          <ul className='flex justify-between w-full'>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Review</Link>
          </ul>
      </nav>

      <button className='hidden md:flex py-2 px-9 text-white font-bold bg-primary rounded-lg'>
        Sign in
      </button>

      <div className='flex md:hidden w-1/4 justify-between'>
        <span>
          <HiOutlineUserCircle size={30} color='white' />
        </span>


        <span>
          <MdMenu size={30} color='white' />
        </span>
      </div>
    </header>
  )
}

export default Header