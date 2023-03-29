import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { vrCommitData } from '../../api_config'
import axios from 'axios'
import dayjs from 'dayjs'
import { Rate } from 'antd'

function Talk() {
  const [CommentData, setCommentData] = useState({
    gcd: [],
  })
  const getCommentData = async () => {
    const response = await axios.get(vrCommitData, {
      params: {},
    })
    setCommentData(response.data)
  }
  useEffect(() => {
    getCommentData()
    return () => {}
  }, [])

  console.log(CommentData.gcd)

  const commitList = CommentData.gcd.slice(1, 20)
  console.log({ commitList })

  return (
    <>
      {commitList.map((comit, i) => {
        return (
          <div className="a-feedback card mt-5" key={comit.sid}>
            <div className="row">
              <div className="col-2 text-center mt-6">
                <img
                  className="a-talkImg rounded-circle border border-5"
                  src="../img/products/vin/999.jpg"
                  alt="商品照"
                />
              </div>
              <div className="col-9">
                <ul className="mt-2 h5 list-unstyled">
                  <li className="member">{comit.email} </li>
                  <li className="a-starIcon">
                    {/* <Rate tooltips={comit.fraction} */}
                    <Rate
                      disabled
                      defaultValue={comit.fraction}
                      className="a-evaluateIcon"
                    />
                    {/* <BsStarFill /> */}
                  </li>
                  <li>
                    留言日期:
                    <span />
                    {dayjs(comit.created_time).format('YYYY-MM-DD')}
                  </li>
                  <li>
                    留言內容:
                    <span />
                    {comit.comment_content}
                  </li>
                </ul>
                <div className="a-storeBoss mb-5">
                  <p />
                  賣家回應:
                  <p />
                  {comit.response}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Talk
