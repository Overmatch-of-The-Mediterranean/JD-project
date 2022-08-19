import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层是那家店铺对应的id
      shopId: {
        // 第二层是店铺中的商品
        productId: {}
      }
    }
  },
  getters: {
  },
  mutations: {

    // 商品添加到购物车中
    // 如果购物车中原来没有这个商品，就相当于，重新构建cartList的数据结构，往里填充数据，最后再赋值给cartList
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId] || {}
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + num
      if (num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }

      // 更新数据
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemCheck(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    },
    clearCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId]
      if (productList) {
        let i
        for (i in productList) {
          const product = productList[i]
          product.check = true
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
