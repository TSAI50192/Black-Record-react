import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../store'
import axios from 'axios'
import { ALL_VR_DATA } from '../api/api_config'
function CartProdust({ vinyls }) {
  const [state, dispatch] = useContext(CartContext)

  return (
    <>
      <table className="table align-middle">
        <tbody className="c-ProductsTable">
          {state.cartList.map((item) => {
            console.log(item)
            return (
              <tr key={item.sid}>
                <td>
                  {item.vr_img ? (
                    <img
                      src={`/img/products/vin/${item.vr_img}`}
                      alt={item.vr_img}
                      className="table-image"
                    />
                  ) : item.rp_image ? (
                    <img
                      src={`/img/products/rec/${item.rp_image}`}
                      alt={item.rp_name}
                      className="table-image"
                    />
                  ) : item.mer_img ? (
                    <img
                      src={`/img/products/mer/${item.mer_img}`}
                      alt={item.mer_name}
                      className="table-image"
                    />
                  ) : item.cro_img ? (
                    <img
                      src={`/img/cro/${item.cro_img}`}
                      alt={item.cro_name}
                      className="table-image"
                    />
                  ) : item.cus_image ? (
                    <img
                      src={`/img/card/${item.cus_image}`}
                      alt={item.cus_name}
                      className="table-image"
                    />
                  ) : (
                    <img src={item[1]} alt={item[1]} className="table-image" />
                  )}
                </td>
                <td>
                  {item.vr_name
                    ? item.vr_name
                    : item.rp_name
                    ? item.rp_name
                    : item.mer_name
                    ? item.mer_name
                    : item.cro_name
                    ? item.cro_name
                    : item.cus_name
                    ? `${item.cus_name} & ${item.mat_name}`
                    : `${item[0].cus_name} & ${item.mat_name}`}
                  <br />
                  <span className="text-muted">
                    NT${' '}
                    {item.vr_price
                      ? item.vr_price
                      : item.rp_unit_price
                      ? item.rp_unit_price
                      : item.mer_price
                      ? item.mer_price
                      : item.cro_a_price
                      ? item.cro_a_price
                      : item.cro_b_price
                      ? item.cro_b_price
                      : item.cus_price
                      ? item.cus_price + item.mat_price
                      : item[0].cus_price + item.mat_price}
                  </span>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault()
                      const quantity = parseInt(e.target.value)
                      dispatch({
                        type: 'CHANGE_CART_QUANTITY',
                        payload: {
                          ...item,
                          quantity,
                        },
                      })
                    }}
                  >
                    {[...Array(10)].map((_, i) => {
                      return (
                        <option value={i + 1} key={i}>
                          {i + 1}
                        </option>
                      )
                    })}
                  </select>
                </td>
                <td className="text-end">
                  NT${' '}
                  {item.vr_price
                    ? item.vr_price * item.quantity
                    : item.rp_unit_price
                    ? item.rp_unit_price * item.quantity
                    : item.mer_price
                    ? item.mer_price * item.quantity
                    : item.cro_a_price
                    ? item.cro_a_price * item.quantity
                    : item.cro_b_price
                    ? item.cro_b_price * item.quantity
                    : item.cus_price
                    ? (item.cus_price + item.mat_price) * item.quantity
                    : (item[0].cus_price + item.mat_price) * item.quantity}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default CartProdust
