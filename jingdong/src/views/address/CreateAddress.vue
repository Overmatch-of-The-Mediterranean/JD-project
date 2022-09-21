<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__back iconfont" @click="handleBackClick">&#xe8ef;</div>
      <div class="header__title">新建收获地址</div>
      <div class="header__new" @click="createAddress">保存</div>
    </div>
    <div class="createInfo">
      <div class="createInfo__item">
        所在城市：<input type="text" v-model="city" placeholder="如北京市">
      </div>
      <div class="createInfo__item">
        小区/大厦/学校：<input type="text" v-model="department" placeholder="如理工大学国防科技园">
      </div>
      <div class="createInfo__item">
        楼号-门牌号：<input type="text" v-model="houseNumber" placeholder="A号楼B层">
      </div>
      <div class="createInfo__item">
        收货人：<input type="text" v-model="name" placeholder="请填写收货人的姓名">
      </div>
      <div class="createInfo__item">
        联系电话：<input type="text" v-model="phone" placeholder="请填写收货手机号">
      </div>
    </div>
    <ToastView :message="toastMessage" v-if="showToast"/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../untils/request'
import ToastView, { useToastEffect } from '../../components/ToastView.vue'
export default {
  name: 'createAddress',
  components: { ToastView },
  setup() {
    const data = reactive({ city: '', department: '', houseNumber: '', name: '', phone: '' })
    const router = useRouter()
    // 显示填写内容是否为空的弹窗组件
    const { show, toastMessage, showToast } = useToastEffect()

    // 创建地址请求
    const createAddress = async () => {
      try {
        const result = await post('/api/user/address', {
          city: data.city,
          department: data.department,
          houseNumber: data.houseNumber,
          name: data.name,
          phone: data.phone
        })
        if (data.city === '' || data.department === '' || data.houseNumber === '' || data.name === '' || data.phone === '') {
          return show('请将信息填写完整')
        }
        if (result?.errno === 0) {
          router.push({ name: 'myAddress' })
        }
      } catch (e) {
        alert('创建失败')
      }
    }
    const handleBackClick = () => {
      router.push({ name: 'my' })
    }
    const { city, department, houseNumber, name, phone } = toRefs(data)
    return { handleBackClick, createAddress, city, department, houseNumber, name, phone, toastMessage, showToast }
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

  &__address {
    color: #333333;
  }

  &__new {
    padding-right: .18rem;
    font-size: 14px;
  }
}
.createInfo {
  margin-top: .12rem;
  background-color: #fff;
  line-height: .44rem;
  &__item {
    display: flex;
    padding-left: .18rem;
    height: 0.44rem;
    border-bottom: 1px solid #F1F1F1;
    font-size: 14px;
    color: #666666;
    input {
      border: none;
      height: 0.2rem;
      align-self: center;
      outline: none;
      font-size: 14px;
      color: #999999;
    }
  }
}
</style>
