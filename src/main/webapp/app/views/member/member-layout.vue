<template>
  <div class="member-layout">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active">会员中心</li>
        </ol>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <div class="container">
      <div class="member-content">
        <!-- 左侧菜单 -->
        <div class="member-menu">
          <!-- 用户信息 -->
          <div class="user-info">
            <div class="avatar">
              <img :src="userInfo.avatar || '/content/images/default-avatar.png'" alt="avatar">
            </div>
            <div class="info">
              <div class="username">{{ userInfo.username }}</div>
              <div class="member-type">
                <span class="badge">{{ userInfo.memberType }}</span>
                <span class="expire-date">有效期至：{{ userInfo.expireDate }}</span>
              </div>
            </div>
          </div>

          <!-- 菜单列表 -->
          <ul class="menu-list">
            <li>
              <router-link to="/member" exact active-class="active">
                <font-awesome-icon icon="home" />
                <span>控制台</span>
              </router-link>
            </li>
            <li>
              <router-link to="/member/enterprise" active-class="active">
                <font-awesome-icon icon="building" />
                <span>企业档案</span>
              </router-link>
            </li>
            <li>
              <router-link to="/member/match" active-class="active">
                <font-awesome-icon icon="random" />
                <span>匹配记录</span>
              </router-link>
            </li>
            <li>
              <router-link to="/member/favorites" active-class="active">
                <font-awesome-icon icon="star" />
                <span>收藏夹</span>
              </router-link>
            </li>
            <li>
              <router-link to="/member/subscriptions" active-class="active">
                <font-awesome-icon icon="bell" />
                <span>订阅管理</span>
              </router-link>
            </li>
            <li>
              <router-link to="/member/messages" active-class="active">
                <font-awesome-icon icon="envelope" />
                <span>消息中心</span>
                <span v-if="unreadCount > 0" class="unread-badge">{{ unreadCount }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/member/points" active-class="active">
                <font-awesome-icon icon="coins" />
                <span>积分中心</span>
              </router-link>
            </li>
            <li>
              <router-link to="/member/settings" active-class="active">
                <font-awesome-icon icon="cog" />
                <span>账号设置</span>
              </router-link>
            </li>
          </ul>

          <!-- 会员升级 -->
          <div class="upgrade-card">
            <div class="upgrade-title">升级会员</div>
            <div class="upgrade-desc">解锁更多高级功能</div>
            <router-link to="/member/upgrade" class="upgrade-button">
              立即升级
              <font-awesome-icon icon="arrow-right" />
            </router-link>
          </div>
        </div>

        <!-- 右侧内容 -->
        <div class="member-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { memberService } from '@/services/member.service';

export default defineComponent({
  name: 'MemberLayout',
  setup() {
    // 用户信息
    const userInfo = ref({
      username: '',
      avatar: '',
      memberType: '',
      expireDate: ''
    });

    // 未读消息数
    const unreadCount = ref(0);

    // 初始化数据
    const initializeData = async () => {
      try {
        // 获取用户信息
        const profile = await memberService.getProfile();
        userInfo.value = profile;

        // 获取未读消息数
        const messages = await memberService.getUnreadMessages();
        unreadCount.value = messages.length;
      } catch (error) {
        console.error('Failed to load member data:', error);
      }
    };

    onMounted(() => {
      initializeData();
    });

    return {
      userInfo,
      unreadCount
    };
  }
});
</script>

<style scoped>
.member-layout {
  background: #f0f2f5;
  min-height: calc(100vh - 153px);
}

.breadcrumb-nav {
  background: white;
  padding: 12px 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.member-content {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;
  margin: 20px 0;
}

.member-menu {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.user-info {
  padding: 24px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.info .username {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.member-type {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.badge {
  background: #e6f7ff;
  color: #1890ff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.expire-date {
  font-size: 12px;
  color: #999;
}

.menu-list {
  list-style: none;
  padding: 12px 0;
  margin: 0;
}

.menu-list li a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
}

.menu-list li a:hover,
.menu-list li a.active {
  color: #1890ff;
  background: #e6f7ff;
}

.unread-badge {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  background: #ff4d4f;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
}

.upgrade-card {
  margin: 12px 24px 24px;
  padding: 20px;
  background: #f6ffed;
  border-radius: 8px;
  text-align: center;
}

.upgrade-title {
  font-size: 16px;
  font-weight: 500;
  color: #52c41a;
  margin-bottom: 8px;
}

.upgrade-desc {
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
}

.upgrade-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: #52c41a;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
}

.upgrade-button:hover {
  background: #73d13d;
}

.member-main {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  padding: 24px;
  min-height: 600px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .member-content {
    grid-template-columns: 1fr;
  }

  .member-menu {
    margin-bottom: 20px;
  }
}
</style> 