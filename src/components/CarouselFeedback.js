import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles/CarouselFeedback.module.css'

export default function CarouselFeedback(){
    return (
        <div className={styles.carousel}>
        <Swiper
            /*slidesPerView={3}
            spaceBetween={30}*/
            
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                668: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            /*pagination={{clickable: true,}}*/
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiper}
        >
            <SwiperSlide className={styles.swiper_slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
        </Swiper>
    </div>
    )
}