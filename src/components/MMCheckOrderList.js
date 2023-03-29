import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import MMComment from '../components/MMComment'

function MMCheckOrderList({ orderlist, detailalllist }) {
  // console.log(orderlist)
  return (
    <div className="container orderdetaillistpage">
      {orderlist.map((r) => {
        return (
          <div className=" d-flex justify-content-between  listTOP" key={r.sid}>
            <div>訂單#{r.order_number}明細</div>
            <div>{r.staus_name}</div>
          </div>
        )
      })}

      {/* <div className="row">
      <span className="mlogout">
        <button className="btn-info mb-5">返回</button>
      </span>
    </div> */}

      <table className="mb-3 recipientinformation justify-content-center">
        <thead className="listcontent2 ">
          <th colSpan="2">收件人詳細資料</th>
        </thead>
        <tbody className=" listcontent3">
          {orderlist.map((r) => {
            return (
              <>
                <tr key={r.sid}>
                  <td>姓名:</td>
                  <td>{r.name}</td>
                </tr>
                <tr>
                  <td>電話:</td>
                  <td>{r.mobile}</td>
                </tr>
                <tr>
                  <td>收貨地址:</td>
                  <td>{r.addressee}</td>
                </tr>
              </>
            )
          })}
        </tbody>
        <tbody className="col-6 listcontent3">
          {orderlist.map((r) => {
            return (
              <>
                <tr>
                  <td>訂單編號:</td>
                  <td>#{r.order_number}</td>
                </tr>
                <tr>
                  <td>付款方式:</td>
                  <td>LINE Pay</td>
                </tr>
                <tr>
                  <td>狀態:</td>
                  <td>{r.status_name}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <table className="orderdetaillist h5">
        <thead>
          <tr>
            <th className=" col d-none d-lg-block ">產品</th>
            <th className="col">名稱</th>
            <th className="col">數量</th>
            <th className="col">金額</th>
            <th className="col">評論</th>
          </tr>
        </thead>
        <tbody className="orderdetaillistPRODUT ">
          {orderlist.map((r) => {
            return (
              <>
                <tr>
                  <td className=" col d-none d-lg-block">
                    <img
                      className="orderimg "
                      src={`/img/products/vin/${r.vr_img}`}
                      alt="產品圖"
                    />
                  </td>
                  <td>
                    <h5 className="orderdetaillisttext productdetail">
                      {r.vr_name}
                    </h5>
                  </td>
                  <td>{r.quantity}</td>
                  <td>
                    <FaDollarSign />
                    {r.vr_price}
                  </td>
                  <td className="align-middle">
                    <button
                      className="btn-comment"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      評價
                    </button>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      {/* 彈跳評論五星 */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                評論
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <MMComment />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MMCheckOrderList
