<template>
  <el-row class="navbar" :gutter="10">
    <el-col :span="2">
      <el-link :underline="false" href="/home">
        <div class="logo">
          <span class="logo-img"></span>
        </div>
      </el-link>
    </el-col>
    <el-col :span="20" class="right-info">
      <el-dropdown class="avatar-dropdown" trigger="click">
        <span class="el-dropdown-link pointer">
          <el-avatar src="/content/images/avatar.73e91683.png" />
          <span>吴佳</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>我的企业</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-divider direction="vertical" />
      <span class="font-14">企业管理员</span>
      <span class="item">
        <el-icon><Setting /></el-icon>
        界面设置
      </span>
      <el-divider direction="vertical" />
      <el-link :underline="false" href="/">
        <span class="item logout">
          <el-icon><SwitchButton /></el-icon>
          退出
        </span>
      </el-link>

      <span class="item">
        <el-badge :value="4" class="item">
          <el-icon><Bell /></el-icon>
          通知消息
        </el-badge>
      </span>
    </el-col>
  </el-row>
</template>

<script lang="ts" src="./jhi-navbar.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #ea7c07;
  height: 60px !important;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 0;
  color: #fff;
  font-size: 14px;
}

.logo {
  display: flex;
  align-items: center;
  .logo-img {
    width: 106px;
    height: 46px;
    background-image: url('/content/images/logo-jhipster.png');
    background-size: cover;
  }
  margin-left: 60px;
}

.right-info {
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  height: 40px !important;
  margin-right: 100px;
}

.avatar-dropdown {
  margin-right: 5px;
  .el-dropdown-link {
    display: inline-flex;
    align-items: center;
    color: #fff;
    .el-avatar {
      margin-right: 10px;
    }
  }

  .el-avatar {
    width: 30px !important;
    height: 30px !important;
  }
}

.avatar-dropdown .el-dropdown-menu {
  background: #fff;
  border-radius: 4px;
  min-width: 120px;
}

.item {
  margin-left: 10px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.item:hover {
  color: #f5f7fa;
}

.logout {
  color: #fff;
}

.logout:hover {
  color: #0e7ded;
}
</style>
