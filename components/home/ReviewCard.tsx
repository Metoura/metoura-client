import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { MdArrowRight, MdArrowLeft } from 'react-icons/md'
import { BsFillCircleFill } from 'react-icons/bs'

type Props = {
    review: TouristReview
}
const ReviewCard: NextPage<Props> = ({ review }) => {

    const [imageIndex, setImageIndex] = useState<number>(1)

    const scrollLeft = () => {
        if (imageIndex > 0) setImageIndex(imageIndex - 1)
    }

    const scrollRight = () => {
        if (imageIndex < review.imagePaths.length - 1) setImageIndex(imageIndex + 1)
    }

    const goToImage = (currentIndex: number) => {
        setImageIndex(currentIndex);
    }

    return (
        <div>
            <div className="w-[255px] h-[320px] md:w-[300px] md:h-[350px] bg-white card-shadow p-6 md:p-8">
                <div className='flex flex-col gap-4 md:gap-6'>
                    <div className="flex justify-start gap-1 items-center ">
                        <div>
                            <Image
                                src={`${review?.touristPics}/${review?.id}`}
                                alt="profile Pics"
                                width="60px"
                                height="60px"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>

                        <div className=" w-[150px] ml-4 text-black whitespace-nowrap">
                            <p className=" h-[40%] text-sm md:text-lg font-bold">{review.email}</p>
                            <p className=" h-[60%] text-[12px] md:text-[13px]">{review.description}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-center relative'>
                        <div className='flex flex-row gap-2 h-[190px] '>
                            <Image
                                src={`${review.imagePaths[imageIndex]}/${imageIndex}`}
                                alt="Tourist Center Image"
                                width='270px'
                                height='190px'
                                objectFit="cover"
                                className=' flex-1 rounded-sm'
                            />
                        </div>
                        <div className='w-[40px] h-[15px] flex items-center gap-1 justify-center cursor-pointer z-50'>
                            {
                                review.imagePaths.map((i, index) =>
                                    <div key={index} onClick={() => goToImage(index)}>
                                        <BsFillCircleFill size={6} key={index} className={`${index == imageIndex ? "text-gray-800" : "text-gray-300"}`} />
                                    </div>
                                )
                            }
                        </div>
                        <div className='md:flex h-full w-full items-center absolute md:top-0 top-[calc(100%/2.5)]'>
                            <div className='w-full flex items-start md:items-center justify-between h-[40px]'>
                                {
                                    imageIndex > 0 &&
                                    <div className="text-white cursor-pointer hover:text-black transition-all duration-100" onClick={() => scrollLeft()}>
                                        <MdArrowLeft size={40} />
                                    </div>
                                }
                                <div className="flex-1"></div>
                                {
                                    imageIndex < review.imagePaths.length - 1 &&
                                    <div className="text-white cursor-pointer hover:text-black transition-all duration-100" onClick={() => scrollRight()}>
                                        <MdArrowRight size={40} />
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReviewCard;

