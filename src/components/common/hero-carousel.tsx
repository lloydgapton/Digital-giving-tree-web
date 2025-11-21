import { findImage, type ImageWithText } from '../../lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/swiper-bundle.css';

const heroImageIds: ImageWithText[] = [
  { id: 'hero-1', text: 'Your contribution can fill a plate and warm a heart.' },
  { id: 'hero-2', text: 'Together, we can build a stronger community.' },
  { id: 'hero-3', text: 'Give the gift of a brighter future.' },
];

export default function HeroCarousel() {

  return (
    <section className="relative group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        className="w-full"
      >
        {heroImageIds.map((imageData) => {
          const image = findImage(imageData.id);
          return (
            <SwiperSlide key={image.id}>
              <div className="relative w-full aspect-[2/1]">
                <img
                  src={image.imageUrl}
                  alt={image.description}
                  className="object-cover w-full h-full absolute inset-0"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                   <h2 className="text-4xl md:text-6xl font-headline font-bold text-white text-center drop-shadow-lg max-w-4xl">
                    {imageData.text}
                   </h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
         <div className="swiper-pagination"></div>
      </Swiper>
      <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 sm:left-8">
        <ChevronLeft className="h-6 w-6" />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 sm:right-8">
        <ChevronRight className="h-6 w-6" />
      </div>
    </section>
  );
}