<template>
  <div data-v-0ac3ba95="" data-v-10823e5a="" id="header">
    <header data-v-0ac3ba95="" class="back_white">
      <div data-v-0ac3ba95="" class="shortcut color_f">
        <div data-v-0ac3ba95="" class="web_width clearfix">

        </div>
      </div>
      <div data-v-0ac3ba95="" class="web_width clearfix top_search bg_none">
        <div data-v-0ac3ba95="" class="logo left">
          <a data-v-0ac3ba95="" style="cursor: pointer">
            <img data-v-0ac3ba95="" src="/content/images/logo-4.png" class="display_in_bk" />
          </a>
        </div>

      </div>
    </header>
  </div>
</template>


<script  lang="ts">


export default {
  name: 'RegNavbar',
  components: {

  },
  methods: {

  },
  mounted() {
    
  },
};


</script>
<style scoped>
/* 设置导航栏的基本样式 */
header.back_white {
  top: 0;
  width: 100%;
  height:120px;
  z-index: 100;
  background: #ea7c07; 
  line-height: 60px;
  font-size: 14px; /* 与注册表单中的字体大小一致 */
  font-weight: 500; /* 与注册表单中的字体权重一致 */
  color: #fff;
  margin-bottom: 20px; /* 增加底部边距以适应布局 */
}

/* 通用背景样式 */
.back_white {
  background: #ea7c07; 
  line-height: 60px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}

/* 链接和导航项的样式 */
a,
.tool_nav a,
.nav_search a,
.tool_nav li {
  color: #fff !important;
  font-weight: 500 !important;
}

/* 右侧内边距调整 */
.right.sho_r {
  padding-right: 20px; /* 调整右边距以适应布局 */
}

/* 响应式设计调整 */
@media (max-width: 768px) {
  header.back_white {
    line-height: 40px; /* 减少行高以适应小屏幕 */
  }

  .right.sho_r {
    padding-right: 10px; /* 减少右边距 */
  }
}
</style>