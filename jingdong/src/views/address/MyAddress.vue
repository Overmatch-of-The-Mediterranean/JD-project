<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__back iconfont" @click="handleBackClick">&#xe8ef;</div>
      <div class="header__title">管理收获地址</div>
      <div class="header__new">新建</div>
    </div>
    <div class="myaddress">我的收货地址</div>
    <div class="address__list">
      <div class="address" v-for="(item,index) in addressList" :key="index">
        <div class="address__icon iconfont">&#xe860;</div>
        <div class="address__top">
          <span class="address__top__name">{{item.name}}</span>
          <span class="address__top__tel">{{item.phone}}</span>
        </div>
        <div class="address__bottom">{{item.city + item.department + item.houseNumber}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../untils/request'
import { useRouter } from 'vue-router'
export default {
  name: 'myAddress',
  setup() {
    const addressList = ref([])
    const getaddressList = async () => {
      const result = await get('/api/user/address')
      if (result?.errno === 0 && result?.data?.length) {
        addressList.value = result.data
      }
    }
    getaddressList()
    console.log(addressList, '111')
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick, addressList }
  }
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
      bottom: 0;
      background-color: #f5f5f5;
    }
.header {
  display: flex;
  justify-content: space-between;
  height: .5rem;
  background-color: #fff;
  line-height: .5rem;
  &__back {
    padding-left: .18rem;
    color: #B6B6B6;
    font-size: .24rem;
  }
  &__address{
    color: #333333;
  }
  &__new{
    padding-right: .18rem;
    font-size: 14px;
  }
}
.myaddress {
  padding-left: .18rem;
  margin: .16rem 0 .12rem 0;
  font-size: .15rem;
  color: #333333;
}
.address__list {
  padding: 0 .18rem;
  .address {
    position: relative;
    margin-bottom: .16rem;
    background-color: #fff;
    padding-left: .16rem;
    border-radius: .04rem;
    &__icon {
      position: absolute;
      top: 0.44rem;
      right: 0.16rem;
      color: #999999;
    }
    &__top {
      padding: .18rem 0 .08rem 0;
      font-size: 14px;
      color: #999999;
      &__tel {
        padding-left: .66rem;
      }
    }
    &__bottom {
      width: 2.6rem;
      font-size: .15rem;
      color: #333333;
      padding-bottom: .18rem;
    }
  }
}
</style>
