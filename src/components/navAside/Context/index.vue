<template>
  <div class="Context-container">
    <ul class="wrapper">
      <li>
        <a href="">
          <div class="icon">
            <Icon type="github" />
          </div>
          <span> Zhang-Hdong </span>
        </a>
      </li>
      <li>
        <a href="mailto:1227091229@qq.com">
          <div class="icon">
            <Icon type="mail" />
          </div>
          <span> 1227091229@qq.com </span>
        </a>
       
      </li>
      <li>
        <a href="">
          <div class="icon">
            <Icon type="qq" />
          </div>
          <span> 1227091229 </span>
        </a>
        <div class="tag">
          <img src="../../../img/qq.jpg" />
        </div>
      </li>
      <li>
        <a href="">
          <div class="icon">
            <Icon type="weixin" />
          </div>
          <span> 8 </span>
        </a>
        <div class="tag">
          <img src="../../../img/weixin.jpg" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../../Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
.Context-container{
  width: 100%;
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    position: relative;
    padding: 16px 0;
    margin-top: 8px;
    a {
      text-decoration: none;
      color: #fff;
      display: flex;
      font-size: 16px;
      margin-left: 20px;
      .icon {
        margin: 0 8px;
      }
    }
    .tag {
      transform-origin: center bottom;
      position: absolute;
      left: 0;
      bottom: 50px;
      width: 150px;
      height: 150px;
      transform: scaley(0);
      img {
        width: 100%;
        height: 100%;
      }
      &::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background: #fff;
        position: absolute;
        left: 69px;
        bottom: -5px;
        transform: rotate(45deg);
      }
    }
    &:hover .tag {
      transform: scaleY(1);
      transition: 600ms;
    }
  }
}
.wrapper {
  width: 100%;
  height: auto;
  background: inherit;
}
</style>