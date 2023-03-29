import React from "react";

function CartCardProduct() {
  return (
    <>
      <div className="c-CartCard">
        <img
          src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
          alt=""
        />
        <h4>傑尼龜</h4>
        <div className="c-CartCardText">
          <h5>$10</h5>
          <h6>
            <a href="#/">查看商品</a>
          </h6>
        </div>
      </div>
    </>
  );
}

export default CartCardProduct;
