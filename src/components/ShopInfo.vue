<template>
  <div class="shop__item">
    <img class="shop__item__img" :src="item.imgUrl" alt="">
    <div :class="{ 'shop__item__content': true, 'shop__item__content--bordered':hiddenBorder ? false:true}">
      <div class="shop__item__content__title">{{ item.name }}</div>
      <div class="shop__item__content__tags">
        <span class="shop__item__content__tag">月售{{ item.sales }}+</span>
        <span class="shop__item__content__tag">起送{{item.expressLimit}}</span>
        <span class="shop__item__content__tag">基础运费{{item.expressPrice}}</span>
      </div>
      <p class="shop__item__content__text">{{item.slogan}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hiddenBorder']
}
</script>
<style lang="scss" scoped>

@import '../style/variables.scss';
.shop__item {
  display: flex;
  padding-top: .12rem;

  &__img {
    width: .56rem;
    height: .56rem;
  }

  &__content {
    width: 2.67rem;
    padding: 0 0 .12rem .16rem;
    &--bordered {
      border-bottom: 1px solid $search-color;
    }

    &__title {
      font-size: 16px;
      color: $content-fontcolor;
    }

    &__tags {
      padding: .08rem 0;
    }

    &__tag {
      margin-right: .16rem;
      font-size: 13px;
      color: $content-fontcolor;
    }

    &__text {
      font-size: 13px;
      color: $search-fontcolor;
    }
  }
}
</style>
