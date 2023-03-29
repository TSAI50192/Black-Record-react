import CartProdust from '../smallcomponent/CartProdust'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../store'
import { useSearchParams } from 'react-router-dom'
import CartVisa from '../smallcomponent/CartVisa'
import CartLinepay from '../smallcomponent/CartLinepay'
import { useNavigate } from 'react-router-dom'
import { ALL_VR_DATA } from '../api/api_config'
import axios from 'axios'
function CreateOrder() {
  const [search, setSearch] = useSearchParams()
  const [optionValue, setOptionValue] = useState('')
  const [order, setOrder] = useState({})
  const [state] = useContext(CartContext)
  const navigate = useNavigate()
  console.log(optionValue)
  const ldata = JSON.parse(localStorage.getItem('orderInfo'))

  console.log(ldata)
  console.log('總商品資料', state.cartList.length)
  localStorage.setItem('cartList', JSON.stringify(state.cartList.length))
  const [allvinyldata, setAllVinylData] = useState({
    vinyls: [],
  })
  const getAllVinylData = async () => {
    const response = await axios.get(ALL_VR_DATA, {
      params: {},
    })
    setAllVinylData(response.data)
  }
  const CreateOrder = async () => {
    const data = {}
    for (let i in ldata) {
      data[i] = ldata[i]
    }
    data.orderSid = parseInt(new Date() / 1000)
    localStorage.setItem('orderSid', JSON.stringify(data.orderSid))
    data.state = state.cartList.length
    data.total = state.total
    data.name = state.cartList[0].vr_name
    data.payment_status = 5
    data.update_status = 6
    data.order_status = 1
    data.membership = 1
    const r = await axios.post('http://localhost:3001/createOrder', data, state)

    // const response = await axios.post(
    //   'http://localhost:3001/linepay/create-order',
    //   {
    //     amount: state.total,
    //     products: [
    //       {
    //         id: 'prod1',
    //         name: state.cartList[0].vr_name,
    //         quantity: state.cartList.length,
    //         price: state.total,
    //       },
    //     ],
    //   }
    // )

    console.log('購物車商品', state)
    console.log('localstorage', ldata)
    console.log('傳給後端', data)
    // setOrder(response.data)
    // console.log(order)
    // localStorage.setItem('oIner', JSON.stringify(order))
  }
  useEffect(() => {
    getAllVinylData()
    return () => {}
  }, [])
  return (
    <>
      <div className="c-wrap CartWarp">
        <div className="c-c-o-container c-p-side">
          <div className="c-c-o-Left">
            <table className="c-CartTable table align-middle">
              <thead>
                <tr>
                  <th>產品名稱</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <CartProdust vinyls={allvinyldata.vinyls} />
            </table>
            <div className="mb-3 c-Coupon">
              <input
                type="text"
                className="form-control"
                placeholder="優惠券代碼"
              />
              <button className="c-Couponbtn">兌換</button>
            </div>
            <div className="c-CouponText">
              <span className="text-14">
                您必須登入才能查看及使用您的會員積分
              </span>
              <p>
                提醒:優惠券不能同時使用，如果您使用積分即使在購買程序/付款介面上輸入優惠券代碼也無法使用
              </p>
            </div>
            <div className="c-SubtotalGroup">
              <div className="c-Subtotal">
                {/* <h4>運費</h4>
                <h4>$150</h4> */}
              </div>
            </div>
            <div className="c-SubtotalText">
              <div className="c-SubtotalPrice">
                <h3>總金額</h3>
                <h2>$ {state.total || 0}</h2>
              </div>
            </div>
          </div>
          <div className="c-c-o-Right">
            <div className="c-CartMaterial">
              <div className="c-CartMaterialText">
                <h4>收件人詳細資料</h4>
                <h4>配送</h4>
              </div>
              <div className="c-CartConfirmOrder">
                <div className="c-CartDetail">
                  <label>
                    <h5>名稱</h5>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="該會員名稱"
                    aria-label="Disabled input example"
                    value={ldata.username}
                    disabled
                  />
                </div>
                <div className="c-CartDetail">
                  <label>
                    <h5>電話</h5>
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="該會員電話"
                    aria-label="Disabled input example"
                    value={ldata.recipienttel}
                    disabled
                  />
                </div>
                <div className="c-CartDetail">
                  <label>
                    <h5>地址</h5>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="該會員地址"
                    aria-label="Disabled input example"
                    value={ldata.city + ldata.area + ldata.address}
                    disabled
                  />
                </div>
                <div className="c-CartDetail">
                  <label>
                    <h5>備註</h5>
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="有什麼想跟我們說的嗎?"
                    cols="20"
                    rows="5"
                    aria-label="Disabled input example"
                    value={ldata.textareacontent}
                    disabled
                  />
                </div>
              </div>
              <div className="c-CartConfirmOrder">
                <h4>付款資料</h4>
                <div className="c-CartPay">
                  <h5>已選擇的付款方式:</h5>
                </div>
                <div className="c-CartPayFunction">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    type="gender"
                    onChange={(e) => {
                      setOptionValue(e.target.value)
                    }}
                    defaultValue=""
                  >
                    <option value="LinePay">LinePay</option>
                    <option value="信用卡">信用卡</option>
                  </select>
                </div>
                {optionValue === '信用卡' ? <CartVisa /> : <CartLinepay />}
              </div>
            </div>
            <div className="c-CartConfirmbtn">
              <button
                className="c-CartConfirmOrderbtn"
                onClick={() => {
                  navigate(-1)
                }}
              >
                <h3>回上一頁</h3>
                {console.log(state.total)}
              </button>
              <button
                className="c-CartConfirmOrderbtn"
                onClick={() => {
                  CreateOrder()
                  // setTimeout(() => {
                  //   navigate(`/LinePay`)
                  // }, 500)
                  navigate(`/LinePay`)
                }}
              >
                <h3>建立訂單</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateOrder
