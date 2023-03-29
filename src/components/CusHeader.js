import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

function CusHeader() {
  return (
    <>
      {/* <!-- 輪播牆 --> */}
      <Swiper
        slidesPerView={1} //一次顯示的數量
        // spaceBetween={30} //圖片之間的間隔
        centeredSlides={true} //選中的圖片居中
        loop={true} //無限循環
        speed={500} //圖片轉場速度
        //   parallax={true}
        autoplay={{
          //自動播放
          delay: 2500, //延遲時間
          disableOnInteraction: false, //自動播放在用戶交互（滑動）後不會被禁用，每次交互後都會重新啟動
          // pauseOnMouseEnter: true, //滑鼠進入時暫停輪播
        }}
        pagination={{
          clickable: true, //可以點擊換頁
          bulletClass: 'swiper-pagination-bullet', //修改分頁樣式
          bulletActiveClass: 'my-bullet-active',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <!-- 電腦 --> */}
          <img
            className="t-cus-image d-none d-lg-block"
            src="/img/t-header/cus1.png"
            alt="Customization1"
          />
          {/* <!-- 手機 --> */}
          <img
            className="t-cus-image d-sm-none"
            src="/img/t-header/cus-mb1.png"
            alt="Customization1"
          />
        </SwiperSlide>

        <SwiperSlide>
          {/* <!-- 電腦 --> */}
          <img
            className="t-cus-image d-none d-lg-block"
            src="/img/t-header/cus2.png"
            alt="Customization2"
          />
          {/* <!-- 手機 --> */}
          <img
            className="t-cus-image d-sm-none"
            src="/img/t-header/cus-mb2.png"
            alt="Customization2"
          />
        </SwiperSlide>

        <SwiperSlide>
          {/* <!-- 電腦 --> */}
          <img
            className="t-cus-image d-none d-lg-block"
            src="/img/t-header/cus3.png"
            alt="Customization3"
          />
          {/* <!-- 手機 --> */}
          <img
            className="t-cus-image d-sm-none"
            src="/img/t-header/cus-mb3.png"
            alt="Customization3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CusHeader
