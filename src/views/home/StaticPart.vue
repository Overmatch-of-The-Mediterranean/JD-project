<template>
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
            <li class="icons-item" v-for="(item,index) in StaticList" :key="index">
                <img class="icons-item__img" :src="item.url" alt="">
                <p class="icons-item__text">{{item.text}}</p>
            </li>
        </ul>
    </div>
    <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const StaticList = [{
      url: 'http://www.dell-lee.com/imgs/vue3/超市.png',
      text: '超市便利'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      text: '菜市场'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      text: '水果店'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      text: '鲜花绿植'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      text: '医药健康'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      text: '家居时尚'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      text: '蛋糕烘培'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      text: '签到'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      text: '大牌免运'
    },
    {
      url: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      text: '红包套餐'
    }]
    return { StaticList }
  }
}
</script>
<style lang="scss" scoped>

@import '../../style/variables.scss';
@import '../../style/mixins.scss';
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

.search {
    width: 100%;
    height: 100%;
    font-size: .14rem;
    padding-left: .44rem;
    border-radius: .16rem;
    border: none;
    background-color: #F5F5F5;
    outline: none;
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
.icons-container {
    margin-top: .16rem;
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
            width: 0.4rem;
            height: 0.4rem;
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
