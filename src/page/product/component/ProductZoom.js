import React from 'react'

function ProductZoom({ vinItem, recordItem, otherItem }) {
  return (
    <>
      <div className="a-productZoom-img text-center">
        {vinItem ? (
          <img
            className="a-card-img-top w-100"
            src={`/img/products/vin/${vinItem.vr_img}`}
            alt="商品照"
          />
        ) : recordItem ? (
          <img
            className="a-card-img-top w-100"
            src={`/img/products/rec/${recordItem.rp_image}`}
            alt="商品照"
          />
        ) : otherItem ? (
          <img
            className="a-card-img-top w-100"
            src={`/img/products/mer/${otherItem.mer_img}`}
            alt="商品照"
          />
        ) : null}
        {/* <img src="./img/52.jpg" alt="商品照" className="img-fluid mb-5"> */}
      </div>
    </>
  )
}

export default ProductZoom
