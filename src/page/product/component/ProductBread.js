import React from 'react'
import { Link } from 'react-router-dom'

function ProductBread() {
  return (
    <>
      <ol className="a-productBread breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">首頁</a>
        </li>
        <li className="breadcrumb-item">
          <Link to="/VrList">黑膠相關商品</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/VrList">黑膠唱片</Link>
        </li>
        
      </ol>
    </>
  )
}

export default ProductBread
