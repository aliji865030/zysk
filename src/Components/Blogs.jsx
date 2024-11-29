import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import { blog } from './data';

const Blogs = () => {
  return (
    <div className='flex flex-col justify-center items-center py-[4rem]'>
      <div className='w-[80%]'>
        <div className='flex flex-col gap-5 sm:flex-row justify-between'>
            <p className='text-[12px] text-purple-600'>Our blog</p>
            <button className="bg-[#7f56d9] text-white text-[14px] py-2 px-5 rounded-lg hover:bg-[#673cc4]">View all posts</button>
        </div>
        <p className='text-[26px] font-medium mt-5'>Lastest blog posts</p>
        <p className='text-gray-600 text-[15px] mt-3'>Tool and strategies modern teams need to help their companies grow.</p>
      </div>
      <div className='flex justify-center items-center gap-14 sm:gap-5 flex-wrap py-10'>
        {blog.map((item,index)=>{
            return(
                <div key={index} className='w-[270px] sm:w-[400px] flex flex-col gap-3'>
                    <img src={item.img} alt="" />
                    <p className='text-[12px] text-purple-600 font-medium'>{item.title}</p>
                    <span className='flex justify-between items-center font-medium text-[20px]'><p>{item.heading}</p> <RxArrowTopRight /></span>
                    <p className='text-[14px] text-gray-600'>{item.des}</p>
                    <div className='flex justify-start items-center gap-3'>
                        <div>
                            <img src={item.avatar} className='w-[30px]' alt="" />
                        </div>
                        <div className='text-[12px]'>
                            <p className='font-medium'>{item.avName}</p>
                            <p className='text-[10px] text-gray-600'>{item.avDate}</p>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
      <div className='bg-[#f9fafb] flex flex-col justify-center items-center w-full gap-3 py-10 text-center'>
        <p className='text-[26px] font-medium '>Start your free trial</p>
        <p className='text-[15px] text-gray-600'>Join over 4,000+ startups already growing with Untitled.</p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5 mt-3'>
            <button className="bg-[#f9f9f9] border text-[14px] px-16 py-2 sm:px-5 rounded-lg hover:bg-[#e3e2e4]">Learn more</button>
            <button className="bg-[#7f56d9] text-white text-[14px] px-16 py-2 sm:px-5 rounded-lg hover:bg-[#673cc4]">Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Blogs;
