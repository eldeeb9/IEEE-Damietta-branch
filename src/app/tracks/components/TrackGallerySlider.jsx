"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TrackGallerySlider({ track,images }) {
  if (!images?.length) return null;


  return (
    <section className="mb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400"></p>
        <h2 className="mt-3 mb-6 text-3xl font-semibold text-white sm:text-4xl">
          {track} Gallery
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        spaceBetween={24}
        slidesPerView="auto" // بيخلي كل كارت ياخد عرضه المحدد في الـ CSS فقط
        loop={true}
        speed={15000} // سرعة الحركة التلقائية
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        // شيلنا الـ breakpoints خالص عشان الـ slider يفضل ثابت السلوك
        className="[&_.swiper-wrapper]:!ease-linear group mx-auto w-full"
      >
        {images.map((src, index) => (
          // هتبدي العرض الثابت للـ SwiperSlide نفسه مش للـ div الداخلي
          <SwiperSlide key={`${src}-${index}`} className="!w-[320px]">
            <div className="w-full rounded-[1.75rem] border border-white/10 bg-slate-950/90 shadow-lg transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover border-2 border-blue-500 rounded-[1.75rem]"
                  priority={index === 0}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
