import type { NextPage } from 'next'
import React from 'react'

type Props = {
    imagePath: string
};

const PackageCard: NextPage<Props> = ({imagePath}) => {
    return (
        <div>
            <div className="w-[240px] h-[95px] bg-cover bg-no-repeat md:w-[490px] md:h-[195px]" style={{backgroundImage: `url("${imagePath}")`}}></div>
           
        </div>

    )
}

export default PackageCard;