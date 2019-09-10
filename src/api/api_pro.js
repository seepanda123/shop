import * as API from './index'

export default {
  //注册接口
  register: params => {
    return API.GET('/reg.php', params)
  },
  //登录接口
  login: params => {
    return API.GET('/login.php', params)
  },
   //获取列表接口
  getProlist:params => {
    return API.GET('/productlist.php', params)
  },
  // 获取详情接口
  getProdetail:params => {
    return API.GET('/detail.php', params)
  },
  // 添加购物车
  getAddcart:params => {
    return API.GET('/add-product.php', params)
  },
  //获取购物车列表
  getCartlist:params => {
    return API.GET('/cart-list.php', params)
  },
  //删除购物车商品
  delcartlist:params => {
    return API.GET('/cart-delete.php', params)
  },
  //更新购物车商品数量
  updatedcartnum:params => {
    return API.GET('/cart-update-num.php', params)
  }
}
