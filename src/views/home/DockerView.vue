<template>
    <div class="docker">
        <div class="docker__item" v-for="(item,index) in DockerList" :key="index"
            :class="{'docker__item docker__item--active': index === 0}">
            <i class="iconfont" v-html="item.icon"></i>
            <div class="docker__title ">{{item.text}}</div>
        </div>

    </div>
</template>
<script>
export default {
  name: 'DockerView',
  setup () {
    const DockerList = [
      { icon: '&#xe8b9;', text: '首页' },
      { icon: '&#xe600;', text: '购物车' },
      { icon: '&#xe897;', text: '订单' },
      { icon: '&#xe601;', text: '我的' }
    ]
    return { DockerList }
  }
}
</script>
<style lang="scss" scoped>

@import '../../style/variables.scss';
.docker {
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
        transform: scale(0.5, 0.5);
        transform-origin: center top;
    }
}
</style>
