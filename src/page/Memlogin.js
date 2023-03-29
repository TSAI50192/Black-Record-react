import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// import { MEMBERSHIPLOGIN } from '../../components/api_config'
// import Loginmain from '../components/Loginmain'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'
import Swal from 'sweetalert2'
// import { MEMLOGIN } from '../api/api_config'

function Memlogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  })

  // const navigate = useNavigate()
  // 會員登入
  const Login = async (data) => {
    axios
      .post('http://localhost:3001/db-membership/login', data)
      .then((response) => {
        let sid = response.data.loginData.sid
        console.log(sid);
        window.localStorage.setItem("user",sid)
        console.log(response)
        if (response.data.success) {
          Swal.fire({
            title: '成功!',
            text: `歡迎 ${response.data.loginData.name} 回來`,
            icon: 'success',
            confirmButtonText: '確認',
          })
          .then(function () {
            window.location.href = '/'
          })
        }
        // navigate('/')

        // 登入失敗
        if (!response.data.success) {
          Swal.fire({
            title: '登入失敗',
            text: '帳號密碼錯誤',
            icon: 'error',
            confirmButtonText: '重新輸入',
          })
        }
      })
  }

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
            <div className="title signup">
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
                defaultChecked
                style={{ display: 'none' }}
              />
              <input type="radio" name="slide" style={{ display: 'none' }} />
              <label htmlFor="login" className="slide login">
                <Link to="/Memlogin">登入會員</Link>
              </label>
              <label htmlFor="signup" className="slide signup">
                <Link to="/Memregister">註冊會員</Link>
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form2-inner">
              {/* 登入 */}
              <form
                action="#"
                className="login form2"
                onSubmit={handleSubmit(Login)}
              >
                <div className="field">
                  <label htmlFor="password" className="lable1">
                    帳號
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email && 'is-invalid'}`}
                    placeholder="請輸入帳號"
                    {...register('email', {
                      required: {
                        value: true,
                        message: '帳號為必填',
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
                  <label htmlFor="password" className="lable1">
                    密碼
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      errors.password && 'is-invalid'
                    }`}
                    placeholder="請輸入密碼"
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
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="登入" />
                  登入
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Memlogin
