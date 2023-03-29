import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ML4page from '../components/ML4page'
import MMCoupon from '../components/MMCoupon'
import axios from 'axios'
import { MEMBER_COUPON } from '../api/api_config'

function MCoupon() {
  const [coupondata, setCouponData] = useState({
    coupon: [],
  })

  let sid = window.localStorage.getItem('user')
  const getCouponData = async () => {
    const response = await axios.get(MEMBER_COUPON + '/' + sid, {
      ////URL参數放在params屬性裏面
      params: {},
    })
    setCouponData(response.data)
  }

  //按按紐才發送的不要放在useEffect
  //一進來就要拿到資料就放在useEffect
  useEffect(() => {
    //設定功能
    getCouponData()

    return () => {
      //解除功能
    }
  }, [])

  return (
    <section className="container-fluid mbg px-5 pb-5 ">
      <div className="container memberpage">
        <div className="row">
          <div>
            <span className="mlogout d-lg-none">
              <button className=" mb-3 h4">登出</button>
            </span>

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
            <MMCoupon coupon={coupondata.coupon} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MCoupon
