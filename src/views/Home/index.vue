<template>
  <div class="home-container" v-loading="isLoading">
    <ul
      class="pager-container"
      ref="container"
    @wheel="handleWheel"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in datas" :key="item.id">
        <Pager
          :carousel="item"
        />
      </li>
    </ul>
    <div class="icon iconUp" @click="changPager(index - 1)" v-show="index > 0">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon iconDown"
      @click="changPager(index + 1)"
      v-show="index < datas.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
    <div class="pointer">
      <ul>
        <li
          v-for="(item, i) in datas"
          :key="item.id"
          :class="{
            active: index == i,
          }"
          @click="changPager(i)"
        ></li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Pager from "./Pager.vue";
import Icon from "../../components/Icon";
import { getMessage } from "@/api/banner.js";
import Loading from "@/components/Loading";
import fetchData from "@/mixins/fetchData.js";
export default {
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    };
  },
  mixins: [fetchData([])]
  ,
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  components: {
    Pager,
    Icon,
    Loading,
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    changPager(i) {
      this.index = i;
    },
    async fetchData(){
      return await getMessage();
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        // 往上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.datas.length - 1) {
        // 往下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  color: #ccc;
  font-size: 24px;
  overflow: hidden;
  .pager-container {
    transition: 1000ms;
    width: 100%;
    height: 100%;
    li {
      height: 100%;
      width: 100%;
    }
  }
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .icon {
    position: absolute;
    left: 50%;
    cursor: pointer;
  }
  .iconUp {
    top: 15px;
    animation: jumpUp 3000ms infinite;
  }
  .iconDown {
    bottom: 15px;
    height: auto;
    animation: jumpDown 3000ms infinite;
  }
  .pointer {
    ul {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      li {
        cursor: pointer;
        width: 8px;
        height: 8px;
        background-color: #2c2c2c;
        border-radius: 50%;
        margin-top: 8px;
        &.active {
          background-color: #fff;
        }
      }
    }
  }
}

@keyframes jumpUp {
  0% {
    transform: translateY(-25%);
  }
  50% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(-25%);
  }
}
@keyframes jumpDown {
  0% {
    transform: translateY(25%);
  }
  50% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(25%);
  }
}
</style>