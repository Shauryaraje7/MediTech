import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {[
          {
            name: "Sarah Johnson",
            rating: 5,
            content:
              "The AI diagnosis feature is incredible! It saved me so much time and gave me peace of mind before my appointment. The doctors are top-notch.",
          },
          {
            name: "Michael Chen",
            rating: 5,
            content:
              "I was skeptical about AI in healthcare, but this platform changed my mind. The personalized treatment plans are spot on. Highly recommended!",
          },
          {
            name: "Emily Rodriguez",
            rating: 4,
            content:
              "Great experience overall. The video consultation was smooth, and the doctor was very attentive. The app interface is also very user-friendly.",
          },
          {
            name: "David Kim",
            rating: 5,
            content:
              "Fast, efficient, and reliable. I got my prescription renewed in minutes. The 24/7 support is a lifesaver for busy professionals like me.",
          },
          {
            name: "Lisa Patel",
            rating: 4,
            content:
              "Very impressed with the level of care. The follow-up system ensures you're never left wondering what to do next. A true game-changer.",
          },
        ].map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="py-[30px] px-5 rounded-3xl bg-white dark:bg-darkCard border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-center gap-[13px]">
                <img src={patientAvatar} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor dark:text-white">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor dark:text-gray-400 font-[400]">
                "{testimonial.content}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
