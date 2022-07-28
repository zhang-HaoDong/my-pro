<template>
  <ul class="catalogue-container">
    <li v-for="(item, i) in mes" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">{{ item.name }}</span>
      <span v-if="item.aside" :class="{ active: item.isSelect }" class="aside">{{item.aside}}</span>
      <Catalogue :mes="item.children" @select="handleClick" v-if="item.children"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Catalogue",
  props: {
    mes: {
      type: Array,
      required: true,
      default:() => []
    },
  },
  methods: {
      handleClick(item){
          this.$emit("select",item)
      }
  }
};
</script>

<style scoped lang="less">
@import "~@/less/var.less";
.catalogue-container {
  font-size:14px;
  list-style: none;
  padding: 0;
  .aside{
    font-size: 12px;
    color:#999;
    margin-left:8px;
  }
  .catalogue-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>