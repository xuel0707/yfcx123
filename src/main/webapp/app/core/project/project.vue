<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="navgation">
          <span class="position"> 当前位置：</span>
          <span>项目管理</span>
        </div>
        <div class="search">
          <el-form :model="form" label-width="auto">
            <el-row :gutter="20">
              <el-col :span="4">
                <el-form-item>
                  <span style="font-size: 14px">项目名称</span>
                  <input v-model="projectName" placeholder="请输入项目名称" style="width: 110px" />
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="项目来源" :label-position="itemLabelPosition">
                  <el-cascader :options="options" />
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="项目状态" :label-position="itemLabelPosition">
                  <el-cascader :options="options1" />
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item>
                  <span style="font-size: 14px">项目负责人</span>
                  <input v-model="projectLeader" placeholder="请输入项目负责人" style="width: 110px" />
                </el-form-item>
              </el-col>

              <el-col :span="8">
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
                <el-form-item>
                  <span style="font-size: 14px">项目经理</span>
                  <input v-model="projectManager" placeholder="请输入项目经理" style="width: 120px" />
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item>
                  <span style="font-size: 14px">研发经理</span>
                  <input v-model="developmentManager" placeholder="请输入研发经理" style="width: 120px" />
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item>
                  <span style="font-size: 14px">项目预算</span>
                  <input v-model="projectBudgetMin" placeholder="大于" style="width: 150px" />
                  <span style="font-size: 14px">-</span>
                  <input v-model="projectBudgetMax" placeholder="小于" style="width: 150px" />
                </el-form-item>
              </el-col>

              <el-col :span="4"> </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item>
                  <span style="font-size: 14px">项目开始时间</span>
                  <input type="month" v-model="s1date" placeholder="发起日期" :min="minDate" :max="maxDate" />
                  <span style="font-size: 14px">至</span>
                  <input type="month" v-model="s2date" placeholder="结束日期" :min="minDate" :max="maxDate" />
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item>
                  <span style="font-size: 14px">项目结束时间</span>
                  <input type="month" v-model="e1date" placeholder="发起日期" :min="minDate" :max="maxDate" />
                  <span style="font-size: 14px">至</span>
                  <input type="month" v-model="e2date" placeholder="结束日期" :min="minDate" :max="maxDate" />
                </el-form-item>
              </el-col>
              <el-col :span="12"> </el-col>
            </el-row>
          </el-form>
        </div>

        <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
          <el-table-column fixed prop="projectId" label="序号" width="80" />
          <el-table-column prop="projectNo" label="项目编号" width="100" />
          <el-table-column prop="projectName" label="项目名称" width="120" />
          <el-table-column prop="projectSdate" label="开始时间" width="120" />
          <el-table-column prop="projectEdate" label="结束时间" width="120" />
          <el-table-column prop="projectBudget" label="项目预算（万元）" width="100" />
          <el-table-column prop="projectExpenditure" label="项目累计支出（万元）" width="100" />
          <el-table-column prop="budgetCompletionRate" label="预算完成率" width="100" />
          <el-table-column prop="projectLeader" label="负责人" width="120" />
          <el-table-column prop="projectStatus" label="项目状态" width="120" />
          <el-table-column prop="projectReviewStatus" label="审批状态" width="120" />
          <el-table-column fixed="operation" label="操作" min-width="120">
            <template #default>
              <el-button link type="primary" size="small">查看</el-button>
              <el-button link type="primary" size="small">编辑</el-button>
              <el-button link type="primary" size="small">流程</el-button>
              <el-button link type="primary" size="small">工耗</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-header>

      <el-main> </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" src="./project.component.ts"></script>

<style scoped lang="scss">
.common-layout,
.el-container {
  min-height: 850px; /* 同步设置避免布局塌陷 */
}

.navgation {
  font-size: 14px;
  .position {
    font-weight: bold;
  }
}

.search {
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
