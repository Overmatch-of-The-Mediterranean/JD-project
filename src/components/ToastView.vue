<template>
  <div class="toast">{{message}}</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'ToastView',
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    toastMessage: '',
    showToast: false
  })
  let lock = true
  const show = (message) => {
    if (!lock) return
    lock = false
    toastData.toastMessage = message
    toastData.showToast = true
    setTimeout(() => {
      lock = true
      toastData.showToast = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { toastMessage, showToast } = toRefs(toastData)
  return { show, toastMessage, showToast }
}
</script>
<style lang="scss" scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: .1rem;
  background-color: rgba(0, 0, 0, .35);
  border-radius: .05rem;
}
</style>
