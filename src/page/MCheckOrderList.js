import { React, useEffect, useState } from 'react'
import { FaDollarSign, FaRegStar, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ORDER_LIST } from '../api/api_config'
import axios from 'axios'
import MMCheckOrderList from '../components/MMCheckOrderList'

function MCheckOrderList() {
  const [orderlistdata, setOrderlistData] = useState({
    orderlist: [],
  })

  let sid = window.localStorage.getItem('user')
  const getOrderlistData = async () => {
    const response = await axios.get(ORDER_LIST + '/' + sid, {
      ////URL参數放在params屬性裏面
      params: {},
    })
    setOrderlistData(response.data)
  }

  useEffect(() => {
    getOrderlistData()
    //console.log(orderlist)
    return () => {}
  }, [])

  return (
    <section className="container-fluid mbg px-5 pb-5 ">
      <div className="container memberpage">
        <MMCheckOrderList orderlist={orderlistdata.orderlist} />
      </div>
    </section>
  )
}

export default MCheckOrderList
