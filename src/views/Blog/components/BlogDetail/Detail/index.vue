<template>
  <div class="detail-container">
    <h1>{{details.title}}</h1>
    <span>日期：{{formatDate(details.createDate) }}</span>
    <span>浏览：{{details.scanNumber}}</span>
    <span>评论：{{details.commentNumber}}</span>
    <span><a href=""></a></span>
    <div v-html="details.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate.js"
import "highlight.js/styles/github.css";
export default {
  props: {
    details: {
      type: Object,
      required: true,
    }
  },
  methods: {
    formatDate,
  }
}
</script>

<style scoped lang="less">
@import "~@/less/var.less";
@import "~@/less/markdown.css";
  .detail-container{
    position: relative;
    span{
      color: @gray;
    }
  }
</style>