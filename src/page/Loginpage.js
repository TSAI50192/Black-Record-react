import React, { useContext, useState } from 'react'
// import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// import { MEMBERSHIPLOGIN } from '../../components/api_config'
import Loginmain from '../components/Loginmain'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'

function Loginpage() {
  const [nameReg, setNameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [mobileReg, setMobileReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [birthdayReg, setBirthdayReg] = useState('')

  // const [loginStatus, setLoginStatus] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setMyAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const memberRegister = () => {
    axios
      .post('http://localhost:3001/db-memberlogin/memberRegister', {
        name: nameReg,
        email: emailReg,
        mobile: mobileReg,
        password: passwordReg,
        birthday: birthdayReg,
      })
      .then(function (response) {
        console.log(response)
        alert('註冊成功')
        navigate('/Loginpage')
      })
    // .catch(function (error) {
    //   console.error(error)
    // })
  }

  const Login = () => {
    axios
      .post('http://localhost:3001/db-memberlogin/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        // if (response.data.message) {
        //   setLoginStatus(response.data.message)
        // } else {
        //   setLoginStatus(response.data[0].name)
        // }
        console.log(response.data)
        alert('登入成功')
        // navigate('/')
        window.location.assign('/')
        setMyAuth({
          authorized: true,
        })

        // 登入失敗
        if (!response.data.success) {
          alert(`${response.data.error}`)
        }
      })
  }
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     username: '',
  //     email: '',
  //     mobile: '',
  //     password: '',
  //     birthdate: '',
  //     agree: 'false',
  //   },
  //   mode: 'onTouched',
  // })
  // const onSubmit = (e) => {
  //   e.preventDefault()
  // }

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
                會員登入
              </label>
              <label for="signup" className="slide signup">
                註冊會員
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form2-inner">
              {/* 登入 */}
              <form
                action="#"
                className="login form2"
                // onSubmit={(e) => {
                //   e.preventDefault()
                //   Login()
                // }}
              >
                <div className="field">
                  <label className="lable1">電子信箱</label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    // className={`from-control ${errors.email && 'is-invalid'}`}
                    // name="email"
                    placeholder="電子信箱"
                    // {...register('email', {
                    //   required: {
                    //     value: true,
                    //     message: '信箱為必填',
                    //   },
                    //   pattern: {
                    //     value: /^\S+@\S+$/i,
                    //     message: 'Email格式錯誤',
                    //   },
                    // })}
                  />
                  {/* {errors.email && (
                    <div className="b-invalid-feedback">
                      {errors?.email?.message}
                    </div>
                  )} */}
                </div>
                <div className="field">
                  <label className="lable1">密碼</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    // className={`form-control ${
                    //   errors.password && 'is-invalid'
                    // }`}
                    // name="password"
                    placeholder="密碼"
                    // {...register('password', {
                    //   required: {
                    //     value: true,
                    //     message: '密碼為必填',
                    //   },
                    //   minLength: {
                    //     value: 8,
                    //     message: '最少不會低於8字元',
                    //   },
                    //   maxLength: {
                    //     value: 10,
                    //     message: '最多不會高於10字元',
                    //   },
                    // })}
                  />
                  {/* {errors.password && (
                    <div className="b-invalid-feedback">
                      {errors?.password?.message}
                    </div>
                  )} */}
                </div>
                {/* <div className="pass-link">
                <Link to="/">忘記密碼?</Link>
              </div> */}
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="登入" onClick={Login} />
                  登入
                </div>
                {/* <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Google登入"/>
              </div> */}
                {/* <div className="signup-link"></div> */}

                {/* 註冊會員 */}
              </form>
              <form
                action="#"
                className="signup form2"
                onSubmit={(e) => {
                  e.preventDefault()
                  memberRegister()
                }}
              >
                <div className="field">
                  <label className="lable1">用戶名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setNameReg(e.target.value)}
                    // className={`form-control ${
                    //   errors.recipient && 'is-invalid'
                    // }`}
                    placeholder="用戶名"
                    // {...register('name', {
                    //   required: { value: true, message: '名字為必填' },
                    // })}
                  />
                  {/* {errors.name && (
                    <div className="b-invalid-feedback">
                      {errors?.name?.message}
                    </div>
                  )} */}
                </div>
                <div className="field">
                  <label className="lable1">電子信箱</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={(e) => setEmailReg(e.target.value)}
                    // className={`from-control ${errors.email && 'is-invalid'}`}
                    placeholder="電子信箱"
                    // {...register('email', {
                    //   required: {
                    //     value: true,
                    //     message: '信箱為必填',
                    //   },
                    //   pattern: {
                    //     value: /^\S+@\S+$/i,
                    //     message: 'Email格式錯誤',
                    //   },
                    // })}
                  />
                  {/* {errors.email && (
                    <div className="b-invalid-feedback">
                      {errors?.email?.message}
                    </div>
                  )} */}
                </div>
                <div className="field">
                  <label className="lable1">手機電話</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    onChange={(e) => setMobileReg(e.target.value)}
                    // className={`form-control ${errors.number && 'is-invalid'}`}
                    placeholder="電話號碼"
                    // {...register('mobile', {
                    //   required: {
                    //     value: true,
                    //     message: '電話號碼為必填',
                    //   },
                    //   pattern: {
                    //     value: /^[0-9]{10}$/g,
                    //     message: '電話格式不正確',
                    //   },
                    //   maxLength: {
                    //     value: 10,
                    //     message: '最多不會高於10字元',
                    //   },
                    // })}
                  />
                  {/* {errors.mobile && (
                    <div className="b-invalid-feedback">
                      {errors?.mobile?.message}
                    </div>)} */}
                </div>
                <div className="field">
                  <label className="lable1">密碼</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPasswordReg(e.target.value)}
                    // className={`form-control ${
                    //   errors.password && 'is-invalid'
                    // }`}
                    placeholder="密碼 至少8字元"
                    // {...register('password', {
                    //   required: {
                    //     value: true,
                    //     message: '密碼為必填',
                    //   },
                    //   minLength: {
                    //     value: 8,
                    //     message: '最少不會低於8字元',
                    //   },
                    //   maxLength: {
                    //     value: 10,
                    //     message: '最多不會高於10字元',
                    //   },
                    // })}
                  />
                  {/* {errors.password && (
                    <div className="b-invalid-feedback">
                      {errors?.password?.message}
                    </div>
                  )} */}
                </div>
                <div className="field">
                  <label className="lable1">生日</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    onChange={(e) => setBirthdayReg(e.target.value)}
                    // className={`form-control ${
                    //   errors.birthday && 'is-invalid'
                    // }`}
                    placeholder="請選擇日期"
                    // {...register('birthday', { required: true })}
                  />
                  {/* {errors.birthday && (
                    <div className="b-invalid-feedback">生日日期為必填</div>
                  )} */}
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="註冊" onClick={memberRegister} />
                  註冊
                </div>
                {/* <div className="signup-link">已有帳號? <Link to="/Loginpage">立即登入</Link></div> */}
              </form>
            </div>
          </div>
        </div>
        <Loginmain />
      </div>
    </>
  )
}

export default Loginpage
