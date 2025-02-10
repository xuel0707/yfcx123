<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '220px'" class="custom-aside">
        <!-- 折叠按钮 -->
        <div class="toggle-button" @click="toggleCollapse">
          <!-- 左侧文字+图标 -->
          <span v-if="!isCollapse" class="left-content">
            <el-icon><Menu /></el-icon>
            功能菜单
          </span>

          <!-- 右侧折叠图标 -->
          <div class="right-icons">
            <el-icon v-if="isCollapse"><Expand /></el-icon>
            <el-icon v-else><Fold /></el-icon>
          </div>
        </div>
        <!-- 菜单组件 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical"
          :collapse="isCollapse"
          :collapse-transition="true"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <template #title
              ><el-icon><User /></el-icon>账号管理</template
            >
          </el-menu-item>

          <el-menu-item index="2">
            <template #title
              ><el-icon><Tickets /></el-icon>角色管理</template
            >
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="navgation">
            <span class="position"> 当前位置：</span>
            <span>运营管理 / </span>
            <template v-if="activeIndex === '1'">
              <span>账号管理</span>
            </template>

            <template v-if="activeIndex === '2'">
              <span>角色管理</span>
            </template>
          </div>

          <template v-if="activeIndex === '1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="账号" :label-position="itemLabelPosition">
                      <input v-model="account" placeholder="账号" style="width: 120px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="姓名" :label-position="itemLabelPosition">
                      <input v-model="name" placeholder="姓名" style="width: 120px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="手机" :label-position="itemLabelPosition">
                      <input v-model="mobilePhone" placeholder="手机" style="width: 120px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="状态" :label-position="itemLabelPosition">
                      <el-cascader :options="options" placeholder="请选择" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary"
                        ><el-icon><Plus /></el-icon>新增</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="角色名称" :label-position="itemLabelPosition">
                      <input v-model="account" placeholder="请输入角色名称" style="width: 200px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="角色编码" :label-position="itemLabelPosition">
                      <input v-model="name" placeholder="请输入角色编码" style="width: 200px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6"> </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary"
                        ><el-icon><Plus /></el-icon>新增</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>
        </el-header>
        <el-main>
          <template v-if="activeIndex === '1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="projectName" label="登录账号" width="200" />
              <el-table-column prop="projectName" label="姓名" width="100" />
              <el-table-column prop="projectName" label="手机号" width="100" />
              <el-table-column prop="projectName" label="状态" width="100" />
              <el-table-column prop="projectName" label="角色" width="100" />
              <el-table-column label="操作" min-width="100">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Edit /></el-icon>编辑</el-button
                >
                <el-button type="primary">重置密码</el-button>
                <el-button type="primary">绑定角色</el-button>
                <el-button type="primary">冻结</el-button>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '2'">
            <el-table :data="table_2" style="width: 90%; min-height: 350px" class="min-height-table" border>
              <el-table-column prop="roleName" label="角色名称" width="250" header-align="center" align="center" />
              <el-table-column prop="roleCode" label="角色编码" width="250" header-align="center" align="center" />
              <el-table-column prop="remark" label="备注" width="250" header-align="center" align="center" />
              <el-table-column label="操作" min-width="250" header-align="center" align="center">
                <template #default="scope">
                  <el-button type="primary" size="small" @click="handleEdit(scope.row)"
                    ><el-icon><Edit /></el-icon> 编辑</el-button
                  >
                  <el-button type="primary" size="small" @click="handleDelete(scope.row)"
                    ><el-icon><Delete /></el-icon> 删除</el-button
                  >
                  <el-button type="primary" size="small" @click="handleAuthorize(scope.row)">菜单授权</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./manage.component.ts"></script>

<style scoped>
.common-layout,
.el-container {
  min-height: 850px; /* 同步设置避免布局塌陷 */
}

.el-aside {
  min-height: 850px !important; /* 确保侧边栏最小高度为850px */
}

/* 侧边栏内部布局优化 */
.custom-aside {
  height: 850px;
  display: flex;
  flex-direction: column;

  /* 折叠按钮区域固定高度 */
  .toggle-button {
    height: 48px;
    flex-shrink: 0; /* 禁止收缩 */
  }

  /* 菜单区域自适应剩余高度 */
  :deep(.el-menu-vertical) {
    flex: 1;
    overflow-y: auto; /* 内容过多时滚动 */

    /* 菜单项高度统一 */
    .el-menu-item {
      height: 48px;
      line-height: 48px;
    }
  }
}

.toggle-button {
  background-color: #ea7c07;
  color: #fff;
  display: flex;
  justify-content: space-between; /* 关键属性 */
  align-items: center;
  padding: 0 12px; /* 增加内边距 */

  /* 左侧内容强制靠左 */
  .left-content {
    display: inline-flex;
    align-items: center;
    gap: 8px; /* 图标与文字间距 */
    margin-right: auto; /* 关键：挤向左侧 */
  }

  /* 右侧图标始终靠右 */
  .right-icons {
    margin-left: 12px; /* 与左侧保持间距 */
  }
}

.navgation {
  font-size: 14px;
  .position {
    font-weight: bold;
  }
}

.search {
  width: 90%;
  height: 80px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 20px 20px 30px 50px;
  float: left;
}
</style>
