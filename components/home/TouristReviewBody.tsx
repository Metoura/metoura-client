import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import CardScroller from './CardScroller'
import Footer from './Footer'
import Newsletter from './Newsletter'
import ReviewCard from './ReviewCard'

const TouristReviewBody: NextPage = () => {

    const touristReview = useSelector((state: RootState) => state.touristReview)

    return (
        <>
            <Newsletter />
            <div className='flex flex-col md:gap-48 gap-24'>
                <div className="relative px-4 md:px-24 md:top-24 top-10">
                    <h2 className="text-xl md:text-3xl font-bold mb-8 md:mb-10">Check out other tourists</h2>
                    <div>
                        <CardScroller id="touristReview">
                            {
                                touristReview.map((t) =>
                                    <ReviewCard key={t.id} review={t} />
                                )}

                        </CardScroller>
                    </div>
                </div>

                <Footer />
            </div>
           
        </>
    )
}


export default TouristReviewBody;
