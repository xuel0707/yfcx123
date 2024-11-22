<template>
  <transition name="dialog">
    <div v-if="modelValue" class="dialog-overlay" @click="handleOverlayClick">
      <div class="dialog-container" :class="size" @click.stop>
        <!-- 对话框头部 -->
        <div v-if="showHeader" class="dialog-header">
          <h3 class="dialog-title">{{ title }}</h3>
          <button v-if="showClose" class="close-button" @click="handleClose">
            <font-awesome-icon icon="times" />
          </button>
        </div>

        <!-- 对话框内容 -->
        <div class="dialog-content" :class="{ 'no-padding': noPadding }">
          <slot></slot>
        </div>

        <!-- 对话框底部 -->
        <div v-if="showFooter" class="dialog-footer">
          <slot name="footer">
            <button 
              v-if="showCancel" 
              class="cancel-button"
              @click="handleCancel"
            >
              {{ cancelText }}
            </button>
            <button 
              v-if="showConfirm" 
              class="confirm-button"
              :disabled="confirmDisabled"
              @click="handleConfirm"
            >
              {{ confirmText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dialog',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large', 'full'].includes(value)
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmDisabled: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'cancel', 'confirm'],
  setup(props, { emit }) {
    // 处理遮罩层点击
    const handleOverlayClick = () => {
      if (props.closeOnClickOverlay) {
        emit('update:modelValue', false);
      }
    };

    // 处理关闭按钮点击
    const handleClose = () => {
      emit('update:modelValue', false);
    };

    // 处理取消按钮点击
    const handleCancel = () => {
      emit('cancel');
      emit('update:modelValue', false);
    };

    // 处理确认按钮点击
    const handleConfirm = () => {
      emit('confirm');
    };

    return {
      handleOverlayClick,
      handleClose,
      handleCancel,
      handleConfirm
    };
  }
});
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.dialog-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  margin: 20px;
}

/* 对话框尺寸 */
.dialog-container.small {
  width: 400px;
}

.dialog-container.medium {
  width: 600px;
}

.dialog-container.large {
  width: 800px;
}

.dialog-container.full {
  width: 95vw;
  height: 90vh;
}

.dialog-header {
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  padding: 4px;
  transition: all 0.3s;
}

.close-button:hover {
  color: #666;
}

.dialog-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.dialog-content.no-padding {
  padding: 0;
}

.dialog-footer {
  padding: 16px 20px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.cancel-button,
.confirm-button {
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.cancel-button {
  background: white;
  border: 1px solid #d9d9d9;
  color: #666;
}

.cancel-button:hover {
  color: #40a9ff;
  border-color: #40a9ff;
}

.confirm-button {
  background: #1890ff;
  border: none;
  color: white;
}

.confirm-button:hover {
  background: #40a9ff;
}

.confirm-button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
}

/* 对话框动画 */
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s;
}

.dialog-enter-active .dialog-container {
  animation: dialog-zoom-in 0.3s;
}

.dialog-leave-active .dialog-container {
  animation: dialog-zoom-out 0.3s;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

@keyframes dialog-zoom-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes dialog-zoom-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

/* 自定义滚动条样式 */
.dialog-content::-webkit-scrollbar {
  width: 6px;
}

.dialog-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.dialog-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .dialog-container {
    width: 95vw !important;
    margin: 10px;
  }

  .dialog-header {
    padding: 12px 16px;
  }

  .dialog-content {
    padding: 16px;
  }

  .dialog-footer {
    padding: 12px 16px;
  }

  .cancel-button,
  .confirm-button {
    flex: 1;
  }
}
</style> 