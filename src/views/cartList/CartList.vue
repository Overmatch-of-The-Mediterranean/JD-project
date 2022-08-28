<template>
  <div class="wrapper">
    <div class="header">我的全部购物车</div>
    <div class="orders">
      <div class="order">
        <h4 class="order__title">沃尔玛</h4>
        <div class="order__products">
          <div class="order__product">
            <img class="order__product__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
            <div class="order__product__info">
              <div class="order__product__info__name">番茄250g/份</div>
              <div class="order__product__info__price">
                <span class="order__product__info__price__left">&yen;33.6 x 3</span>
                <span class="order__product__info__price__right">&yen;99.9</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order__open iconfont">共计3件/1.4kg</div>
      </div>
      <div class="order">
        <h4 class="order__title">沃尔玛</h4>
        <div class="order__products">
          <div class="order__product">
            <img class="order__product__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
            <div class="order__product__info">
              <div class="order__product__info__name">番茄250g/份</div>
              <div class="order__product__info__price">
                <span class="order__product__info__price__left">&yen;33.6 x 3</span>
                <span class="order__product__info__price__right">&yen;99.9</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order__open iconfont">共计3件/1.4kg</div>
      </div>
      <div class="order">
        <h4 class="order__title">沃尔玛</h4>
        <div class="order__products">
          <div class="order__product">
            <img class="order__product__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
            <div class="order__product__info">
              <div class="order__product__info__name">番茄250g/份</div>
              <div class="order__product__info__price">
                <span class="order__product__info__price__left">&yen;33.6 x 3</span>
                <span class="order__product__info__price__right">&yen;99.9</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order__open iconfont">共计3件/1.4kg</div>
      </div>
      <div class="order">
        <h4 class="order__title">沃尔玛</h4>
        <div class="order__products">
          <div class="order__product">
            <img class="order__product__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
            <div class="order__product__info">
              <div class="order__product__info__name">番茄250g/份</div>
              <div class="order__product__info__price">
                <span class="order__product__info__price__left">&yen;33.6 x 3</span>
                <span class="order__product__info__price__right">&yen;99.9</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order__open iconfont">共计3件/1.4kg</div>
      </div>
      <div class="order">
        <h4 class="order__title">沃尔玛</h4>
        <div class="order__products">
          <div class="order__product">
            <img class="order__product__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="">
            <div class="order__product__info">
              <div class="order__product__info__name">番茄250g/份</div>
              <div class="order__product__info__price">
                <span class="order__product__info__price__left">&yen;33.6 x 3</span>
                <span class="order__product__info__price__right">&yen;99.9</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order__open iconfont">共计3件/1.4kg</div>
      </div>
    </div>
    <DockerView :currentIndex="1" />
  </div>
</template>

<script>
import DockerView from '../../components/DockerView.vue'
export default {
  name: 'cartList',
  components: { DockerView }
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
  bottom: 0;
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
  position: relative;
}
.order__open::after {
  content: '\e603';
  font-size: .16rem;
  height: 0.28rem;
  padding-left: .06rem;
}
.order {
  width: 3.39rem;
  position: absolute;
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
