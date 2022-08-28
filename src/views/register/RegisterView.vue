<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号" v-model="userName">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码" v-model="ensurment">
    </div>
    <div class="wrapper__button" @click="handleIsRegister">注册</div>
    <router-link :to="{name:'Login'}">
      <div class="wrapper__register">已有账号去登陆</div>
    </router-link>
    <ToastView :message="toastMessage" v-if="showToast" />
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../untils/request'
import ToastView, { useToastEffect } from '../../components/ToastView.vue'

// 实现注册的逻辑
const useRegisterEffect = (show) => {
  const router = useRouter()
  const data = reactive({ userName: '', password: '', ensurment: '' })
  const handleIsRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        userName: data.userName,
        password: data.password,
        ensurment: data.ensurment
      })
      if (result?.error === 0) {
        router.push({ name: 'Login' })
      } else {
        show('注册失败')
      }
    } catch (e) {
      show('请求失败')
    }
  }
  const { userName, password, ensurment } = toRefs(data)
  return { handleIsRegister, userName, password, ensurment }
}

export default {
  name: 'RegisterView',
  components: { ToastView },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleIsRegister, userName, password, ensurment } = useRegisterEffect(show)

    return { show, toastMessage, showToast, handleIsRegister, userName, password, ensurment }
  }
}
</script>
<style lang="scss" scoped>

@import '../../style/variables.scss';

.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-60%);

    &__img {
        display: block;
        width: .66rem;
        height: .66rem;
        margin: 0 auto .4rem auto;
    }

    &__input {
        width: 2.95rem;
        height: 0.48rem;
        margin: 0 auto .16rem auto;
        background: #F9F9F9;
        border: .01rem solid rgba(0, 0, 0, 0.10);
        border-radius: .06rem;

        &__content {
            width: 100%;
            height: 100%;
            padding: 0 .16rem;
            font-size: .16rem;
            color: $content-login-inputcolor;
            border: none;
            outline: none;
            background-color: #F9F9F9;

            &::placeholder {
                color: $content-login-inputcolor;
                font-size: .16rem;
            }
        }
    }

    &__button {
        width: 2.95rem;
        height: 0.48rem;
        margin: .32rem auto .16rem auto;
        background-color: $content-bgC;
        border: none;
        color: #fff;
        text-align: center;
        line-height: .48rem;
        box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
        border-radius: .04rem;
    }

    &__register {
        text-align: center;
        font-size: .14rem;
        color: $content-login-inputcolor;
    }
}
</style>
