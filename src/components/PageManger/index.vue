<template>
  <div class="pageManger-container">
    <a
      :class="{
        disabled: currentPage === 1,
      }"
      @click="pagechage(1)"
      >|&lt;&lt;</a
    >
    <a
      :class="{
        disabled: currentPage === 1,
      }"
      @click="pagechage(currentPage - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="(item, i) in getNums"
      :key="i"
      :class="{
        active: currentPage === item,
      }"
      @click="pagechage(item)"
    >
      {{ item }}
    </a>
    <a
      :class="{
        disabled: currentPage === pageNumber,
      }"
      @click="pagechage(currentPage + 1)"
      >&gt;&gt;</a
    >

    <a
      :class="{
        disabled: currentPage === pageNumber,
      }"
      @click="pagechage(pageNumber)"
      >&gt;&gt;|</a
    >
  </div>
</template>
<script>
export default {
  props: {
    //当前页数
    currentPage: {
      type: Number,
      required: true,
    },
    //总信息量
    totalMessages: {
      type: Number,
      required: true,
    },
    //一页显示的数量
    showMessages: {
      type: Number,
      default: 10,
    },
    //容器内页码数
    pageNum: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.totalMessages / this.showMessages);
    },
    minPageNumber() {
      let min = this.currentPage - Math.floor(this.pageNum / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    maxPageNumber() {
      let max = this.minPageNumber + this.pageNum - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    getNums() {
      let arr = [];
      for (let i = this.minPageNumber; i <= this.maxPageNumber; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    pagechage(current) {
      if (current < 1) {
        current = 1;
      }
      if (current > this.pageNumber) {
        current = this.pageNumber;
      }
      if (current == this.currentPage) {
        return;
      }
      this.$emit("pageChange", current);
    },
  },
};
</script>

<style lang="less">
.pageManger-container {
  margin: 25px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
a {
  cursor: pointer;
  margin: 0px 6px;
  &.active {
    color: blue;
  }
  &.disabled {
    color: #8c8c8c;
  }
}
</style>>