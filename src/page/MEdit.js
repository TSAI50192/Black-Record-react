import React, { useEffect, useState } from 'react'
import ML4page from '../components/ML4page'
import MMEdit from '../components/MMEdit'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MEMBER_LIST } from '../api/api_config'

function MEdit() {
  const [memberdata, setMemberData] = useState({
    member: [],
  })

  let sid = window.localStorage.getItem('user') || 1
  // const [newmember, setnewMember] = useState({
  //   rows: [],
  // })

  const getMemberData = async () => {
    try {
      // const response = await axios.get(MEMBER_LIST, {
      //   ////URL参數放在params屬性裏面
      //   params: {sid},
      // })
      const response = await axios.get(MEMBER_LIST + '/' + sid)
      setMemberData(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  // const getNewMemberData = async () => {
  //   const response = await axios.get(MEMBER_LIST, {
  //     ////URL参數放在params屬性裏面
  //     params: {},
  //   })
  //   setnewMember(response.data)
  // }

  useEffect(() => {
    getMemberData()

    return () => {}
  }, [])

  return (
    <section className="container-fluid mbg px-5 pb-5 ">
      <div className="container memberpage">
        <div className="row">
          <div>
            <span className="mlogout  d-lg-none">
              <button className="mb-3 h4"></button>
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
            {/* <button className="btn btn-secondary px-10 h4"></button> */}
          </span>
          <div className="memberedit d-flex">
            <div>
              <ML4page />
            </div>
            <MMEdit member={memberdata.member} setMemberData={setMemberData} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MEdit
