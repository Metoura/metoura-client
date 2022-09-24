import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {MdMenu} from 'react-icons/md'



const Header  : NextPage= () => {
  return (

    <header className='flex items-center justify-between mb-14 md:mb-15'> 

        <div>
          <Image

            src={require('./assets/icons/metouraLogoWhite.svg')}
            alt="metoura white coloured logo"
          />
        </div>
      

      <nav className='hidden w-3/6 text-white md:w-2/5 lg:w-2/6 hover:text-lightPink md:flex'>
          <ul className='flex justify-between w-full'>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Review</Link>
          </ul>
      </nav>

      <button className='hidden py-2 font-bold text-white rounded-lg md:flex px-9 bg-primary'>
        Sign in
      </button>

      <div className='flex justify-between w-1/4 md:hidden'>
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