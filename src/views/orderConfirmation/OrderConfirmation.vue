<template>
  <div class="wrapper">
    <TopView />
    <ProductsView />
    <OrderView />
  </div>
</template>

<script>
import TopView from './TopView.vue'
import ProductsView from './Products.vue'
import OrderView from './OrderView.vue'
export default {
  name: 'OrderConfirmation',
  components: { TopView, ProductsView, OrderView }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #F5F5F5;
}

</style>
