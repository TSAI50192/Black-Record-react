import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

function PHomeHeader() {
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
          <Link to="/VrList">
            <img
              className="t-cus-image d-none d-lg-block"
              src="/img/t-header/ph1.png"
              alt="Product Home1"
            />
          </Link>
          {/* <!-- 手機 --> */}
          <Link to="/VrList">
            <img
              className="t-cus-image d-sm-none"
              src="/img/t-header/ph-mb1.png"
              alt="Product Home1"
            />
          </Link>
          {/* <!-- 電腦 --> */}
          <div className="d-none d-lg-block t-title-text col-lg-5">
            <div className="title-128 mb-8 lh-sm">古典到現代的音樂盛宴</div>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-secondary" to="/VrList">
                <h3 className="mb-0 p-2">查看更多</h3>
              </Link>
            </div>
          </div>
          {/* <!-- 手機 --> */}
          <div className="d-lg-none t-title-text">
            <h1 className="mb-8 lh-sm">古典到現代的音樂盛宴</h1>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-secondary" to="/VrList">
                <h6 className="mb-0">查看更多</h6>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <!-- 電腦 --> */}
          <Link to="/VrList">
            <img
              className="t-cus-image d-none d-lg-block"
              src="/img/t-header/ph2.png"
              alt="Product Home2"
            />
          </Link>
          {/* <!-- 手機 --> */}
          <Link to="/VrList">
            <img
              className="t-cus-image d-sm-none"
              src="/img/t-header/ph-mb2.png"
              alt="Product Home2"
            />
          </Link>
          {/* <!-- 電腦 --> */}
          <div className="d-none d-lg-block t-title-text col-lg-5">
            <div className="title-128 mb-8 lh-sm">透過歌曲感受時代風格</div>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-secondary" to="/VrList">
                <h3 className="mb-0 p-2">查看更多</h3>
              </Link>
            </div>
          </div>
          {/* <!-- 手機 --> */}
          <div className="d-lg-none t-title-text">
            <h1 className="mb-8 lh-sm">透過歌曲感受時代風格</h1>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-secondary" to="/VrList">
                <h6 className="mb-0">查看更多</h6>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <!-- 電腦 --> */}
          <Link to="/VrList">
            <img
              className="t-cus-image d-none d-lg-block"
              src="/img/t-header/ph3.png"
              alt="Product Home3"
            />
          </Link>
          {/* <!-- 手機 --> */}
          <Link to="/VrList">
            <img
              className="t-cus-image d-sm-none"
              src="/img/t-header/ph-mb3.png"
              alt="Product Home3"
            />
          </Link>
          {/* <!-- 電腦 --> */}
          <div className="d-none d-lg-block t-title-text col-lg-5">
            <div className="title-128 mb-8 lh-sm">還原聲音的真實面貌</div>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-secondary" to="/VrList">
                <h3 className="mb-0 p-2">查看更多</h3>
              </Link>
            </div>
          </div>
          {/* <!-- 手機 --> */}
          <div className="d-lg-none t-title-text">
            <h1 className="mb-8 lh-sm">還原聲音的真實面貌</h1>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-secondary" to="/VrList">
                <h6 className="mb-0">查看更多</h6>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default PHomeHeader
