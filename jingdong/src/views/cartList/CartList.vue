<template>
  <div class="wrapper">
    <div class="header">我的全部购物车</div>
    <div class="orders">
      <template v-for="(item, index) in cartList" :key="index">
        <div class="order" v-if="counts[index-1]>0">
          <h4 class="order__title">{{item.shopName}}</h4>
          <template v-for="inneritem in item.productList" :key="inneritem._id">
            <div class="order__products"  v-if="inneritem.count>0">
            <div class="order__product">
              <img class="order__product__img" :src="inneritem.imgUrl" alt="">
              <div class="order__product__info">
                <div class="order__product__info__name">{{inneritem.name}}</div>
                <div class="order__product__info__price">
                  <span class="order__product__info__price__left">&yen;{{inneritem.price}}×{{inneritem.count}}</span>
                  <span class="order__product__info__price__right">&yen;{{(inneritem.price * inneritem.count).toFixed(2)}}</span>
                </div>
              </div>
            </div>
            </div>
          </template>
          <div class="order__open iconfont">共计{{counts[index-1]}}件/1.4kg</div>
        </div>
      </template>
    </div>
  </div>
  <DockerView :currentIndex="1" />
</template>

<script>
import DockerView from '../../components/DockerView.vue'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'cartList',
  components: { DockerView },
  setup() {
    // 购物车的所有信息都在这里面
    const { cartList } = useCommonCartEffect()

    // 获取所有店铺的id
    const ids = []

    // 获取所有店铺的Calculation
    const calculationList = []

    // 获取calculation中的商品总数(total)
    const counts = []
    let i
    for (i in cartList) {
      ids.push(i)
    }
    let j
    for (j in ids) {
      const { Caculations } = useCommonCartEffect(j - 0 + 1)
      calculationList.push(Caculations)
    }
    let k
    for (k = 0; k < calculationList.length; k++) {
      counts.push(calculationList[k].value.total)
    }
    return { cartList, calculationList, counts }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: .5rem;
  background-color: #f5f5f5;
}
.header {
  line-height: .44rem;
  font-size: 16px;
  color: #333333;
  text-align: center;
  background-color: #fff;
}
.orders {
  margin-top: .16rem;
  position: absolute;
}
.order__open::after {
  content: '\e603';
  font-size: .16rem;
  height: 0.28rem;
  padding-left: .06rem;
}
.order {
  width: 3.39rem;
  // position: absolute;
  margin: 0 .18rem .16rem .18rem;
  padding: 0 .16rem .16rem .16rem;
  background-color: #fff;
  &__open {
    line-height: .28rem;
    background: #F5F5F5;
    text-align: center;
    font-size: 14px;
    color: #999999;
  }
  &__title {
    padding: .16rem 0;
    font-size: 16px;
    color: #333333;
  }
  &__product {
    display: flex;
    padding-bottom: .16rem;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: .16rem;
    }
    &__info {
      width: 100%;
      &__name {
        font-size: 14px;
        color: #333333;
        margin-bottom: .06rem;
      }
      &__price {
        display: flex;
        &__left {
          font-size: 14px;
          color: #E93B3B;
          line-height: 20px;
        }
        &__right {
          flex: 1;
          text-align: right;
          font-size: 14px;
          color: #000000;
          text-align: right;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
