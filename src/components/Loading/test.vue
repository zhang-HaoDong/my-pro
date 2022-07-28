<template>
  <div class="container">
    <button @click="isLoading = !isLoading">切换显示</button>
    <Loading v-show="isLoading" />
  </div>
</template>

<script>
import Loading from "./index.vue";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>

<style>
</style>