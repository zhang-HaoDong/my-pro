<template>
    <div class="blog-detail-container">
      <Layout>
        <template #main>
          <BlogList />
      </template>
        <template #right>
          <div class="blog-category-container">
            <BlogCategory />
          </div>
      </template>
    </Layout>
    </div>
   
</template>

<script>
import Layout from '@/components/Layout'
import BlogList from "./components/BlogList"
import BlogCategory from "./components/BlogCategory"
export default {    
    components: {
        Layout,
        BlogList,
        BlogCategory,
    }

}
</script>

<style scoped lang="less">
  .blog-detail-container{
    height: 100%;
    .blog-category-container{
    width: 200px;
    height:100%;
  }
  }
  
</style>