<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <jhi-navbar></jhi-navbar>
      </el-header>
      <el-main>
        <top-navbar @active-index-change="handleActiveIndexChange"></top-navbar>
        <!-- 动态加载组件 -->
        <div class="content-container">
          <main-navbar v-if="currentIndex === '1'"></main-navbar>
          <todo-bar v-if="currentIndex === '2'"></todo-bar>
          <basicinfo-bar v-if="currentIndex === '3'"></basicinfo-bar>
          <project-bar v-if="currentIndex === '4'"></project-bar>
          <costs-bar v-if="currentIndex === '5'"></costs-bar>
          <results-bar v-if="currentIndex === '6'"></results-bar>
          <hightech-bar v-if="currentIndex === '7'"></hightech-bar>
          <export-bar v-if="currentIndex === '8'"></export-bar>
          <manage-bar v-if="currentIndex === '9'"></manage-bar>
        </div>
      </el-main>

      <el-footer>
        <div id="footer" class="footer">
          <p></p>
          <p></p>
          <p>版权所有©2024-2025 深圳远方创新数据咨询有限公司</p>
          <p>
            全国营销与客服热线：0755-27960108 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            技术支持：深圳远方创新数据咨询有限公司问题反馈或意见
          </p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>

<style scoped>
.common-layout {
  width: 100%;
  min-width: 1490px;
  overflow-x: auto; /* 横向溢出时显示滚动条 */
}

.content-container {
  flex: 1;
  padding: 20px;
}

.footer {
  background-color: #353d47;
  border-top: 2px solid #efeb09;
  height: 80px;
  text-align: center; /* 使内容居中 */
  color: white; /* 设置字体颜色为白色 */
  bottom: 0; /* 底部对齐 */
  width: 100%; /* 宽度为100% */
}

.footer p {
  color: white; /* 确保段落文本也是白色 */
  line-height: 0.5em; /* 设置行距为1em */
  font-size: 12px;
}
</style>
