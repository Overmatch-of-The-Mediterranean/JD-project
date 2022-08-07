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
</template>
<script>
export default {
  name: 'StaticPart'
}
</script>
<style lang="scss">

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
