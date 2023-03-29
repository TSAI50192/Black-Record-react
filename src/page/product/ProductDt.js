import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductImgSm from './component/ProductImgSm'
import ProductZoom from './component/ProductZoom'
import ProductLabel from './component/ProductLabel'
import ProductBread from './component/ProductBread'
import ProductInfo from './component/ProductInfo'
import SellingPrice from './component/SellingPrice'
import ProductYouLike from './component/ProductYouLike'
import ProductEvaluate from './component/ProductEvaluate'
import Talk from './component/Talk'
import { ALL_VR_DATA } from '../api_config'

function ProductDt() {
  const { number } = useParams()
  const [vinItem, setVinItem] = useState([])
  const [recordItem, setRecordItem] = useState([])
  const [otherItem, setOtherItem] = useState([])
  const [allvinyldata, setAllVinylData] = useState({
    vinyls: [],
  })
  const getAllvinyldata = async () => {
    const response = await axios.get(ALL_VR_DATA, {
      params: {},
    })
    setAllVinylData(response.data)
  }
  useEffect(() => {
    getAllvinyldata()
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  useEffect(() => {
    const getVinItemData = async () => {
      const response = await axios.get(
        `http://localhost:3001/db-all-vr-album/ProductDt/${number}`
      )
      setVinItem(response.data[0])
      console.log('response', response.data[0])
    }
    // console.log('vinItem', vinItem)
    // console.log('sid', number)
    getVinItemData()
  }, [])

  useEffect(() => {
    const getRecordItemData = async () => {
      const response = await axios.get(
        `http://localhost:3001/db-recordPlayerAll/ProductDt/${number}`
      )
      setRecordItem(response.data[0])
      console.log('response', response.data[0])
    }
    getRecordItemData()
  }, [])

  useEffect(() => {
    const getOtherItemData = async () => {
      const response = await axios.get(
        `http://localhost:3001/db-otherPorduct/ProductDt/${number}`
      )
      setOtherItem(response.data[0])
      console.log('response', response.data[0])
    }
    getOtherItemData()
  }, [])

  return (
    <>
      <main className="a-main bg-dark">
        <div className="a-productInfo container ">
          <div className="row row-cols-3 position-relative">
            {/* <ProductImgSm
              vinItem={vinItem}
              recordItem={recordItem}
              otherItem={otherItem}
            /> */}
            <div className="a-productDt col-4 text-center">
              <ProductZoom
                vinItem={vinItem}
                recordItem={recordItem}
                otherItem={otherItem}
              />
              <ProductLabel vinItem={vinItem} />
            </div>
            <div className="a-RightSide col-6 ">
              <ProductBread />
              <ProductInfo
                vinItem={vinItem}
                recordItem={recordItem}
                otherItem={otherItem}
              />
              <SellingPrice
                vinItem={vinItem}
                recordItem={recordItem}
                otherItem={otherItem}
              />
            </div>
          </div>
        </div>
      </main>
      <main className="a-main bg-light">
        <div className="container ">
          <div className="row">
            <div className="col">
              <p className="h3">你可能還會喜歡</p>
              <div className="a-underLine mb-8" />
              <div class="a-swiper-slide d-flex gap-3">
                <ProductYouLike
                  vinyls={allvinyldata}
                  vinItem={vinItem}
                  recordItem={recordItem}
                  otherItem={otherItem}
                />
           
            
              </div>
              <div className="a-underLine my-8" />
            </div>
          </div>
        </div>
      </main>
      <main className="a-main bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">商品評價</p>
              <ProductEvaluate />
              <br />
              <Talk />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDt
