<template>
    <pageManger :currentPage='currentPage' :totalMessages='301' :pageNum='6' @pageChange="handlePageChange($event)"/>
</template>

<script>
import pageManger from './'

export default {
    data(){
        return {
            currentPage: 1,
        }
    }
    ,
    components:{
        pageManger
    },
    methods:{
         handlePageChange(newPage) {
      this.currentPage = newPage;
    },
    }
}
</script>

<style>

</style>