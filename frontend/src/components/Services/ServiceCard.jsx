import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5 rounded-3xl bg-white dark:bg-darkCard border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[26px] leading-9 text-headingColor dark:text-white font-[700] group-hover:text-primaryColor transition-colors duration-300">
          {name}
        </h2>
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] bg-primaryColor/10 text-primaryColor rounded-full group-hover:bg-primaryColor group-hover:text-white transition-all duration-300">
          {index + 1}
        </span>
      </div>

      <p className="text-[16px] leading-7 font-[400] text-textColor dark:text-gray-400 mt-4 mb-6">
        {desc}
      </p>

      <div className="flex items-center justify-between">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] dark:border-gray-600 flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-all duration-300"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5 dark:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
