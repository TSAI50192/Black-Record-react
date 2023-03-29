import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ML4page from '../components/ML4page'
import MMWishList from '../components/MMWishList'
import axios from 'axios'
import {
  MEMBER_WISHLISTME,
  MEMBER_WISHLISTRE,
  MEMBER_WISHLISTVR,
  DELETE_WISHLISTVR,
  DELETE_WISHLISTRE,
  DELETE_WISHLISTME,
} from '../api/api_config'

function MWishlist() {
  const [wishlistVRdata, setWishlistVRData] = useState({
    wishlistVR: [],
  })

  const [wishlistMEdata, setWishlistMEData] = useState({
    wishlistME: [],
  })

  const [wishlistREdata, setWishlistREData] = useState({
    wishlistRE: [],
  })

  let sid = window.localStorage.getItem('user')

  const getWishMEData = async () => {
    const res = await axios.get(MEMBER_WISHLISTME + '/' + sid, {
      params: {},
    })
    setWishlistMEData(res.data)
  }

  const getWishREData = async () => {
    const res = await axios.get(MEMBER_WISHLISTRE + '/' + sid, {
      params: {},
    })
    setWishlistREData(res.data)
  }
  const getWishVRData = async () => {
    const res = await axios.get(MEMBER_WISHLISTVR + '/' + sid, {
      params: {},
    })
    setWishlistVRData(res.data)
  }

  //刪除VR
  const removeItemVR = async (itemID = 0) => {
    if (!+itemID) {
      return
    }
    console.log(itemID) //有SID
    const response = await axios.delete(DELETE_WISHLISTVR + '/' + itemID)
    console.log(response.data)
    getWishVRData() //頁面重整
  }

  //刪除RE
  const removeItemRE = async (itemID = 0) => {
    if (!+itemID) {
      return
    }
    console.log(itemID) //有SID
    const response = await axios.delete(DELETE_WISHLISTRE + '/' + itemID)
    console.log(response.data)
    getWishREData() //頁面重整
  }

  //刪除ME
  const removeItemME = async (itemID = 0) => {
    if (!+itemID) {
      return
    }
    console.log(itemID) //有SID
    const response = await axios.delete(DELETE_WISHLISTME + '/' + itemID)
    console.log(response.data)
    getWishMEData() //頁面重整
  }

  useEffect(() => {
    getWishVRData()
    getWishREData()
    getWishMEData()

    return () => {}
  }, [])

  return (
    <section className="container-fluid mbg px-5 pb-5 ">
      <div className="container memberpage">
        <div className="row">
          <div>
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
                {/* <button className="btn btn-seconda。ry px-10 h4">登出</button> */}
              </span>
              <div className="memberedit  d-flex">
                <ML4page />
                <MMWishList
                  wishlistME={wishlistMEdata.wishlistME}
                  wishlistRE={wishlistREdata.wishlistRE}
                  wishlistVR={wishlistVRdata.wishlistVR}
                  removeItemVR={removeItemVR}
                  removeItemRE={removeItemRE}
                  removeItemME={removeItemME}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MWishlist
