<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <template v-for="(item,index) in list" :key="index">
        <div class="order" v-if="item.totalCount">
          <div class="order__top">
            <div class="order__top__title">{{ item.shopName }}</div>
            <span class="order__top__status">{{ item.isCanceled ? '已取消':'已支付' }}</span>
          </div>
          <div class="order__content">
            <div class="order__content__imgs">
              <img class="order__content__img" :src="innerItem.product.imgUrl" v-for="(innerItem,innerIndex) in item.products"
                :key="innerIndex">
            </div>
            <div class="order__content__info">
              <div class="order__content__info__price">¥{{ item.totalPrice }}</div>
              <div class="order__content__info__count">共{{ item.totalCount }}件</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <DockerView :currentIndex="2" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../untils/request'
import DockerView from '../../components/DockerView.vue'
const useOrderListEffect = () => {
  const OrderList = reactive({ list: [] })
  const getNearbyList = async () => {
    const result = await get('/api/order/list')
    console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      console.log(result, 1111111)
      const data = result.data
      data.forEach((order) => {
        const products = order.products || []
        console.log(products, 2222222222)
        let totalPrice = 0
        let totalCount = 0
        products.forEach((productItem) => {
          totalCount += (productItem?.count || 0)
          totalPrice += ((productItem?.product?.price * productItem?.count) || 0)
        })
        order.totalPrice = totalPrice
        order.totalCount = totalCount
        console.log(order)
      })
      OrderList.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(OrderList)
  return { list }
}
export default {
  name: 'OrderList',
  components: { DockerView },
  setup () {
    const { list } = useOrderListEffect()
    console.log(list)
    return { list }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: .5rem;
  background-color: #f5f5f5;
}
.title {
  line-height: .44rem;
  font-size: .16rem;
  color: #333333;
  text-align: center;
  background-color: #fff;
}
.order {
  height: 1.1rem;
  padding: .16rem;
  margin: .16rem .18rem;
  background-color: #fff;
  &__top {
    margin-bottom: .16rem;
    display: flex;
    &__title {
      font-size: .16rem;
      color: #333333;
      font-weight: 700;
      line-height: .22rem;
    }
    &__status {
      flex: 1;
      font-size: .14rem;
      color: #999999;
      text-align: right;
      line-height: .2rem;
    }
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1
    }
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      margin-right: .12rem;
    }
    &__info {
      &__price {
        font-size: .14rem;
        color: #E93B3B;
        text-align: right;
        line-height: .2rem;
      }
      &__count {
        font-size: .12rem;
        color: #333333;
        text-align: right;
        line-height: .14rem;
        margin-top: .04rem;
      }
    }
  }
}
</style>
