import type { NextPage } from 'next'
import Image from 'next/image'

type Props = {
    blog: Blog
}
const BlogCard: NextPage<Props> = ({ blog }) => {

    return (
        <div>
            <div className="w-[300px] h-[320px] md:w-[300px] md:h-[350px] flex flex-col rounded">
                <div className='h-[70%] w-[100%] relative'>
                    <Image
                        src={`${blog.displayImagePath}/${blog.id}`}
                        alt="Blog Image"
                        objectFit="cover"
                       layout='fill'
                    />
                </div>


                <div className='h-[30%] flex flex-col gap-2 text-black bg-white justify-center p-6'>
                    <p className='w-[230px] text-lg font-bold'>{blog.title}</p>
                    <p className='whitespace-nowrap text-[12px] font-normal'>{blog.description}</p>
                </div>
            </div>
        </div>
    )
}


export default BlogCard;
