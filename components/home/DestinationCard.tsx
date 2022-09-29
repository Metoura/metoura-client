import type { NextPage } from 'next'
import React from 'react'

type Props = {
    bottomText?: string,
    imagePath: string
};

const DestinationCard: NextPage<Props> = ({imagePath, bottomText}) => {
    return (
        <div>
            <div className="w-[120px] h-[120px] bg-cover bg-no-repeat md:w-[190px] md:h-[190px]" style={{backgroundImage: `url("${imagePath}")`}}></div>
            {
                bottomText &&
                <p className="font-[650] text-textColor md:font-[640] mt-1 md:mt-2 text-[15px] md:text-lg whitespace-nowrap tracking-[0.05em] md:tracking-[0.1em]">{bottomText}</p>
            }
        </div>

    )
}

export default DestinationCard;