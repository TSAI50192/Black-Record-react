import React, { useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { useContext, useState } from 'react'
import { CartContext } from '../../../store'
import Swal from 'sweetalert2'
function CenterList({ vinyls, rev, other, itemOutput, priceOutput }) {
  const [state, dispatch] = useContext(CartContext)
  const [statea, dispatcha] = useReducer(
    (statea, action) => {
      return { ...statea, [action]: !statea[action] }
    },
    {
      0: false,
      1: false,
    }
  )
  const originData = [...vinyls]
  // 判斷priceOutput = all,priceNum1,2,3,4
  // all => vinyls
  if (priceOutput == 'priceNum1') {
    vinyls = originData.filter((vinyls) => {
      return vinyls.vr_price < 1000;
    })
  } else if (priceOutput == 'priceNum2') {
    vinyls = originData.filter((vinyls) => {
      return vinyls.vr_price > 1000 && vinyls.vr_price < 2999;
    })
    console.log(vinyls);
  } else if (priceOutput == 'priceNum3') {
    vinyls = originData.filter((vinyls) => {
      return vinyls.vr_price > 3000 && vinyls.vr_price < 4999;
    })
  } else if (priceOutput == 'priceNum4'){
    vinyls = originData.filter((vinyls) => {
      return vinyls.vr_price > 5000
    })
  }else{
    vinyls = originData
  }


  useEffect(() => {
    console.log(itemOutput, priceOutput);
    return () => { }
  }, [itemOutput, priceOutput])
  // 如果output == 'all' => 渲染全部的東西，output==rev => 渲染唱片機，vinyls 就是渲染唱片，others=>渲染其他
  if (itemOutput == 'all') {
    return (
      <>
        {vinyls.map((product, i) => {
          return (
            <div className="a-centerArea col mb-10" key={product.sid}>
              <div className="a-productCardFs card h-100 ">
                <img
                  src={`/img/products/vin/${product.vr_img}`}
                  className="a-card-img-top w-100 h-50"
                  alt="商品專輯"
                />
                <div className="a-productCard card-body p-0 m-2 list-unstyled">
                  <Link
                    to={`/ProductDt/${product.number}`}
                    className="a-productAlbumName height-two lh-sm mb-3"
                  >
                    {product.vr_name}
                  </Link>
                  <div className="eddie">
                    <i className="h4 float-end mb-3">NT$ {product.vr_price}</i>
                    {statea[i + 1] ? (
                      <FcLike
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                        }}
                      />
                    ) : (
                      <FcLikePlaceholder
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                          console.log(i + 1)
                          console.log(product.sid)
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          ...product,
                          quantity: 1,
                        },
                      })
                      // alert(`已將 ${product.title} 加到購物車`);
                      Swal.fire({
                        title: '成功!',
                        text: `已將 ${product.vr_name} 加到購物車`,
                        icon: 'success',
                        confirmButtonText: '確認',
                      })
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        {rev.map((product, i) => {
          return (
            <div className="a-centerArea col mb-10" key={product.sid}>
              <div className="a-productCardFs card h-100 ">
                <img
                  src={`/img/products/rec/${product.rp_image}`}
                  className="a-card-img-top w-100 h-50"
                  alt="商品專輯"
                />
                <div className="a-productCard card-body p-0 m-2 list-unstyled">
                  <Link
                    to={`/ProductDt/${product.number}`}
                    className="a-productAlbumName height-two lh-sm mb-3"
                  >
                    {product.rp_name}
                  </Link>
                  <div className="eddie">
                    <i className="h4 float-end mb-3">
                      NT$ {product.rp_unit_price}
                    </i>
                    {statea[i + 1] ? (
                      <FcLike
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                        }}
                      />
                    ) : (
                      <FcLikePlaceholder
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                          console.log(i + 1)
                          console.log(product.sid)
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          ...product,
                          quantity: 1,
                        },
                      })
                      // alert(`已將 ${product.title} 加到購物車`);
                      Swal.fire({
                        title: '成功!',
                        text: `已將 ${product.rp_name} 加到購物車`,
                        icon: 'success',
                        confirmButtonText: '確認',
                      })
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        {other.map((product, i) => {
          return (
            <div className="a-centerArea col mb-10" key={product.sid}>
              <div className="a-productCardFs card h-100 ">
                <img
                  src={`/img/products/mer/${product.mer_img}`}
                  className="a-card-img-top w-100 h-50"
                  alt="商品專輯"
                />
                <div className="a-productCard card-body p-0 m-2 list-unstyled">
                  <Link
                    to={`/ProductDt/${product.number}`}
                    className="a-productAlbumName height-two lh-sm mb-3"
                  >
                    {product.mer_name}
                  </Link>
                  <div className="eddie">
                    <i className="h4 float-end mb-3">NT$ {product.mer_price}</i>
                    {statea[i + 1] ? (
                      <FcLike
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                        }}
                      />
                    ) : (
                      <FcLikePlaceholder
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                          console.log(i + 1)
                          console.log(product.sid)
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          ...product,
                          quantity: 1,
                        },
                      })
                      // alert(`已將 ${product.title} 加到購物車`);
                      Swal.fire({
                        title: '成功!',
                        text: `已將 ${product.mer_name} 加到購物車`,
                        icon: 'success',
                        confirmButtonText: '確認',
                      })
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  } else if (itemOutput == 'vinyls') {
    return (
      <>
        {vinyls.map((product, i) => {
          return (
            <div className="a-centerArea col mb-10" key={product.sid}>
              <div className="a-productCardFs card h-100 ">
                <img
                  src={`/img/products/vin/${product.vr_img}`}
                  className="a-card-img-top w-100 h-50"
                  alt="商品專輯"
                />
                <div className="a-productCard card-body p-0 m-2 list-unstyled">
                  <Link
                    to={`/ProductDt/${product.number}`}
                    className="a-productAlbumName height-two lh-sm mb-3"
                  >
                    {product.vr_name}
                  </Link>
                  <div className="eddie">
                    <i className="h4 float-end mb-3">NT$ {product.vr_price}</i>
                    {statea[i + 1] ? (
                      <FcLike
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                        }}
                      />
                    ) : (
                      <FcLikePlaceholder
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                          console.log(i + 1)
                          console.log(product.sid)
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          ...product,
                          quantity: 1,
                        },
                      })
                      // alert(`已將 ${product.title} 加到購物車`);
                      Swal.fire({
                        title: '成功!',
                        text: `已將 ${product.vr_name} 加到購物車`,
                        icon: 'success',
                        confirmButtonText: '確認',
                      })
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          )
        })}


      </>
    )
  } else if (itemOutput == 'rev') {
    return (
      <>
        {rev.map((product, i) => {
          return (
            <div className="a-centerArea col mb-10" key={product.sid}>
              <div className="a-productCardFs card h-100 ">
                <img
                  src={`/img/products/rec/${product.rp_image}`}
                  className="a-card-img-top w-100 h-50"
                  alt="商品專輯"
                />
                <div className="a-productCard card-body p-0 m-2 list-unstyled">
                  <Link
                    to={`/ProductDt/${product.number}`}
                    className="a-productAlbumName height-two lh-sm mb-3"
                  >
                    {product.rp_name}
                  </Link>
                  <div className="eddie">
                    <i className="h4 float-end mb-3">
                      NT$ {product.rp_unit_price}
                    </i>
                    {statea[i + 1] ? (
                      <FcLike
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                        }}
                      />
                    ) : (
                      <FcLikePlaceholder
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                          console.log(i + 1)
                          console.log(product.sid)
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          ...product,
                          quantity: 1,
                        },
                      })
                      // alert(`已將 ${product.title} 加到購物車`);
                      Swal.fire({
                        title: '成功!',
                        text: `已將 ${product.rp_name} 加到購物車`,
                        icon: 'success',
                        confirmButtonText: '確認',
                      })
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          )
        })}


      </>
    )
  } else if (itemOutput == 'other') {
    return (
      <>
        {other.map((product, i) => {
          return (
            <div className="a-centerArea col mb-10" key={product.sid}>
              <div className="a-productCardFs card h-100 ">
                <img
                  src={`/img/products/mer/${product.mer_img}`}
                  className="a-card-img-top w-100 h-50"
                  alt="商品專輯"
                />
                <div className="a-productCard card-body p-0 m-2 list-unstyled">
                  <Link
                    to={`/ProductDt/${product.number}`}
                    className="a-productAlbumName height-two lh-sm mb-3"
                  >
                    {product.mer_name}
                  </Link>
                  <div className="eddie">
                    <i className="h4 float-end mb-3">NT$ {product.mer_price}</i>
                    {statea[i + 1] ? (
                      <FcLike
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                        }}
                      />
                    ) : (
                      <FcLikePlaceholder
                        size={30}
                        onClick={(e) => {
                          if (i + 1 == product.sid) {
                            dispatcha(product.sid)
                          }
                          console.log(i + 1)
                          console.log(product.sid)
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          ...product,
                          quantity: 1,
                        },
                      })
                      // alert(`已將 ${product.title} 加到購物車`);
                      Swal.fire({
                        title: '成功!',
                        text: `已將 ${product.mer_name} 加到購物車`,
                        icon: 'success',
                        confirmButtonText: '確認',
                      })
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          )
        })}


      </>
    )
  }

}

export default CenterList
