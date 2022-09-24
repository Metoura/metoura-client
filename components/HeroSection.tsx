import { NextPage } from 'next'
import Image from 'next/image'
import React, { ChangeEvent, useRef, useState } from 'react'
import Header from './Header'
import { MdArrowDropDown, MdSearch } from 'react-icons/md'
import cats from './assets/categories'
import locations from './assets/places'
// import {document}


const HeroSection: NextPage = () => {

  const categoryElement = useRef<HTMLParagraphElement>(null)
  const placeElement = useRef<HTMLInputElement>(null)
  const [categories, setCategories] = useState(cats)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [places, setPlaces] = useState(locations)
  const [selectedPlace, setSelectedPlace] = useState("")

  const [filterChoice, setFilterChoice] = useState<string | null>(null)

  if (typeof document !== "undefined") {
    document.addEventListener('click', (e) => {
      (e.target !== categoryElement.current && e.target !== placeElement.current) && setFilterChoice(null)
    })
  }

  const searchingPlace = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const compatibleLocations = locations.filter((location) => location.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    console.log(compatibleLocations)
    setPlaces(compatibleLocations)
    setSelectedPlace(value)
  }

  return (
    <>
      <section className='relative box-border h-[60vh] md:h-[70vh]  bg-red-300 '>
        <div
          className="absolute w-full h-full overflow-hidden bg-hero"
        >
          <Image
            src={require("./assets/images/heroImage.png")}
            alt="Hero Image"
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className='relative z-10 flex flex-col w-full h-full px-4 py-10 md:px-24 md:py-15 bg-gray-900/90'>
          <Header />

          <div className='flex flex-col justify-center h-full'>
            <div className='text-4xl md:text-8xl font-bold leading-[3.5rem] mb-3 md:mb-8  text-white'>
              <h1 className='md:mb-3'>
                Find your next
              </h1>
              <h1>
              tourist attraction
              </h1>
            </div>
            <p className='text-white '>
              Search for tourist centres near and far
            </p> 
          </div>
        </div>

        <div className='box-border relative z-10 flex flex-col w-full px-4 md:px-24 -top-10'>
          <div className='relative flex flex-col w-full overflow-hidden bg-white border-2 border-orange-300 rounded-md items-between'>
            <div className='relative flex items-center justify-between'>

              <div onClick={() => setFilterChoice("category")} className="flex bg-white px-2 py-5 border-r-[1px] items-center border-[#000000] hover:cursor-pointer">
                <p ref={categoryElement} className='flex'>
                  {selectedCategory || "Category"}
                </p>

                <span>
                  <MdArrowDropDown size={30} />
                </span>
              </div>

              <div className='flex items-center flex-1'>
                <div>

                </div>

                <div onClick={() => setFilterChoice("places")} className='w-full bg-white'>
                  <input className='w-full px-4 py-5 outline-none'
                    ref={placeElement}
                    placeholder='Where would like to go'
                    onChange={(e) => { searchingPlace(e) }}
                    value={selectedPlace} />
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
              <ul className='relative top-1 shadow-md shadow-gray-300 rounded-md overflow-hidden bg-red-300 w-[30%] max-h-[180px] overflow-y-auto md:w-[20%]'>
                {
                  categories.map((category, index) => (
                    <li onClick={() => {
                      setSelectedCategory(category.name);
                      setFilterChoice(null)
                    }}
                      key={index} className='p-3 bg-white hover:bg-gray-400 hover:cursor-pointer border-b-[1px]'>
                      {`${category.name}`}
                    </li>
                  ))
                }

              </ul>
            }

            {
              filterChoice === "places" &&
              <ul className='relative top-1 shadow-md shadow-gray-300 rounded-md overflow-hidden max-h-[180px] overflow-y-auto bg-red-300 w-full'>
                {
                  places.map((place, index) => (
                    <li onClick={() => {
                      setSelectedPlace(place.name);
                      setFilterChoice(null)
                    }} key={index} className='p-3 bg-white hover:bg-gray-400 hover:cursor-pointer border-b-[1px]'>
                      {`${place.name}`}
                    </li>
                  ))
                }

              </ul>
            }
          </div>

        </div>

      </section>
    </>
  )
}

export default HeroSection