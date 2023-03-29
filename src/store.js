import { createContext } from 'react'

function calculateTotalPrice(cartList) {
  return cartList
    .map((item) =>
      item.vr_price
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
        : (item[0].cus_price + item.mat_price) * item.quantity
    )
    .reduce((a, b) => a + b, 0)
}

export const cartInit = {
  cartList: [],
}
export const cartReducer = (state, action) => {
  const cartList = [...state.cartList]
  //先取得當前購物車目標品項的索引
  const index = cartList.findIndex((item) => item.sid === action.payload.sid)
  switch (action.type) {
    case 'ADD_TO_CART':
      if (index === -1) {
        //還未加入到購物車
        cartList.push(action.payload)
      } else {
        //當前購物車的項目與加入的項目一致
        cartList[index].quantity += action.payload.quantity
      }
      const total = calculateTotalPrice(cartList)
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      }
    case 'CHANGE_CART_QUANTITY':
      cartList[index].quantity = action.payload.quantity
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      }
    case 'REMOVE_CART_ITEM':
      cartList.splice(index, 1)
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      }
    default:
      return state
  }
}

export const CartContext = createContext({})
