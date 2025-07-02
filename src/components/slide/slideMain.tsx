import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./slide.css";
import Slide01 from "./slide01";
import Slide02 from "./slide02";

function Home() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>

                    <Slide01 />
                    
                </SwiperSlide>

                <SwiperSlide>
                     <img 
                    className="swiper-slide-img"
                    src="https://ik.imagekit.io/dmzx7is6a/image(1).png?updatedAt=1751487866269" 
                    alt="slide - Slide 03" 
                    />
                </SwiperSlide>
                <SwiperSlide>

                    <Slide02 />

                </SwiperSlide>
                <SwiperSlide>    
                <img 
                    className="swiper-slide-img"
                    src="https://ik.imagekit.io/dmzx7is6a/image(2).png?updatedAt=1751489093452" 
                    alt="slide - Slide 03" 
                    />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Home