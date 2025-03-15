<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '220px'" style="transition: width 0.3s; min-height: 850px !important" class="custom-aside">
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
          <el-sub-menu index="1">
            <template #title
              ><span
                ><el-icon><Box /></el-icon>成果管理</span
              ></template
            >
            <el-menu-item index="1-1"
              ><el-icon><Tickets /></el-icon>所有成果</el-menu-item
            >
            <el-menu-item index="1-2"
              ><el-icon><Money /></el-icon>知识产权</el-menu-item
            >
            <el-menu-item index="1-3"
              ><el-icon><Paperclip /></el-icon>诀窍</el-menu-item
            >
            <el-menu-item index="1-4"
              ><el-icon><DataAnalysis /></el-icon>标准</el-menu-item
            >
          </el-sub-menu>

          <el-menu-item index="2">
            <template #title
              ><el-icon><Tickets /></el-icon>成果转化</template
            >
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="navgation">
            <span class="position"> 当前位置：</span>
            <span>成果及成果转化 / </span>
            <template v-if="activeIndex === '1-1'">
              <span>成果管理/所有成果</span>
            </template>

            <template v-if="activeIndex === '1-2'">
              <span>成果管理/知识产权</span>
            </template>

            <template v-if="activeIndex === '1-3'">
              <span>成果管理/诀窍</span>
            </template>

            <template v-if="activeIndex === '1-4'">
              <span>成果管理/标准</span>
            </template>

            <template v-if="activeIndex === '2'">
              <span>成果转化</span>
            </template>
          </div>

          <template v-if="activeIndex === '1-1'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="成果名称" :label-position="itemLabelPosition">
                      <input v-model="resultName" placeholder="请输入成果名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="成果类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">成果时间</span>
                      <input type="month" v-model="sdate" placeholder="开始时间" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束时间" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary"
                        ><el-icon><Plus /></el-icon>新增</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="获得方式" :label-position="itemLabelPosition">
                      <el-cascader :options="options1" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="研发项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入研发项目名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="expenseDate" label="成果名称" width="150" />
              <el-table-column prop="expenseDate" label="成果编号" width="120" />
              <el-table-column prop="expenseDate" label="研发项目名称" width="150" />
              <el-table-column prop="expenseDate" label="成果类型" width="120" />
              <el-table-column prop="expenseDate" label="获得方式" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="150">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Edit /></el-icon>编辑</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>删除</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-2'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">授权日期</span>
                      <input type="month" v-model="sdate" placeholder="开始时间" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束时间" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="知识产权名称" :label-position="itemLabelPosition">
                      <input v-model="ipName" placeholder="知识产权名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="获得方式" :label-position="itemLabelPosition">
                      <el-cascader :options="options2" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary"
                        ><el-icon><Plus /></el-icon>新增</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="研发项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入研发项目名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="类别" :label-position="itemLabelPosition">
                      <el-cascader :options="options3" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="expenseDate" label="知识产权名称" width="120" />
              <el-table-column prop="expenseDate" label="知识产权编号" width="80" />
              <el-table-column prop="expenseDate" label="研发项目名称" width="120" />
              <el-table-column prop="expenseDate" label="类别" width="80" />
              <el-table-column prop="expenseDate" label="来源" width="80" />
              <el-table-column prop="expenseDate" label="状态" width="80" />
              <el-table-column prop="expenseDate" label="是否已用于高企申报" width="80" />
              <el-table-column prop="expenseDate" label="申请日期" width="100" />
              <el-table-column prop="expenseDate" label="授权日期" width="100" />
              <el-table-column fixed="operation" label="操作" min-width="150">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Edit /></el-icon>编辑</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>删除</el-button
                >
                <el-button type="primary">年费缴纳</el-button>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-3'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">诀窍获得时间</span>
                      <input type="month" v-model="sdate" placeholder="开始时间" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束时间" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="诀窍名称" :label-position="itemLabelPosition">
                      <input v-model="trickName" placeholder="诀窍名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="研发项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="研发项目名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-4'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">标准颁布时间</span>
                      <input type="month" v-model="sdate" placeholder="开始时间" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束时间" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="标准名称" :label-position="itemLabelPosition">
                      <input v-model="standardName" placeholder="标准名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="研发项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="研发项目名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '2'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="成果名称" :label-position="itemLabelPosition">
                      <input v-model="resultName" placeholder="请输入成果名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="研发项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入研发项目名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">转化时间</span>
                      <input type="month" v-model="sdate" placeholder="开始时间" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束时间" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary"
                        ><el-icon><Plus /></el-icon>新增</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="转化结果" :label-position="itemLabelPosition">
                      <el-cascader :options="options4" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="关联RD" :label-position="itemLabelPosition">
                      <input v-model="relatedRD" placeholder="请输入研发项目名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="关联IP" :label-position="itemLabelPosition">
                      <input v-model="relatedIP" placeholder="请输入关联IP" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="关联PS" :label-position="itemLabelPosition">
                      <input v-model="relatedPS" placeholder="请输入关联PS" style="width: 150px" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="expenseDate" label="成果转化名称" width="100" />
              <el-table-column prop="expenseDate" label="成果名称" width="100" />
              <el-table-column prop="expenseDate" label="成果来源" width="80" />
              <el-table-column prop="expenseDate" label="技术领域" width="80" />
              <el-table-column prop="expenseDate" label="转化形式" width="80" />
              <el-table-column prop="expenseDate" label="研发项目名称" width="100" />
              <el-table-column prop="expenseDate" label="关联RD" width="80" />
              <el-table-column prop="expenseDate" label="关联IP" width="80" />
              <el-table-column prop="expenseDate" label="关联PS" width="80" />
              <el-table-column prop="expenseDate" label="转化结果" width="80" />
              <el-table-column prop="expenseDate" label="佐证材料" width="80">
                <el-button type="primary">查看材料</el-button>
              </el-table-column>
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Edit /></el-icon>编辑</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>删除</el-button
                >
              </el-table-column>
            </el-table>
          </template>
        </el-header>

        <el-main>
          <template v-if="activeIndex === '1-1'"> </template>

          <template v-if="activeIndex === '1-2'"> </template>

          <template v-if="activeIndex === '1-3'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="projectName" label="年份" width="100" />
              <el-table-column prop="projectName" label="项目名称" width="120" />
              <el-table-column prop="projectName" label="项目编号" width="120" />
              <el-table-column prop="projectName" label="诀窍名称" width="120" />
              <el-table-column prop="projectName" label="诀窍编号" width="100" />
              <el-table-column prop="projectName" label="诀窍获得时间" width="120" />
              <el-table-column prop="projectName" label="诀窍获得方式" width="120" />
              <el-table-column prop="projectName" label="操作" width="100" />
            </el-table>
          </template>

          <template v-if="activeIndex === '1-4'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="projectName" label="成果名称" width="120" />
              <el-table-column prop="projectName" label="成果编号" width="120" />
              <el-table-column prop="projectName" label="研发项目名称" width="120" />
              <el-table-column prop="projectName" label="标准编号" width="100" />
              <el-table-column prop="projectName" label="标准颁布时间" width="120" />
              <el-table-column prop="projectName" label="标准级别" width="100" />
              <el-table-column prop="projectName" label="获得方式" width="100" />
              <el-table-column prop="projectName" label="操作" width="100" />
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./results.component.ts"></script>

<style scoped>
.common-layout,
.el-container {
  min-height: 850px; /* 同步设置避免布局塌陷 */
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

.search2 {
  width: 90%;
  height: 180px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 20px 20px 30px 50px;
  float: left;
}
</style>
