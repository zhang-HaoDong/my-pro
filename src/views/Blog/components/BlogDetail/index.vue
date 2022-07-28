<template>
  
    <Layout>
    <template #main>
      <div class="main-container" v-loading="isLoading">
        <Detail :details="datas" v-if="!isLoading" />
        <BlogComment v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="datas.toc" v-if="datas.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Detail from "./Detail";
import BlogTOC from "./BlogTOC";
import fetchData from "@/mixins/fetchData.js";
import { getBlog } from "@/api/blog.js";
import BlogComment from "../BlogComment";
export default {
  mixins: [fetchData({})],
  components: {
    Layout,
    Detail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    async fetchMore(){
      this.isLoading = true;
      this.page ++;
      const res = await fetchData();
      this.datas.total = res.total;
      this.datas.rows = this.datas.rows.concat(res.rows);
      this.isLoading = false;
    }
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>