import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { CartContext } from '../store'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function LinePay() {
  const [state, dispatch] = useContext(CartContext)
  const [rstate, setRstate] = useState({})
  const navigate = useNavigate()
  const ldata = JSON.parse(localStorage.getItem('orderInfo'))
  const orderSid = JSON.parse(localStorage.getItem('orderSid'))
  const CreateOrder = async () => {
    const data = {}
    for (let i in ldata) {
      data[i] = ldata[i]
    }
    data.orderSid = JSON.parse(localStorage.getItem('orderSid'))
    data.state = state.cartList.length
    data.total = state.total
    data.name = state.vr_name
    data.payment_status = 4
    data.update_status = 6
    data.order_status = 1
    data.membership = 5
    const r = await axios.post('http://localhost:3001/linepay', data)

    setRstate(r.data)
    console.log('後端傳來的', r.data)
    console.log('傳給linepay', data)
  }
  const order = JSON.parse(localStorage.getItem('oIner'))
  const handleLinePay = () => {
    confirmAlert({
      title: '確認付款',
      message: '確認要導向至LINE Pay進行付款？',
      buttons: [
        {
          label: '確定',
          onClick: () => {
            // 在本window直接導至node付款(reverse)url，之後會導向至line pay

            // window.location.href =
            //   process.env.REACT_APP_PAYMENT_API_URL +
            //   '?orderId=' +
            //   order.orderId

            CreateOrder()
          },
        },
        {
          label: '取消',
          onClick: () => {},
        },
      ],
    })
  }

  useEffect(() => {
    if (rstate.linePayUrl) {
      window.location.href = rstate.linePayUrl
      console.log(rstate.linePayUrl)
    }
  }, [rstate])
  return (
    <>
      <div className="CartWarp c-p-side">
        <div className="c-CartLinePaycontainer">
          <div>
            <h2>訂單明細</h2>
            <h3>Order ID: {orderSid}</h3>
            <h3>總金額: {state.total || 0}</h3>
            <button
              onClick={() => {
                handleLinePay()
              }}
            >
              確定付款
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LinePay
