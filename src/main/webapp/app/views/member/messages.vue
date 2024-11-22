<template>
  <div class="messages-container">
    <div class="messages-header">
      <h2>消息中心</h2>
      <div class="header-actions">
        <button class="mark-all-button" @click="markAllAsRead" :disabled="!hasUnread">
          <font-awesome-icon icon="check-double" />
          全部标记为已读
        </button>
        <button class="delete-button" @click="showDeleteConfirm" :disabled="!selectedMessages.length">
          <font-awesome-icon icon="trash" />
          删除选中
        </button>
      </div>
    </div>

    <!-- 消息类型标签 -->
    <div class="message-tabs">
      <a v-for="tab in messageTabs" 
         :key="tab.type"
         :class="{ active: currentTab === tab.type }"
         @click="currentTab = tab.type"
      >
        {{ tab.name }}
        <span v-if="tab.unread" class="unread-badge">{{ tab.unread }}</span>
      </a>
    </div>

    <!-- 消息列表 -->
    <div class="message-list">
      <div v-for="message in filteredMessages" 
           :key="message.id"
           class="message-item"
           :class="{ unread: !message.read }"
      >
        <!-- 选择框 -->
        <label class="checkbox-wrapper">
          <input 
            type="checkbox"
            :value="message.id"
            v-model="selectedMessages"
          >
          <span class="checkbox-custom"></span>
        </label>

        <!-- 消息内容 -->
        <div class="message-content" @click="handleMessageClick(message)">
          <div class="message-icon" :class="message.type">
            <font-awesome-icon :icon="getMessageIcon(message.type)" />
          </div>
          <div class="message-main">
            <div class="message-title">{{ message.title }}</div>
            <div class="message-desc">{{ message.content }}</div>
            <div class="message-meta">
              <span class="message-time">{{ formatTime(message.createTime) }}</span>
              <span v-if="!message.read" class="unread-tag">未读</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="!filteredMessages.length" class="empty-state">
        <font-awesome-icon icon="inbox" />
        <p>暂无消息</p>
      </div>
    </div>

    <!-- 分页 -->
    <div v-if="filteredMessages.length" class="pagination">
      <button 
        class="page-button"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        <font-awesome-icon icon="chevron-left" />
      </button>
      <span class="page-info">第 {{ currentPage }} 页</span>
      <button 
        class="page-button"
        :disabled="isLastPage"
        @click="currentPage++"
      >
        <font-awesome-icon icon="chevron-right" />
      </button>
    </div>

    <!-- 删除确认对话框 -->
    <Dialog
      v-model="showDeleteDialog"
      title="删除消息"
      @confirm="handleDelete"
    >
      <p>确定要删除选中的 {{ selectedMessages.length }} 条消息吗？</p>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import Dialog from '@/shared/components/dialog.vue';
