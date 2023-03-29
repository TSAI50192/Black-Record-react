import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../store";

function Cart() {
  const [state, dispatch] = useContext(CartContext);
  return (
    <>
        <div className="c-bg-light p-3">
          <table className="table align-middle">
            <tbody className="c-ProductsTable">
              {state.cartList.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_CART_ITEM",
                            payload: {
                              ...item,
                            },
                          });
                        }}
                      >
                        <FaTimes size={20} />
                      </button>
                    </td>
                    <td>
                      <img src={item.img} alt="" className="table-image" />
                    </td>
                    <td>
                      {item.title}
                      <br />
                      <span className="text-muted">NT$ {item.price}</span>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        value={item.quantity}
                        onChange={(e) => {
                          e.preventDefault();
                          const quantity = parseInt(e.target.value);
                          dispatch({
                            type: "CHANGE_CART_QUANTITY",
                            payload: {
                              ...item,
                              quantity,
                            },
                          });
                        }}
                      >
                        {[...Array(10)].map((_, i) => {
                          return (
                            <option value={i + 1} key={i}>
                              {i + 1}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td className="text-end">
                      NT$ {item.price * item.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} className="text-end">
                  總金額: NT${state.total || 0}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
    </>
  );
}

export default Cart;
