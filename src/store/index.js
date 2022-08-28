import { createStore } from 'vuex'

const setLocalCartStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartStorage = () => {
  try {
    return JSON.parse(localStorage.cartList) || {}
  } catch (e) {
    return {}
  }
}

export default createStore({
  // cartList:{shopId:{shopName:'',productList:{productId:{}}}}
  state: {
    cartList: getLocalCartStorage()
    // cartList: {
    // 第一层是那家店铺对应的id
    //  shopId: {
    //  第二层是店铺中的商品
    //    shopName: '',
    //    peoductList: {
    //      productId: {}
    //    }
    //  }
    // }
  },
  getters: {
  },
  mutations: {

    // 商品添加到购物车中
    // 如果购物车中原来没有这个商品，就相当于，重新构建cartList的数据结构，往里填充数据，最后再赋值给cartList
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + num
      if (num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }

      // 更新数据
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(state.cartList)
      setLocalCartStorage(state)
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartStorage(state)
    },
    changeCartItemCheck(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartStorage(state)
    },
    clearCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartStorage(state)
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId].productList
      if (productList) {
        let i
        for (i in productList) {
          const product = productList[i]
          product.check = true
        }
      }
      setLocalCartStorage(state)
    },
    clearCartList(state, shopId) {
      state.cartList[shopId].productList = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
