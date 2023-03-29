import React from 'react'
import { Link } from 'react-router-dom'

function PHomeBRecordMerch({ recs, merchs }) {
  return (
    <>
      {/* <!-- 唱片機 --> */}
      <div className="bg-dark col-6 p-10 text-white">
        <div className="d-flex justify-content-between align-items-center m-8">
          <h1 className="m-0">唱片機</h1>
          <Link to="/VrList" className="btn d-flex justify-content-center pe-0">
            <h4 className="me-2 mb-0 t-step-hover2 fw-bold">查看全部商品</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              fill="#FFFFFF"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
        </div>

        <div className="mb-10 row">
          {recs.map((recs) => {
            return (
              <div className="col-5 t-thr-card card" key={recs.sid}>
                <Link to={`/ProductDt/${recs.number}`}>
                  <img
                    className="t-thr-img"
                    src={`/img/products/rec/${recs.rp_image}`}
                    alt={recs.rp_name}
                  />
                </Link>
                <h4 className="height-two flex-fill fw-bold">
                  {recs.rp_name}{' '}
                </h4>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">NT$ {recs.rp_unit_price}</h4>
                  <Link
                    to={`/ProductDt/${recs.number}`}
                    className="btn d-flex justify-content-center align-items-center t-more-btn"
                  >
                    <h4 className="me-2 mb-0 fw-bold">查看商品</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="#B58686"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* <!-- 周邊商品 --> */}
      <div className="col-6 p-10">
        <div className="d-flex justify-content-between align-items-center m-8">
          <h1 className="m-0">周邊商品</h1>
          <Link to="/VrList" className="btn d-flex justify-content-center pe-0">
            <h4 className="me-2 mb-0 t-step-hover fw-bold">查看全部商品</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
        </div>

        <div className="mb-10 row">
          {merchs.map((merchs) => {
            return (
              <div className="col-5 t-thr-card card" key={merchs.sid}>
                <Link to={`/ProductDt/${merchs.number}`}>
                  <img
                    className="t-thr-img"
                    src={`/img/products/mer/${merchs.mer_img}`}
                    alt={merchs.mer_name}
                  />
                </Link>
                <h4 className="height-two flex-fill">{merchs.mer_name} </h4>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">NT$ {merchs.mer_price}</h4>
                  <Link
                    to={`/ProductDt/${merchs.number}`}
                    className="btn d-flex justify-content-center align-items-center t-more-btn"
                  >
                    <h4 className="me-2 mb-0">查看商品</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      fill="#B58686"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PHomeBRecordMerch
