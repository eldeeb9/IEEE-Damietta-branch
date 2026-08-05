"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TrackGallerySlider({ images }) {
  if (!images?.length) return null;

  return (
    <section className="mb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
          Our Gallery
        </p>
        <h2 className="mt-3 mb-6 text-3xl font-semibold text-white sm:text-4xl">
          Snapshots from our track activities
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        spaceBetween={24}
        slidesPerView={1.05}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.15 },
          768: { slidesPerView: 1.35 },
          1024: { slidesPerView: 1.7 },
        }}
        className="group mx-auto max-w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={`${src}-${index}`}>
            <div className=" rounded-[1.75rem] border border-white/10 bg-slate-950/90 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
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
