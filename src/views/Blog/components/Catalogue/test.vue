<template>
  <Catalogue :mes="mes" @select="handleSelect"/>
</template>

<script>
import Catalogue from "./index.vue"
export default {
    components:{
        Catalogue,
    },
    data(){
    return{
        mes: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            {
              name: "c-2",
              isSelect: false,
              children: [
                { name: "c-2-1", isSelect: false },
                { name: "c-2-2", isSelect: false },
                { name: "c-2-3", isSelect: false },
                { name: "c-2-4", isSelect: false },
              ],
            },
            { name: "c-3", isSelect: false },
            { name: "c-4", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
      ]
    }
    },
    methods: {
        handleSelect(item){
            console.log(item);
        }
    }
}
</script>

<style>

</style>