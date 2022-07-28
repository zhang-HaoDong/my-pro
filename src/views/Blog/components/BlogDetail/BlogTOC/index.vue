<template>
  <div class="blogTOC-container">
    <h2>目录</h2>
    <Catalogue :mes="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import Catalogue from "../../Catalogue"
export default {
  data(){
    return {
      actisveAnchor: ""
    }
  }
  ,
  props:{
    toc:{
      type: Array,
      required:true,
    }
  }
  ,
  components:{
    Catalogue,
  },
  methods: {
    handleSelect(item){
      location.hash = item.anchor;
    },
    setSelect() {
      console.log(1);
      this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      const range = 200;
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        // 得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    },
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
    created(){
     
    }
  }
}
</script>

<style>
  .blogTOC-container{
    overflow-y: auto;
    position: relative;
    height: 100%;
  }
</style>