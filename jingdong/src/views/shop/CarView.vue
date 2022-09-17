<template>
  <div class="mask" v-if="showCart && Caculations.total > 0" @click="handleCartShowChange" />
  <div class="cart">
    <ul class="product" v-if="showCart && Caculations.total > 0">
      <div class="product__header">
        <div class="product__header__icon iconfont" v-html="Caculations.allChecked ? '&#xe618;':'&#xe66c;'"
          @click="setCartItemsChecked(shopId)"></div>
        <div class="product__header__all" @click="setCartItemsChecked(shopId)">全选</div>
        <div class="product__header__clear">
          <span class="product__header__clear__cart" @click="clearCartProducts(shopId)">清空购物车</span>
        </div>
      </div>
      <li class="product__item" v-for="item in displayCartList" :key="item._id">
        <div class="product__item__checked iconfont" v-html="item.check ? '&#xe618;':'&#xe66c;'"
          @click="changeCartItemCheck(shopId,item._id)"></div>
        <img class=" product__item__img" :src="item.imgUrl" alt="">
        <div class="product__item__info">
          <div class="product__item__info__title">{{item.name}}</div>
          <div class="product__item__info__price">
            <span class="product__item__info__price__￥">&yen;</span>
            <span class="product__item__info__price__new">{{item.price}}</span>
            <span class="product__item__info__price__old">&yen;{{item.oldPrice}}</span>
            <div class="product__item__info__price__choice">
              <span class="product__item__info__price__choice__reduce iconfont"
                @click="() => { changeCartItemInfo(shopId,item._id,item,-1)}">&#xe729;</span>
              <span class="product__item__info__price__choice__count">
                {{item.count || 0}}
              </span>
              <span class="product__item__info__price__choice__add iconfont"
                @click="() => { changeCartItemInfo(shopId,item._id,item,1)}">&#xe727;</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="check">
      <div class="check__icon iconfont" @click="handleCartShowChange">
        &#xe600;
        <div class="check__icon__tag">{{ Caculations.total }}</div>
      </div>
      <div class="check__total">
        总计：<span class="check__total__price">&yen; {{ Caculations.price}}</span>
      </div>
      <div class="check__settlement" v-if="Caculations.total > 0">
        <router-link :to="{ path: `/orderConfirmation/${shopId}`}">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effects/cartEffects'

// 改变商品数量时，使购物车的数字也发生变化
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const { changeCartItemInfo, displayCartList, Caculations } = useCommonCartEffect(shopId)
  const changeCartItemCheck = (shopId, productId) => {
    store.commit('changeCartItemCheck', { shopId, productId })
  }
  const clearCartProducts = (shopId) => {
    store.commit('clearCartProducts', { shopId })
  }
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }
  return { Caculations, displayCartList, shopId, changeCartItemInfo, changeCartItemCheck, clearCartProducts, setCartItemsChecked }
}
const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShowChange }
}
export default {
  name: 'CarView',
  setup () {
    const { showCart, handleCartShowChange } = toggleCartEffect()
    const { displayCartList, shopId, changeCartItemInfo, changeCartItemCheck, clearCartProducts, setCartItemsChecked, Caculations } = useCartEffect()
    return { Caculations, displayCartList, changeCartItemInfo, shopId, changeCartItemCheck, clearCartProducts, setCartItemsChecked, handleCartShowChange, showCart }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1;
}
.product {
  position: absolute;
  bottom: .5rem;
  overflow: hidden;
  width: 100%;
  flex: 1;
  background-color: #fff;
  z-index: 2;
  &__header {
    display: flex;
    height: 0.52rem;
    border-bottom: .01rem solid #F1F1F1;;
    line-height: .52rem;
    font-size: .15rem;
    color: #333333;
    &__icon {
      color: #0091FF;
      margin-left: .22rem;
      font-size: .2rem;
    }
    &__all {
      margin-left: .12rem;
    }
    &__clear {
      display: inline-block;
      flex: 1;
      text-align: right;
      padding-right: .18rem;
      &__cart {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    width: 100%;
    padding: .06rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $search-color;

    &__checked {
      align-self: center;
      color: #0091FF;
      font-size: .2rem;
      margin: 0 .2rem 0 .06rem;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
    }

    &__info {
      overflow: hidden;
      height: 0.5rem;
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
        margin-top: .06rem;
        padding-left: -.4rem;

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

        &__new {
          font-size: .14rem;
          font-weight: 700;
        }

        &__old {
          margin-left: .06rem;
          font-size: .2rem;
          zoom: 0.5;
          color: #999999;
          text-decoration: line-through;
        }

        &__choice {
          display: inline;
          position: absolute;
          right: .34rem;
          top: 50%;
          transform: translateY(-50%);

          &__reduce {
            margin-left: .29rem;
            padding: .01rem;
            padding-right: .015rem;
            padding-top: .014rem;
            color: $content-fontcolor666;
            font-size: .145rem;
            font-weight: 700;
            border: .015rem solid $content-fontcolor666;
            border-radius: 50%;
          }

          &__count {
            margin: 0 .1rem;
            font-size: .14rem;
            color: $content-fontcolor;
            line-height: .16rem;
          }

          &__add {
            border-radius: 50%;
            font-size: .14rem;
            font-weight: 700;
            background-color: $content-bgC;
            color: #fff;
            padding: .03rem;
          }
        }
      }
    }
  }
}
.check {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  box-shadow: 0 -.01rem .01rem 0 #F1F1F1;
  line-height: .49rem;
  z-index: 2;
  background-color: #fff;
  &__icon {
    position: relative;
    width: 0.76rem;
    text-align: center;
    font-size: .26rem;
    color: #0091FF;
    &__tag {
      position: absolute;
      top: .05rem;
      left: .5rem;
      min-width: 0.12rem;
      height: 0.12rem;
      padding: 0 .04rem;
      background-color: #E93B3B;
      font-size: .08rem;
      color: #FFFFFF;
      line-height: .12rem;
      border-radius: .06rem;
      text-align: center;
      }
  }
  &__total {
    display: 1;
    font-size: .15rem;
    padding-left: .1rem;
    &__price {
      font-size: .18rem;
      color: #E93B3B;
      font-weight: 700;
    }
  }
  &__settlement {
    position: absolute;
    bottom: 0;
    right: 0;
    height: .49rem;
    width: 0.98rem;
    font-size: .14rem;
    color: #FFFFFF;
    background-color: #4FB0F9;;
    text-align: center;
    a{
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
