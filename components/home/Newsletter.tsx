import { NextPage } from 'next'

const Newsletter: NextPage = () => {
    return (
        <div className='relative flex flex-col w-full px-4 md:px-24 top-10'>
            <div className=' bg-gold h-[180px] md:h-[269px] items-between'>
                <div className='my-9 mx-14 md:my-14 md:mx-32'>
                    <div className='w-[220px] md:w-[410px] h-[60px] md:h-[90px] font-semibold text-xl md:text-4xl flex flex-col'>
                        <span >Subscribe to save</span>
                        <span>big on your next tour</span>
                    </div>

                    <div className='my-5 md:my-9 flex'>
                        <input className='w-[168px] md:w-[80%] h-[36px] md:h-[51px] px-4 py-3 outline-none rounded-sm md:rounded text-base'
                            placeholder='Enter email' />
                        <button className='py-2 px-4 font-semibold text-sm bg-primary text-white rounded-sm md:rounded mx-2 md:w-[162px]'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter