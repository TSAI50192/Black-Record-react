import React from 'react'

// 依照價格排序元件 from </VrList>
function Arrangement() {
  return (
    <>
      <div className="a-dropdown-center text-end p-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          排序
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="a-dropdown dropdown-item" href="#/">
              依價格排序由低至高
            </a>
          </li>
          <li>
            <a className="a-dropdown dropdown-item" href="#/">
              依價格排序由高至低
            </a>
          </li>
          <li>
            <a className="a-dropdown dropdown-item" href="#/">
              依名稱排序A~Z
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Arrangement
