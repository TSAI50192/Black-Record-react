import React from 'react'
import { MdSkipPrevious, MdSkipNext, MdFireTruck } from 'react-icons/md'
import ProductBtn from './ProductBtn'

function SellingPrice({ vinItem, recordItem, otherItem }) {
  return (
    <>
      <div className="a-productList">
        <h4 className="d-inline">商品售價 NT$</h4>
        <span className="a-price h3">
          <em>
            {vinItem
              ? vinItem.vr_price
              : recordItem
              ? recordItem.rp_unit_price
              : otherItem
              ? otherItem.mer_price
              : null}
          </em>
        </span>
        
        <li className="list-unstyled small p-2 " />
        <MdFireTruck size={25} />
        <p className="a-locationList d-inline" />
        可取貨點：台灣、蘭嶼、綠島、澎湖、金門、馬祖
        <ProductBtn />
        <div className="a-productDes text-center p-2">
          <ul className="list-unstyled text-warning">
            <MdSkipPrevious size={30} />
            <i className="productText">商品簡介</i>
            <MdSkipNext size={30} />
            <p className="a-productDescription text-18-400">
              {vinItem
                ? vinItem.vr_description
                : recordItem
                ? recordItem.rp_description
                : otherItem
                ? otherItem.mer_description
                : null}
            </p>
          </ul>
        </div>
        <div className="a-vr_tracks text-center ">
          <ul className="list-unstyled text-warning">
            {vinItem && vinItem.vr_tracks
              ? vinItem.vr_tracks.split('/').map((vinItem) => (
                  <>
                    <MdSkipPrevious size={30} />
                    <i className="a-productText">收錄曲目</i>
                    <MdSkipNext size={30} />
                    <li className="a-trackList list-unstyled text-18-400">
                      {vinItem}
                    </li>
                  </>
                ))
              : null}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SellingPrice
