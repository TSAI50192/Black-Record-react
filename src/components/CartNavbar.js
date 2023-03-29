import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store";
import { FaShoppingCart } from "react-icons/fa";
import NavbarProdustDetail from "../smallcomponent/NavbarProdustDetail";
function CartNavbar() {
  const [state] = useContext(CartContext);
  const MoveNav = useRef(null);
  const MoveOut = () => {
    MoveNav.current.classList.toggle("c-n-Move");
  };
  return (
    <>
      <div className="c-n-wrap CartWarp">
        <div className="c-NavbarContainer">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <span className="c-n-navbar-brand">
                <Link to="/ShoppingPage">ShoppingPage</Link>
              </span>
              <span className="c-n-navbar-brand">
                <Link to="/CartProcess">CartProcess</Link>
              </span>
              <span className="c-n-navbar-brand">
                <Link to="/CreateOrder">CreateOrder</Link>
              </span>
              <button className="c-n-btn" type="submit">
                <FaShoppingCart
                  size={30}
                  onClick={() => {
                    MoveOut();
                  }}
                />
                <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle">
                  {state.cartList.length}
                </span>
              </button>
            </div>
          </nav>
          <div className="c-NavbarCartPage">
            <div className="c-NavbarCart c-NavbarZ" ref={MoveNav}>
              <div className="c-NavbarCartText">
                <h2>購物車</h2>
              </div>
              <NavbarProdustDetail />
              <div className="c-NavbarCartbtn">
                <button>
                  <h3>
                    <Link to="/CartProcess">訂單結帳</Link>
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartNavbar;
