<template>
  <div class="wrapper">
    <div class="bgc">
      <div class="userInfo-container">
        <div class="userInfo">
          <img class="userInfo__img" src="./header.png" alt="">
          <div class="userInfo__name">地中海强者</div>
          <div class="userInfo__id">ID：88888888</div>
        </div>
        <ul class="pays">
          <li class="pays__item">
            <div class="pays__item__text">红包</div>
            <div class="pays__item__count">218</div>
          </li>
          <li class="pays__item">
            <div class="pays__item__text">优惠劵</div>
            <div class="pays__item__count">12张</div>
          </li>
          <li class="pays__item">
            <div class="pays__item__text">鲜豆</div>
            <div class="pays__item__count">88</div>
          </li>
          <li class="pays__item">
            <div class="pays__item__text">白条</div>
            <div class="pays__item__count">100</div>
          </li>
        </ul>
      </div>
    </div>
    <ul class="list">
      <li class="list__item">
        <span class="list__item__common list__item__icon1 iconfont">&#xe634;</span>
        我的钱包
        <span class="icons iconfont">&#xe860;</span>
      </li>
      <router-link to="myAddress">
        <li class="list__item">
          <span class="list__item__common list__item__icon2 iconfont">&#xe62e;</span>
          我的地址
          <span class="icons iconfont">&#xe860;</span>
        </li>
      </router-link>
      <li class="list__item">
        <span class="list__item__common list__item__icon3 iconfont">&#xe61d;</span>
        客服与帮助
        <span class="icons iconfont">&#xe860;</span>
      </li>
    </ul>
  </div>
  <DockerView :currentIndex="3"/>
</template>

<script>
import DockerView from '../../components/DockerView.vue'
export default {
  name: 'myView',
  components: { DockerView }
  // setup() {
  //   const list = [
  //     {
  //       icon: '&#xe634;',
  //       name: '我的钱包',
  //       to: 'address'
  //     },
  //     {
  //       icon: '&#xe62e;',
  //       name: '我的地址',
  //       to: 'address'
  //     },
  //     {
  //       icon: '&#xe61d;',
  //       name: '客服与帮助',
  //       to: 'address'
  //     }
  //   ]
  //   return { list }
  // }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: .5rem;
  background-color: #f5f5f5;
}
.bgc {
  width: 3.75rem;
  height: 1.8rem;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
}
.userInfo-container {
  position: relative;
  top: .8rem;
  background-color: #fff;
  margin: 0 .18rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
}
.userInfo {
  padding-top: .5rem;
  padding-bottom: .12rem;
  text-align: center;
  border-bottom: 1px solid #F1F1F1;
  &__img {
    position: absolute;
    top: -.5rem;
    left: 50%;
    margin-left: -.47rem;
    width: 0.94rem;
    height: 0.94rem;
    border-radius: 50%;
  }
  &__name {
    font-size: 24px;
    color: #262628;
  }
  &__id {
    font-size: 14px;
    color: #C1C0C9;
  }
}
.pays {
  padding-top: .12rem;
  padding-bottom: .16rem;
  text-align: center;
  display: flex;
  &__item {
    flex: 1;
    &__text {
      font-size: 12px;
      color: #C1C0C9;
      padding-bottom: .03rem;
    }
    &__count {
      font-size: 20px;
      color: #262628;
    }
  }
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 1.1rem;
  height: 1.46rem;
  margin: 0 .18rem;
  padding: .17rem 0;
  background-color: #fff;
  border-radius: 8px;
  &__item{
    font-size: .16rem;
    color: #262626;
    align-self: left;
    &__common {
      display: inline-block;
      border-radius: 8px;
      width: 0.22rem;
      height: 0.22rem;
      color: #fff;
      margin-left: .21rem;
      text-align: center;
      line-height: .22rem;
    }
    &__icon1 {
      background: #ED4A47;
    }
    &__icon2 {
      background: #32C5FF;
    }
    &__icon3 {
      background: rgba(144, 19, 254, 0.92);
    }
    .icons {
      position: absolute;
      right: .16rem;
      color: #C2C4CA;
    }
  }
}
</style>
