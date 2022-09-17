<template>
  <div class="top">
    <div class="top__header">
      <span class="top__header__back iconfont" @click="handleBackClick">&#xe8ef;</span>
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
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'TopView',
  setup() {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>

@import '../../style/variables.scss';
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
</style>
