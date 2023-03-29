import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../store'
import axios from 'axios'
import { CUS_UPLOAD } from '../api/api_config'
import Swal from 'sweetalert2'

function CusDFinsh({
  dataFromChildBUpload,
  dataFromChildCImg,
  setDataFromChildBUpload,
  setDataFromChildCImg,
  setDataFromChildDFinish,
}) {
  //預備傳給父元素的值
  const [fData, setFData] = useState([])
  const [state, dispatch] = useContext(CartContext)

  const handleToCart = async (e) => {
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
    if (!dataFromChildCImg) {
      Swal.fire({
        title: '請返回第三步選擇包裝材質',
        icon: 'info',
        confirmButtonText: '確認',
      }).then((result) => {
        if (result.isConfirmed) {
          const targetElement = document.getElementById('third-step')
          if (targetElement) {
            window.location.hash = '#third-step'
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' })
            }, 500) // 延遲 0.5 秒後滾動至目標位置
          }
        }
      })
      // alert('請返回第三步選擇包裝材質')
      // window.location.assign('/Customization#third-step')
      return
    }
    if (dataFromChildBUpload[1]) {
      //使用 fetch() API 將 blob 作為 Blob 對象獲取，然後將此 Blob 對像傳遞給 FormData 對象。
      const response = await fetch(dataFromChildBUpload[1])
      const blob = await response.blob()

      const fd = new FormData()
      fd.append('avatar', blob, dataFromChildBUpload[0].cus_name)

      axios.post(CUS_UPLOAD, fd).then((res) => {
        // console.log(res)
      })

      // console.log('file', blob)
      setFData([dataFromChildBUpload, dataFromChildCImg])
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...dataFromChildBUpload,
          ...dataFromChildCImg,
          quantity: 1,
        },
      })
      // console.log('dataFromChildBUpload[1]', dispatch)
      Swal.fire({
        title: '成功!',
        text: `已成功加入購物車，您的音樂作品報價為 NT$ ${
          dataFromChildBUpload.cus_price + dataFromChildCImg.mat_price ||
          dataFromChildBUpload[0].cus_price + dataFromChildCImg.mat_price
        }，\n請至購物車查看商品並完成付款。`,
        icon: 'success',
        confirmButtonText: '確認',
      }).then((result) => {
        if (result.isConfirmed) {
          const targetElement = document.getElementById('first-step')
          if (targetElement) {
            window.location.hash = '#first-step'
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' })
            }, 500) // 延遲 0.5 秒後滾動至目標位置
          }
        }
      })
     
      //返回空值，讓會員重新搭配
      setDataFromChildBUpload('')
      setDataFromChildCImg('')
      // window.location.assign('/Customization#first-step')
    }
    if (!dataFromChildBUpload[1]) {
      setFData([dataFromChildBUpload, dataFromChildCImg])
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...dataFromChildBUpload,
          ...dataFromChildCImg,
          quantity: 1,
        },
      })
      // console.log('!!!!dataFromChildBUpload[1]', dispatch)
      Swal.fire({
        title: '成功!',
        text: `已成功加入購物車，您的音樂作品報價為 NT$ ${
          dataFromChildBUpload.cus_price + dataFromChildCImg.mat_price ||
          dataFromChildBUpload[0].cus_price + dataFromChildCImg.mat_price
        }，請至購物車查看商品並完成付款。`,
        icon: 'success',
        confirmButtonText: '確認',
      }).then((result) => {
        if (result.isConfirmed) {
          const targetElement = document.getElementById('first-step')
          if (targetElement) {
            window.location.hash = '#first-step'
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' })
            }, 500) // 延遲 0.5 秒後滾動至目標位置
          }
        }
      })
      
      //返回空值，讓會員重新搭配
      setDataFromChildBUpload('')
      setDataFromChildCImg('')
      // window.location.assign('/Customization#first-step')
    }
  }

  useEffect(() => {
    setDataFromChildDFinish(fData)
    // console.log('state', state)
    // console.log('fData', fData)
    // console.log('dataFromChildBUpload', dataFromChildBUpload)
    // console.log('dataFromChildCImg', dataFromChildCImg)
  }, [fData])

  if (dataFromChildBUpload && dataFromChildBUpload.length > 0) {
    // console.log(dataFromChildBUpload[0].cus_price)
  }

  return (
    <div className="t-card-group">
      {/* <!-- 左邊選單 --> */}
      {/* <!-- 手機 --> */}
      <div className="d-flex position-relative justify-content-end d-lg-none">
        <img
          className="t-cus-4"
          src="/img/card/Still Waters Run Deep.jpg"
          alt="Still Waters Run Deep"
          width="140"
        />
        <img src="/img/card/vinly.png" alt="vinly" width="140" />
      </div>

      {/* <!-- 電腦 --> */}
      <div className="d-none d-lg-flex col-lg-6 mx-lg-8 position-relative justify-content-end">
        {dataFromChildCImg ? (
          <img
            className="t-cus-4-material"
            src={`/img/card/material/${dataFromChildCImg.mat_image}`}
            alt={dataFromChildCImg.mat_name}
          />
        ) : (
          <img className="t-cus-4-material" src="/img/card/cus-bg.png" alt="" />
        )}

        {dataFromChildBUpload && dataFromChildBUpload.cus_image ? (
          <img
            className="t-cus-4"
            src={`/img/card/${dataFromChildBUpload.cus_image}`}
            alt={dataFromChildBUpload.cus_name}
          />
        ) : dataFromChildBUpload ? (
          <img
            className="t-cus-4"
            src={dataFromChildBUpload[1]}
            alt={dataFromChildBUpload[1]}
          />
        ) : (
          <img
            className="t-cus-4"
            src={`/img/card/${dataFromChildBUpload}`}
            alt=""
            width="500"
          />
        )}

        <img src="/img/card/vinly.png" alt="vinly" width="500" />
      </div>

      {/* <!-- 右邊選單 --> */}
      <div className="col-lg-6 text-center">
        {/* <!-- 手機 --> */}
        <div className="d-lg-none">
          <h3 className="mt-6 mb-0">FINISHED</h3>
          <h5>您的音樂作品報價為</h5>
          {/* <h2 className="my-8 text-info">NT$ {dataFromChildBUpload[5]}</h2> */}
        </div>

        {/* <!-- 電腦 --> */}
        <div className="d-none d-lg-block">
          <h1>FINISHED</h1>
          <h2>您的音樂作品報價為</h2>
          <h1 className="my-12 text-info fw-bold">
            {
              //計算預設照片費用
              dataFromChildBUpload &&
              dataFromChildBUpload.cus_image &&
              dataFromChildCImg
                ? `NT$ ${
                    dataFromChildBUpload.cus_price + dataFromChildCImg.mat_price
                  }`
                : //計算上傳照片費用
                dataFromChildBUpload &&
                  dataFromChildBUpload.length > 0 &&
                  dataFromChildCImg
                ? `NT$ ${
                    dataFromChildBUpload[0].cus_price +
                    dataFromChildCImg.mat_price
                  }`
                : '開始打造您的黑膠唱片'
            }
          </h1>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success px-5 py-4 d-flex"
            onClick={handleToCart}
          >
            <h4 className="mb-0 d-lg-none">放入購物車</h4>
            <h3 className="mb-0 d-none d-lg-block">放入購物車</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CusDFinsh
