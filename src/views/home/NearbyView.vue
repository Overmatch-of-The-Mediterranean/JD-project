<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item" v-for="item in NearbyList" :key="item._id">
            <img class="nearby__item__img" :src="item.imgUrl" alt="">
            <div class="nearby__item__content">
                <div class="nearby__item__content__title">{{item.name}}</div>
                <div class="nearby__item__content__tags">
                    <span class="nearby__item__content__tag" v-for="(itemTag,index) in item.tags"
                        :key="index">{{itemTag}}</span>
                </div>
                <p class="nearby__item__content__text">{{item.text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../untils/request'
const useNearbyList = () => {
  const NearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    if (result.error === 0 && result.data.length) {
      NearbyList.value = result.data
    }
  }
  return { NearbyList, getNearbyList }
}
export default {
  name: 'NearbyView',
  setup () {
    // const NearbyList = [
    //   {
    //     id: 1,
    //     url: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售1万+', '起送¥0', '基础运费¥5'],
    //     text: 'VIP尊享满89元减4元运费券（每月3张）'
    //   },
    //   {
    //     id: 2,
    //     url: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售2万+', '起送¥0', '基础运费¥5'],
    //     text: 'VIP尊享满89元减4元运费券（每月3张）'
    //   },
    //   {
    //     id: 3,
    //     url: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售3万+', '起送¥0', '基础运费¥5'],
    //     text: 'VIP尊享满89元减4元运费券（每月3张）'
    //   },
    //   {
    //     id: 4,
    //     url: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售4万+', '起送¥0', '基础运费¥5'],
    //     text: 'VIP尊享满89元减4元运费券（每月3张）'
    //   },
    //   {
    //     id: 5,
    //     url: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售5万+', '起送¥0', '基础运费¥5'],
    //     text: 'VIP尊享满89元减4元运费券（每月3张）'
    //   }
    // ]
    const { NearbyList, getNearbyList } = useNearbyList()
    getNearbyList()
    return { NearbyList }
  }
}
</script>

<style lang="scss" scoped>

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
