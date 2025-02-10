<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <span>
        <el-icon><HomeFilled /></el-icon>
        首页
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <span>
        <el-icon><Edit /></el-icon>
        待办事项
      </span>
    </el-menu-item>
    <el-menu-item index="3">
      <span>
        <el-icon><CopyDocument /></el-icon>
        基础信息维护
      </span>
    </el-menu-item>
    <el-menu-item index="4">
      <span>
        <el-icon><DataBoard /></el-icon>
        研发项目管理
      </span>
    </el-menu-item>
    <el-menu-item index="5">
      <span>
        <el-icon><Coin /></el-icon>
        研发费用管理
      </span>
    </el-menu-item>
    <el-menu-item index="6">
      <span>
        <el-icon><Files /></el-icon>
        成果及成果转化
      </span>
    </el-menu-item>
    <el-menu-item index="7">
      <span>
        <el-icon><Service /></el-icon>
        高新技术产品(服务)及收入
      </span>
    </el-menu-item>
    <el-menu-item index="8">
      <span>
        <el-icon><ReadingLamp /></el-icon>
        报表查询
      </span>
    </el-menu-item>
    <el-menu-item index="9">
      <span>
        <el-icon><Operation /></el-icon>
        运营管理
      </span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" src="./top-navbar.component.ts"></script>

<style scoped>
.el-menu {
  display: flex;
  align-items: center;
  padding: 0 0px;
  font-size: 14px;
}

.el-menu-item {
  color: #ea7c07 !important;
  display: inline-block;
}
</style>
