import React from 'react'
import { MdShoppingCartCheckout, MdShoppingCart } from 'react-icons/md'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from 'react'

function ProductBtn() {
  const [showCarIcon, setShowCarIcon] = React.useState(false)
  const [buyNum, setBuyNum] = useState(0)
  return (
    <>
      <div className="a-productBtn d-grid gap-3">
        <div className="d-flex d-grid gap-3 col">
          <div className="a-favBtn btn btn-success col-">
          
            <FaMinus onClick={() => setBuyNum(buyNum - 1)} />
            
            <input
              className="byNum text-center"
              type="number"
              value={buyNum}
              required
            />

            <FaPlus onClick={() => setBuyNum(buyNum + 1)} />
          </div>
          <button className="favBtn btn btn-success col">
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
        </div>
      </div>
    </>
  )
}

export default ProductBtn
