<template>
  <div class="test-container">
    <Context />
  </div>
</template>

<script>
import Context from './'
export default {
    components:{
        Context,
    }
}
</script>

<style>
  .test-container {
    height:400px;
    width: 250px;
    background-color:red;
  }
</style>