<template>
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
<script>
export default {
  name: 'DockerView'
}
</script>
<style lang="scss">
@import '../../style/variables.scss';
.nearby {
    padding-bottom: .1rem;

    &__title {
        font-size: 18px;
        color: $content-fontcolor;
        margin: .16rem 0 .02rem 0;
        font-weight: 400;
    }

    &__item {
        display: flex;
        padding-top: .12rem;

        &__img {
            width: .56rem;
            height: .56rem;
        }

        &__content {
            width: 2.67rem;
            padding: 0 0 .12rem .16rem;
            border-bottom: 1px solid #F1F1F1;

            &__title {
                font-size: 16px;
                color: $content-fontcolor;
            }

            &__tags {
                padding: .08rem 0;
            }

            &__tag {
                margin-right: .16rem;
                font-size: 13px;
                color: $content-fontcolor;
            }

            &__text {
                font-size: 13px;
                color: #E93B3B;
            }
        }
    }
}
</style>
