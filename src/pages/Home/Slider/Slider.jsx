
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/n6px8YR/shundarban.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/bgHmVyg/bangkok.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/mzVSjwx/bali.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/KjqPFcY/halongbay.jpg" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;