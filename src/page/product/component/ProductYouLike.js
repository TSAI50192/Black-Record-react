import React from 'react'

import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { Link } from 'react-router-dom'

function ProductYouLike({ vinItem, recordItem, otherItem, vinyls }) {
  const [showIcon, setShowIcon] = React.useState(false)
  console.log(vinItem, recordItem, otherItem)
  return (
    <>
   
      <div class="a-likeCard card ">
        
          <img
            className="a-card-img-top w-100"
            src={`/img/products/vin/47.jpg`}
            alt="商品照"
          />
      
        <div className="a-likeCard card-body">
          <span className="a-likeCardLabel badge btn-success me-2">10吋</span>
          <span className="a-likeCardLabel badge btn-success me-2">
            西洋/鄉村
          </span>
          <span className="a-likeCardLabel badge btn-success me-2">
            黑膠唱片
          </span>
          <div className="a-likeCardTitle card-title mt-5">
          瑪蓮·法莫_ 巴黎演唱會香榭傳奇
          </div>
          {showIcon ? (
            <FcLike size={25} onClick={() => setShowIcon(!showIcon)} />
          ) : (
            <FcLikePlaceholder
              size={25}
              onClick={() => setShowIcon(!showIcon)}
            />
          )}
          <i className="h4 float-end">
      $839
          </i>
        </div>
      </div>
      <div class="a-likeCard card ">
        
          <img
            className="a-card-img-top w-100"
            src={`/img/products/vin/39.jpg`}
            alt="商品照"
          />
      
        <div className="a-likeCard card-body">
          <span className="a-likeCardLabel badge btn-success me-2">10吋</span>
          <span className="a-likeCardLabel badge btn-success me-2">
            西洋/鄉村
          </span>
          <span className="a-likeCardLabel badge btn-success me-2">
            黑膠唱片
          </span>
          <div className="a-likeCardTitle card-title mt-5">
          愛美蘿．哈里斯
          </div>
          {showIcon ? (
            <FcLike size={25} onClick={() => setShowIcon(!showIcon)} />
          ) : (
            <FcLikePlaceholder
              size={25}
              onClick={() => setShowIcon(!showIcon)}
            />
          )}
          <i className="h4 float-end">
      $839
          </i>
        </div>
      </div>
      <div class="a-likeCard card ">
        
          <img
            className="a-card-img-top w-100"
            src={`/img/products/vin/44.jpg`}
            alt="商品照"
          />
      
        <div className="a-likeCard card-body">
          <span className="a-likeCardLabel badge btn-success me-2">7吋</span>
          <span className="a-likeCardLabel badge btn-success me-2">
            西洋/流行
          </span>
          <span className="a-likeCardLabel badge btn-success me-2">
            黑膠唱片
          </span>
          <div className="a-likeCardTitle card-title mt-5">
          瑪丹娜 Madonna 歐美 精選歌曲
          </div>
          {showIcon ? (
            <FcLike size={25} onClick={() => setShowIcon(!showIcon)} />
          ) : (
            <FcLikePlaceholder
              size={25}
              onClick={() => setShowIcon(!showIcon)}
            />
          )}
          <i className="h4 float-end">
      $1200
          </i>
        </div>
      </div>
      <div class="a-likeCard card ">
        
          <img
            className="a-card-img-top w-100"
            src={`/img/products/vin/32.jpg`}
            alt="商品照"
          />
      
        <div className="a-likeCard card-body">
          <span className="a-likeCardLabel badge btn-success me-2">10吋</span>
          <span className="a-likeCardLabel badge btn-success me-2">
            西洋/搖滾
          </span>
          <span className="a-likeCardLabel badge btn-success me-2">
            黑膠唱片
          </span>
          <div className="a-likeCardTitle card-title mt-5">
          傑夫巴克利-神秘男孩1995-1996演唱會精選
          </div>
          {showIcon ? (
            <FcLike size={25} onClick={() => setShowIcon(!showIcon)} />
          ) : (
            <FcLikePlaceholder
              size={25}
              onClick={() => setShowIcon(!showIcon)}
            />
          )}
          <i className="h4 float-end">
      $1089
          </i>
        </div>
      </div>
    </>
  )
}

export default ProductYouLike
