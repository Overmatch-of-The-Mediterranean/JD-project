<template>
  <div class="products">
    <h4 class="products__title">{{ shopName }}</h4>
    <div class="products__wrapper">
      <ul class="product">
        <li class="product__item" v-for="item in displayCartList" :key="item._id">
          <img class="product__item__img" :src="item.imgUrl" alt="">
          <div class="product__item__info">
            <div class="product__item__info__title">{{ item.name }}</div>
            <div class="product__item__info__price">
              <span class="product__item__info__price__￥">&yen;</span>
              <div class="product__item__info__price__new">{{ item.price }} × {{ item.count }}</div>
              <div class="product__item__info__price__total">
                <span class="product__item__info__price__￥2">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'ProductsView',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { displayCartList, shopName } = useCommonCartEffect(shopId)
    return { displayCartList, shopName }
  }
}
</script>

<style lang="scss" scoped>

@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.products__wrapper {
  overflow-y: scroll;
  position: absolute;
  top: 2.64rem;
  bottom: .6rem;
  width: 100%;
}

.products {
  overflow-x: hidden;
  margin-top: .16rem;
  margin-bottom: .55rem;

  &__title {
    padding: .16rem;
    margin: 0 .18rem;
    background: #fff;
  }
}

.product {
  flex: 1;
  background: #FFFFFF;
  margin: 0 .18rem;

  &__item {
    display: flex;
    padding: 0 .18rem .12rem .18rem;
    border-bottom: .01rem solid $search-color;

    &__img {
      width: 0.46rem;
      height: 0.46rem;
    }

    &__info {
      overflow: hidden;
      width: 100%;
      margin-left: .16rem;

      &__title {
        font-size: .14rem;
        color: $content-fontcolor;
        @include ellipsis;
      }

      &__sales {
        margin: .08rem 0 .05rem 0;
        font-size: .12rem;
        color: $content-fontcolor;
        line-height: .16rem;
      }

      &__price {
        display: flex;
        padding-left: -.4rem;
        margin-top: .06rem;

        span {
          line-height: .2rem;
        }

        &__￥,
        &__new {
          color: $search-fontcolor;
        }

        &__￥ {
          font-size: .12rem;
        }

        &__￥2 {
          font-size: .12rem;
          text-align: right;
          margin-right: -.04rem;
        }

        &__new {
          font-size: .14rem;
          font-weight: 700;
        }

        &__total {
          flex: 1;
          font-size: .14rem;
          font-size: .14rem;
          color: #000000;
          text-align: right;
          line-height: .2rem;
        }
      }
    }
  }
}
</style>
