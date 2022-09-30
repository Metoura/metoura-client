import type { NextPage } from 'next'
import React, { useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'


type Props = {
    id: string,
    children: any
}

const CardScroller: NextPage<Props> = ({ id, children }) => {
    const scrollLength = 500


    const [isScrollLeftActive, setIsScrollLeftActive] = useState<boolean>(false)
    const [isScrollRightActive, setIsScrollRightActive] = useState<boolean>(true)
    const scrollLeft = () => {
        const scroller = document.querySelector(`#${id}`)
        if (scroller != null) {
            let leftHandler = 0;
            if (scroller.scrollLeft - scrollLength >= 0) {
                leftHandler = scroller.scrollLeft - scrollLength
                scroller.scrollLeft = scroller.scrollLeft - scrollLength
            }
            else {
                leftHandler = scroller.scrollLeft - scrollLength
                scroller.scrollLeft = 0
            }
            setIsScrollLeftActive(leftHandler > 0)
            setIsScrollRightActive(leftHandler + scrollLength < scroller.clientWidth)
        }
    }

    const scrollRight = () => {
        const scroller = document.querySelector(`#${id}`)
        if (scroller != null) {
            let leftHandler = 0;
            if (scroller.scrollLeft + scrollLength < scroller.clientWidth) {
                leftHandler = scroller.scrollLeft + scrollLength
                scroller.scrollLeft = scroller.scrollLeft + scrollLength
            }
            else {
                leftHandler = scroller.scrollLeft + scrollLength
                scroller.scrollLeft = scroller.clientWidth
            }
            setIsScrollLeftActive(leftHandler > 0)
            setIsScrollRightActive(leftHandler + scrollLength < scroller.clientWidth)
        }
    }

    return (
        <div className='md:relative'>
            <div id={id} className="flex flex-row overflow-y-clip overflow-x-auto md:overflow-x-hidden gap-5 ">
                {
                    children
                }
            </div>
            <div className='absolute w-full top-[calc(100%/2.5)] flex items-center '>
                <div className=" w-full hidden md:flex justify-between items-center">
                    {
                        isScrollLeftActive &&
                        <div onClick={() => scrollLeft()} className="circle bg-[white] ml-[-30px] cursor-pointer hover:bg-primary transition-all duration-500 mr-[-20px]" >
                            <FaLongArrowAltLeft size={15} className="m-3 text-black" />
                        </div>
                    }
                    <div className="flex-1"></div>
                    {
                        isScrollRightActive &&
                        <div onClick={() => scrollRight()} className="circle bg-[white] ml-[-30px] cursor-pointer hover:bg-primary transition-all duration-100 mr-[-30px]">
                            <FaLongArrowAltRight size={15} className="m-3 text-black " />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default CardScroller