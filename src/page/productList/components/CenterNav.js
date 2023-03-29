import React from 'react'
import { Link } from 'react-router-dom'

function CenterNav() {
  return (
    <>
      <div className="a-centerNav h4">
        <ul className="nav justify-content-center">
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              全部
            </Link>
          </li>
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              獨家販售
            </Link>
          </li>
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              熱門商品
            </Link>
          </li>
          <li className="a-centerNav nav-item">
            <Link to="/VrList" className="nav-link" href="#/">
              最新上架
            </Link>
          </li>
          
          <li className="centerNav nav-item">
            <Link to="/VrList" className="nav-link">
              其他商品
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CenterNav
