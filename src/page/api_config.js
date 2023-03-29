//api url 獨立成設定檔
export const HOST = 'http://localhost:3001'

// GET:全部黑膠商品
export const ALL_VR_DATA = `${HOST}/db-all-vr-album/api`

// GET:黑膠商品
export const PRODUCT_DATA = `${HOST}/product`

// 登入, POST
export const CUS_UPLOAD = `${HOST}/try-upload/api`

// GET:商品頁面(黑膠)
export const vrProd_DATA = `${HOST}/db-product/api`

// 商品頁面全
export const vrPl_Data = `${HOST}/db-product/api`

// 唱機頁面全
export const vrPlayerAll_Data = `${HOST}/db-recordPlayerAll/api`

// 商品評論資料庫
export const vrCommitData = `${HOST}/db-commentAll/api`

//其他商品資料庫
export const otherPorductData = `${HOST}/db-otherPorduct/api`
