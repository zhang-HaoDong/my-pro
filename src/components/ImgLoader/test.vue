<template>
  <div class="testContainer">
    <imgLoader :src="imgUrl" :placeholder="loadImgUrl" @load="load" />
  </div>
</template>

<script>
import imgLoader from "./";
export default {
  components: {
    imgLoader,
  },
  data() {
    return {
      imgUrl:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304",
      loadImgUrl:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
    };
  },
  methods: {
    load() {
      console.log("图片加载完成");
    },
  },
};
</script>

<style>
div {
  width: 500px;
  height: 400px;
  margin: 0 auto;
}
</style>