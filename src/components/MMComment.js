import { FaRegStar, FaStar } from 'react-icons/fa'

function MMComment() {
  return (
    <>
      {/* 評論五星 */}
      <div className="start justify-content-center h3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </div>
      <div className="writecomment">
        <textarea
          name="comment"
          className="comment me-3 mb-3"
          id="comment"
          placeholder="留下您的評論"
        ></textarea>
        <div>
          <button className="btn-success">評價</button>
        </div>
      </div>
    </>
  )
}

export default MMComment
