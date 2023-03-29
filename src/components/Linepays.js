import { useSearchParams, useNavigate } from 'react-router-dom'

function Linepays() {
  const navigate = useNavigate()
  const orderSid = JSON.parse(localStorage.getItem('orderSid'))
  console.log(orderSid)
  const [linepays, setLinePays] = useSearchParams()
  console.log(linepays.get('orderId'))
  return (
    <>
      <div className="CartWarp c-p-side">
        <div className="c-CartLinePaycontainer">
          <div>
            <h2>完成訂單</h2>
            <h3>Order ID: {orderSid}</h3>
            <button
              onClick={() => {
                navigate('/')
              }}
            >
              回到首頁
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Linepays
