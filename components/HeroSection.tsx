import { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'
import Header from './Header'
import { MdArrowDropDown, MdSearch } from 'react-icons/md'
import cats from './assets/categories'
import locations from './assets/places'


const HeroSection: NextPage = () => {

  const [categories, setCategories] = useState(cats)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [places, setPlaces] = useState(locations)
  const [selectedPlace, setSelectedPlace] = useState("")

  const [filterChoice, setFilterChoice] : [null|string, Dispatch<SetStateAction<null | string>> ] = useState(null)



  return (
    <>
      <section className='relative box-border h-[60vh] md:h-[70vh]  bg-red-300 '>
        <div
          className="bg-hero absolute h-full w-4/6 overflow-hidden"
        // style="background-image: url('./assets/images/heroImage2.jpg')"
        >
          {/* <Image
            src={require("./assets/images/heroImage.png")}
            alt="Hero Image"
            width="100%" 
            height="100%" 
            layout="responsive" 
            objectFit="contain"
          /> */}
        </div>
        <div className='flex flex-col w-full px-4 py-10 md:px-24 md:py-20 h-full bg-gray-900/90 relative z-10'>
          <Header />

          <div>
            <h1 className='text-5xl md:text-7xl font-bold leading-[3.5rem] mb-3  text-white'>
              Find your next <br /> tourist attraction
            </h1>
            <p className='text-white '>
              Search for tourist centres near and far
            </p>
          </div>
        </div>

        <div className='relative w-full box-border flex flex-col px-4 md:px-24 z-10 -top-10'>
          <div className='relative flex w-full flex-col bg-white border-2 overflow-hidden border-orange-300 items-between rounded-md'>
            <div className='relative flex justify-between items-center'>

              <div onClick={() => setFilterChoice("category")} className="flex bg-white px-2 py-5 border-r-[1px] items-center border-[#000000] hover:cursor-pointer">
                <p className='flex'>
                  {selectedCategory || "Category"}
                </p>

                <span>
                  <MdArrowDropDown size={30} />
                </span>
              </div>

              <div className='flex flex-1 items-center'>
                <div>

                </div>

                <div className='w-full bg-white'>
                  <input className='w-full px-4 py-5 outline-none' placeholder='Where would like to go' />
                </div>

                <div className='p-5 bg-primary'>
                  <MdSearch color='white' size={30} />
                </div>
              </div>

            </div>
          </div>

          <div>

            {
              filterChoice === "category" &&
              <ul className='relative top-1 shadow-md shadow-gray-300 rounded-md overflow-hidden bg-red-300 w-[30%] md:w-[20%]'>
                {
                  categories.map((category, index) => (
                    <li onClick={() => setSelectedCategory(category.name)} key={index} className='p-3 bg-white hover:bg-gray-400 hover:cursor-pointer border-b-[1px]'>
                      {`${category.name}`}
                    </li>
                  ))
                }

              </ul>
            }

            {
              false &&
              <ul className='relative top-1 shadow-md shadow-gray-300 rounded-md overflow-hidden bg-red-300 w-full'>
                <li className='p-3 bg-white hover:bg-gray-400 hover:cursor-pointer border-b-[1px]'>
                  Category 1
                </li>
                <li className='p-3 bg-white hover:bg-gray-400 hover:cursor-pointer border-b-[1px]'>
                  Category 1
                </li>
                <li className='p-3 bg-white hover:bg-gray-400 hover:cursor-pointer border-b-[1px]'>
                  Category 1
                </li>
                <li className='p-3 bg-white hover:bg-gray-400 hover:cursor-pointer border-b-[1px]'>
                  Category 1
                </li>

              </ul>
            }
          </div>

        </div>

      </section>
    </>
  )
}

export default HeroSection