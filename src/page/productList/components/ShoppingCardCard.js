import React from 'react'

function ShoppingCardCard() {
  return (
    <>
      <div class="row g-0">
        <div class="col-md-3">
          <img src="./img/52.jpg" alt="" className="p-1 img-fluid" />
        </div>
        <div class="col-md-8">
          <div class="a-shopTitle card-body p-1">
            <h6 class=" card-text">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
            </h6>
            <p>
              購買數量:
              {/* <input type="number" name="quantity" min="1" max="5"></input> */}
            </p>
            <p>
              定價金額:$<span>0</span>
            </p>
          </div>
        </div>
        <button
          type="button"
          class="a-shopBtn btn-close"
          aria-label="Close"
        ></button>
        <hr />
      </div>
    </>
  )
}

export default ShoppingCardCard
