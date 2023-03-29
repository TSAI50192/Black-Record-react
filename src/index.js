import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/scss/all.scss'
//公版
import './css/All.css'
import './css/b-login.css'
import './css/b-index.css'
//Luozhi
import './css/CartApp-back.css'
//BigBrother
import './css/App.css'
//薈瑜
import './css/tsai.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
//微君
import './css/m.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
