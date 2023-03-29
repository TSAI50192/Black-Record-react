import React from 'react'
import { FaTimes } from "react-icons/fa";

function CartTable() {
  return (
    <><tbody>
    <tr>
      <td>
        <img
          src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
          alt=""
        />
        <h3>產品介紹</h3>
      </td>
      <td>$10</td>
      <td>
        <button>-</button>1<button>+</button>
      </td>
      <td>$10</td>
      <td>
        <a href="#/">
          <FaTimes />
        </a>
      </td>
    </tr>
  </tbody></>
  )
}

export default CartTable