<template>
  <el-container class="layout-container">
    <jhi-navbar></jhi-navbar>
    <top-navbar></top-navbar>
    <main-navbar></main-navbar>
    <jhi-footer></jhi-footer>
  </el-container>
</template>

<script lang="ts" src="./home.component.ts"></script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background: #afafaf;
  position: absolute;
}
</style>