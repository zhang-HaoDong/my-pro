<template>
  <div class="navAside">
      <div class="avatar">
          <Avatar url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fimages01%2F20210930%2F1273843aaaea4eaf8b7b037513730a3e.png&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642495180&t=18e4a131b5233f003d6544f99261a60f" :size="150"/>
      </div>
    <div class="menu">
        <Menu />
    </div>
    <div class="context">
       <Context />
    </div>
    <p>备案号：晋BA54NIA8SD</p>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Context from "./Context";
export default {
  components: {
    Avatar,
    Menu,
    Context,
  },
};
</script>

<style scoped>
    .navAside{
        background-color:#222;
        color: #fff;
        height: 100%;
        width: 100%;
    }
    .avatar{
     padding: 8px 0;
    }
    .avatar img {
        margin: 0 auto;
    }
    p{
        color:#111;
        text-align: center;
        margin: 0 ;
        padding: 18px 0;
    }
    .menu{
        margin:16px 0;
    }
</style>