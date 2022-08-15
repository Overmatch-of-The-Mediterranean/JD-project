<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link :to="`/shop/${item._id}`" v-for="item in NearbyList" :key="item._id">
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../untils/request'
import ShopInfo from '../../components/ShopInfo.vue'
const useNearbyList = () => {
  const NearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result.error === 0 && result.data.length) {
      NearbyList.value = result.data
    }
  }
  return { NearbyList, getNearbyList }
}
export default {
  name: 'NearbyView',
  components: { ShopInfo },
  setup () {
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

}
</style>
