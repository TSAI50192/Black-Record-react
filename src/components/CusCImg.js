import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper'
import Swal from 'sweetalert2'

function CusCImg({ mater, dataFromChildBUpload, setDataFromChildCImg }) {
  //預備傳給父元素的值
  const [cData, setCData] = useState(null)
  //獲取當前選中的幻燈片的索引值
  const [selectedPaperSlideIndex, setSelectedPaperSlideIndex] = useState(0)

  const handleToFinish = (e) => {
    if (!dataFromChildBUpload) {
      Swal.fire({
        title: '請返回第二步選擇一張照片製作唱片封面',
        icon: 'info',
        confirmButtonText: '確認',
      }).then((result) => {
        if (result.isConfirmed) {
          const targetElement = document.getElementById('second-step')
          if (targetElement) {
            window.location.hash = '#second-step'
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' })
            }, 500) // 延遲 0.5 秒後滾動至目標位置
          }
        }
      })
      // alert('請返回第二步選擇一張照片製作唱片封面')
      // window.location.assign('/Customization#second-step')
      return
    }
    setCData(mater[selectedPaperSlideIndex])
    window.location.assign('/Customization#fourth-step')
  }

  useEffect(() => {
    setDataFromChildCImg(cData)
  }, [cData])
  // console.log(dataFromChildBUpload)

  return (
    <>
      {/* swiper寫法 */}
      <div className="t-card-group">
        {/* 電腦--左邊選單 */}
        <div className="col-lg-8 me-lg-8 t-cus-music d-none d-lg-block t-music-mater">
          <Swiper
            effect={'coverflow'}
            grabCursor={true} //設置為true時，鼠標覆盖Swiper時指針會變成手掌形狀，拖曳時指針會變成抓手形狀。
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0, //slide做3d旋轉時Y軸的旋轉角度。
              stretch: 30, //每个slide之間的拉伸值，越大slide靠得越紧。可使用%百分比，以px為單位的。
              depth: 300, //slide的位置深度。值越大z軸距離越緊，看起来越小，以px為單位的。
              modifier: 2.5, //depth和rotate和stretch的倍率，相當於depth*modifier、rotate*modifier、stretch*modifier，值越大这三個參數的效果越明顯。
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="t_swiper_container"
            onSlideChange={(swiper) => {
              setSelectedPaperSlideIndex(swiper.activeIndex)
            }}
            onTouchEnd={(swiper) => {
              setSelectedPaperSlideIndex(swiper.activeIndex)
            }}
          >
            {mater.map((m) => {
              return (
                <SwiperSlide key={m.sid}>
                  <img
                    className="t-music-material"
                    src={`/img/card/material/${m.mat_image}`}
                    alt={m.mat_name}
                  />
                  <h3 className="text-center">NT$ {m.mat_price}</h3>
                  <div className="t-music-fourimg">
                    {dataFromChildBUpload && dataFromChildBUpload.cus_image ? (
                      <img
                        className="t-music-second-img"
                        src={`/img/card/${dataFromChildBUpload.cus_image}`}
                        alt={dataFromChildBUpload.cus_name}
                      />
                    ) : dataFromChildBUpload ? (
                      <img
                        className="t-music-second-img"
                        src={dataFromChildBUpload[1]}
                        alt={dataFromChildBUpload.cus_name}
                      />
                    ) : (
                      <img
                        className="t-music-second-img"
                        src="/img/card/cus-bg.png"
                        alt=""
                      />
                    )}
                  </div>
                </SwiperSlide>
              )
            })}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow"></div>
              <div className="swiper-button-next slider-arrow"></div>
            </div>
          </Swiper>
        </div>

        {/* <!-- 手機 --> */}
        <div className="text-center mb-8 d-lg-none">
          <h3 className="mb-0">PAPER</h3>
          <h5>選擇您的包裝材質</h5>
        </div>

        {/* 手機--左邊選單 */}
        <div className="t-cus-music d-lg-none mb-5 t-music-mater">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 200,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="t_swiper_container"
          >
            {mater.map((m) => {
              return (
                <SwiperSlide key={m.sid}>
                  <img
                    src={`/img/card/material/${m.mat_image}`}
                    alt={m.mat_name}
                  />
                  {/* <h5 className="text-center lh-1">{m.mat_name}</h5> */}
                </SwiperSlide>
              )
            })}

            <div className="t-cusa-controler">
              <div className="swiper-button-prev slider-arrow"></div>
              <div className="swiper-button-next slider-arrow"></div>
            </div>
          </Swiper>
        </div>

        {/* <!-- 右邊選單 --> */}
        <div className="col-lg-4 text-center">
          {/* <!-- 電腦 --> */}
          <div className="d-none d-lg-block">
            <h1>PAPER</h1>
            <h2>選擇您的包裝材質</h2>
            {/* <h3>{dataFromChildBUpload}</h3> */}
            <h1 className="my-12 text-info">
              {mater.length !== 0 && mater[selectedPaperSlideIndex].mat_name}
            </h1>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn p-0 d-flex t-step-hover"
              onClick={handleToFinish}
            >
              <h5 className="mb-0 d-lg-none t-step-hover">完成您的作品</h5>
              <h3 className="mb-0 d-none d-lg-block t-step-hover">
                完成您的作品
              </h3>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CusCImg
