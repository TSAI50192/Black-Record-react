import React from 'react'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'

function ProductLabel({ vinItem }) {
  return (
    <>
      <div className="a-productDt-badge row">
        <div className="col text-center text-18-700">
          <ul className="a-arrowIcon list-unstyled text-warning">
            <MdSkipPrevious size={20} />
            <i className="d-inline h6">相關標籤</i>
            <MdSkipNext size={20} />
            {vinItem && vinItem.vr_type
              ? vinItem.vr_type
                  .split('/')
                  .map((vinItem) => (
                    <span className="badge btn-success me-1">{vinItem}</span>
                  ))
              : null}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductLabel
