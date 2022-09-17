<template>
  <div class="wrapper">
    <StaticPart />
    <NearbyView />
  </div>
  <DockerView :currentIndex="0"/>
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearbyView from './NearbyView.vue'
import DockerView from '../../components/DockerView.vue'
export default {
  name: 'HomeView',
  components: { StaticPart, NearbyView, DockerView }
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
    bottom: 0.5rem;
    padding: 0 .18rem;
    // background-color: blue;
}

</style>
