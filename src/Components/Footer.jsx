import React from 'react'
import { footerData } from './data'

const Footer = () => {
  return (
    <div className="px-6 py-8 flex justify-center items-center flex-col">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12 sm:gap-32">
      {footerData.map((section, index) => (
        <div key={index}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h2>
          <ul className="space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-600 hover:text-gray-900">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className='flex flex-col sm:flex-row gap-5 justify-around items-center w-full pt-20'>
        <img src="Logo.png" className='w-[100px]' alt="" />
        <p className='text-[12px] text-gray-600'>© 2077 Untitled UI. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
