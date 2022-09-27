// @ts-ignore
import styled from "styled-components";
import React from 'react'

type Props = {
    width: string,
    height: string,
    lapWidth: string,
    lapHeight: string,
    bottomText?: string,
    imagePath: string
};


const Card = styled.div<Props>`
        background-position: cover;
        background-repeat: none;
        background-image: url(${(props: Props) => props.imagePath});
        width: ${(props: Props) => props.width};
        height: ${(props: Props) => props.height};

        @media (min-width: 768px) {
            width: ${(props: Props) => props.lapWidth};
            height: ${(props: Props) => props.lapHeight};
        }
    `



const CardComponent: React.FC<Props> = (props) => {
    return (
        <div>
            <Card {...props} />
            {
                props.bottomText &&
                <p className="font-[650] text-textColor md:font-[640] mt-1 md:mt-2 text-[15px] md:text-lg whitespace-nowrap tracking-[0.05em] md:tracking-[0.1em]">{props.bottomText}</p>
            }
        </div>

    )
}

export default CardComponent;