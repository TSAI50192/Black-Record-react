import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// import { MEMLOGIN } from '../api/api_config'
// import Loginmain from '../components/Loginmain'
import axios from 'axios'
// import AuthContext from '../contexts/AuthContext'
import Swal from 'sweetalert2'

function Memregister() {
  const navigate = useNavigate()
  // const [nameReg, setNameReg] = useState('')
  // const [emailReg, setEmailReg] = useState('')
  // const [mobileReg, setMobileReg] = useState('')
  // const [passwordReg, setPasswordReg] = useState('')
  // const [birthdayReg, setBirthdayReg] = useState('')

  const memberRegister = async(data) => {
    axios
      .post('http://localhost:3001/register/add',data) 
      .then((response) => {
        // axios.defaults.withCredentials = true
        if (response.data.success) {
          Swal.fire({
            title: '註冊成功!',
            text: `歡迎加入黑碟`,
            icon: 'success',
            confirmButtonText: '確認',
          }).then(function () {
            window.location.href = '/Memlogin'
          })
        } else {
          Swal.fire({
            title: '註冊失敗!',
            text: `${response.data.error}`,
            icon: 'error',
            confirmButtonText: '確認',
          })
        }
        // window.location.assign('/')
      })
    // .catch(function (error) {
    //   console.error(error)
    // })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:'',
      email: '',
      mobile:'',
      password: '',
      birthday:'',
    },
    mode: 'onTouched',
  })

  return (
    <>
      <div className="b-box1">
        <img src="./img/301.png" alt="BCC" />
        {/* <!-- 會員登入 --> */}
        <div className="b-wrapper">
          <div className="title-text">
            <div className="title login">
              <Link to="/">
                <img src="./img/logo.svg" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="form2-container">
            <div className="slide-controls">
              <input
                type="radio"
                name="slide"
                id="login"
                checked
                style={{ display: 'none' }}
              />
              <input
                type="radio"
                name="slide"
                id="signup"
                style={{ display: 'none' }}
              />
              <label for="login" className="slide login">
                <Link to="/Memlogin">登入會員</Link>
              </label>
              <label for="signup" className="slide signup">
                <Link to="/Memregister">註冊會員</Link>
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form2-inner">
              {/* 註冊會員 */}
              <form
                action="#"
                className="signup form2"
                onSubmit={handleSubmit(memberRegister)}
                // onSubmit={(e) => {
                //   e.preventDefault()
                //   memberRegister()
                // }}
              >
                <div className="field">
                  <label className="lable1">用戶名</label>
                  <input
                    type="text"
                    // id="name"
                    name="name"
                    // onChange={(e) => setNameReg(e.target.value)}
                    className={`form-control ${
                      errors.name && 'is-invalid'
                    }`}
                    placeholder="用戶名"
                    {...register('name', {
                      required: {
                        value: true,
                        message: '用戶名為必填',
                      },
                      minLength: {
                        value: 2,
                        message: '最少不會低於2字元',
                      },
                      maxLength: {
                        value: 5,
                        message: '最多不會高於5字元',
                      },
                    })}
                  />
                  {errors.name && (
                    <div className="b-invalid-feedback">
                      {errors?.name?.message}
                    </div>
                  )}
                </div>
                <div className="field">
                  <label className="lable1">電子信箱</label>
                  <input
                    type="email"
                    // id="emailReg"
                    name="email"
                    // onChange={(e) => setEmailReg(e.target.value)}
                    className={`from-control ${
                      errors.email && 'is-invalid'
                    }`}
                    placeholder="電子信箱"
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
                    <div className="b-invalid-feedback">
                      {errors?.email?.message}
                    </div>
                  )} 
                </div>
                <div className="field">
                  <label className="lable1">手機電話</label>
                  <input
                    type="number"
                    // id="mobileReg"
                    name="mobile"
                    // onChange={(e) => setMobileReg(e.target.value)}
                    className={`form-control ${
                      errors.mobile && 'is-invalid'
                    }`}
                    placeholder="電話號碼"
                    {...register('mobile', {
                      required: {
                        value: true,
                        message: '電話號碼為必填',
                      },
                      pattern: {
                        value: /^[0-9]{10}$/g,
                        message: '電話格式不正確',
                      },
                      maxLength: {
                        value: 10,
                        message: '最多不會高於10字元',
                      },
                    })}
                  />
                  {errors.mobile && (
                    <div className="b-invalid-feedback">
                      {errors?.mobile?.message}
                    </div>
                  )} 
                </div>
                <div className="field">
                  <label className="lable1">密碼</label>
                  <input
                    type="password"
                    // id="passwordReg"
                    name="password"
                    // onChange={(e) => setPasswordReg(e.target.value)}
                    className={`form-control ${
                      errors.password && 'is-invalid'
                    }`}
                    placeholder="密碼 至少8字元"
                    {...register('password', {
                      required: {
                        value: true,
                        message: '密碼為必填',
                      },
                      minLength: {
                        value: 8,
                        message: '最少不會低於8字元',
                      },
                      maxLength: {
                        value: 10,
                        message: '最多不會高於10字元',
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="b-invalid-feedback">
                      {errors?.password?.message}
                    </div>
                  )} 
                </div>
                <div className="field">
                  <label className="lable1">生日</label>
                  <input
                    type="date"
                    // id="birthdayReg"
                    name="birthday"
                    // onChange={(e) => setBirthdayReg(e.target.value)}
                    className={`form-control ${
                      errors.birthday && 'is-invalid'
                    }`}
                    placeholder="請選擇日期"
                    {...register('birthday', { required: true })}
                  />
                  {errors.birthday && (
                    <div className="b-invalid-feedback">生日日期為必填</div>
                  )}
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="註冊" />
                  註冊
                </div>
                {/* <div className="signup-link">已有帳號? <Link to="/Loginpage">立即登入</Link></div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Memregister
