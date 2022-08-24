<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <span class="top__header__back iconfont">&#xe8ef;</span>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">瑶妹（先生）</span>
          <span class="top__receiver__info__tel">88888888888</span>
        </div>
        <div class="top__receiver__enter iconfont">&#xe8ef;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">
        <ul class="product">
          <h4 class="product__title">{{ shopName }}</h4>
          <li class="product__item" v-for="item in displayCartList" :key="item._id">
            <img class="product__item__img" :src="item.imgUrl" alt="">
            <div class="product__item__info">
              <div class="product__item__info__title">{{ item.name }}</div>
              <div class="product__item__info__price">
                <span class="product__item__info__price__￥">&yen;</span>
                <div class="product__item__info__price__new">{{item.price}} × {{item.count}}</div>
                <div class="product__item__info__price__total">
                  <span class="product__item__info__price__￥2">&yen;</span>
                  {{item.price * item.count}}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'OrderConfirmation',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { displayCartList, shopName } = useCommonCartEffect(shopId)
    return { displayCartList, shopName }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #F5F5F5;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    font-size: .16rem;
    color: #FFFFFF;
    text-align: center;
    &__back {
      position: absolute;
      left: .185rem;
      font-size: .25rem;
    }
  }
  &__receiver {
    position: absolute;
    top: 0.85rem;
    bottom: 0;
    left: 0.18rem;
    right: 0.18rem;
    height: 1.11rem;
    background: #FFFFFF;
    border-radius: .04rem;
    padding-left: .18rem;
    &__title {
      font-size: .16rem;
      color: #333333;
      font-weight: 700;
      padding: .16rem 0 .14rem 0;
      line-height: .22rem;
    }
    &__address {
      font-size: .14rem;
      color: #333333;
      line-height: .2rem;
      margin-bottom: .06rem;
    }
    &__info {
      font-size: .12rem;
      color: #666666;
      line-height: .17rem;
      &__tel {
        padding-left: .06rem;
      }
    }
    &__enter {
      position: absolute;
      top: .48rem;
      right: 0.16rem;
      transform: rotate(180deg);
      color: #666666;
      font-size: .2rem;
    }
  }
}
.products {
  margin-top: .16rem;
}
.product {
  overflow-y: auto;
  flex: 1;
  background: #FFFFFF;
  margin: 0 .18rem;
  &__title {
    padding: .16rem;
  }
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
          margin-right: -4px;
        }

        &__new {
          font-size: .14rem;
          font-weight: 700;
        }
        &__total {
          flex: 1;
          font-size: .14rem;
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
