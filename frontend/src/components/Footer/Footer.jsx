import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className="group-hover:text-white w-5 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Column 1: Logo & Socials */}
          <div>
            <img src={logo} alt="Logo" className="mb-6 w-full max-w-[80px]" />
            <p className="text-[16px] leading-7 font-[400] text-textColor dark:text-gray-400 mt-4">
              Copyright © {year} developed by Abdul Wahab all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] dark:border-gray-600 rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-all duration-300"
                >
                  <span className="text-headingColor dark:text-white group-hover:text-white">
                    {link.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor dark:text-white">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor dark:text-gray-400 hover:text-primaryColor dark:hover:text-primaryColor transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: I want to */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor dark:text-white">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor dark:text-gray-400 hover:text-primaryColor dark:hover:text-primaryColor transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support & Newsletter */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor dark:text-white">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor dark:text-gray-400 hover:text-primaryColor dark:hover:text-primaryColor transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-[18px] font-[600] text-headingColor dark:text-white mb-3">Subscribe to our newsletter</h3>
              <div className="flex items-center bg-white dark:bg-darkCard rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-transparent outline-none text-textColor dark:text-gray-300"
                />
                <button className="bg-primaryColor text-white px-4 py-2 font-[600] hover:bg-indigo-700 transition-colors duration-300">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
