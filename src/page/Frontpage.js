import { FaRegPlayCircle } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
import Googlemap from '../components/Googlemap'
import Main from '../components/Main'
import Divbar from '../components/Divbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

// import { Player } from 'video-react';

// export default function Frontpage() {
//   const{}=useLoadScript({
//     goolgeMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   return <div>Map</div>
// }

function Frontpage() {
  return (
    <>
      <div>
        <div className="b-hero">
          <Main />
          {/* <img src="./img/20230308.png" alt="PG1" className="b-back-video"/> */}
          {/* <Divbar/> */}
          <div className="title">
            <h1>BLACK VINLY RECORD</h1>
          </div>
          <div className="b-content">
            <div className="b-content1">
              <h3>CUSTOMIZATION CLICK HERE</h3>
            </div>
            <Link to="/Customization">
              <FaRegPlayCircle />
            </Link>
          </div>
        </div>
        {/* <!-- 介紹頁面 --> */}
        <div className="b-container1">
          <div className="b-box3">
            <div className="b-box5">
              <h1>黑膠唱片的由來</h1>
              <p>
                黑膠唱片，習慣又稱電木唱片（英語：phonograph
                record），指轉速每分鐘78轉、聲槽寬度0.10—0.16毫米、
                聲槽密度每厘米30—50條的留聲機唱片。黑膠唱片是一般人對過往使用唱盤機播放的唱片的稱呼。
                這種唱片是一種黑色圓盤形的膠片，早期為石墨材質，之後使用蟲膠（後期再改用聚氯乙烯，即PVC）壓製，上面刻有凹凸的坑紋以記錄聲音。
                早期的黑膠唱片只有單聲道，到後來發展成為雙軌的雙聲道音軌。
              </p>
              <p>
                到了1980年代後期時，這些唱片的顏色已不再局限於黑色，而可以是白色、橙色、透明、螢光色，甚至可以把歌手的樣貌印製在唱片裡，不過成本比較高。
                黑膠唱片可使用鋼針（早期手搖唱機）和粗紋寶石唱針（電唱頭）放唱，唱針與密紋唱片不能通用。
              </p>
              <div className="b-box6">
                <img
                  src="./img/22121235.jpg"
                  alt="PG1"
                  style={{ borderradius: '3%' }}
                />
                <div className="b-box7">
                  <img
                    src="./img/logo.svg"
                    alt="LOGO"
                    style={{ width: '50vh' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="b-box4">
            <img src="./img/22121243.png" alt="PG2" />
          </div>
        </div>

        {/* <!-- 製造過程  --> */}
        <div className="b-container2">
          <div className="b-box8">
            <h3>黑膠唱片的製造過程</h3>
            <p>
              留聲機的黃金時代的年齡，你知道，因為它們最早可以追溯到 1800
              年代中期。
              但是隨著黑膠唱片的（持續）復甦，現在隨著時髦和復古音樂愛好者的時代，
              我認為這將是一個很好的機會來看看這些永恆的音樂存儲設備是如何製造的。
            </p>
          </div>
          <div className="b-box9">
            <h1>01</h1>
            <div className="b-box13">
              <img
                src="./img/CJGUTFGXHZC23GOGTABHOGWLJA.jpeg"
                alt="PG3"
                style={{ borderradius: '3%' }}
              />
            </div>
          </div>
          <div className="b-box10">
            <img
              src="./img/circle.svg"
              alt="circle"
              style={{ width: '1600px', overflow: 'hidden' }}
            />
          </div>
          <div className="b-box11">
            <h3>1.將音樂刻在印模上</h3>
            <p>
              音樂基本上可以歸結為真正“時髦”的聲波，因此為了將這些聲波壓到一塊黑膠唱片上，首先需要為介質進行專業混音。
              音樂混合後，聲音被雕刻成一系列凹槽，然後轉移到壓模上。然後，唱片公司和獨立樂隊將這些壓模發送到許多壓制工廠
              (例如 BrooklynPhono)。
            </p>
          </div>
          <div className="b-box12">
            <img src="./img/PG4.png" alt="PG4" />
          </div>
          <div className="b-box14">
            <p>將其他顏色與膠盤壓模，將壓模加載到液壓機上進行黑膠唱片製作。</p>
          </div>
        </div>
        <div className="b-box15">
          <h1>02</h1>
          <div>
            <img src="./img/PG5.jpg" alt="PG5" style={{ borderradius: '3%' }} />
          </div>
        </div>
        <div className="b-box22">
          <img
            src="./img/circle.svg"
            alt="circle"
            style={{ width: '1600px', overflow: 'hidden' }}
          />
        </div>
        <div className="b-box17">
          <h3>2.烘烤乙烯基</h3>
          <p>
            當唱片訂單通過時，BrooklyPhono 準備圓形黑膠唱片。
            這些塊首先在中心鑽孔，然後在烤箱中烘烤。在 BrooklynPhono
            的情況下，他們使用傳統方法使用蒸汽和熱水將黑膠唱片壓成唱片。 將
            2,000psi 施加到加熱的乙烯基片上，然後冷卻以產生唱片。
          </p>
          <div className="b-box18">
            <img src="./img/PG6.png" alt="PG6" />
          </div>
          <div className="b-box19">
            <p>將其他顏色與膠盤壓模，將壓模加載到液壓機上進行黑膠唱片製作。</p>
          </div>
        </div>
        <div className="b-box20">
          <h1>03</h1>
          <div className="b-box16">
            <img src="./img/PG7.png" alt="PG7" style={{ borderradius: '3%' }} />
          </div>
        </div>
      </div>

      {/* <!-- 影片介紹 --> */}
      <div className="b-container3">
        <div className="b-box21">
          <h3>3.添加標籤並按下加熱</h3>
          <p>
            使用擠出機將這些加熱的乙烯基塊夾在兩個標籤之間。
            然後將粗製的乙烯基三明治向前噴射到可以找到壓模的主要壓制區域。
            壓模就位後，黑膠唱片上就會出現甜美動聽的音樂。
          </p>
        </div>
        {/* <!-- 倫播牆 --> */}
        <div className="box23">
          <Carousel />
        </div>
        <div className="b-box24">
          <iframe
            width="1450px"
            height="860px"
            src="https://www.youtube.com/embed/Dm9Pp6w4KGU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* <!-- 通路 --> */}
      <div className="b-container4" style={{ display: 'flex' }}>
        <div className="b-map" id="map">
          <Googlemap />
        </div>
        <div className="b-box25" style={{ padding: '2%' }}>
          <h1>通路</h1>
          <h4>大安門市</h4>
          <p>106台北市大安區和平東路一段12巷4號</p>
          <p>TEL 02-2227-6666 OPEN 11:00-21:00</p>
          <h4>中山門市</h4>
          <p>10491台北市中山區吉林路329巷15號</p>
          <p>TEL 02-2227-6100 OPEN 12:00-18:30</p>
          <h4>信義門市</h4>
          <p>110台北市信義區松智路17號2樓</p>
          <p>TEL 02-2227-6200 OPEN 11:00-21:30</p>
          <h4>北投門市</h4>
          <p>112台北市北投區文林北路156號</p>
          <p>TEL 02-2227-6000 OPEN 12:00-20:00</p>
        </div>
      </div>

      {/* <!-- footer --> */}
      {/* <Footer/> */}
    </>
  )
}

export default Frontpage
