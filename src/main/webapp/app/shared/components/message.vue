<template>
  <transition-group 
    tag="div" 
    class="message-container"
    name="message"
    @after-leave="handleAfterLeave"
  >
    <div
      v-for="msg in messages"
      :key="msg.id"
      class="message"
      :class="[
        `message-${msg.type}`,
        { 'with-icon': showIcon }
      ]"
    >
      <!-- 消息图标 -->
      <font-awesome-icon
        v-if="showIcon"
        :icon="getIcon(msg.type)"
        class="message-icon"
      />

      <!-- 消息内容 -->
      <span class="message-content">{{ msg.content }}</span>

      <!-- 关闭按钮 -->
      <button 
        v-if="msg.closable" 
        class="close-button"
        @click="() => close(msg.id)"
      >
        <font-awesome-icon icon="times" />
      </button>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

interface Message {
  id: number;
  content: string;
  type: 'info' | 'success' | 'warning' | 'error';
  duration: number;
  closable: boolean;
  timer?: number;
}

export default defineComponent({
  name: 'Message',
  props: {
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const messages = ref<Message[]>([]);
    let messageCount = 0;

    // 获取消息图标
    const getIcon = (type: string) => {
      switch (type) {
        case 'success':
          return 'check-circle';
        case 'warning':
          return 'exclamation-circle';
        case 'error':
          return 'times-circle';
        default:
          return 'info-circle';
      }
    };

    // 添加消息
    const add = (
      content: string,
      type: 'info' | 'success' | 'warning' | 'error' = 'info',
      duration = 3000,
      closable = true
    ) => {
      const id = messageCount++;
      const message: Message = {
        id,
        content,
        type,
        duration,
        closable
      };

      if (duration > 0) {
        message.timer = window.setTimeout(() => {
          close(id);
        }, duration);
      }

      messages.value.push(message);
      return id;
    };

    // 关闭消息
    const close = (id: number) => {
      const index = messages.value.findIndex(msg => msg.id === id);
      if (index !== -1) {
        const message = messages.value[index];
        if (message.timer) {
          clearTimeout(message.timer);
        }
        messages.value.splice(index, 1);
      }
    };

    // 清空所有消息
    const clear = () => {
      messages.value.forEach(msg => {
        if (msg.timer) {
          clearTimeout(msg.timer);
        }
      });
      messages.value = [];
    };

    // 处理消息离开动画结束
    const handleAfterLeave = () => {
      if (messages.value.length === 0) {
        messageCount = 0;
      }
    };

    // 组件卸载时清理定时器
    onUnmounted(() => {
      clear();
    });

    return {
      messages,
      getIcon,
      add,
      close,
      clear,
      handleAfterLeave
    };
  }
});
</script>

<style scoped>
.message-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.message {
  padding: 12px 20px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: auto;
  min-width: 300px;
  max-width: 80vw;
}

.message.with-icon {
  padding-left: 16px;
}

.message-icon {
  font-size: 16px;
}

.message-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.4;
}

.close-button {
  background: none;
  border: none;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  padding: 4px;
  transition: color 0.3s;
}

.close-button:hover {
  color: #666;
}

/* 消息类型样式 */
.message-info {
  background: #e6f7ff;
  border: 1px solid #91d5ff;
}

.message-info .message-icon {
  color: #1890ff;
}

.message-success {
  background: #f6ffed;
  border: 1px solid #b7eb8f;
}

.message-success .message-icon {
  color: #52c41a;
}

.message-warning {
  background: #fffbe6;
  border: 1px solid #ffe58f;
}

.message-warning .message-icon {
  color: #faad14;
}

.message-error {
  background: #fff2f0;
  border: 1px solid #ffccc7;
}

.message-error .message-icon {
  color: #ff4d4f;
}

/* 消息动画 */
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease-out;
}

.message-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.message-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .message {
    min-width: 90vw;
    margin: 0 10px;
  }
}

/* 暗色主题支持 */
@media (prefers-color-scheme: dark) {
  .message {
    background: #1f1f1f;
    color: #fff;
  }

  .message-info {
    background: #111b26;
    border-color: #153450;
  }

  .message-success {
    background: #162312;
    border-color: #274916;
  }

  .message-warning {
    background: #2b2111;
    border-color: #443111;
  }

  .message-error {
    background: #2a1215;
    border-color: #5c1d21;
  }

  .close-button {
    color: #666;
  }

  .close-button:hover {
    color: #999;
  }
}
</style> 