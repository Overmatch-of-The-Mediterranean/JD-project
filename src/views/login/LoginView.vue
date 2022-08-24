<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="userName">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password">
    </div>
    <div class="wrapper__button" @click="handleIsLogin">登录</div>
    <router-link :to="{name: 'register'}">
      <div class="wrapper__register">立即注册</div>
    </router-link>
    <ToastView :message="toastMessage" v-if="showToast" />
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../untils/request'
import ToastView, { useToastEffect } from '../../components/ToastView.vue'

// 实现登录的逻辑
const useLoginEffect = (show) => {
  const router = useRouter()
  const data = reactive({ userName: '', password: '' })
  const handleIsLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        userName: data.userName,
        password: data.password
      })
      if (data.userName === '' || data.password === '') {
        return show('请输入用户名和密码')
      }
      if (result.error === 0) {
        localStorage.isLogin = true
        router.push({ name: 'home' })
      } else {
        show('登录失败')
      }
    } catch (e) {
      show('请求失败')
    }
  }
  const { userName, password } = toRefs(data)
  return { handleIsLogin, userName, password }
}

export default {
  name: 'LoginView',
  components: { ToastView },
  setup () {
    // setup职责是，告诉你代码执行的流程
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleIsLogin, userName, password } = useLoginEffect(show)
    return { handleIsLogin, show, toastMessage, showToast, userName, password }
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
            width:.66rem;
            height: .66rem;
            margin: 0 auto .4rem auto;
        }
    &__input {
        width: 2.95rem;
        height: 0.48rem;
        margin: 0 auto .16rem auto;
        background: #F9F9F9;
        border: 1px solid rgba(0, 0, 0, 0.10);
        border-radius: 6px;
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
        box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
        border-radius: 4px;
    }
    &__register{
        text-align: center;
        font-size: 14px;
        color: $content-login-inputcolor;
        }
}
</style>
