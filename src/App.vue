<template>
  
   <div class="app-container">
      <Layout>
      <template #left>
        <div class="left">
          <navAside />
        </div>
      </template>
      <template #main>
        <div class="main" ref="container">
         <RouterView />
        </div>
      </template>
    </Layout>
   </div>
  
</template>

<script>
import Layout from './components/Layout'
import navAside from './components/navAside'
export default {
  components: {
    Layout,
    navAside
  },
}
</script>

<style scoped lang="less">
    .app-container{
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
    }
    .left {
      width: auto;
      height: 100%
    }
    .right{
      width: auto;
      height: 100%
    }
    .main{
      width: 100%;
      height: 100%;
    }
   
</style>