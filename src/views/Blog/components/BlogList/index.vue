<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="item in datas.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{
            name: 'BlogDetail',
            params:{
              id: item.id,
            }
            }">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{
            name: 'BlogDetail',
            params:{
              id: item.id,
            }
            }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink :to="{
              name: 'CategoryBlog',
              params:{
                categoryId: item.category.id,
              }
              }" > {{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <PageManger
      :currentPage="routeInfo.page"
      :totalMessages="+datas.total"
      :pageNum="routeInfo.limit"
      @pageChange="handlePageChange"
      v-show="!isLoading"
    />
  </div>
</template>

<script>
import PageManger from "@/components/PageManger";
import fetchData from "@/mixins/fetchData";
import { getBlogs } from "@/api/blog";
import formatDate from "@/utils/formatDate";
export default {
  mixins: [fetchData({})],
  components: {
    PageManger,
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if ((this.routeInfo.categoryId = -1)) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.$refs.container.scrollTop = 0;
      this.isLoading = true;
      this.datas = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/less/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    a {
      color: #000;
    }
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    a {
      color: @gray;
    }
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
a {
  text-decoration: none;
}
</style>
