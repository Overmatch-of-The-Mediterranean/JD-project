<template>
  <div class="wrapper">
    <div class="search">
      <span class="search__back iconfont" @click="handleBackClick">&#xe8ef;</span>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe752;</span>
        <input type="text" class="search__content__input" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <ShopInfo :hiddenBorder="true" :item="item" v-if="item.imgUrl" />
  </div>
  <ContentView :shopName="item.name"/>
  <CarViewVue />
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'
import { get } from '../../untils/request'
import ContentView from './ContentView'
import CarViewVue from './CarView.vue'

// 获取商铺信息
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`api/shop/${route.params.id}`)
    if (result.error === 0 && result.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 返回上一页
const useBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return handleBackClick
}
export default {
  name: 'ShopView',
  components: { ShopInfo, ContentView, CarViewVue },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const handleBackClick = useBackEffect()
    getItemData()
    return { item, handleBackClick, getItemData }
  }
}
</script>
<style lang="scss" scoped>

@import '../../style/variables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .16rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    display: block;
    width: 0.36rem;
    height: 0.32rem;
    font-size: .3rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background-color: $search-inputbgColor;
    border-radius: .16rem;
    line-height: .32rem;
    &__icon {
      display: block;
      width: 0.44rem;
      height: 0.32rem;
      padding: 0 .12rem 0 .16rem;
    }
    &__input {
      display: block;
      width: 100%;
      background-color: $search-inputbgColor;
      border: none;
      outline: none;
      padding-left: .02rem;
      margin-right: .2rem;
      color: $content-fontcolor;
      font-size: .14rem;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
