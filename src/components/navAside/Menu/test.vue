<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";

export default {
  components: {
    Menu,
  },
};
</script>

<style>
.test-container {
    width: 250px;
    height: 400px;
    background-color:#222;
    color:#fff;
}
</style>