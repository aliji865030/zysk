import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import { faqData } from "./data";

const Faq = () => {
  return (
    <div className="py-[4rem] flex flex-col justify-center items-center text-center">
      <div>
        <p className="text-[28px] font-medium">Frequently asked questions</p>
        <p className="text-gray-700">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[50%] text-start gap-8 py-[4rem]">
        {faqData.map((item, index) => {
          return index === 0 ? (
            <div
              key={index}
              className="flex justify-center items-center text-start"
            >
              <div className="min-w-[80%]">
                <p className="font-medium">Is there a free trial available?</p>
                <p className="text-[14px] text-gray-700">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
              <div className=" cursor-pointer">
                <CiCircleMinus />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center text-start">
              <div className="min-w-[750px]">
                <p className="font-medium">{item}</p>
              </div>
              <div className=" cursor-pointer">
                <CiCirclePlus />
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#f9fafb] flex justify-center items-center flex-col w-[70%] py-[2rem] gap-1">
        <img src="ag.png" className="w-[80px]" alt="" />
        <p className="font-medium pt-3">Still have questions?</p>
        <p className="text-[13px] text-gray-600 pb-3">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="bg-[#7f56d9] text-white text-[14px] py-2 px-5 rounded-lg hover:bg-[#673cc4]">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Faq;
