import React from 'react'
import { FaEdit, FaKey } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MMPassWord({ member }) {
  return (
    <div className="container ">
      <div className="row">
        <div className="Link d-flex h3">
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
        </div>
        <form className=" minfo-editgroup  h3">
          {member.map((r) => {
            return (
              <>
                <div className="h6 userpassword ">
                  <FaEdit />
                  編輯密碼
                </div>
                <div className="usereditpassword d-flex justify-content-center mb-3 ">
                  <label for="password">
                    <FaKey className="me-3" />
                  </label>
                  <input
                    type="password"
                    placeholder="輸入舊密碼"
                    value={r.password}
                  />
                </div>

                <div className="usereditpassword d-flex justify-content-center mb-3">
                  <label for="password">
                    <FaKey className="me-3" />
                  </label>
                  <input type="password" placeholder="新密碼(至少8個字元)" />
                </div>
                <div className="usereditpassword justify-content-center d-flex mb-6">
                  <label for="password">
                    <FaKey className="me-3" />
                  </label>
                  <input type="password" placeholder="再次輸入新密碼" />
                </div>
              </>
            )
          })}

          <div className="passwordeditSave d-flex justify-content-center">
            <button className="btn-success   mb-3">更新密碼</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MMPassWord
