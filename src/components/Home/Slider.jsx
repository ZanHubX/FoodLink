import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

const Slider = () => {
  useEffect(() => {
    new Swiper(".progress-slide-carousel", {
      loop: true,
      autoplay: {
        delay: 1200,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
      },
    });
  }, []);

  return (
    <div>
      <div className="w-full relative mt-10">
        <div className="swiper progress-slide-carousel swiper-container relative">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                <span className="text-3xl font-semibold text-indigo-600">
                  Slide 1
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                <span className="text-3xl font-semibold text-indigo-600">
                  Slide 2
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                <span className="text-3xl font-semibold text-indigo-600">
                  Slide 3
                </span>
              </div>
            </div>
          </div>
          <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
