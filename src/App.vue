<template>
  <div id="app">
    <div class="rot">
      <router-view/>
    </div>
    <layfoot v-if='!($route.path=="/xiangqing")'></layfoot>
  </div>
</template>

<script>
export default {
  name: "App",
//  mounted() {
//    console.log(this.$route.path);
//  },
};
</script>

<style scoped lang='scss'>
#app {
  position: relative;
  .rot {
    height: 90%;
    overflow: auto;
  }
  layfoot{
    height: 10%;
    width: 100%;
  }
 
}
</style>