import { notificationService } from '@/services/notification.service';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'MemberMessages',
  components: {
    Dialog
  },
  setup() {
    // 消息类型标签
    const messageTabs = ref([
      { type: 'all', name: '全部消息', unread: 0 },
      { type: 'policy', name: '政策消息', unread: 0 },
      { type: 'system', name: '系统消息', unread: 0 },
      { type: 'match', name: '匹配消息', unread: 0 }
    ]);

    const currentTab = ref('all');
    const currentPage = ref(1);
    const selectedMessages = ref<number[]>([]);
    const showDeleteDialog = ref(false);
    const messages = ref<any[]>([]);

    // 过滤消息
    const filteredMessages = computed(() => {
      if (currentTab.value === 'all') {
        return messages.value;
      }
      return messages.value.filter(msg => msg.type === currentTab.value);
    });

    // 是否有未读消息
    const hasUnread = computed(() => {
      return messages.value.some(msg => !msg.read);
    });

    // 是否为最后一页
    const isLastPage = computed(() => {
      // TODO: 实现分页逻辑
      return false;
    });

    // 获取消息图标
    const getMessageIcon = (type: string) => {
      switch (type) {
        case 'policy':
          return 'file-alt';
        case 'system':
          return 'cog';
        case 'match':
          return 'random';
        default:
          return 'bell';
      }
    };

    // 格式化时间
    const formatTime = (time: string) => {
      return dayjs(time).format('YYYY-MM-DD HH:mm');
    };

    // 处理消息点击
    const handleMessageClick = async (message: any) => {
      if (!message.read) {
        try {
          await notificationService.markAsRead([message.id]);
          message.read = true;
          updateUnreadCount();
        } catch (error) {
          console.error('Mark message as read failed:', error);
        }
      }
      // TODO: 处理消息点击逻辑
    };

    // 标记全部已读
    const markAllAsRead = async () => {
      try {
        const unreadIds = messages.value
          .filter(msg => !msg.read)
          .map(msg => msg.id);
        await notificationService.markAsRead(unreadIds);
        messages.value.forEach(msg => msg.read = true);
        updateUnreadCount();
      } catch (error) {
        console.error('Mark all as read failed:', error);
      }
    };

    // 显示删除确认
    const showDeleteConfirm = () => {
      if (selectedMessages.value.length) {
        showDeleteDialog.value = true;
      }
    };

    // 处理删除
    const handleDelete = async () => {
      try {
        await notificationService.deleteNotifications(selectedMessages.value);
        messages.value = messages.value.filter(
          msg => !selectedMessages.value.includes(msg.id)
        );
        selectedMessages.value = [];
        showDeleteDialog.value = false;
        updateUnreadCount();
      } catch (error) {
        console.error('Delete messages failed:', error);
      }
    };

    // 更新未读数量
    const updateUnreadCount = () => {
      messageTabs.value.forEach(tab => {
        if (tab.type === 'all') {
          tab.unread = messages.value.filter(msg => !msg.read).length;
        } else {
          tab.unread = messages.value.filter(
            msg => msg.type === tab.type && !msg.read
          ).length;
        }
      });
    };

    // 初始化数据
    onMounted(async () => {
      try {
        const data = await notificationService.getAllNotifications({
          page: currentPage.value,
          size: 10
        });
        messages.value = data.content;
        updateUnreadCount();
      } catch (error) {
        console.error('Load messages failed:', error);
      }
    });

    return {
      messageTabs,
      currentTab,
      currentPage,
      selectedMessages,
      showDeleteDialog,
      filteredMessages,
      hasUnread,
      isLastPage,
      getMessageIcon,
      formatTime,
      handleMessageClick,
      markAllAsRead,
      showDeleteConfirm,
      handleDelete
    };
  }
});
</script>

<style scoped>
.messages-container {
  padding: 20px;
}

.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.messages-header h2 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.mark-all-button,
.delete-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.mark-all-button {
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  color: #1890ff;
}

.mark-all-button:hover {
  background: #bae7ff;
}

.delete-button {
  background: #fff1f0;
  border: 1px solid #ffa39e;
  color: #ff4d4f;
}

.delete-button:hover {
  background: #ffccc7;
}

.mark-all-button:disabled,
.delete-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.message-tabs {
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.message-tabs a {
  position: relative;
  padding: 12px 0;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.message-tabs a:hover {
  color: #1890ff;
}

.message-tabs a.active {
  color: #1890ff;
}

.message-tabs a.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1890ff;
}

.unread-badge {
  display: inline-block;
  padding: 0 6px;
  background: #ff4d4f;
  color: white;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 4px;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.message-item:hover {
  border-color: #1890ff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.message-item.unread {
  background: #f6f6f6;
}

.checkbox-wrapper {
  padding-top: 4px;
}

.message-content {
  flex: 1;
  display: flex;
  gap: 12px;
  cursor: pointer;
}

.message-icon {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.message-icon.policy {
  background: #e6f7ff;
  color: #1890ff;
}

.message-icon.system {
  background: #f6ffed;
  color: #52c41a;
}

.message-icon.match {
  background: #fff7e6;
  color: #faad14;
}

.message-main {
  flex: 1;
}

.message-title {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.message-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  line-height: 1.5;
}

.message-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.message-time {
  font-size: 12px;
  color: #999;
}

.unread-tag {
  padding: 2px 6px;
  background: #ff4d4f;
  color: white;
  border-radius: 2px;
  font-size: 12px;
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: #999;
}

.empty-state .svg-inline--fa {
  font-size: 40px;
  margin-bottom: 10px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.page-button {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: white;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.page-button:hover {
  color: #1890ff;
  border-color: #1890ff;
}

.page-button:disabled {
  color: #d9d9d9;
  cursor: not-allowed;
}

.page-info {
  font-size: 14px;
  color: #666;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .messages-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .message-tabs {
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 12px;
  }

  .message-content {
    flex-direction: column;
  }

  .message-icon {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
}
</style> 