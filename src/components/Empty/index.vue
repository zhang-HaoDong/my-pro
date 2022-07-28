<template>
    <div class="empty-container" :style="{
       fontSize: getSize
    }">
        <Icon type="empty" />
        <p :style="{
            fontSize: '100px'
        }">无数据</p>
    </div>
</template>

<script>
import Icon from "../Icon";
export default {
    components: {
        Icon,
    },
  props:{
      size:{
          type: Number,
          required: true

      }
  },
  computed:{
      getSize(){
          return this.size + 'px'
      }
  }
}
</script>

<style lang="less">
    .empty-container{
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #9c9c9c;
        &>p{
            margin: 0;
            padding:0;
        }
   
    }
    
</style>