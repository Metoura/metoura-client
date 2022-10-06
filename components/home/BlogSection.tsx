import type { NextPage } from 'next'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import BlogCard from './BlogCard';
import CardScroller from './CardScroller';

const BlogSection: NextPage = () => {

    const blogReview = useSelector((state: RootState) => state.blog)

    return (
        <div className='w-full h-[30em] md:h-[35em] mb-8 py-4 md:py-8 md:mb-24 px-4 md:px-24 bg-primary'>
            <p className='text-white my-8 md:my-8 text-xl md:text-3xl font-bold'>Latest from our blog</p>
            <CardScroller id='blog'>
                {
                    blogReview.map((b) =>
                        <BlogCard key={b.id} blog={b} />
                    )}
            </CardScroller>
        </div>
    );
}

export default BlogSection;