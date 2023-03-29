import { useForm, useWatch } from 'react-hook-form'
import { CartContext } from '../store'
import { useContext, useEffect, useState } from 'react'
import OtherNavbarProdustDetail from '../smallcomponent/OtherNavbarProdustDetail'
import { ALL_VR_DATA } from '../api/api_config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CartProcess() {
  const [state] = useContext(CartContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      genter: '',
      textarea: '',
      recipient: '',
      recipienttel: '',
      city: '',
      area: '',
      address: '',
      agree: false,
    },
    mode: 'onTouched',
  })
  const watchform = useWatch({ control })
  const navigate = useNavigate()
  useEffect(() => {
    console.log(watchform)
  }, [watchform])

  const CartProcess = (data) => {
    localStorage.setItem('orderInfo', JSON.stringify(data))
    navigate('/CreateOrder')
  }

  const fastclick = () => {
    setValue('username', 'Luozhi', { shouldValidate: true })
    setValue('email', 'Luozhi@gmail.com', { shouldValidate: true })
    setValue('genter', '男', { shouldValidate: true })
    setValue('checkbox', 'true', { shouldValidate: true })
    setValue('recipient', 'Luozhi', { shouldValidate: true })
    setValue('recipienttel', '0977777777', { shouldValidate: true })
    setValue('city', '台北', { shouldValidate: true })
    setValue('area', '大安區', { shouldValidate: true })
    setValue('address', '復興南路一段390號2樓', { shouldValidate: true })
    setValue('samedata', 'true', { shouldValidate: true })
    setValue('storeaddress', 'true', { shouldValidate: true })
    setValue('agree', 'true', { shouldValidate: true })
    setValue(
      'textareacontent',
      '會持續關注你們的 期望能繼續提供良好的商品與服務品質',
      {
        shouldValidate: true,
      }
    )
  }

  const [allvinyldata, setAllVinylData] = useState({
    vinyls: [],
  })
  const getAllVinylData = async () => {
    const response = await axios.get(ALL_VR_DATA, {
      params: {},
    })
    setAllVinylData(response.data)
  }
  useEffect(() => {
    getAllVinylData()
    return () => {}
  }, [])
  return (
    <>
      <div className="c-wrap CartWarp">
        <form className="c-p-form" onSubmit={handleSubmit(CartProcess)}>
          <div className="c-p-container c-p-side">
            <div className="c-CartConfirm">
              <h3>合計:NT${state.total || 0}</h3>
              <p className="text-21-500">購物車({state.cartList.length}件)</p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle c-p-CartDrop"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu c-p-CartDropDown">
                  <li>
                    {/* <a className="dropdown-item" href="#/"> */}
                    <OtherNavbarProdustDetail vinyls={allvinyldata.vinyls} />
                    {/* </a> */}
                  </li>
                </ul>
              </div>
            </div>
            <h4
              onClick={() => {
                fastclick()
              }}
            >
              顧客資料
            </h4>
            <div className="c-CartCustomer">
              <div className="c-p-mb-3">
                <label htmlFor="username" className="form-label">
                  <h5>顧客名稱</h5>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.username && 'is-invalid'}`}
                  id="name"
                  placeholder="請輸入姓名"
                  // name="username"
                  {...register('username', { required: true })}
                />
                {errors.username && (
                  <div className="invalid-feedback">顧客名稱為必填</div>
                )}
              </div>
              <div className="c-p-mb-3">
                <label htmlFor="email" className="form-label">
                  <h6>電子信箱</h6>
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email && 'is-invalid'}`}
                  id="email"
                  placeholder="請輸入電子信箱"
                  // name="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: '信箱為必填',
                    },
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email格式錯誤',
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors?.email?.message}
                  </div>
                )}
              </div>
              <div className="c-p-mb-3">
                <h5>性別</h5>
                <select
                  className={`form-select ${errors.genter && 'is-invalid'}`}
                  aria-label="Default select example"
                  type="gender"
                  {...register('genter', { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    請選擇性別
                  </option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                  <option value="不透露">不透露</option>
                </select>
                {errors.genter && (
                  <div className="invalid-feedback">性別為必填</div>
                )}
              </div>
            </div>
            <h4>訂單備註</h4>
            <div className="c-CartCustomer">
              <textarea
                cols="30"
                rows="10"
                placeholder="有什麼想告訴我們的嗎?"
                {...register('textareacontent', {
                  required: { value: true, message: '' },
                })}
              />
            </div>
            <div className="c-CartCustomerText">
              <div>
                <h4>配送資料</h4>
                <div className="c-CartCustomerTextInput">
                  <input
                    type="checkbox"
                    className={`form-check ${errors.samedata && 'is-invalid'}`}
                    {...register('samedata', { required: true })}
                  />
                  {errors.samedata && (
                    <div className="invalid-feedback c-agree-area c-Cartsp">
                      請勾選
                    </div>
                  )}
                  <div className="c-CartCustomerCheckText">
                    <h6>收件人資料與顧客資料相同</h6>
                  </div>
                </div>
              </div>
              {/* <h4>運費:NT$150</h4> */}
            </div>
            <div className="c-CartCustomer">
              <div className="c-Checkbox">
                <div className="c-p-mb-3">
                  <label htmlFor="name" className="form-label">
                    <h5> 收件人姓名</h5>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.recipient && 'is-invalid'
                    }`}
                    id="name"
                    placeholder="請輸入收件人姓名"
                    // name="recipient"
                    {...register('recipient', { required: true })}
                  />
                  {errors.recipient && (
                    <div className="invalid-feedback">收件人為必填</div>
                  )}
                  <span className="text-14">
                    請填入收件人真實姓名，以確保順利收件
                  </span>
                </div>
                <div className="c-p-mb-3">
                  <label htmlFor="mobile" className="form-label">
                    <h5>收件人電話號碼</h5>
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.recipienttel && 'is-invalid'
                    }`}
                    id="mobile"
                    placeholder="請輸入收件人電話號碼"
                    // name="recipienttel"
                    {...register('recipienttel', {
                      required: {
                        value: true,
                        message: '收件人電話為必填',
                      },
                      minLength: {
                        value: 10,
                        message: '最少不會低於10碼',
                      },
                      maxLength: {
                        value: 10,
                        message: '最多不會高於10碼',
                      },
                    })}
                  />
                  {errors.recipienttel && (
                    <div className="invalid-feedback">
                      {errors?.recipienttel?.message}{' '}
                    </div>
                  )}
                </div>
                <div className="c-p-mb-3">
                  <label htmlFor="address" className="form-label">
                    <h5>地址</h5>
                    <h5>送貨地點:台灣</h5>
                  </label>
                  <div className="c-address">
                    <div className="c-addressinput">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.city && 'is-invalid'
                        }`}
                        placeholder="城市/縣"
                        // name="city"
                        {...register('city', { required: true })}
                      />
                      {errors.city && (
                        <div className="invalid-feedback">城市/縣為必填</div>
                      )}
                    </div>
                    <div className="c-addressinput">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.area && 'is-invalid'
                        }`}
                        placeholder="地區"
                        name="area"
                        {...register('area', { required: true })}
                      />
                      {errors.area && (
                        <div className="invalid-feedback">地區為必填</div>
                      )}
                    </div>
                  </div>
                  <input
                    type="text"
                    className={`form-control ${errors.address && 'is-invalid'}`}
                    id="address"
                    placeholder="請輸入地址"
                    // name="address"
                    {...register('address', { required: true })}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">地址為必填</div>
                  )}
                </div>
                <div className="c-CartCustomerCheck">
                  <input
                    type="checkbox"
                    className={`form-check ${
                      errors.storeaddress && 'is-invalid'
                    }`}
                    {...register('storeaddress', { required: true })}
                  />
                  {errors.storeaddress && (
                    <div className="invalid-feedback c-agree-area">請勾選</div>
                  )}
                  <div className="c-CartCustomerCheckText">
                    <h6>儲存這個送貨地址</h6>
                  </div>
                </div>
              </div>
            </div>
            <h4>配送方式</h4>
            <div className="c-CartCustomer">
              <div className="c-Cartdelivery">
                <input
                  className={`form-input  ${errors.checkbox && 'is-invalid'}`}
                  type="radio"
                  // name="checkbox"
                  {...register('checkbox', { required: true })}
                />

                <label className="text-18-400 c-p-text">門市自取</label>
                {errors.checkbox && (
                  <div className="invalid-feedback">請勾選配送方法</div>
                )}
              </div>
              <br />
              <div className="c-Cartdelivery">
                <input
                  className={`form-input  ${errors.checkbox && 'is-invalid'}`}
                  type="radio"
                  // name="checkbox"
                  {...register('checkbox', { required: true })}
                />
                <label className="text-18-400 c-p-text">配送</label>
                {errors.checkbox && (
                  <div className="invalid-feedback">請勾選配送方法</div>
                )}
              </div>
            </div>

            <h4>索取發票</h4>
            <div className="c-CartCustomer">
              <div className="c-bill">
                <div className="c-billbg">
                  <h5>發票類型</h5>
                  <input
                    type="text"
                    className="form-control d-inline-clock"
                    placeholder="雲端發票"
                    // name="bill"
                  />
                  {errors.bill && (
                    <div className="invalid-feedback">雲端發票</div>
                  )}
                </div>

                <div className="c-billbg">
                  <label>
                    <h5>載具類型</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control d-inline-clock"
                    placeholder="會員載具"
                    // name="vehicle"
                  />
                </div>
              </div>
              <div className="c-CartCustomerCheck">
                <input
                  type="checkbox"
                  // name="agree"
                  className={`form-check ${errors.agree && 'is-invalid'}`}
                  {...register('agree', { required: true })}
                />
                {errors.agree && (
                  <div className="invalid-feedback c-agree-area">請勾選</div>
                )}
                <div className="c-CartCustomerCheckText">
                  <h6>我同意網站服務條款及隱私權政策</h6>
                  <span>您必須同意續則和隱私條款</span>
                </div>
              </div>
            </div>
            <div className="c-Cartbtn">
              <button
                type="submit"
                className="Cartbtn"
                onClick={() => {
                  navigate(-1)
                }}
              >
                <h3>回上一頁</h3>
              </button>
              <button type="submit" className="Cartbtn">
                <h3>確認訂單</h3>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CartProcess
