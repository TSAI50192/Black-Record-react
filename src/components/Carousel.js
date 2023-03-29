import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper'

export default function Carousel() {
  return (
    <>
      <div className="">
        <Swiper
          speed={500}
          autoplay={{
            //自動播放
            delay: 1000, //延遲時間
            disableOnInteraction: false, //自動播放在用戶交互（滑動）後不會被禁用，每次交互後都會重新啟動
            // pauseOnMouseEnter: true, //滑鼠進入時暫停輪播
          }}
          effect={'coverflow'}
          grabCursor={true} //游標為手掌
          centeredSlides={true}
          slidesPerView={'3'}
          loop={true}
          coverflowEffect={{
            rotate: 10, //slide做3d旋转时Y轴的旋转角度
            stretch: 30, //每个slide之间的拉伸值，越大slide靠得越紧。
            depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。
            modifier: 2, //depth和rotate和stretch的倍率
            slideShadows: false, //是否开启slide阴影
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/img/img1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/img2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/img3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/img4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/img5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/img6.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/img7.jpg" alt="" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  )
}

// export default Carousel;
