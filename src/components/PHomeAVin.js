import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaStar } from 'react-icons/fa'
import { EffectCreative, Autoplay, Navigation } from 'swiper'

function PHomeAVin({ vinyls }) {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="d-flex justify-content-center">黑膠唱片</h1>
      <div
        className="btn d-flex justify-content-center mb-13"
        onClick={() => {
          navigate('/VrList')
        }}
      >
        <h4 className="me-2 mb-0 t-step-hover fw-bold">查看全部商品</h4>
        <img
          src="../img/svg/chevron-right.svg"
          alt="chevron-right"
          width="16"
        />
      </div>
      <div className="col d-none d-lg-flex t-mb-200 t-ph-firstproduct">
        <Swiper
          effect={'creative'}
          grabCursor={true}
          slidesPerView={1} //一次顯示的數量
          centeredSlides={true} //選中的圖片居中
          loop={true}
          autoplay={{
            //自動播放
            delay: 1500, //延遲時間
            disableOnInteraction: false, //自動播放在用戶交互（滑動）後不會被禁用，每次交互後都會重新啟動
            pauseOnMouseEnter: true, //滑鼠進入時暫停輪播
          }}
          speed={1000} //圖片轉場速度
          creativeEffect={{
            prev: {
              translate: ['-130%', 0, -500], //X, Y, Z
            },
            next: {
              translate: ['130%', 0, -500],
            },
          }}
          navigation={true}
          modules={[EffectCreative, Autoplay, Navigation]}
          className="mySwiper2"
        >
          {vinyls.map((vinyls) => {
            return (
              <SwiperSlide key={vinyls.sid}>
                <div className="position-relative d-flex t-ph-first-mx200">
                  <div
                    onClick={() => {
                      navigate(`/ProductDt/${vinyls.number}`)
                    }}
                  >
                    <img
                      className="t-first-img"
                      src={`/img/products/vin/${vinyls.vr_img}`}
                      alt={vinyls.vr_name}
                    />
                  </div>
                  <div className="t-first-card bg-black">
                    <div className="d-flex mb-5">
                      <Link to={`/ProductDt/${vinyls.number}`}>
                        <h2 className="bg-info fw-bold">
                          {vinyls.vr_type.split('/', 2)}
                        </h2>
                      </Link>

                      <div className="mt-7 ms-8" id="songAvatar">
                        <FaStar color="#FFDF00" size={50} className="me-5" />
                        <FaStar color="#FFDF00" size={50} className="me-5" />
                        <FaStar color="#FFDF00" size={50} className="me-5" />
                        <FaStar color="#FFDF00" size={50} className="me-5" />
                        <FaStar color="#FFDF00" size={50} />
                      </div>
                    </div>

                    <Link to={`/ProductDt/${vinyls.number}`}>
                      <div className="mx-10">
                        <div className="lh-base mb-5 height-two t-text-30">
                          {vinyls.vr_name}
                        </div>
                        <div className="text-21-500 lh-sm height-two text-gray">
                          {vinyls.vr_description}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      {/* <!-- 手機 --> */}
      <div className="col d-lg-none mb-16">
        <div className="col position-relative">
          <div className="t-first mx-8">
            <Link to={`/ProductDt/${vinyls.number}`}>
              <img
                className="t-first-img"
                src="/img/products/vin/一人一首代表作-告白氣球(周杰倫) 光年之外(鄧紫棋)LP黑膠唱片1250.jpg"
                alt="Queen皇后樂隊波西米亞狂想曲1550"
              />
            </Link>

            <Link to={`/ProductDt/${vinyls.number}`}>
              <div className="text-26 bg-info t-tag">獨家販售</div>
            </Link>
          </div>
          <div className="bg-dark t-only-bg"></div>
          <div className="bg-dark t-first-po">
            <div className="t-img">
              <img src="/img/svg/star-fill.svg" alt="star" width="28px" />
              <img src="/img/svg/star-fill.svg" alt="star" width="28px" />
              <img src="/img/svg/star-fill.svg" alt="star" width="28px" />
              <img src="/img/svg/star-fill.svg" alt="star" width="28px" />
              <img src="/img/svg/star-fill.svg" alt="star" width="28px" />
            </div>
            <Link to={`/ProductDt/${vinyls.number}`}>
              <div className="text-26 lh-sm my-3 height-two">
                史提夫派瑞_天團Journey主唱-飆風強音傳奇
              </div>
              <div className="text-18-400 lh-sm height-two">
                超級樂團-旅行者樂團Journey主唱&樂團靈魂--首張挺進全美專輯榜TOP
                10的個人專輯!!!
              </div>
            </Link>
            {/* <!-- 手機--選項 --> */}
            <div className="d-flex w-100 justify-content-center mt-8">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
              <ul className="t-slider-dots list-unstyled d-flex mb-0 align-items-center">
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFFFFF"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PHomeAVin
