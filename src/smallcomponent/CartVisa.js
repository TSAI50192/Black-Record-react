
import {
    FaRegIdCard,
    FaRegQuestionCircle,
    FaRegCalendarAlt,
    FaLockOpen,
  } from "react-icons/fa";
function CartVisa() {
  return (
    <>
    <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入信用卡卡號"
                    name="card"
                  />
                  <FaRegIdCard size={30} />
                </div>
                <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入持卡人姓名"
                    name="name"
                  />
                  <FaRegQuestionCircle size={30} />
                </div>
                <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入有效期限(MM/YY)"
                    name="date"
                  />
                  <FaRegCalendarAlt size={30} />
                </div>
                <div className="c-CartDetail">
                  <input
                    type="text"
                    placeholder="請輸入安全碼"
                    name="security"
                  />
                  <FaLockOpen size={30} />
                </div>
                <div className="c-CartLinePay">
                  <input type="checkbox" />
                  <h6>
                    同意記住信用卡資訊《《信用卡交易協定》》，以便下次快速支付
                  </h6>
                </div>
                <div className="c-CartLinePay">
                  <h6>
                    <FaLockOpen size={30} />
                    本金流服務由SHOP LINE
                    Payments提供，通過PCI-DSS國際寄信卡組織最高等級認證，，提供安全的交易服務，支援國內外信用卡刷卡。
                  </h6>
                </div>
    </>
  )
}

export default CartVisa