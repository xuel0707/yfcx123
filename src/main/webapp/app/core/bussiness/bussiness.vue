<template>
  <jhi-navbar></jhi-navbar>  <!-- 导航栏始终显示 -->

  <jhi-footer></jhi-footer>  <!-- 底部内容始终显示 -->
</template>


<script  lang="ts">

import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue'; // 导入全局组件
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';

export default {
  name: 'Home',
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