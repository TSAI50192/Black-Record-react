import React from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

function ProductInfo({ vinItem, recordItem, otherItem }) {
  const [showIcon, setShowIcon] = React.useState(false)
  return (
    <>
      <div className="a-productList text-28-400">
        <p className="position-absolute text-end end-0  translate-middle-x ">
          {showIcon ? (
            <FcLike size={25} onClick={() => setShowIcon(!showIcon)} />
          ) : (
            <FcLikePlaceholder
              size={25}
              onClick={() => setShowIcon(!showIcon)}
            />
          )}
          加入蒐藏
        </p>
        <h3 className="a-productName">
          {vinItem
            ? vinItem.vr_name
            : recordItem
            ? recordItem.rp_name
            : otherItem
            ? otherItem.mer_name
            : null}
        </h3>
        <ul className="a-productList text-18-700">
          <li>
            商品編號：
            <h5 className="d-inline">
              {vinItem
                ? vinItem.number
                : recordItem
                ? recordItem.number
                : otherItem
                ? otherItem.number
                : null}
            </h5>
          </li>
          <li>
            商品尺寸：
            <h5 className="d-inline">
              {vinItem
                ? vinItem.vr_size
                : recordItem
                ? recordItem.rp_size
                : otherItem
                ? otherItem.mer_size
                : null}
            </h5>
          </li>
          <li>
            音樂類型：
            <h5 className="d-inline">{vinItem ? vinItem.vr_type : null}</h5>
          </li>
          <li>
            發行日期：
            <h5 className="d-inline">{vinItem ? vinItem.vr_date : null}</h5>
          </li>
          <li>
            發行公司：
            <h5 className="d-inline">
              {vinItem
                ? vinItem.vr_ltd
                : recordItem
                ? recordItem.rp_manufacturer
                : otherItem
                ? otherItem.mer_manufacturer
                : null}
            </h5>
          </li>
          <li>
            商品數量：
            <h5 className="d-inline">
              {vinItem
                ? vinItem.vr_quantity
                : recordItem
                ? recordItem.rp_quantity
                : otherItem
                ? otherItem.mer_quantity
                : null}
            </h5>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ProductInfo
