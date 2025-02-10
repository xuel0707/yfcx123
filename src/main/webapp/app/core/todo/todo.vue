<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '220px'" style="transition: width 0.3s; min-height: 450px" class="custom-aside">
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
            <template #title>
              <el-icon><Promotion /></el-icon>待处理
            </template>
          </el-menu-item>

          <el-menu-item index="2">
            <template #title>
              <el-icon><Present /></el-icon>办理中
            </template>
          </el-menu-item>

          <el-menu-item index="3">
            <template #title>
              <el-icon><Finished /></el-icon>已办结
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div class="navgation">
            <span class="position"> 当前位置：</span>
            <span>待办事项 / </span>
            <template v-if="activeIndex === '1'">
              <span>待处理</span>
              <div class="search">
                <el-form :model="form" label-width="auto">
                  <el-row :gutter="20">
                    <el-col :span="4">
                      <el-form-item>
                        <select style="width: 180px; height: 38px">
                          <option>待办事项</option>
                          <option>项目立项审批</option>
                          <option>项目立项完成审批</option>
                          <option>项目实施完成审批</option>
                          <option>项目结题完成审批</option>
                          <option>项目变更审批</option>
                          <option>成果鉴定审批</option>
                          <option>项目中止审批</option>
                          <option>考勤工时审批</option>
                          <option>设备工时审批</option>
                          <option>材料消耗审批</option>
                          <option>材料费用审批</option>
                          <option>高品指引确认审批</option>
                          <option>高服指引确认审批</option>
                          <option>薪资管理审批</option>
                          <option>燃动费审批</option>
                          <option>委外费用审批</option>
                          <option>费用报销审批</option>
                          <option>折旧与长期摊销费用审批</option>
                          <option>无形资产审批</option>
                          <option>会计凭证审批</option>
                        </select>
                      </el-form-item>
                    </el-col>

                    <el-col :span="8">
                      <el-form-item>
                        <span style="font-size: 14px">发起人</span>
                        <input v-model="invokePerson" placeholder="请选择发起人" style="width: 150px" />
                      </el-form-item>
                    </el-col>

                    <el-col :span="8">
                      <el-form-item>
                        <span style="font-size: 14px">发起日期</span>
                        <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      </el-form-item>
                    </el-col>

                    <el-col :span="2">
                      <el-form-item>
                        <el-button type="primary"
                          ><el-icon><Search /></el-icon>查询</el-button
                        >
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </template>

            <template v-if="activeIndex === '2'">
              <span>办理中</span>
              <div class="search">
                <el-form :model="form" label-width="auto">
                  <el-row :gutter="20">
                    <el-col :span="4">
                      <el-form-item>
                        <select style="width: 180px; height: 38px">
                          <option>待办事项</option>
                          <option>项目立项审批</option>
                          <option>项目立项完成审批</option>
                          <option>项目实施完成审批</option>
                          <option>项目结题完成审批</option>
                          <option>项目变更审批</option>
                          <option>成果鉴定审批</option>
                          <option>项目中止审批</option>
                          <option>考勤工时审批</option>
                          <option>设备工时审批</option>
                          <option>材料消耗审批</option>
                          <option>材料费用审批</option>
                          <option>高品指引确认审批</option>
                          <option>高服指引确认审批</option>
                          <option>薪资管理审批</option>
                          <option>燃动费审批</option>
                          <option>委外费用审批</option>
                          <option>费用报销审批</option>
                          <option>折旧与长期摊销费用审批</option>
                          <option>无形资产审批</option>
                          <option>会计凭证审批</option>
                        </select>
                      </el-form-item>
                    </el-col>

                    <el-col :span="16">
                      <el-form-item>
                        <span style="font-size: 14px">提交日期</span>
                        <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                        <span style="font-size: 14px">至</span>
                        <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                      </el-form-item>
                    </el-col>

                    <el-col :span="4">
                      <el-form-item>
                        <el-button type="primary"
                          ><el-icon><Search /></el-icon>查询</el-button
                        >
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </template>

            <template v-if="activeIndex === '3'">
              <span>已办结</span>
              <div class="search">
                <el-form :model="form" label-width="auto">
                  <el-row :gutter="20">
                    <el-col :span="4">
                      <el-form-item>
                        <select style="width: 180px; height: 38px">
                          <option>待办事项</option>
                          <option>项目立项审批</option>
                          <option>项目立项完成审批</option>
                          <option>项目实施完成审批</option>
                          <option>项目结题完成审批</option>
                          <option>项目变更审批</option>
                          <option>成果鉴定审批</option>
                          <option>项目中止审批</option>
                          <option>考勤工时审批</option>
                          <option>设备工时审批</option>
                          <option>材料消耗审批</option>
                          <option>材料费用审批</option>
                          <option>高品指引确认审批</option>
                          <option>高服指引确认审批</option>
                          <option>薪资管理审批</option>
                          <option>燃动费审批</option>
                          <option>委外费用审批</option>
                          <option>费用报销审批</option>
                          <option>折旧与长期摊销费用审批</option>
                          <option>无形资产审批</option>
                          <option>会计凭证审批</option>
                        </select>
                      </el-form-item>
                    </el-col>

                    <el-col :span="16">
                      <el-form-item>
                        <span style="font-size: 14px">归档日期</span>
                        <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                        <span style="font-size: 14px">至</span>
                        <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                      </el-form-item>
                    </el-col>

                    <el-col :span="4">
                      <el-form-item>
                        <el-button type="primary"
                          ><el-icon><Search /></el-icon>查询</el-button
                        >
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </template>
          </div>
        </el-header>

        <el-main>
          <template v-if="activeIndex === '1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="name" label="待办标题" width="200" />
              <el-table-column prop="tpye" label="待办类型" width="120" />
              <el-table-column prop="node" label="待办节点" width="120" />
              <el-table-column prop="invokePerson" label="发起人" width="120" />
              <el-table-column prop="modifyPerson" label="待处理人" width="120" />
              <el-table-column prop="date" label="提交日期" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <template #default>
                  <el-button link type="primary" size="small" @click="handleClick"> 处理 </el-button>
                  <el-button link type="primary" size="small">流程</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="name" label="待办标题" width="200" />
              <el-table-column prop="tpye" label="待办类型" width="120" />
              <el-table-column prop="node" label="待办节点" width="120" />
              <el-table-column prop="invokePerson" label="发起人" width="120" />
              <el-table-column prop="modifyPerson" label="待处理人" width="120" />
              <el-table-column prop="date" label="提交日期" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <template #default>
                  <el-button link type="primary" size="small" @click="handleClick"> 查看 </el-button>
                  <el-button link type="primary" size="small">流程</el-button>
                  <el-button link type="primary" size="small">撤回</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '3'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="name" label="待办标题" width="200" />
              <el-table-column prop="tpye" label="待办类型" width="120" />
              <el-table-column prop="node" label="待办节点" width="120" />
              <el-table-column prop="invokePerson" label="发起人" width="120" />
              <el-table-column prop="date" label="提交日期" width="120" />
              <el-table-column prop="modifyPerson" label="归档人" width="120" />
              <el-table-column prop="fdate" label="提交日期" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <template #default>
                  <el-button link type="primary" size="small" @click="handleClick"> 查看 </el-button>
                  <el-button link type="primary" size="small">流程</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./todo.component.ts"></script>

<style scoped lang="scss">
.common-layout,
.el-container {
  min-height: 450px; /* 同步设置避免布局塌陷 */
}

/* 侧边栏内部布局优化 */
.custom-aside {
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

.el-dropdown-link {
  width: 160px;
}

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 深度穿透 Element 内部样式 */
:deep(.min-height-table) {
  /* 设置表格体最小高度 */
  .el-table__body-wrapper {
    min-height: calc(350px - 40px) !important; /* 40px 是表头高度 */
  }
}
</style>
