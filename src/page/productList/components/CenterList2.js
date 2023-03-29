//中央卡片 from</VrList> 尚未使用
import React from 'react'
import ShoppingCar from './ShoppingCar'

// 以下是ICON匯入元件
import { Link } from 'react-router-dom'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { MdShoppingCartCheckout, MdShoppingCart } from 'react-icons/md'

function CenterList() {
  const [showCarIcon, setShowCarIcon] = React.useState(false)
  const [showIcon, setShowIcon] = React.useState(false)
  return (
    <>
      <div className="a-productCar col mb-10">
        <div className="a-productCardFs card h-100 ">
          <img
            src={'./img/52.jpg'}
            className="card-img-top w-100"
            alt="商品專輯"
          />
          <div className="a-productCard card-body p-0 m-2 list-unstyled">
            <Link to="/ProductDt" className="a-productAlbumName">
              【音樂年華】日本宮崎駿日本動畫電影純輕天空sss之城
            </Link>
            <li>
              <i className="h4 float-end">$1990</i>
              {showIcon ? (
                <FcLike size={30} onClick={() => setShowIcon(!showIcon)} />
              ) : (
                <FcLikePlaceholder
                  size={30}
                  onClick={() => setShowIcon(!showIcon)}
                />
              )}
            </li>
          </div>
          {/* 
          <div class="d-grid gap-2"> */}
          <button
            className="btn btn-danger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            {/* <MdShoppingCartCheckout size={30} /> */}
            {showCarIcon ? (
              <MdShoppingCart
                size={30}
                onClick={() => setShowCarIcon(!showCarIcon)}
              />
            ) : (
              <MdShoppingCartCheckout
                size={25}
                onClick={() => setShowCarIcon(!showCarIcon)}
              />
            )}
            加入購物車
          </button>
          <ShoppingCar />
          
          {/* 購物車隱藏視窗 */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default CenterList
