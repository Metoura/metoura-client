import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import CardScroller from './CardScroller'

const Body : NextPage = () => {
    const categoryBoxSize = {
        width: "150px",
        height: "150px",
        lapWidth: "270px",
        lapHeight: "203px",
    }

    const tcBoxSize = {
        width: "120px",
        height: "120px",
        lapWidth: "190px",
        lapHeight: "190px",
    }

    const tpBoxSize = {
        width: "240px",
        height: "95px",
        lapWidth: "490px",
        lapHeight: "195px",
    }

    const categories = useSelector((state: RootState) => state.category)
    const tourCenters = useSelector((state: RootState) => state.tourCenter)
    const tourPackages = useSelector((state: RootState) => state.tourPackage)
    return ( 
        <div className="px-4 md:px-24 ">
            <div className="mt-[80px] md:mt-[150px] h-[500px] flex flex-col gap-8 md:gap-12">
                <div className='flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className="text-textColor">
                        <p className="text-xl md:text-3xl font-bold">Find places to go by interest</p>
                        <p className="text-xs md:text-sm font-semibold mt-1 md:mt-2 tracking-[0.05em] md:tracking-[0.1em]">Places are more intersting when you like them</p>
                    </div>
                    <div>
                        <CardScroller data={categories} cardSize={categoryBoxSize} id="catScroller" />
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className="text-textColor">
                        <p className="text-xl md:text-3xl font-bold">Top destinations in Nigeria</p>
                        <p className="text-xs md:text-sm font-semibold mt-1 md:mt-2 tracking-[0.05em] md:tracking-[0.1em]">These popular destinations have a lot to offer</p>
                    </div>
                    <div>
                        <CardScroller data={tourCenters} cardSize={tcBoxSize} id="tcScroller" />
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className="text-textColor">
                        <p className="text-xl md:text-3xl font-bold">Available tour packages</p>
                        <p className="text-xs md:text-sm font-semibold mt-1 md:mt-2 tracking-[0.05em] md:tracking-[0.1em]">Save big on your next tour with these packages</p>
                    </div>
                    <div>
                        <CardScroller data={tourPackages} cardSize={tpBoxSize} id="tpScroller" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Body;