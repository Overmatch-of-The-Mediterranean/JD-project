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
    const productList = cartList[shopId]?.productList || []
    return productList
  })
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })
  return { changeCartItemInfo, cartList, displayCartList, shopName }
}
