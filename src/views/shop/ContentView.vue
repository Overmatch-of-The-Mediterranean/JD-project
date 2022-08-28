<template>
  <div class="content">
    <div class="category">
      <ul>
        <li :class="{ 'category__item': true, 'category__item--active': currentTab === item.tab }"
          v-for="item in categories" :key="item.name" @click="() => handleTabClick(item.tab)">
          {{item.name}}</li>
      </ul>
    </div>
    <ul class="product">
      <li class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="">
        <div class="product__item__info">
          <div class="product__item__info__title">{{item.name}}</div>
          <div class="product__item__info__sales">月售{{item.sales}}件</div>
          <div class="product__item__info__price">
            <span class="product__item__info__price__￥">&yen;</span>
            <span class="product__item__info__price__new">{{item.price}}</span>
            <span class="product__item__info__price__old">&yen;{{item.oldPrice}}</span>
            <div class="product__item__info__price__choice">
              <span class="product__item__info__price__choice__reduce iconfont"
                @click="() => { changeCartItem(shopId, item._id, item,-1, shopName)}">&#xe729;</span>
              <span class="product__item__info__price__choice__count">
                {{ getProductCartCount(shopId, item._id) }}
                <!-- {{cartList?.[shopId]?.productList?.[item._id]?.count || 0}} -->
              </span>
              <span class="product__item__info__price__choice__add iconfont"
                @click="() => { changeCartItem(shopId, item._id, item, 1, shopName)}">&#xe727;</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { get } from '../../untils/request'
import { useCommonCartEffect } from '../../effects/cartEffects'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

// Tab切换相关逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

// 列表内容相关逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.error === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}
const useCartEffect = () => {
  const store = useStore()
  const { changeCartItemInfo, cartList } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }

  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }

  const getProductCartCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { changeCartItem, cartList, getProductCartCount }
}

export default {
  name: 'contentView',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { changeCartItem, cartList, getProductCartCount } = useCartEffect()
    return { list, categories, currentTab, handleTabClick, shopId, cartList, changeCartItem, getProductCartCount }
  }
}
</script>
<style lang="scss" scoped>

@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.content {
  display: flex;
  position: absolute;
  top: 1.51rem;
  bottom: .5rem;
  left: 0;
  right: 0;
}
.category {
  overflow-y: auto;
  background: #F5F5F5;
  &__item {
    width: 0.76rem;
    height: 0.4rem;
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $content-fontcolor;
    &--active {
      background-color: #fff;
    }
  }
}
.product {
  overflow-y: auto;
  flex: 1;
  &__item {
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $search-color;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
    }
    &__info {
      overflow: hidden;
      height: 0.68rem;
      margin-left: .16rem;
      &__title{
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
        padding-left: -.4rem;
        span {
          line-height: .2rem;
        }
        &__￥,&__new {
          color: $search-fontcolor;
        }
        &__￥ {
          font-size: .12rem;
        }
        &__new{
          font-size: .14rem;
          font-weight: 700;
        }
        &__old{
          margin-left: .06rem;
          font-size: .2rem;
          zoom: 0.5;
          color: #999999;
          text-decoration: line-through;
        }
        &__choice {
          display: inline;
          position: absolute;
          right: .16rem;
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
</style>
