import React from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaRegUserCircle, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return(
      <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
        <FaBars/>
        </label>
        <label className="logo"><Link to="/index.html"><img src="./img/logo.svg" alt="黑碟" style={{width:'60px',paddingbottom:'10px'}}/></Link></label>
          <ul>
              <input type="b-checkbox" id="check"/>
              <li> <label htmlFor="check" className="checkbtn1"><FaTimes/></label></li>
              <li><Link to="/index.html">首頁</Link></li>
              <li><Link to="/">客製化</Link></li>
              <li><Link to="/">黑膠唱片</Link></li>
              <li><Link to="/">購物車</Link></li>
              <li><Link to="/footer">關於我們</Link></li>
              <li><Link to="/Loginpage">會員登入 <FaRegUserCircle/></Link></li>
              <li><Link to="/MEdit">編輯</Link></li>
              <li><Link to="/"><FaShoppingBag/></Link></li>
          </ul>
      </nav>
  )
}

export default Navbar