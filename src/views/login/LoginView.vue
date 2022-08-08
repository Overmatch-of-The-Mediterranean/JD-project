<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入手机号">
        </div>
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入密码">
        </div>
        <div class="wrapper__button">登录</div>
        <div class="wrapper__register">立即注册</div>
    </div>
</template>
<script>
export default {
  name: 'LoginView'
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
        background-color: #0091FF;
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
