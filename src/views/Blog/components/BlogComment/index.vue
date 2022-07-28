<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${datas.total})`"
      :list="datas.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created(){
    window.fetchMore = this.fetchMore;
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore(){
      this.isLoading = true;
      this.page ++;
      const res = await  this.fetchData();
      this.datas.total = res.total;
      this.datas.rows = this.datas.rows.concat(res.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.datas.rows.unshift(resp);
      this.datas.total++;
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
