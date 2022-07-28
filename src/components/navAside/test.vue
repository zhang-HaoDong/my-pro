<template>
  <div class="test-container">
    <navAside />
  </div>
</template>

<script>
import navAside from "./";
export default {
  components: {
    navAside,
  },
};
</script>

<style>
:root {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
.test-container {
  width: 250px;
  height: 100%;
  background-color: #222;
}
</style>