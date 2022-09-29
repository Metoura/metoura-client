import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { NextPage } from "next";

type Props = {
  direction:  string
  moveSlide?: any
}

const BtnSlider : NextPage<Props> = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <button
      onScroll={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {/* <img alt="Scroll arrow" src={direction === "next" ? <FaLongArrowAltRight/> : <FaLongArrowAltLeft/>} /> */}
    </button>
  );
}

export default BtnSlider;