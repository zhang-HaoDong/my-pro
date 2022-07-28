<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <Catalogue :mes="mes" @select="handleSelect" />
  </div>
</template>

<script>
import Catalogue from "../Catalogue";
import { getBlogTypes } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData([])],
  components: {
    Catalogue,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return this.$route.query.limit || 10;
    },
    mes() {
      const total = this.datas.reduce(
        (a, b) => a + +b.articleCount,
        0
      );
      return [{ name: "全部", id: -1, articleCount:total }, ...this.datas].map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if(item.id === -1){
        this.$router.push({
          name:"Blog",
          query,
        })
      }else{
         this.$router.push({
          name:"CategoryBlog",
          query,
          params:{
            categoryId: item.id,
          }
        })
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  overflow-y: auto;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>