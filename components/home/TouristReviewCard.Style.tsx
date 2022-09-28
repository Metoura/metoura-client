import styled from "styled-components"
import BackgroundImage from '../assets/images/heroImage.png'

export const SharedSection = styled.div`
     display:flex;
    justify-content:center;
    align-items:center;
    gap:1em;
    padding-top: 2em;  
    width:100%; 
`

export const Tourist = styled(SharedSection)`
    padding:0em;
    justify-content:flex-start;
`

export const Background = styled.image`
    background-image      :url() ;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;    
    width:100%;
    height:40em;
`


export const PicCar = styled(Background)`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:10em;    
`

export const CarouselContainer = styled.div`
   display: flex;
   flex-direction: col;
  flex-wrap: wrap;
  overflow-x: auto;
  gap: 5px
`

export const CarouselContent = styled.div`
  flex: 0 0 auto;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`