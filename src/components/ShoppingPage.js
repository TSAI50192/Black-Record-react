import React from 'react'
import Products from './Products'
import Cart from './Cart'
function ShoppingPage() {
  return (
    <>
    <div className='c-s-container c-p-side'>
        <div className="row">
          <div className="col-md-7">
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
      </>
  )
}

export default ShoppingPage