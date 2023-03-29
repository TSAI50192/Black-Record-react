import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Rate } from 'antd'

function ProductEvaluate() {
  return (
    <>
      <div className="a-evaluate card my-5">
        <div className="row">
          <div className="a-evaluateICon col-5 text-center mb-3">
            <h3>5/5</h3>
            <Rate disabled defaultValue={5} size={50} />
          </div>
          <div className="a-evaluateLabel d-flex flex-row align-items-center col-7 grid gap-5">
            <span className="a-evaluateLabel badge btn-success">全部</span>
            <span className="a-evaluateLabel badge btn-success">5顆星</span>
            <span className="a-evaluateLabel badge btn-success">4顆星</span>
            <span className="a-evaluateLabel badge btn-success">3顆星</span>
            <span className="a-evaluateLabel badge btn-success">2顆星</span>
            <span className="a-evaluateLabel badge btn-success">1顆星</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductEvaluate
