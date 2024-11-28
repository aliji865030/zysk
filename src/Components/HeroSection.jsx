import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";
import { fdata, fLogo } from './data';

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col text-center mt-10'>
      <div className='flex items-center justify-center gap-2 text-xs border px-[1px] py-[2px] rounded-2xl bg-[#f9f5ff] text-purple-600 cursor-pointer'>
        <span className=' px-2 border rounded-2xl bg-white'>New feature</span>
        <p className='ml-3'>Check out the team dashboard</p> 
        <BsArrowRight />
      </div>
      <p className='text-[42px] font-semibold mt-3'>Beautiful analytics to grow smarter</p>
      <p className='text-gray-500 mt-3'>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups</p>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <button className='flex items-center justify-center gap-3 text-gray-700 text-sm border py-2 px-3 rounded-lg border-gray-300'><FiPlayCircle /> Demo</button>
        <button className='bg-[#7f56d9] text-white py-2 px-3 rounded-lg text-sm'>Sign up</button>
      </div>
      <div className='w-[70%] mt-8'>
        <img src="mainIMG.png" alt="" />
      </div>
      <div className='mt-20'>
        <p className='text-[12px] text-gray-700'>Join 4,000+ companies already growing</p>
        <div className='flex justify-center items-center gap-6 mt-4'>
            {fLogo.map((item,index)=>{
                return(
                    <div key={index} className='w-[150px]'>
                        <img src={item} alt="" />
                    </div>
                )
            })}
        </div>
      </div>
      <div className='mt-[8rem]'>
        <p className='text-[12px] font-semibold text-purple-600'>Features</p>
        <p className='text-[32px] font-normal mt-1'>Analytics that feels like it’s from the future</p>
        <p className='text-gray-700 mt-1'>Powerful, self-serve product and growth analytics to help you convert, engage, <br /> and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className='flex flex-wrap w-[80%] gap-5 justify-center items-center mt-[4rem]'>
        {fdata.map((item,index)=>{
            return(
                <div key={index} className='w-[350px] flex flex-col justify-center items-center'>
                    <img src={item.img} className='w-12 mt-3' alt="" />
                    <p className='font-semibold mt-3'>{item.heading}</p>
                    <p className='text-[14px] text-gray-700 mt-2'>{item.des}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default HeroSection
