import React, { useEffect, useState } from 'react'
import { CUS_ITEM_DATA, CUS_MATER_DATA } from '../api/api_config'
import axios from 'axios'
import Swal from 'sweetalert2'
import CusHeader from '../components/CusHeader'
import CusAImgMusic from '../components/CusAImgMusic'
import CusBUpload from '../components/CusBUpload'
import CusCImg from '../components/CusCImg'
import CusDFinish from '../components/CusDFinish'

function Customization() {
  // 父母元件定義一個，準備接受來自子女元件的資料的狀態
  const [dataFromChildA, setDataFromChildA] = useState('')
  const [showAlert, setShowAlert] = useState(true)
  const [dataFromChildBUpload, setDataFromChildBUpload] = useState('')
  const [dataFromChildCImg, setDataFromChildCImg] = useState('')
  const [dataFromChildDFinish, setDataFromChildDFinish] = useState('')
  const [citemdata, citemSetData] = useState({
    totalRows: 0,
    citem: [],
  })

  const [materdata, materSetData] = useState({
    matertotalRows: 0,
    mater: [],
  })

  //前端寫法，axios.get是指發送的方法用get，會將params的陣列轉換成currentString
  const getCitemData = async () => {
    const response = await axios.get(CUS_ITEM_DATA, {
      ////URL参數放在params屬性裏面
      params: {},
    })
    // response.data 會依據回應的檔頭作解析, JSON
    citemSetData(response.data)
    // console.log(response.data)
  }

  const getMaterData = async () => {
    const res = await axios.get(CUS_MATER_DATA, {
      ////URL参數放在params屬性裏面
      params: {},
    })
    materSetData(res.data)
    // console.log(res.data)
  }

  // useEffect 是在 render渲染 後才做
  useEffect(() => {
    //如果一進來就要發AJAX，就要放這裡
    //設定功能
    getCitemData()
    getMaterData()

    return () => {
      // 解除功能(在元件被抽掉/跳轉別的頁面時，執行此部分來中斷)
    }
  }, [])
  // console.log('dataFromChildDFinish', dataFromChildDFinish)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      const triggerPoint = 900
      if (scrollY >= triggerPoint && showAlert) {
        setShowAlert(false) // 顯示alert後將showAlert設為false，防止重複顯示
        Swal.fire({
          title: '客製化黑膠唱片製作說明',
          html: `請依照下列步驟製作您的黑膠唱片：<br>
          1、選擇一首放入黑膠唱片的歌曲。<br>
          2、選擇一張照片製作唱片封面。<br>
          3、選擇包裝材質。<br>
          4、加入購物車，完成訂單。`,
          customClass: {
            htmlContainer: 't-text-left',
          },
          confirmButtonText: '開始製作您的專屬唱片吧！',
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAlert])

  return (
    <div className="bg-gray t-line-out">
      <header className="container-fluid g-0 position-relative mb-16 t-cusheader">
        <CusHeader />

        {/* <!-- 電腦 --> */}
        <div className="t-title-text d-none d-xl-block col-xxl-10 t-cus-zindex">
          <div className="d-flex align-items-center mb-7">
            <div className="t-cus"></div>
            <div className="title-80 text-info">打造專屬風格</div>
          </div>
          <div className="title-128">客製化黑膠唱片</div>
        </div>

        {/* <!-- 手機 --> */}
        <div className="t-title-text d-xl-none t-cus-zindex">
          <div className="d-flex align-items-center">
            <div className="t-cus"></div>
            <div className="text-28-400 text-info">打造專屬風格</div>
          </div>
          <div className="title-58 lh-sm">客製化黑膠唱片</div>
        </div>
      </header>

      <main className="t-line">
        {/* <!-- 第 1 步 --> */}
        <section className="mb-8 mb-md-13" id="first-step">
          <div className="bg-logo t-step">
            <h4 className="d-inline-block align-middle d-lg-none">1</h4>
            <h1 className="d-none d-lg-inline-block">1</h1>
          </div>
          <CusAImgMusic
            citem={citemdata.citem}
            setDataFromChildA={setDataFromChildA}
          />
        </section>

        {/* <!-- 第 2 步 --> */}
        <section className="mb-8 mb-md-13" id="second-step">
          <div className="bg-logo t-step">
            <h4 className="d-inline-block align-middle d-lg-none">2</h4>
            <h1 className="d-none d-lg-inline-block">2</h1>
          </div>
          <CusBUpload
            dataFromChildA={dataFromChildA}
            setDataFromChildBUpload={setDataFromChildBUpload}
          />
        </section>

        {/* <!-- 第 3 步 --> */}
        <section className="mb-8 mb-md-13" id="third-step">
          <div className="bg-logo t-step">
            <h4 className="d-inline-block align-middle d-lg-none">3</h4>
            <h1 className="d-none d-lg-inline-block">3</h1>
          </div>
          <CusCImg
            mater={materdata.mater}
            dataFromChildBUpload={dataFromChildBUpload}
            setDataFromChildCImg={setDataFromChildCImg}
          />
        </section>

        {/* <!-- 第 4 步 --> */}
        <section className="mb-10 mb-md-13" id="fourth-step">
          <div className="bg-logo t-step">
            <h4 className="d-inline-block align-middle d-lg-none">4</h4>
            <h1 className="d-none d-lg-inline-block">4</h1>
          </div>
          <CusDFinish
            dataFromChildBUpload={dataFromChildBUpload}
            dataFromChildCImg={dataFromChildCImg}
            setDataFromChildBUpload={setDataFromChildBUpload}
            setDataFromChildCImg={setDataFromChildCImg}
            setDataFromChildDFinish={setDataFromChildDFinish}
          />
        </section>
        {/* <h2>{dataFromChildDFinish}</h2> */}
      </main>
    </div>
  )
}

export default Customization
