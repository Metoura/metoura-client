import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import CardScroller from './CardScroller'
import CategoryCard from './CategoryCard'
import DestinationCard from './DestinationCard'
import PackageCard from './PackageCard'


const Body: NextPage = () => {
    const categories = useSelector((state: RootState) => state.category)
    const tourCenters = useSelector((state: RootState) => state.tourCenter)
    const tourPackages = useSelector((state: RootState) => state.tourPackage)
    return (
        <div className="px-4 md:px-24 ">
            <div className="mt-[80px] md:mt-[150px] h-auto flex flex-col gap-8 md:gap-12 mb-12 md:mb-16">
                <div className='flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className="text-textColor">
                        <p className="text-xl md:text-3xl font-bold">Find places to go by interest</p>
                        <p className="text-xs md:text-sm font-semibold mt-1 md:mt-2 tracking-[0.05em] md:tracking-[0.1em]">Places are more intersting when you like them</p>
                    </div>
                    <div>
                        <CardScroller id="category" >
                            {
                                categories.map(c => <CategoryCard key={c.id} imagePath={`${c.displayImagePath}/${c.id}`} bottomText={c.name} />)
                            }
                        </CardScroller>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className="text-textColor">
                        <p className="text-xl md:text-3xl font-bold">Top destinations in Nigeria</p>
                        <p className="text-xs md:text-sm font-semibold mt-1 md:mt-2 tracking-[0.05em] md:tracking-[0.1em]">These popular destinations have a lot to offer</p>
                    </div>
                    <div>
                        <CardScroller id="destination" >
                            {
                                tourCenters.map(t => <DestinationCard key={t.id} imagePath={`${t.displayImagePath}/${t.id}`} bottomText={t.name} />)
                            }
                        </CardScroller>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4 md:gap-8'>
                    <div className="text-textColor">
                        <p className="text-xl md:text-3xl font-bold">Available tour packages</p>
                        <p className="text-xs md:text-sm font-semibold mt-1 md:mt-2 tracking-[0.05em] md:tracking-[0.1em]">Save big on your next tour with these packages</p>
                    </div>
                    <div>
                        <CardScroller id="package" >
                            {
                                tourPackages.map(p => <PackageCard key={p.id} imagePath={`${p.displayImagePath}/${p.id}`} />)
                            }
                        </CardScroller>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;