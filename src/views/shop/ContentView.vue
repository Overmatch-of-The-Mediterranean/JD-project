<template>
  <div class="content">
    <div class="category">
      <ul>
        <li :class="{ 'category__item': true, 'category__item--active': currentTab === item.tab }"
          v-for="item in categories" :key="item.name" @click="()=>handleCategoryClick(item.tab)">
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
            <span class="product__item__info__price__reduce iconfont">&#xe729;</span>
            <span class="product__item__info__price__count">88</span>
            <span class="product__item__info__price__add iconfont">&#xe727;</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../untils/request'

const useGetContentDataEffect = () => {
  const categories = [
    {
      name: '全部商品',
      tab: 'all'
    },
    {
      name: '秒杀',
      tab: 'seckill'
    },
    {
      name: '新鲜水果',
      tab: 'fruit'
    }
  ]
  const data = reactive({ list: [], currentTab: categories[0].tab })
  const getContentData = async (tab) => {
    const result = await get('/api/shop/1/products', { tab })
    if (result.error === 0 && result.data.length) {
      data.list = result.data
    }
  }

  // 每次点击更新数据
  const handleCategoryClick = (tab) => {
    getContentData(tab)
    data.currentTab = tab
  }
  getContentData('all')
  const { list, currentTab } = toRefs(data)
  return { handleCategoryClick, list, currentTab, categories }
}
export default {
  name: 'contentView',
  setup () {
    const { handleCategoryClick, list, currentTab, categories } = useGetContentDataEffect()
    return { list, categories, currentTab, handleCategoryClick }
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
          font-size: .16rem;
          font-weight: 700;
        }
        &__old{
          margin-left: .06rem;
          font-size: .1rem;
          color: #999999;
          text-decoration: line-through;
        }
        &__reduce {
          margin-left: .29rem;
          padding: .01rem;
          color: $content-fontcolor666;
          font-size: .148rem;
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
</style>
