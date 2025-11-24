import React from "react";
import heroImage01 from "../assets/images/hero-img01.png";
import heroImage02 from "../assets/images/hero-img02.png";
import heroImage03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureimg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const bookAppointment = async () => {
    toast.success("Find your Doctor");
    navigate("/doctors");
  };

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px] bg-gray-50 dark:bg-darkBg transition-colors duration-300 relative overflow-hidden">
        {/* Background Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 dark:opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primaryColor rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purpleColor rounded-full blur-[100px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ========== Hero Content ========== */}
            <div className="lg:w-[570px]">
              <div className="inline-block px-4 py-2 bg-primaryColor/10 text-primaryColor rounded-full text-sm font-semibold mb-6">
                🚀 Advanced Healthcare AI
              </div>
              <h1 className="text-[40px] leading-[50px] text-headingColor dark:text-white font-[800] md:text-[60px] md:leading-[70px] mb-6">
                Smarter Healthcare for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-purpleColor">Better Life</span>
              </h1>
              <p className="text__para dark:text-gray-300 text-lg mb-8">
                Experience the future of medicine with our AI-powered platform.
                Diagnosis, treatment plans, and continuous monitoring—all in one place.
              </p>
              <div className="flex gap-4">
                <button onClick={bookAppointment} className="btn hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  Book Appointment
                </button>
                <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-headingColor dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* ========== Hero Counter */}
              <div className="mt-[50px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] border-t border-gray-200 dark:border-gray-800 pt-8">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor dark:text-white">
                    30+
                  </h2>
                  <p className="text__para dark:text-gray-400 text-sm">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor dark:text-white">
                    15+
                  </h2>
                  <p className="text__para dark:text-gray-400 text-sm">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor dark:text-white">
                    100%
                  </h2>
                  <p className="text__para dark:text-gray-400 text-sm">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ========== Hero Images Grid ========== */}
            <div className="flex gap-[30px] justify-end relative">
              <div className="flex flex-col gap-6 mt-12">
                <img src={heroImage01} className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500" alt="" />
              </div>
              <div className="flex flex-col gap-6">
                <img src={heroImage02} className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500" alt="" />
                <img src={heroImage03} className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Hero Section End ========== */}

      {/* ========== Services Bento Grid ========== */}
      <section className="dark:bg-darkBg transition-colors duration-300">
        <div className="container">
          <div className="lg:w-[470px] mx-auto mb-12">
            <h2 className="heading text-center dark:text-white">
              Our Medical Services
            </h2>
            <p className="text__para text-center dark:text-gray-400">
              World-class care for everyone. Our health System offers unmatched
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-darkCard p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 md:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-14 h-14 bg-primaryColor/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primaryColor transition-all duration-300">
                    <img src={icon01} alt="icon" className="w-8 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                  </div>
                  <h2 className="text-[26px] leading-9 text-headingColor dark:text-white font-[700] mb-4">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor dark:text-gray-400 font-[400] max-w-md">
                    Connect with top-rated specialists in your area. Read reviews, check availability, and book instantly.
                  </p>
                </div>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] dark:border-gray-600 flex items-center justify-center group-hover:bg-primaryColor group-hover:border-none transition-all duration-300"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 dark:text-white" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-darkCard p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800">
              <div className="w-14 h-14 bg-purpleColor/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purpleColor transition-all duration-300">
                <img src={icon02} alt="icon" className="w-8 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor dark:text-white font-[700] mb-4">
                Find a Location
              </h2>
              <p className="text-[16px] leading-7 text-textColor dark:text-gray-400 font-[400] mb-6">
                Locate our clinics and partner hospitals near you.
              </p>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 text-primaryColor font-semibold group-hover:gap-3 transition-all duration-300"
              >
                Search Now <BsArrowRight />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-darkCard p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800">
              <div className="w-14 h-14 bg-irisBlueColor/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-irisBlueColor transition-all duration-300">
                <img src={icon03} alt="icon" className="w-8 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor dark:text-white font-[700] mb-4">
                Book Appointment
              </h2>
              <p className="text-[16px] leading-7 text-textColor dark:text-gray-400 font-[400] mb-6">
                Schedule your visit online. It's quick, easy, and secure.
              </p>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 text-primaryColor font-semibold group-hover:gap-3 transition-all duration-300"
              >
                Book Now <BsArrowRight />
              </Link>
            </div>

            {/* Card 4 (Wide) */}
            <div className="bg-gradient-to-r from-primaryColor to-purpleColor p-8 rounded-3xl shadow-lg md:col-span-2 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-[32px] font-[800] mb-4">Emergency Care</h2>
                <p className="text-lg opacity-90 mb-8 max-w-md">
                  Need urgent medical attention? Our emergency response team is available 24/7 to assist you.
                </p>
                <button className="bg-white text-primaryColor px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300">
                  Call 911 Now
                </button>
              </div>
              <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== About Section ========== */}
      <About />
      {/* ========== About Section end ========== */}

      {/* ========== Services List Section ========== */}
      <section className="dark:bg-darkBg transition-colors duration-300">
        <div className="container">
          <div className="xl:w-[470px] mx-auto mb-12">
            <h2 className="heading text-center dark:text-white">Our Medical Services</h2>
            <p className="text__para text-center dark:text-gray-400">
              Comprehensive care tailored to your needs.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* ========== Services List Section end ========== */}

      {/* ========== Feature Section ========== */}
      <section className="dark:bg-darkBg transition-colors duration-300 py-20">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-12">
            {/* ========== Feature Content ========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading dark:text-white mb-6">
                Get Virtual Treatment <br />
                <span className="text-primaryColor">Anytime, Anywhere</span>
              </h2>
              <ul className="pl-4 space-y-4">
                <li className="text__para dark:text-gray-400 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primaryColor/10 flex items-center justify-center text-primaryColor font-bold">1</span>
                  Schedule appointments directly from your phone.
                </li>
                <li className="text__para dark:text-gray-400 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primaryColor/10 flex items-center justify-center text-primaryColor font-bold">2</span>
                  Search for top specialists and view their profiles.
                </li>
                <li className="text__para dark:text-gray-400 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primaryColor/10 flex items-center justify-center text-primaryColor font-bold">3</span>
                  Get instant consultations via high-quality video calls.
                </li>
              </ul>
              <Link to="/">
                <button className="btn mt-8 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">Learn More</button>
              </Link>
            </div>

            {/* ========== Feature Image ========== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end">
              <img src={featureimg} className="w-3/4 rounded-2xl shadow-2xl transform hover:-rotate-2 transition-all duration-500" alt="" />

              <div className="w-[200px] lg:w-[248px] bg-white dark:bg-darkCard absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-4 pb-5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce-slow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor dark:text-white font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor dark:text-gray-400 font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-8 h-8 flex items-center justify-center bg-yellowColor rounded-lg">
                    <img src={videoIcon} className="w-4" alt="" />
                  </span>
                </div>

                <div className="w-fit bg-irisBlueColor/10 py-1 px-3 text-[12px] text-irisBlueColor font-[600] rounded-full mb-4">
                  Consultation
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={avatarIcon} alt="" className="w-8 h-8 rounded-full" />
                  <h4 className="text-[14px] font-[700] text-headingColor dark:text-white">
                    Abdul Wahab
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Feature Section end ========== */}

      {/* ========== Our Great Doctors Section ========== */}
      <section className="dark:bg-darkBg transition-colors duration-300">
        <div className="container">
          <div className="xl:w-[470px] mx-auto mb-12">
            <h2 className="heading text-center dark:text-white">Our Great Doctors</h2>
            <p className="text__para text-center dark:text-gray-400">
              Meet our team of experienced professionals dedicated to your health.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ========== Our Great Doctors Section end ========== */}

      {/* ========== Faqs Section ========== */}
      <section className="dark:bg-darkBg transition-colors duration-300">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 items-start">
            <div className="w-1/2 hidden md:block sticky top-28">
              <img src={faqImg} alt="" className="rounded-2xl shadow-2xl" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading dark:text-white mb-4">
                Common Questions About <span className="text-primaryColor">AI-MedLab</span>
              </h2>
              <p className="text__para dark:text-gray-400 mb-10">
                Everything you need to know about our AI-powered healthcare platform.
              </p>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ========== Faqs Section end ========== */}

      {/* ========== Testimonial Section ========== */}
      <section className="dark:bg-darkBg transition-colors duration-300 pb-20">
        <div className="container">
          <div className="xl:w-[470px] mx-auto mb-12">
            <h2 className="heading text-center dark:text-white">What our patients say</h2>
            <p className="text__para text-center dark:text-gray-400">
              Real stories from real people who trust us with their health.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ========== Testimonial Section end ========== */}
    </>
  );
};

export default Home;
