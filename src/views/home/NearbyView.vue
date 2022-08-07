<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item">
            <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
            <div class="nearby__item__content">
                <div class="nearby__item__content__title">沃尔玛</div>
                <div class="nearby__item__content__tags">
                    <span class="nearby__item__content__tag">月售1万+</span>
                    <span class="nearby__item__content__tag">起送¥0</span>
                    <span class="nearby__item__content__tag">基础运费¥5</span>
                </div>
                <p class="nearby__item__content__text">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
        </div>
        <div class="nearby__item">
            <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
            <div class="nearby__item__content">
                <div class="nearby__item__content__title">沃尔玛</div>
                <div class="nearby__item__content__tags">
                    <span class="nearby__item__content__tag">月售1万+</span>
                    <span class="nearby__item__content__tag">起送¥0</span>
                    <span class="nearby__item__content__tag">基础运费¥5</span>
                </div>
                <p class="nearby__item__content__text">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
        </div>
        <div class="nearby__item">
            <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
            <div class="nearby__item__content">
                <div class="nearby__item__content__title">沃尔玛</div>
                <div class="nearby__item__content__tags">
                    <span class="nearby__item__content__tag">月售1万+</span>
                    <span class="nearby__item__content__tag">起送¥0</span>
                    <span class="nearby__item__content__tag">基础运费¥5</span>
                </div>
                <p class="nearby__item__content__text">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
        </div>
        <div class="nearby__item">
            <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
            <div class="nearby__item__content">
                <div class="nearby__item__content__title">沃尔玛</div>
                <div class="nearby__item__content__tags">
                    <span class="nearby__item__content__tag">月售1万+</span>
                    <span class="nearby__item__content__tag">起送¥0</span>
                    <span class="nearby__item__content__tag">基础运费¥5</span>
                </div>
                <p class="nearby__item__content__text">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
        </div>
        <div class="nearby__item">
            <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
            <div class="nearby__item__content">
                <div class="nearby__item__content__title">沃尔玛</div>
                <div class="nearby__item__content__tags">
                    <span class="nearby__item__content__tag">月售1万+</span>
                    <span class="nearby__item__content__tag">起送¥0</span>
                    <span class="nearby__item__content__tag">基础运费¥5</span>
                </div>
                <p class="nearby__item__content__text">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NearbyView'
}
</script>

<style lang="scss">
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
