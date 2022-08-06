<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont">&#xe649;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe602;</span>
    </div>
    <div class="search-contaniner">
      <span class="iconfont search-contaniner__icon">&#xe752;</span>
      <input class="search" type="text" placeholder="山姆会员商店优惠商品">
    </div>
    <div class="banner">
      <img class="banner__img" src="./images/double11.png" alt="">
    </div>
    <div class="icons-container">
      <ul class="icons-list">
        <li class="icons-item">
          <img class="icons-item__img" src="./images/超市.png" alt="">
          <p class="icons-item__text">超市便利</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/菜市场.png" alt="">
          <p class="icons-item__text">菜市场</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/水果店.png" alt="">
          <p class="icons-item__text">水果店</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/鲜花.png" alt="">
          <p class="icons-item__text">鲜花绿植</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/医药健康.png" alt="">
          <p class="icons-item__text">医药健康</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/家居.png" alt="">
          <p class="icons-item__text">家具时尚</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/蛋糕.png" alt="">
          <p class="icons-item__text">烘培蛋糕</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/签到.png" alt="">
          <p class="icons-item__text">签到</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/大牌免运.png" alt="">
          <p class="icons-item__text">大牌免运</p>
        </li>
        <li class="icons-item">
          <img class="icons-item__img" src="./images/红包.png" alt="">
          <p class="icons-item__text">红包套餐</p>
        </li>
      </ul>
    </div>
    <div class="gap"></div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <i class="iconfont">&#xe8b9;</i>
      <div class="docker__title ">首页</div>
    </div>
    <div class="docker__item">
      <i class="iconfont">&#xe600;</i>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <i class="iconfont">&#xe897;</i>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <i class="iconfont">&#xe601;</i>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/variables.scss';
@import './style/mixins.scss';
  .wrapper{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0.5rem;
    padding: 0 .18rem;
    // background-color: blue;
  }
    .position {
      color: $content-fontcolor;
      padding: .16rem .24rem .16rem 0;
      line-height: .22rem;
      font-size: .16rem;
      @include ellipsis;
      &__notice {
        position: absolute;
        right: .18rem;
        top: .17rem;
      }
    }
  .docker{
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    color: $content-fontcolor;
    padding: 0 .18rem;
    border-top: .01rem solid #f1f1f1;
    &__item {
      flex: 1;
      text-align: center;
      .iconfont {
          display: block;
          font-size: .2rem;
          margin: .07rem 0 .02rem 0;
        }
        &--active {
          color: #1fa4fc;
        }
    }
    &__title {
      font-size: .23rem;
      transform: scale(0.5,0.5);
      transform-origin: center top;
    }
  }
  .search-contaniner {
    position: relative;
    width: 3.39rem;
    height: 0.32rem;
    margin-bottom: .12rem;
    &__icon {
      position: absolute;
      left: .16rem;
      top: .08rem;
    }
  }
  .search{
    width: 100%;
    height: 100%;
    font-size: .14rem;
    padding-left: .44rem;
    border-radius: .16rem;
    border: none;
    background-color: #F5F5F5;
  }
  .banner {

    // 防抖动
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    &__img {
      width: 100%;
    }
  }
  .icons-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 .08rem;
    .icons-item {
        width: 20%;
        &__img {
          display: block;
          margin: 0 auto;
        }
        &__text {
          text-align: center;
          padding: .06rem 0 .16rem 0;
          font-size: .12rem;
        }
      }
  }
  .gap {
    height: .1rem;
    background-color: #F1F1F1;
    margin: 0 -.18rem;
  }
</style>
