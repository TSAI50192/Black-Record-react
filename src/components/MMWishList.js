import React from 'react'
import { FaTrashAlt, FaShoppingBag, FaDollarSign } from 'react-icons/fa'
import dayjs from 'dayjs'

function MMWishList({
  wishlistVR,
  wishlistME,
  wishlistRE,
  removeItemVR,
  removeItemRE,
  removeItemME,
}) {
  return (
    <div className="container py-10">
      <div className="row">
        {/* <div className="memberinfolist d-flex h3">
          <li className="list-unstyled me-1">一鍵加入</li>
        </div> */}
        <div className="mainh">
          <table className="table orderList align-middle">
            <thead className="tbtitle">
              <tr className="">
                <th className="col d--none d-md-block d-lg-block">加入時間</th>
                <th className="col">商品明細</th>
                <th className="col">購物車</th>
                <th className="col">刪除</th>
              </tr>
            </thead>
            <tbody>
              {/* 黑膠唱片VR */}
              {wishlistVR.map((r) => {
                return (
                  <tr key={r.sid}>
                    <td className="ordernamber">
                      <div>
                        <a href="#/">
                          {dayjs(r.created_time).format('YYYY-MM-DD')}
                        </a>
                      </div>
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <img
                        className="orderimg "
                        alt="product"
                        src={`/img/products/vin/${r.vr_img}`}
                      />
                      <div className="productdetail d-none d-lg-block">
                        {r.vr_name}
                      </div>
                      <div className="productdetailprice ">
                        <FaDollarSign />
                        {r.vr_price}
                      </div>
                    </td>
                    <td>
                      <div className="wishicon">
                        <FaShoppingBag />
                      </div>
                    </td>
                    <td className="wishicon">
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault()
                          console.log(r)
                          removeItemVR(r.sid)
                        }}
                      >
                        <FaTrashAlt />
                      </a>
                    </td>
                  </tr>
                )
              })}
              {/* 相關周邊ME */}
              {wishlistME.map((r) => {
                return (
                  <tr key={r.sid}>
                    <td className="ordernamber">
                      <div>
                        <a href="#/">
                          {dayjs(r.created_time).format('YYYY-MM-DD')}
                        </a>
                      </div>
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <img
                        className="orderimg "
                        alt="product"
                        src={`/img/products/mer/${r.mer_img}`}
                      />
                      <div className="productdetail d-none d-lg-block">
                        {r.mer_name}
                      </div>
                      <div className="productdetailprice ">
                        <FaDollarSign />
                        {r.mer_price}
                      </div>
                    </td>
                    <td>
                      <div className="wishicon">
                        <FaShoppingBag />
                      </div>
                    </td>
                    <td className="wishicon">
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault()
                          console.log(r)
                          removeItemME(r.sid)
                        }}
                      >
                        <FaTrashAlt />
                      </a>
                    </td>
                  </tr>
                )
              })}
              {/* 唱片機RE */}
              {wishlistRE.map((r) => {
                return (
                  <tr key={r.sid}>
                    <td className="ordernamber">
                      <div>
                        <a href="#/">
                          {dayjs(r.created_time).format('YYYY-MM-DD')}
                        </a>
                      </div>
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <img
                        className="orderimg "
                        alt="product"
                        src={`/img/products/rec/${r.rp_image}`}
                      />
                      <div className="productdetail d-none d-lg-block">
                        {r.rp_name}
                      </div>
                      <div className="productdetailprice ">
                        <FaDollarSign />
                        {r.rp_unit_price}
                      </div>
                    </td>
                    <td>
                      <div className="wishicon">
                        <FaShoppingBag />
                      </div>
                    </td>
                    <td className="wishicon">
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault()
                          console.log(r)
                          removeItemRE(r.sid)
                        }}
                      >
                        <FaTrashAlt />
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MMWishList
