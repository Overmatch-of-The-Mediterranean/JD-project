<template>
  <div class="order">
    <div class="order__price">实付金额 <b class="order__price__num">&yen;{{ Caculations.price }}</b></div>
    <div class="order__btn" @click="handleSubmitClick(true)">提交订单</div>
  </div>
  <div class="mask" v-if="showSubmit">
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__text">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div class="mask__content__btns__first mask__content__btns__common" @click="handleCancleClick(false)">取消订单</div>
        <div class="mask__content__btns__last mask__content__btns__common"
          @click="handleConfirmClick(false),handleSuccessMask(true)">确认支付</div>
      </div>
    </div>
  </div>
  <div class="successMask" v-if="successShow">
    <div class="successMask__content">
      <div class="successMask__top--container">
        <span class="successMask__top iconfont" @click="handleSuccessMask(false)">&#xe68f;</span>
      </div>
      <div class="successMask__middle iconfont">&#xe640;</div>
      <div class="successMask__bottom">支付成功，等待配送</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import { post } from '../../untils/request'

const useMakeOrderEffect = (shopId, shopName, displayCartList) => {
  const store = useStore()
  // const router = useRouter()
  const handleConfirmClick = async (isCanceled) => {
    const products = []
    let i
    // 计算属性存放的内容，都在value中
    for (i in displayCartList.value) {
      const product = displayCartList.value[i]
      products.push({ id: product._id, num: product.count })
    }
    // console.log(products)
    try {
      const result = await post('/api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products
      })
      console.log(result, 66666)
      console.log(result.shopId, 1111)
      if (result?.errno === 0) {
        localStorage.isLogin = true
        store.commit('clearCartList', shopId)
        // router.push({ name: 'orderList' })
      }
    } catch (e) {
      // show('请求失败')
    }
  }
  return { handleConfirmClick }
}

const useShowMaskEffect = () => {
  const router = useRouter()
  const successShow = ref(false)
  const showSubmit = ref(false)
  // 取消支付
  const handleCancleClick = (status3) => {
    showSubmit.value = status3
  }

  // 支付成功弹窗
  const handleSuccessMask = (status1) => {
    successShow.value = status1
    showSubmit.value = false
    if (!status1) {
      router.push({ name: 'home' })
    }
  }
  // 提交订单展示弹窗
  const handleSubmitClick = (status) => {
    showSubmit.value = status
    if (!status) successShow.value = true
    else successShow.value = false
  }
  return { handleSubmitClick, showSubmit, successShow, handleSuccessMask, handleCancleClick }
}
export default {
  name: 'OrderView',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    // console.log(shopId, 'hhhhhhhhhhhhhhhh')
    const { Caculations, displayCartList, shopName } = useCommonCartEffect(shopId)
    const { handleConfirmClick } = useMakeOrderEffect(shopId, shopName, displayCartList)
    const { handleSubmitClick, showSubmit, successShow, handleSuccessMask, handleCancleClick } = useShowMaskEffect()
    return { Caculations, handleConfirmClick, showSubmit, handleSubmitClick, successShow, handleSuccessMask, handleCancleClick }
  }
}
</script>

<style lang="scss" scoped>
.order {
  // overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  background-color: #fff;

  &__price {
    height: 100%;
    line-height: .49rem;
    text-indent: 2em;
    font-size: .14rem;
    color: #333333;

    &__num {
      font-size: .16rem;
    }
  }

  &__btn {
    width: 0.98rem;
    height: 100%;
    line-height: .49rem;
    background-color: #4FB0F9;
    text-align: center;
    color: #FFF;
  }
}
.mask {
  z-index: 1;
  // overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 3.01rem;
    height: 1.57rem;
    background-color: #fff;
    border-radius: .04rem;
    text-align: center;
    &__title {
      margin-top: .24rem;
      font-size: .18rem;
      color: #333333;
      line-height: .25rem;
    }
    &__text {
      margin: .08rem 0 .24rem 0;
      font-size: .14rem;
      color: #666666;
    }
    &__btns {
      display: flex;
      margin: 0 .58rem 0 .59rem;
      &__common {
        width: 0.8rem;
        height: 0.32rem;
        line-height: .3rem;
        border-radius: .16rem;
      }
      &__first {
        margin-right: .12rem;
        font-size: .14rem;
        color: #0091FF;
        border: .01rem solid #4FB0F9;
      }
      &__last {
        margin-left: .12rem;
        font-size: .14rem;
        color: #FFFFFF;
        background-color: #4FB0F9;
      }
    }
  }
}
.successMask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  &__content {
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 3.01rem;
    height: 1.56rem;
    background-color: #fff;
    border-radius: .04rem;
  }
  &__top--container {
    margin: 0.12rem 0.12rem .16rem 0;
    text-align: right;
  }
  &__middle {
    height: 0.32rem;
    color: #000000;
    text-align: center;
    font-size: .5rem;
  }
  &__bottom {
    font-size: .18rem;
    color: #333333;
    text-align: center;
    margin-top: .25rem;
    font-weight: 700;
  }
}
</style>
