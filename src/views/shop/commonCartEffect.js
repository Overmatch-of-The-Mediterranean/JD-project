import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  // store 会自动将数据转化为reactive
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  return { changeCartItemInfo, cartList }
}
