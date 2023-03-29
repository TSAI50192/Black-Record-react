import React, { useEffect, useState } from 'react'
import LeftSideForm from './components/LeftSideForm'
import Top5List from './components/Top5List'
// import CenterNav from './components/CenterNav'
import CenterListCard from './components/CenterListCard'
import Arrangement from './components/Arrangement'
import { ALL_VR_DATA, vrPlayerAll_Data, otherPorductData } from '../api_config'
import axios from 'axios'

function VrList() {
  const [allvinyldata, setAllVinylData] = useState({
    vinyls: [],
  })
  //黑膠唱片資料表初始化

  const [PlData, setPlData] = useState({
    rev: [],
  })
  // 黑膠唱機資料表初始化

  const [OtherData, setOtherData] = useState({
    other: [],
  })

  // const [search, setSearch] = useState('')

  const getAllVinylData = async () => {
    const response = await axios.get(ALL_VR_DATA, {
      params: {},
    })
    // console.log(rev.data)
    setAllVinylData(response.data)
    console.log(response.data)
  }
  // 獲取黑膠唱片資料

  const getPlData = async () => {
    const response = await axios.get(vrPlayerAll_Data, {
      params: {},
    })
    setPlData(response.data)
    console.log(response.data)
  }
  // 獲取黑膠唱機資料

  const getOtherData = async () => {
    const response = await axios.get(otherPorductData, {
      params: {},
    })
    setOtherData(response.data)
    console.log(response.data)
  }
  // 獲取其他商品資料
  // const filterBySearch = (vinyls, search) => {
  //   return vinyls.filter((v, i) => {
  //     return v.includes(search)
  //   })
  // }

  // 接搜尋結果變數
  const [itemOutput,setItemOutput] = useState('all') 
  const [priceOutput,setPriceOutput] = useState('all') 
  // didMount呼叫傳回的資料
  useEffect(() => {
    getAllVinylData()
    getPlData()
    getOtherData()
    return () => {}
  }, [])

  return (
    <>
      <main className="a-main bg-dark">
        <div className="a-product container">
          <div className="row col-12">
            {/* <div className="a-menuLeft col-12 col-md-2"> */}
            <div className="a-menuLeft col-3">
              <p className="a-menuLeftLabel h4">搜尋商品</p>
              {/* 左側Form表單元件 */}
              {/* <LeftSideForm search={search} setSearch={setSearch} /> */}
              <LeftSideForm 
                vinyls={allvinyldata.vinyls}
                rev={PlData.rev}
                other={OtherData.other}
                setItemOutput={setItemOutput}
                setPriceOutput={setPriceOutput}
                />
              {/* 左側Top5元件 */}
              <Top5List vinyls={allvinyldata.vinyls} />
            </div>
            {/* <div className="a-centerList col-12 col-md-10"> */}
            <div className="a-centerList col-9">
              {/* 中間麵包屑元件 */}
              {/* <CenterNav /> */}
              {/* 排序按鈕*/}
              <Arrangement />

              <div className="a-productListFs">
                <div className="row row-cols-sm-2 row-cols-lg-4 ms-10">
                  {/*商品列表卡片 */}
                  <CenterListCard
                    vinyls={allvinyldata.vinyls}
                    rev={PlData.rev}
                    other={OtherData.other}
                    itemOutput={itemOutput}
                    priceOutput={priceOutput}
                    // filterBySearch={filterBySearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default VrList
