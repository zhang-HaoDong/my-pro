<template>
  <div class="test-container">
      <Layout> 
          <template #left>
              <div class="left">
                  左边区域
              </div>
          </template>
          <template #main>
              <div class="main">
                  中间区域
              </div>
          </template>
          <template #right>
              <div class="right">
                  右边区域
              </div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from './'
export default {
    components:{
        Layout,
    }
}
</script>

<style scoped lang="less">
.test-container{
    width: 70%;
    height: 600px;
    margin: 0 auto;
}
    .left{
        width: 200px;
        height: 100%;
        background-color:red;
    }
    .right{
        width: 150px;
        height: 100%;
        background-color:green;
    }
    .main{
        width: 100%;
        height: 100%;
        background-color:blue;
    }
</style>