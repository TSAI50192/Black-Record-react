import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper'
import { FaRegPlayCircle, FaRegPauseCircle, FaStopCircle } from 'react-icons/fa'

function CusAImgMusic({ citem, setDataFromChildA }) {
  //預備傳給父元素的值
  const [aData, setAData] = useState(null)
  //獲取當前選中的幻燈片的索引值
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0)

  //歌曲進度條
  const [audioProgress, setAudioProgress] = useState(0)
  //選擇歌曲 -- 下一首、上一首
  const [musicIndex, setMusicIndex] = useState(0)
  //歌曲總長度
  const [musicTotalLength, setMusicTotalLength] = useState('00 : 00')
  //當前的長度
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00')

  const currentAudio = useRef()

  //歌曲進度條
  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value)
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100
  }

  //Play Audio Function 播放/暫停音樂 (控制<audio>)
  const handleAudioPlay = () => {
    currentAudio.current.play()
  }

  const handleAudioPause = () => {
    currentAudio.current.pause()
  }

  const handleAudioStop = () => {
    currentAudio.current.load()
    setAudioProgress(0)
    setMusicCurrentTime('00 : 00')
    currentAudio.current.play()
  }

  //選擇下一首歌曲，假設有三首
  const handleNextSong = () => {
    if (musicIndex >= citem.length - 1) {
      let selectedSlideIndex = 0 //此處播放索引值為 0 的歌曲
      setMusicIndex(selectedSlideIndex)
      updateCurrentMusicDetails(selectedSlideIndex)
    } else {
      let selectedSlideIndex = musicIndex + 1 //此處播放索引值為 1、2 的歌曲
      setMusicIndex(selectedSlideIndex)
      updateCurrentMusicDetails(selectedSlideIndex)
    }
  }

  //返回上一首歌曲，假設有三首
  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let selectedSlideIndex = citem.length - 1 //此處播放索引值為 2 的歌曲
      setMusicIndex(selectedSlideIndex)
      updateCurrentMusicDetails(selectedSlideIndex)
    } else {
      let selectedSlideIndex = musicIndex - 1 //此處播放索引值為 1、0 的歌曲
      setMusicIndex(selectedSlideIndex)
      updateCurrentMusicDetails(selectedSlideIndex)
    }
  }

  //更新成當前歌曲的詳細資料，包含圖片、歌名資訊等
  const updateCurrentMusicDetails = (selectedSlideIndex) => {
    let musicObject = citem[selectedSlideIndex]
    currentAudio.current.src = `/Assets/songs/${musicObject.cus_music}`
    currentAudio.current.load()
    setAudioProgress(0)
    setMusicCurrentTime('00 : 00')
    currentAudio.current.play()
  }

  const handleAudioUpdate = () => {
    //顯示 歌曲總長度
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60)
    let seconds = Math.floor(currentAudio.current.duration % 60)
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`
    setMusicTotalLength(musicTotalLength0)

    // 顯示 當前時間
    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60)
    let currentSec = Math.floor(currentAudio.current.currentTime % 60)
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`
    setMusicCurrentTime(musicCurrentT)

    //控制進度條
    // const progress = parseInt(
    //   (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    // )
    // setAudioProgress(isNaN(progress) ? 0 : progress)
  }

  useEffect(() => {
    setDataFromChildA(aData)
  }, [aData]) // 此元件初次render會執行一次第一個傳入參數，即箭頭函式中程式碼。接下來當aData有變化時，會再執行一次
  // 出現eslint警告(黃色虛線)，是因為它認為`setDataFromChildA`也需要加入到此陣列中，但此例中並不需要，加與加都無關結果
  // 此陣列參數稱為"相依性陣列"DependencyList，意即第一參數(函式)的執行，會相依照第二參數中放入的變數值變化來觸發執行

  return (
    <>
      {/* swiper寫法 */}
      <div className="t-card-group">
        {/* 電腦--左邊選單 */}
        <div className="col-lg-8 me-lg-8 t-cus-music d-none d-lg-block">
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
              setSelectedSlideIndex(swiper.activeIndex)
              updateCurrentMusicDetails(swiper.activeIndex)
            }}
            onTouchEnd={(swiper) => {
              setSelectedSlideIndex(swiper.activeIndex)
              updateCurrentMusicDetails(swiper.activeIndex)
            }}
          >
            {citem.map((c) => {
              return (
                <SwiperSlide key={c.sid}>
                  <img
                    className="t-firststep-img
                  "
                    src={`/img/card/${c.cus_image}`}
                    alt={c.cus_name}
                  />
                  <h3 className="text-center">NT$ {c.cus_price}</h3>
                </SwiperSlide>
              )
            })}
            <audio
              src="/Assets/songs/Still Waters Run Deep.mp3"
              // {`/Assets/songs/${citem.length !== 0 && citem[selectedSlideIndex].cus_music}`}
              ref={currentAudio}
              onEnded={handleAudioStop}
              onTimeUpdate={handleAudioUpdate}
            ></audio>

            <div className="slider-controler">
              <div
                className="swiper-button-prev slider-arrow"
                onClick={handlePrevSong}
              ></div>
              <div
                className="swiper-button-next slider-arrow"
                onClick={handleNextSong}
              ></div>
            </div>
          </Swiper>
        </div>

        {/* <!-- 手機 --> */}
        <div className="text-center mb-8 d-lg-none">
          <h3 className="mb-0">MUSIC</h3>
          <h5>選擇您的音樂</h5>
        </div>

        {/* 手機--左邊選單 */}
        <div className="t-cus-music d-lg-none mb-5">
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
            {citem.map((c) => {
              return (
                <SwiperSlide key={c.sid}>
                  <img src={`/img/card/${c.cus_image}`} alt={c.cus_name} />
                  <h5 className="text-center lh-1">{c.cus_name}</h5>
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
            <h1>MUSIC</h1>
            <h2>選擇您的音樂</h2>
            <h2 className="my-9 text-info">
              {/* Selected slide index: {selectedSlideIndex} */}
              {citem.length !== 0 && citem[selectedSlideIndex].cus_name}
            </h2>
          </div>

          {/* <!-- 共用進度條 --> */}
          <div className="mx-lg-10">
            <div className="t-music-timerdiv">
              <h5 className="mb-0">{musicCurrentTime}</h5>
              <h5 className="mb-0">{musicTotalLength}</h5>
            </div>
            <input
              type="range"
              name="t-music-progressbar"
              className="t-music-progressbar"
              value={audioProgress}
              onChange={handleMusicProgressBar}
            />
          </div>

          {/* <!-- 共用播放器按鈕 --> */}
          <div className="mb-10">
            <div className="t-music-controlers">
              <i className="t-music-controler" onClick={handleAudioStop}>
                <FaStopCircle />
              </i>
              <i className="t-music-playbtn" onClick={handleAudioPlay}>
                <FaRegPlayCircle />
              </i>
              <i className="t-music-controler" onClick={handleAudioPause}>
                <FaRegPauseCircle />
              </i>
            </div>
          </div>

          {/* <!-- 下一步 --> */}
          <div className="d-flex justify-content-center">
            <a href="#second-step">
              <button
                className="btn p-0 d-flex t-step-hover"
                onClick={() => {
                  setAData(citem[selectedSlideIndex])
                }}
              >
                <h5 className="mb-0 d-lg-none t-step-hover">下一步</h5>
                <h3 className="mb-0 d-none d-lg-block t-step-hover">下一步</h3>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CusAImgMusic
