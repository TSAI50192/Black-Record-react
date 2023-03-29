import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Top5List({ vinyls }) {
  const limitedData = vinyls.slice(51, 61)

  return (
    <>
      <div className="a-top5List mt-8 d-none d-lg-block">
        <p className="a-top5Label h3 text-center">Top 10</p>
        {limitedData.map((product5, i) => {
          return (
            <>
              {/* 排名一 */}
              <div
                className="a-top5Card bg-blu my-5  position-relative"
                key={product5.sid}
              >
                <Link to="/ProductDt" className="row a-top5albumName text-20 p-2">
                  <p className="a-top5Label col-3 h2 g-8">{i + 1}</p>
                  <div className="col-4 a-top5Img">
                    <img
                      src={`/img/products/vin/${product5.vr_img}`}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="text-center">
                      <BsStarFill size={15} color={'#ffc107'} />
                      <BsStarFill size={15} color={'#ffc107'} />
                      <BsStarFill size={15} color={'#ffc107'} />
                      <BsStarFill size={15} color={'#ffc107'} />
                      <BsStarFill size={15} color={'#ffc107'} />
                    </div>
                  </div>
                  <div className="col-5 h5">
                    {product5.vr_name}
                    <p className="a-albumPrice end-0 bottom-0 h6 position-absolute">
                      ${product5.vr_price}
                    </p>
                  </div>
                </Link>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Top5List
{
  /* <div className="a-top5Img col">
<img
  src={`/img/products/vin/${product5.vr_img}`}
  alt=""
  className="img-fluid"
/>

<div className="a-top5Img col">
  <div className="col">
    <Link
      to="/ProductDt"
      className="a-top5albumName text-14"
    >
      {product5.vr_name}
    </Link>
    <BsStarFill size={10} color={'#ffc107'} />
    <BsStarFill size={10} color={'#ffc107'} />
    <BsStarFill size={10} color={'#ffc107'} />
    <BsStarFill size={10} color={'#ffc107'} />
    <BsStarFill size={10} color={'#ffc107'} />
  </div>
  <div className="a-top5Info col list-unstyled">
    <p className="a-albumPrice text-end">
      ${product5.vr_price}{' '}
    </p>
  </div>
</div>
</div> */
}
