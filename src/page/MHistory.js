import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ML4page from '../components/ML4page'
import axios from 'axios'
import MMHistory from '../components/MMHistory'
import { ORDER_LIST, DETAIL_ALL } from '../api/api_config'

function MHistory() {
  const [orderlistdata, setOrderlistData] = useState({
    orderlist: [],
  })

  //詳細資訊ALL
  // const [detailalllistdata, setALLDetatilData] = useState({
  //   detailalllist: [],
  // })
  let sid = window.localStorage.getItem('user') || 1
  const getOrderlistData = async () => {
    const response = await axios.get(ORDER_LIST +'/' + sid,  {
      ////URL参數放在params屬性裏面
      params: {},
    })
    // console.log('eddie',response.data);
    setOrderlistData(response.data)
  }

  //詳細資訊ALL
  // let sid = window.localStorage.getItem('user')
  // const getALLDetailData = async () => {
  //   const response = await axios.get(ORDER_LIST, +'/' + sid, {
  //     ////URL参數放在params屬性裏面
  //     params: {},
  //   })
  //   setALLDetatilData(response.data)
  // }

  useEffect(() => {
     getOrderlistData()
    //getALLDetailData() //詳細資訊
    //console.log(orderlist)
    return () => {}
  }, [])

  return (
    <section className="container-fluid mbg px-5 pb-5 ">
      <div className="container memberpage">
        <div className="row">
          <div>
            <div>
              <div className="memberlistgroup-sm d-lg-none">
                {/* 手機版上四分類 */}
                <Link to="/MEdit" className="col memberlistgroupitem h3">
                  個人資料
                </Link>
                <Link to="/MCoupon" className="col memberlistgroupitem h3">
                  優惠劵
                </Link>
                <Link to="/MHistory" className="col memberlistgroupitem h3">
                  訂單紀錄
                </Link>
                <Link to="/MWishlist" className="col memberlistgroupitem h3">
                  我的收藏
                </Link>
              </div>
            </div>
            <span className="mlogout">
              {/* <button className="btn btn-secondary px-10 h4">登出</button> */}
            </span>
            <div className="memberedit  d-flex">
              <ML4page />
              <MMHistory
                orderlist={orderlistdata.orderlist}
                // detailalllist={detailalllistdata.detailalllist}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MHistory
