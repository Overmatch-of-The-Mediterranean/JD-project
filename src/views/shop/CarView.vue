<template>
    <div class="cart">
      <div class="cart__icon iconfont">&#xe600;</div>
      <div class="cart__total">
        总计：<span class="cart__total__price">￥128</span>
      </div>
      <div class="cart__settlement">去结算</div>
    </div>
</template>
<script>
export default {
  name: 'CarView'
}
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  // justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  box-shadow: 0 -1px 1px 0 #F1F1F1;
  line-height: .49rem;
  &__icon {
    width: 0.76rem;
    text-align: center;
    font-size: .26rem;
    color: #0091FF;
  }
  &__total {
    display: 1;
    &__price {
      font-size: 18px;
      color: #E93B3B;
    }
  }
  &__settlement {
    position: absolute;
    bottom: 0;
    right: 0;
    height: .49rem;
    width: 0.98rem;
    font-size: 14px;
    color: #FFFFFF;
    background-color: #4FB0F9;;
    text-align: center;
  }
}
</style>
