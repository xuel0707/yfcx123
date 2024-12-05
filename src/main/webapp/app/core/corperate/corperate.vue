<template>
    <div class="page-container">
        <jhi-navbar class="nav"></jhi-navbar>  

        <jhi-footer class="footer"></jhi-footer>  
    </div>
</template>


<script  lang="ts">

import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue'; // 导入全局组件
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';

export default {
  name: 'Corperate',
  components: {
    JhiNavbar, // 注册全局组件
    JhiFooter, // 注册全局组件
  },
  methods: {

  },
  mounted() {
    
  },
};


</script>