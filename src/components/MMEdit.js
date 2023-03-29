import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MEMBER_EDIT } from '../api/api_config'
import axios from 'axios'
// import axios from 'axios'
function MMEdit({ member, setMemberData }) {
  //帶member資料進來，變更setMemberData然後member資料要重新帶入
  const [members, setMembers] = useState([])

  console.log(members)

  const saveMemberData = async () => {
    const response = await axios.put(
      MEMBER_EDIT + '/' + members[0].sid,
      members[0]
    )
    setMemberData([response.data.forData.params])
  }

  useEffect(() => {
    setMembers(member)
  }, [member])

  return (
    <div className="container text-nowrap py-10 ">
      <div className="row">
        {/* <div className="Link d-flex h3">
          <li className="list-unstyled  me-5">
            <Link to="/MEdit" className="mlisthover">
              編輯資料
            </Link>
          </li>
          <li className="list-unstyled  me-1">
            <Link to="/MPassword" className="mlisthover">
              設定密碼
            </Link>
          </li>
        </div> */}

        <form className="d-lg-flex minfo-editgroup justify-content-evenly">
          {members.map((r) => {
            return (
              <>
                <div className="px-4 mmyCard" key={r.sid}>
                  <div className=" justify-sm-start ">
                    <div className="mimg-warp ">
                      <img src="/img/mimg/vinyl131301.jpg" alt="" />
                    </div>
                    <div className=" justify-sm-start ">
                      <h3>{r.name}</h3>
                      <span className="h6 memberlevel px-xl-2">
                        {r.member_level}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )
          })}

          <div>
            <div className="h6">
              <FaEdit />
              編輯會員資料
            </div>
            {members.map((r) => {
              return (
                <>
                  <div className="mb-3 d-lg-flex" key={r.sid}>
                    <label htmlFor="memberName" className="form-label me-3">
                      姓名
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={r.name}
                      onChange={(e) => {
                        setMembers([
                          {
                            ...members[0],
                            name: e.target.value,
                          },
                        ])
                      }}
                      required
                    />
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label me-3"
                    >
                      信箱
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      value={r.email}
                      onChange={(e) => {
                        setMembers({
                          ...members,
                          email: e.target.value,
                        })
                      }}
                    />
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label htmlFor="tel" className="form-label me-3">
                      手機
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      name="tel"
                      value={r.mobile}
                      onChange={(e) => {
                        setMembers({
                          ...members,
                          tel: e.target.value,
                        })
                      }}
                    />
                  </div>
                  {/* <div className="mb-3 d-lg-flex">
                    <label htmlFor="tel" className="form-label me-3">
                      地址
                    </label>
                    <select
                      className="selecttype"
                      id="city"
                      name="city"
                      value={r.city}
                      onChange={(e) => {
                        setMembers({
                          ...members,
                          city: e.target.value,
                        })
                      }}
                    >
                      <option value={r.city}>{r.city}</option>
                    </select>
                    <select
                      className="selecttype"
                      id="area"
                      name="area"
                      value={r.area}
                      onChange={(e) => {
                        setMembers({ ...members, area: e.target.value })
                      }}
                    >
                      <option value={r.area}>{r.area}</option>
                    </select>
                    <input
                      className="form-control"
                      name="address"
                      value={r.address}
                      onChange={(e) => {
                        setMembers({ ...members, address: e.target.value })
                      }}
                    />
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label htmlFor="tel" className="form-label me-3">
                      性別
                    </label>
                    <select
                      className="selecttype"
                      id="gender"
                      name="gender"
                      value={r.gender}
                      onChange={(e) => {
                        setMembers({ ...members, gender: e.target.value })
                      }}
                    >
                      <option value={r.gender}>{r.gender}</option>
                      <option value="男">男性</option>
                      <option value="女">女性</option>
                      <option value="other">不透露</option>
                    </select>
                  </div> */}
                  <div className="mb-3 d-lg-flex">
                    <label htmlFor="day" className="form-label me-3">
                      生日
                    </label>
                    <input
                      type="day"
                      className="form-control"
                      id="day"
                      name="birthday"
                      value={dayjs(r.birthday).format('YYYY-MM-DD')}
                      onChange={(e) => {
                        setMembers({ ...members, birthday: e.target.value })
                      }}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <label
                      className="form-check-label me-3"
                      htmlFor="exampleCheck1"
                    >
                      訂閱通知
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                  </div>
                </>
              )
            })}
            <button
              //送出修改值
              type="submit"
              className="btn-success me-3"
              onClick={(e) => {
                e.preventDefault()
                console.log(members)
                const newItems = members.map((v, i) => {
                  if (v.sid === members.sid) return { ...v, members: '' }
                  else return { ...v }
                })
                saveMemberData(newItems)
              }}
            >
              儲存
            </button>
            <button type="" className="btn-comment mb-3">
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MMEdit