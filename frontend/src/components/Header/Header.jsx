import "../../App.css";
import React, { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center bg-white/10 dark:bg-darkBg/50 backdrop-blur-lg border-b border-white/10 dark:border-gray-800 transition-all duration-300 z-50" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ========== Logo ========== */}
          <div>
            <img src={logo} alt="Logo" className="w-full max-w-[70px]" />
          </div>

          {/* ========== Menu ========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600] relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px] after:bg-primaryColor"
                        : "text-textColor dark:text-gray-300 text-[16px] leading-7 font-[500] hover:text-primaryColor dark:hover:text-primaryColor transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-primaryColor hover:after:w-full after:transition-all after:duration-300"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== Nav Right ========== */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center gap-3">
                <Link
                  to={`${role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                    }`}
                  className="flex items-center gap-2 group"
                >
                  <figure className="w-[40px] h-[40px] rounded-full cursor-pointer overflow-hidden border-2 border-transparent group-hover:border-primaryColor transition-all duration-300">
                    <img
                      src={user?.photo}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </figure>
                  <h2 className="text-headingColor dark:text-white font-[600] text-[16px] group-hover:text-primaryColor transition-colors duration-300">
                    {user?.name}
                  </h2>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer text-headingColor dark:text-white" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
