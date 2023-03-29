import React, { useState, useEffect, useContext } from 'react'
import dayjs from 'dayjs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Autoplay, Navigation } from 'swiper'
import { CartContext } from '../store'
import Swal from 'sweetalert2'

function PHomeCCrow({ crow }) {
  const [state, dispatch] = useContext(CartContext)
  const calculateTimeLeft = () => {
    const remainingTime =
      new Date(crow.cro_time_end).getTime() - new Date().getTime()

    if (remainingTime <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60)
    const seconds = Math.floor((remainingTime / 1000) % 60)

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingTime = calculateTimeLeft()
      setTimeLeft(remainingTime)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [crow.cro_time_end])

  return (
    <>
      {/* <!-- 募資商品 --> */}
      <div className="col-6 px-12 py-15 t-crow-img bg-dark">
        <h1 className="d-flex justify-content-center mb-10 text-white">
          募資商品
        </h1>
        <div>
          <Swiper
            effect={'creative'}
            grabCursor={true}
            slidesPerView={1} //一次顯示的數量
            centeredSlides={true} //選中的圖片居中
            autoplay={{
              //自動播放
              delay: 1000, //延遲時間
              disableOnInteraction: false, //自動播放在用戶交互（滑動）後不會被禁用，每次交互後都會重新啟動
              pauseOnMouseEnter: true, //滑鼠進入時暫停輪播
            }}
            speed={500} //圖片轉場速度
            creativeEffect={{
              prev: {
                translate: ['-130%', 0, -200], //X, Y, Z
              },
              next: {
                translate: ['130%', 0, -200],
              },
            }}
            navigation={true}
            modules={[EffectCreative, Autoplay, Navigation]}
            className="mySwiper2"
          >
            {crow.map((crow) => {
              {
                /* console.log(crow.cro_plan_a) */
              }
              const croImgArr = crow.cro_img.split(',')
              return croImgArr.map((img, index) => (
                <SwiperSlide key={`${crow.sid}-${index}`}>
                  <div className=" text-center">
                    <img
                      className="t-four-img"
                      src={`/img/cro/${img}`}
                      alt={crow.cro_name}
                    />
                  </div>
                </SwiperSlide>
              ))
            })}
          </Swiper>
          {crow.map((crow) => {
            return (
              <div className="px-12" key={crow.sid}>
                <h3 className="mb-8 fw-bold lh-sm t-crow-align text-white">
                  {crow.cro_name}
                </h3>
                <div className="d-flex justify-content-between mb-8 text-tag">
                  <div className="mt-3">
                    <h4 className="fw-bold">
                      提案人&nbsp;&nbsp;
                      <span className="text-logo"> {crow.proposer}</span>
                    </h4>
                    <h4 className="fw-bold">
                      時&nbsp;&nbsp;&nbsp;&nbsp;程&nbsp;&nbsp;
                      <span className="text-logo">
                        {' '}
                        {dayjs(crow.cro_time_start).format('YYYY-MM-DD')}～
                        {dayjs(crow.cro_time_end).format('YYYY-MM-DD')}
                      </span>
                    </h4>
                  </div>
                  <div>
                    <h4 className="mb-0 text-end fw-bold">目標金額</h4>
                    <h2 className="text-info">NT$ {crow.target_price}</h2>
                  </div>
                </div>
                <h4 className="text-info align-self-end fw-bold">
                  剩餘時間{' '}
                  {Math.floor(
                    (new Date(crow.cro_time_end).getTime() -
                      new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}
                  天{' '}
                  {Math.floor(
                    ((new Date(crow.cro_time_end).getTime() -
                      new Date().getTime()) /
                      (1000 * 60 * 60)) %
                      24
                  )}
                  時{' '}
                  {Math.floor(
                    ((new Date(crow.cro_time_end).getTime() -
                      new Date().getTime()) /
                      1000 /
                      60) %
                      60
                  )}
                  分{' '}
                  {Math.floor(
                    ((new Date(crow.cro_time_end).getTime() -
                      new Date().getTime()) /
                      1000) %
                      60
                  )}
                  秒
                </h4>

                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-logo"
                    role="progressbar"
                    style={{
                      width: `${
                        (crow.cro_pre_order_amount / crow.target_price) * 100
                      }%`,
                    }}
                    aria-valuenow={crow.cro_pre_order_amount}
                    aria-valuemin="0"
                    aria-valuemax={crow.target_price}
                  ></div>
                </div>
                <div className="d-flex justify-content-between text-tag mt-2">
                  <h4 className="fw-bold">{crow.number_of_sponsors} 人支持</h4>
                  <h4 className="fw-bold">
                    {/* 向下取整至整數 */}
                    {Math.floor(
                      (crow.cro_pre_order_amount / crow.target_price) * 100
                    )}
                    %
                  </h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-dark col-6 t-crow-text text-white">
        {crow.map((crow) => {
          return (
            <div className="mx-8 t-crow-align text-center" key={crow.sid}>
              <div className="text-28-700 text-logo mb-3">專案內容</div>
              <div className="tsai-text-21-500 t-crow-align fw-light">
                {crow.cro_description}
              </div>
              <pre></pre>
              <div className="mb-8 tsai-text-21-500  t-crow-align fw-light">
                {crow.cro_project_content}
              </div>
              <div>
                <div className="text-28-700 text-logo mb-3">
                  選擇您想贊助的專案
                </div>
                <div className="d-flex m-3">
                  {/* A 專案 */}
                  <div className="p-6 t-crow-card card me-8">
                    <div className="text-28-700 text-info mb-5">
                      NT$ {crow.cro_plan_a_price}
                    </div>
                    <div className="flex-fill mb-5 fw-light">
                      <pre className="tsai-text-18-500 lh-sm">
                        {crow.cro_plan_a}
                      </pre>
                    </div>
                    <button
                      className="btn btn-success text-28-700"
                      onClick={(e) => {
                        dispatch({
                          type: 'ADD_TO_CART',
                          payload: {
                            cro_a_price: crow.cro_plan_a_price,
                            cro_img: crow.cro_img.split(',')[0],
                            cro_name: crow.cro_name,
                            quantity: 1,
                          },
                        })
                        Swal.fire({
                          title: '成功!',
                          text: `已將 ${crow.cro_name} 加到購物車`,
                          icon: 'success',
                          confirmButtonText: '確認',
                        })
                      }}
                    >
                      贊助 A 專案
                    </button>
                  </div>
                  {/* B 專案 */}
                  <div className="p-6 t-crow-card card">
                    <div className="text-28-700 text-info mb-5">
                      NT$ {crow.cro_plan_b_price}
                    </div>
                    <div className="flex-fill mb-5 fw-light">
                      <pre className="tsai-text-18-500 lh-sm">
                        {crow.cro_plan_b}
                      </pre>
                    </div>
                    <button
                      className="btn btn-success text-28-700"
                      onClick={(e) => {
                        dispatch({
                          type: 'ADD_TO_CART',
                          payload: {
                            cro_b_price: crow.cro_plan_b_price,
                            cro_img: crow.cro_img.split(',')[0],
                            cro_name: crow.cro_name,
                            quantity: 1,
                          },
                        })
                        Swal.fire({
                          title: '成功!',
                          text: `已將 ${crow.cro_name} 加到購物車`,
                          icon: 'success',
                          confirmButtonText: '確認',
                        })
                      }}
                    >
                      贊助 B 專案
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PHomeCCrow
