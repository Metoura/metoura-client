import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const TouristReviewBody: NextPage = () => {

    const touristReview = useSelector((state: RootState) => state.touristReview)

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== touristReview.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === touristReview.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(touristReview.length)
        }
    }

    const moveDot = (index: any) => {
        setSlideIndex(index)
    }


    return (
        <div className="relative px-4 md:px-24 top-10">
            <h2 className="text-lg font-medium">Check out other tourists</h2>
            <div className="flex flex-row overflow-x-auto md:overflow-x-hidden gap-3 ">
                {
                    touristReview.map((d, index) =>
                        <div key={index}>
                            <div className="w-[320px] h-[320px] mt-6 bg-white shadow-2xl rounded px-6 pt-6">
                                <div className="w-[full] h-[70px] mb-5 flex items-center">
                                    <div className="w-16 ">
                                        <div className='flex justify-start items-center gap-4 w-[100%]'>
                                            <Image
                                                src={`${d?.touristPics}/${d?.id}`}
                                                alt="Tourist Pics"
                                                width="100%"
                                                height="95%"
                                                objectFit="cover"
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>

                                    <div className=" w-[150px] ml-4 text-black whitespace-nowrap">
                                        <p className=" h-[40%] text-lg font-semibold">{d.email}</p>
                                        <p className=" h-[60%] text-xs font-medium ">{d.description}</p>
                                    </div>
                                </div>

                                <div className='relative flex flex-row overflow-x-auto h-[160px] w-[100%]'>
                                    <div>
                                        <Image
                                            src={`${d?.displayImagePath}/${d?.id}`}
                                            alt="Tourist Center Image"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={`${d?.displayImagePath}/${d?.id}`}
                                            alt="Tourist Center Image"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {/* <div className={classes.containerDots}>
                    {Array.from({ length: 5 }).map((item:any, index) => (
                        <div key={item}
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot.active" : "dot"}
                        ></div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}


export default TouristReviewBody;

{/* <div className=" h-[70px] mb-5 flex items-center">
                    <div className="w-16 ">
                        <Tourist>
                            <Image
                                src={require("../assets/images/heroImage.png")}
                                alt="Hero Image"
                                width="100%"
                                height="95%"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </Tourist>
                    </div>
                    <div className=" w-[150px] ml-4 text-black whitespace-nowrap">
                        <p className=" h-[40%] text-lg font-semibold">@abbymahn</p>
                        <p className=" h-[60%] text-xs font-medium ">at Lekki conservation Centre</p>
                    </div>
                </div> */}
