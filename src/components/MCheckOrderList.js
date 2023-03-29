import React from "react";
import { FaDollarSign, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import MMComment from "./MMComment";
function MCheckOrderList() {
    return (
        <div className="container orderdetaillistpage">
            <div className=" d-flex justify-content-between  listTOP">
                <div>訂單#123456789明細</div>
                <div>已完成</div>
            </div>

            {/* <div className="row">
            <span className="mlogout">
                <button className="btn-info mb-5">
                    <Link to="./MHistory">返回</Link>
                </button>
            </span>
        </div> */}

            <table className="mb-3 ">
                <thead className="listcontent2 ">
                    <th colspan="2">收件人詳細資料</th>
                </thead>
                <tbody className=" listcontent3">
                    <tr>
                        <td>姓名:</td>
                        <td>田買買</td>
                    </tr>
                    <tr>
                        <td>電話:</td>
                        <td>09123456789</td>
                    </tr>
                    <tr>
                        <td>送貨地址:</td>
                        <td>台北市大安區復興南路一段390號2樓201室</td>
                    </tr>
                </tbody>
                <tbody className="col-6 listcontent3">
                    <tr>
                        <td>訂單編號:</td>
                        <td>#123456789</td>
                    </tr>
                    <tr>
                        <td>付款方式:</td>
                        <td>信用卡</td>
                    </tr>
                    <tr>
                        <td>狀態:</td>
                        <td>已完成</td>
                    </tr>
                </tbody>
            </table>
            <table className="orderdetaillist h5">
                <thead>
                    <tr>
                        <th className=" col d-none d-lg-block ">產品</th>
                        <th className="col">名稱</th>
                        <th className="col">數量</th>
                        <th className="col">金額</th>
                        {/* <th className="col">評論</th> */}
                    </tr>
                </thead>
                <tbody className="orderdetaillistPRODUT ">
                    <tr>
                        <td className=" col d-none d-lg-block">
                            <img
                                className="orderimg "
                                src="/img/mimg/member2.jpg"
                                alt="產品圖"
                            />
                        </td>
                        <td>
                            <h5 className="orderdetaillisttext">
                                EPIK HIGH SleeplessIn___________(whitevinyl)
                            </h5>
                        </td>
                        <td>1</td>
                        <td>
                            <FaDollarSign />
                            3840
                        </td>
                        {/* <td className="align-middle">
                        <button className="btn-comment" type="button" ><Link to="./MComment"> 評價</Link></button>
                    </td> */}
                    </tr>
                    <tr>
                        <td className=" col d-none d-lg-block">
                            <img
                                className="orderimg "
                                src="/img/mimg/member2.jpg"
                                alt="產品圖"
                            />
                        </td>
                        <td>
                            <h5 className="orderdetaillisttext">
                                EPIK HIGH SleeplessIn___________(whitevinyl)
                            </h5>
                        </td>
                        <td>1</td>
                        <td>
                            <FaDollarSign />
                            3840
                        </td>
                        {/* <td className="align-middle">
                        <button className="btn-comment" type="button" ><Link to="./MComment"> 評價</Link></button>
                    </td> */}
                    </tr>
                    <tr>
                        <td className=" col d-none d-lg-block">
                            <img
                                className="orderimg "
                                src="/img/mimg/member2.jpg"
                                alt="產品圖"
                            />
                        </td>
                        <td>
                            <h5 className="orderdetaillisttext">
                                EPIK HIGH SleeplessIn___________(whitevinyl)
                            </h5>
                        </td>
                        <td>1</td>
                        <td>
                            <FaDollarSign />
                            3840
                        </td>
                        {/* <td className="align-middle">
                        <button className="btn-comment" type="button" ><Link to="./MComment"> 評價</Link></button>
                    </td> */}
                    </tr>
                </tbody>
            </table>
            {/* 評論五星 */}
            <MMComment />
        </div>
    );
}

export default MCheckOrderList;
