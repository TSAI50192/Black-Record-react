import React, { useEffect, useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import MMCheckOrderList from './MMCheckOrderList'

function MMHistory({ orderlist }) {
  const [filterlists, setLists] = useState([])
  useEffect(() => {
    setLists(orderlist)
  }, [orderlist])

  return (
    <div className="container">
      <div className="row">
        <div className="memberinfolist text-nowrap h3 d-flex">
          {/* <li className="list-unstyled me-5">全部</li> */}
          <li
            className="list-unstyled me-5"
            onClick={(e) => {
              e.preventDefault()
              const pastList = orderlist.filter(
                ({ order_status }) => order_status == '2'
              )
              setLists(pastList)
            }}
          >
            已完成
          </li>
          <li
            className="list-unstyled me-5"
            onClick={(e) => {
              e.preventDefault()
              const pastList = orderlist.filter(
                ({ order_status }) => order_status == '1'
              )
              setLists(pastList)
            }}
          >
            未完成
          </li>
        </div>
        <div className="mainh">
          <table className="table orderList justify-content:start; align-middle">
            <thead className="tbtitle">
              <tr>
                <th className="col">訂單編號</th>
                <th className="col">內容</th>
                <th className="col">狀態</th>
              </tr>
            </thead>
            <tbody>
              {filterlists.map((r) => {
                return (
                  <tr>
                    <td className="ordernamber">
                      <div>
                        <Link to="/MCheckOrderList">#{r.order_number}</Link>
                      </div>
                    </td>
                    <td className="orderdetail justify-content-lg- d-lg-flex">
                      <div className="d-none d-lg-block mx-5">
                        {dayjs(r.order_time).format('YYYY-MM-DD')}
                        {/* (共{window.localStorage.getItem('historyList')}件商品) */}
                        (共{r.amount}件商品)
                      </div>
                      <div>
                        <FaDollarSign />
                        {r.total_price}
                      </div>
                      <button
                        className="btn-success mx-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                        onClick={(e) => {
                          e.preventDefault()
                          console.log(r)
                        }}
                      >
                        查看
                      </button>
                    </td>
                    <td>{r.status_name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <MMCheckOrderList orderlist={orderlist} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MMHistory
