
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";


import gfg from './gfg_event.jpg'

export default function Gallery() {
  
  return (
    <>
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>

          <h1 className='text-3xl md:text-5xl font-extrabold dark:text-white text-green-500'>Featured Work</h1>
          <p className='mt-4 text-xl dark:text-gray-300 text-gray-800'>Check out our latest events</p>

        </div>

        <div className='flex items-center justify-center flex-col py-8 bg-gray-100 dark:bg-gray-800 border-2 border-slate-800 rounded-lg m-4'>
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[85%]"
          >

            <SwiperSlide>
              <img src={gfg} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={gfg} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={gfg} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={gfg} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={gfg} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={gfg} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

      </section>
    </>
  )
}
