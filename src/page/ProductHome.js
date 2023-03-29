import React, { useEffect, useState } from 'react'
import { VR_DATA, REC_DATA, MERCH_DATA, CUS_CROW_DATA } from '../api/api_config'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PHomeHeader from '../components/PHomeHeader'
import PHomeAVin from '../components/PHomeAVin'
import PHomeBRecordMerch from '../components/PHomeBRecordMerch'
import PHomeCCrow from '../components/PHomeCCrow'

function ProductHome() {
  const [vinyldata, setVinylData] = useState({
    vinyls: [],
  })

  const [recordData, setRecordData] = useState({
    recs: [],
  })

  const [merchData, setMerchData] = useState({
    merchs: [],
  })

  const [crowData, setCrowData] = useState({
    crow: [],
  })

  //前端寫法，axios.get是指發送的方法用get，會將params的陣列轉換成currentString
  const getVinylData = async () => {
    const response = await axios.get(VR_DATA, {
      ////URL参數放在params屬性裏面
      params: {},
    })
    // response.data 會依據回應的檔頭作解析, JSON
    setVinylData(response.data)
    // console.log(response.data)
  }

  const getRecData = async () => {
    const res = await axios.get(REC_DATA, {
      ////URL参數放在params屬性裏面
      params: {},
    })
    setRecordData(res.data)
    // console.log(res.data)
  }

  const getMerchData = async () => {
    const res = await axios.get(MERCH_DATA, {
      ////URL参數放在params屬性裏面
      params: {},
    })
    setMerchData(res.data)
    // console.log(res.data)
  }

  const getCrowData = async () => {
    const res = await axios.get(CUS_CROW_DATA, {
      params: {},
    })
    setCrowData(res.data)
  }

  // useEffect 是在 render渲染 後才做
  useEffect(() => {
    //如果一進來就要發AJAX，就要放這裡
    //設定功能
    getVinylData()
    getRecData()
    getMerchData()
    getCrowData()

    return () => {
      // 解除功能(在元件被抽掉/跳轉別的頁面時，執行此部分來中斷)
    }
  }, [])

  return (
    <div className="bg-light">
      {/* <!-- 輪播牆 --> */}
      <header className="container-fluid g-0 position-relative t-mb-200 t-pdhomeheader">
        <PHomeHeader />
      </header>

      <main className="container-fluid row g-0">
        {/* <!-- 獨家販售、熱門商品、最新上架 --> */}
        <section>
          <PHomeAVin vinyls={vinyldata.vinyls} />
        </section>

        {/* <!-- 唱片機、周邊商品 --> */}
        <section>
          {/* <!-- 電腦 --> */}
          <div className="d-none d-lg-flex">
            <PHomeBRecordMerch
              recs={recordData.recs}
              merchs={merchData.merchs}
            />
          </div>
        </section>

        {/* <!-- 募資、預購 --> */}
        <section>
          {/* <!-- 手機 --> */}
          <div className="d-lg-none">
            {/* <!-- 募資商品 --> */}
            <div className="bg-dark text-white px-8 py-12">
              <h3 className="text-center">募資商品</h3>
              <Link
                to="/"
                className="btn d-flex justify-content-center mb-8 text-success"
              >
                <h6 className="me-1 mb-0">詳細資訊</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                  fill="#B58686"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Link>
              <Link to="/">
                <img
                  className="t-four-img"
                  src="/img/products/vin/一人一首代表作-告白氣球(周杰倫) 光年之外(鄧紫棋)LP黑膠唱片1250.jpg"
                  alt="Queen皇后樂隊波西米亞狂想曲1550"
                />
              </Link>

              <h4 className="mb-5 lh-sm height-two">
                老派浪漫｜美國ION Audio 3合1復古箱式黑膠唱機 × AM/FM
                收音機【TRIO LP neo】｜黑膠文藝復興 串起世代共鳴
              </h4>
              <div className="text-18-400 lh-sm mb-8 height-four">
                黑膠唱片近年襲捲音樂圈，不管是老歌星的唱片經典復刻，或是新一代歌手跟進黑膠熱潮；做為一個音樂愛好者，擁有實體唱片的浪漫，是串流音樂所無法取代的。
              </div>
              <div className="d-flex justify-content-between">
                <h5>NT$ 88888</h5>
                <h6 className="text-info align-self-end">剩下 33 天</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: '10%' }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex justify-content-between text-tag mt-2">
                <h6>1 人支持</h6>
                <h6>10 %</h6>
              </div>
            </div>
            {/* <!-- 預購商品 --> */}
            <div className="px-8 py-12">
              <h3 className="text-center">預購商品</h3>
              <Link
                to="/"
                className="btn d-flex justify-content-center mb-8 text-success"
              >
                <h6 className="me-1 mb-0">詳細資訊</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                  fill="#B58686"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Link>
              <Link to="/">
                <img
                  className="t-four-img"
                  src="/img/products/vin/一人一首代表作-告白氣球(周杰倫) 光年之外(鄧紫棋)LP黑膠唱片1250.jpg"
                  alt="Queen皇后樂隊波西米亞狂想曲1550"
                />
              </Link>

              <h4 className="mb-5 lh-sm height-two">
                老派浪漫｜美國ION Audio 3合1復古箱式黑膠唱機 × AM/FM
                收音機【TRIO LP neo】｜黑膠文藝復興 串起世代共鳴
              </h4>
              <div className="text-18-400 lh-sm mb-8 height-four">
                黑膠唱片近年襲捲音樂圈，不管是老歌星的唱片經典復刻，或是新一代歌手跟進黑膠熱潮；做為一個音樂愛好者，擁有實體唱片的浪漫，是串流音樂所無法取代的。
              </div>
              <div className="d-flex justify-content-between">
                <h5>NT$ 88888</h5>
                <h6 className="text-info align-self-end">剩下 33 天</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: '10%' }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex justify-content-between text-tag mt-2">
                <h6>1 人支持</h6>
                <h6>10 %</h6>
              </div>
            </div>
          </div>

          {/* <!-- 電腦 --> */}
          <div className="d-none d-lg-flex">
            {/* <!-- 募資商品 --> */}
            <PHomeCCrow crow={crowData.crow} />
            {/* <div className="col-6 px-15 py-16">
              <h1 className="d-flex justify-content-center">募資商品</h1>
              <Link
                to="/"
                className="btn d-flex justify-content-center mb-8 text-success"
              >
                <h4 className="me-2 mb-0">詳細資訊</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                  fill="#B58686"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Link>

              <div className="mx-8">
                <Link to="/">
                  <img
                    className="t-four-img"
                    src="/img/products/vin/一人一首代表作-告白氣球(周杰倫) 光年之外(鄧紫棋)LP黑膠唱片1250.jpg"
                    alt="Queen皇后樂隊波西米亞狂想曲1550"
                  />
                </Link>

                <h3 className="mb-5 lh-sm height-two">
                  老派浪漫｜美國ION Audio 3合1復古箱式黑膠唱機 × AM/FM
                  收音機【TRIO LP neo】｜黑膠文藝復興 串起世代共鳴
                </h3>
                <h5 className="mb-8 height-two">
                  黑膠唱片近年襲捲音樂圈，不管是老歌星的唱片經典復刻，或是新一代歌手跟進黑膠熱潮；做為一個音樂愛好者，擁有實體唱片的浪漫，是串流音樂所無法取代的。
                </h5>
                <div className="d-flex justify-content-between">
                  <h4>NT$ 88888</h4>
                  <h6 className="text-info align-self-end">剩下 33 天</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    style={{ width: '10%' }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex justify-content-between text-tag mt-2">
                  <h6>1 人支持</h6>
                  <h6>10 %</h6>
                </div>
              </div>
            </div> */}
            {/* <!-- 預購商品 --> */}
            {/* <div className="bg-dark col-6 px-15 py-16 text-white">
              <h1 className="d-flex justify-content-center">預購商品</h1>
              <Link
                to="/"
                className="btn d-flex justify-content-center mb-8 text-success"
              >
                <h4 className="me-2 mb-0">詳細資訊</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                  fill="#B58686"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Link>

              <div className="mx-8">
                <Link to="/">
                  <img
                    className="t-four-img"
                    src="/img/products/vin/一人一首代表作-告白氣球(周杰倫) 光年之外(鄧紫棋)LP黑膠唱片1250.jpg"
                    alt="Queen皇后樂隊波西米亞狂想曲1550"
                  />
                </Link>

                <h3 className="mb-5 lh-sm height-two">
                  老派浪漫｜美國ION Audio 3合1復古箱式黑膠唱機 × AM/FM
                  收音機【TRIO LP neo】｜黑膠文藝復興 串起世代共鳴
                </h3>
                <h5 className="mb-8 height-two">
                  黑膠唱片近年襲捲音樂圈，不管是老歌星的唱片經典復刻，或是新一代歌手跟進黑膠熱潮；做為一個音樂愛好者，擁有實體唱片的浪漫，是串流音樂所無法取代的。
                </h5>
                <div className="d-flex justify-content-between">
                  <h4>NT$ 88888</h4>
                  <h6 className="text-info align-self-end">剩下 33 天</h6>
                </div>
                <div className="progress t-progress">
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    style={{ width: '10%' }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  )
}

export default ProductHome
