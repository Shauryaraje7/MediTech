import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`p-5 lg:p-6 rounded-2xl border mb-5 cursor-pointer transition-all duration-300 ${isOpen
          ? "bg-white/10 dark:bg-white/5 border-primaryColor shadow-lg backdrop-blur-sm"
          : "bg-white dark:bg-darkCard border-gray-100 dark:border-gray-800 hover:shadow-md"
        }`}
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between gap-5">
        <h4 className={`text-[16px] leading-7 lg:text-[20px] lg:leading-8 font-[600] transition-colors duration-300 ${isOpen ? "text-primaryColor" : "text-headingColor dark:text-white"
          }`}>
          {item.question}
        </h4>
        <div
          className={`${isOpen
              ? "bg-primaryColor text-white border-none"
              : "bg-transparent text-headingColor dark:text-white border-gray-300 dark:border-gray-600"
            } w-8 h-8 lg:w-9 lg:h-9 border rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-primaryColor`}
        >
          {isOpen ? <HiOutlineMinus className="w-5 h-5" /> : <HiOutlinePlus className="w-5 h-5" />}
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor dark:text-gray-400">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
