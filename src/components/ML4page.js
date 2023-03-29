import React from 'react'
import { Link } from 'react-router-dom'

function ML4page() {
  return (
    <div className="list-group d-none d-lg-block py-10 ml4">
      {/* 網頁版左四分類 */}
      <Link
        to="/MEdit"
        className="list-group-item list-group-item-action mb-3 h3 "
      >
        個人資料
      </Link>
      <Link
        to="/MCoupon"
        className="list-group-item  list-group-item-action mb-3 h3"
      >
        優惠劵
      </Link>
      <Link
        to="/MHistory"
        className="list-group-item list-group-item-action mb-3 h3"
      >
        訂單紀錄
      </Link>
      <Link
        to="/MWishlist"
        className="list-group-item list-group-item-action mb-3 h3"
      >
        我的收藏
      </Link>
    </div>
  )
}

export default ML4page
