<template>
  <div class="toast">{{message}}</div>
</template>
<script>
export default {
  name: 'ToastView',
  props: ['message']
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
