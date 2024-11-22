<template>
  <div v-if="show" class="loading-container" :class="{ 'fullscreen': fullscreen }">
    <div class="loading-content">
      <!-- 加载动画 -->
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
      </div>
      
      <!-- 加载文本 -->
      <div v-if="text" class="loading-text">
        {{ text }}
      </div>
    </div>

    <!-- 遮罩层 -->
    <div v-if="mask" class="loading-mask" :class="{ 'transparent': transparent }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loading',
  props: {
    // 是否显示加载
    show: {
      type: Boolean,
      default: false
    },
    // 是否全屏显示
    fullscreen: {
      type: Boolean,
      default: false
    },
    // 加载文本
    text: {
      type: String,
      default: '加载中...'
    },
    // 是否显示遮罩层
    mask: {
      type: Boolean,
      default: true
    },
    // 遮罩层是否透明
    transparent: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style scoped>
.loading-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.loading-container.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}

.loading-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  position: relative;
}

.spinner-ring {
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: #1890ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-ring::before,
.spinner-ring::after {
  content: '';
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
}

.spinner-ring::before {
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-top-color: #1890ff;
  animation: spin 2s linear infinite;
}

.spinner-ring::after {
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-top-color: #1890ff;
  animation: spin 3s linear infinite;
}

.loading-text {
  color: #666;
  font-size: 14px;
}

.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;
}

.loading-mask.transparent {
  background: transparent;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 添加淡入淡出动画 */
.loading-container {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .loading-spinner {
    width: 32px;
    height: 32px;
  }

  .loading-text {
    font-size: 13px;
  }
}

/* 暗色主题支持 */
@media (prefers-color-scheme: dark) {
  .loading-text {
    color: #999;
  }

  .loading-mask {
    background: rgba(0, 0, 0, 0.9);
  }
}
</style> 