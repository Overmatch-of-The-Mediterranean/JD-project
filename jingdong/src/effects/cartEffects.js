import { computed } from 'vue'
import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  // store 会自动将数据转化为reactive
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  // 展示购物车的内容，需要先获得购物车中的内容
  const displayCartList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const noEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        noEmptyProductList[i] = product
      }
    }
    return noEmptyProductList
  })
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })
  const Caculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = { singlePirce: 0, total: 0, price: 0, allChecked: true }
    if (productList) {
      let i
      for (i in productList) {
        const product = productList[i]
        result.total += product.count
        if (product.check) {
          result.price += product.count * product.price
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })
  return { changeCartItemInfo, cartList, displayCartList, shopName, Caculations }
}
