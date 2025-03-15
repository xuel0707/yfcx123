<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '240px'" style="transition: width 0.3s; min-height: 850px !important" class="custom-aside">
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
                ><el-icon><DataAnalysis /></el-icon>分析统计</span
              ></template
            >
            <el-menu-item index="1-1"
              ><el-icon><Tickets /></el-icon>人员情况统计表</el-menu-item
            >
            <el-menu-item index="1-2"
              ><el-icon><Money /></el-icon>项目情况统计表</el-menu-item
            >
            <el-menu-item index="1-3"
              ><el-icon><Paperclip /></el-icon>成果情况统计表</el-menu-item
            >
            <el-menu-item index="1-4"
              ><el-icon><DataAnalysis /></el-icon>财务情况统计表</el-menu-item
            >
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title
              ><span
                ><el-icon><Box /></el-icon>政府相关报表</span
              ></template
            >
            <el-menu-item index="2-1"
              ><el-icon><Tickets /></el-icon>企业研发项目情况</el-menu-item
            >
            <el-menu-item index="2-2"
              ><el-icon><Money /></el-icon>企业研发活动及相关情况</el-menu-item
            >
          </el-sub-menu>

          <el-menu-item index="3">
            <template #title
              ><el-icon><Tickets /></el-icon>资料下载与导出</template
            >
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="navgation">
            <span class="position"> 当前位置：</span>
            <span>报表查询 / </span>
            <template v-if="activeIndex === '1-1'">
              <span>分析统计/人员情况统计表</span>
            </template>

            <template v-if="activeIndex === '1-2'">
              <span>分析统计/项目情况统计表</span>
            </template>

            <template v-if="activeIndex === '1-3'">
              <span>分析统计/成果情况统计表</span>
            </template>

            <template v-if="activeIndex === '1-4'">
              <span>分析统计/财务情况统计表</span>
            </template>

            <template v-if="activeIndex === '2-1'">
              <span>政府相关报表/企业研发项目情况</span>
            </template>

            <template v-if="activeIndex === '2-2'">
              <span>政府相关报表/企业研发活动及相关情况</span>
            </template>

            <template v-if="activeIndex === '3'">
              <span>一键下载</span>
            </template>
          </div>

          <template v-if="activeIndex === '1-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="年份" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="syear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
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
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="14">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="syear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                      <span style="font-size: 14px">至</span>
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="eyear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="项目状态" :label-position="itemLabelPosition">
                      <el-cascader :options="options" />
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
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-3'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="14">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="syear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                      <span style="font-size: 14px">至</span>
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="eyear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4"> </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary">导出</el-button>
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
                  <el-col :span="14">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="syear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                      <span style="font-size: 14px">至</span>
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="eyear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4"> </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '2-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="syear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="项目阶段" :label-position="itemLabelPosition">
                      <el-cascader :options="options" placeholder="请选择" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8"> </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '2-2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="年份" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="syear" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="14"> </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '3'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="项目开始日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="项目开始日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="项目结束日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="edate" placeholder="项目结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="2"> </el-col>

                  <el-col :span="10">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary">高企资料</el-button>
                      <el-button type="primary">扣除资料</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入项目名称" style="width: 120px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="项目状态" :label-position="itemLabelPosition">
                      <el-cascader :options="options2" placeholder="请选择" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="10"> </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="projectName" label="项目名称" width="150" />
              <el-table-column prop="projectName" label="项目编号" width="120" />
              <el-table-column prop="projectName" label="项目来源" width="120" />
              <el-table-column prop="projectName" label="负责人" width="120" />
              <el-table-column prop="projectName" label="开始时间" width="120" />
              <el-table-column prop="projectName" label="结束时间" width="120" />
              <el-table-column prop="projectName" label="项目状态" width="120" />
              <el-table-column prop="projectName" label="创建时间" width="120" />
            </el-table>
          </template>
        </el-header>

        <el-main>
          <template v-if="activeIndex === '1-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="projectName" label="工号" width="60" />
              <el-table-column prop="projectName" label="部门" width="60" />
              <el-table-column prop="projectName" label="姓名" width="60" />
              <el-table-column prop="projectName" label="身份证" width="60" />
              <el-table-column prop="projectName" label="入职时间" width="60" />
              <el-table-column prop="projectName" label="离职时间" width="60" />
              <el-table-column prop="projectName" label="专业" width="60" />
              <el-table-column prop="projectName" label="职称" width="60" />
              <el-table-column prop="projectName" label="毕业院校" width="60" />
              <el-table-column prop="projectName" label="最高学历" width="60" />
              <el-table-column prop="projectName" label="是否签署劳动合同" width="60" />
              <el-table-column prop="projectName" label="是否缴纳社会保险" width="60" />
              <el-table-column prop="projectName" label="是否申报个税" width="60" />
              <el-table-column prop="projectName" label="是否科技人员" width="60" />
              <el-table-column prop="projectName" label="属性" width="60" />
              <el-table-column prop="projectName" label="是否在职183天" width="60" />
            </el-table>
          </template>

          <template v-if="activeIndex === '1-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="projectName" label="项目编号" width="80" />
              <el-table-column prop="projectName" label="项目名称" width="100" />
              <el-table-column prop="projectName" label="技术领域" width="80" />
              <el-table-column prop="projectName" label="项目来源" width="80" />
              <el-table-column prop="projectName" label="项目起止日期" width="100" />
              <el-table-column prop="projectName" label="项目预算（万元）" width="100" />
              <el-table-column prop="projectName" label="项目本期累计支出（万元）" width="100" />
              <el-table-column prop="projectName" label="预算完成率" width="80" />
              <el-table-column prop="projectName" label="项目状态" width="80" />
              <el-table-column prop="projectName" label="对应专利编号" width="100" />
              <el-table-column prop="projectName" label="对应专利名称" width="100" />
            </el-table>
          </template>

          <template v-if="activeIndex === '1-3'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="projectName" label="成果编号" width="150" />
              <el-table-column prop="projectName" label="成果名称" width="150" />
              <el-table-column prop="projectName" label="类别" width="100" />
              <el-table-column prop="projectName" label="获得日期" width="150" />
              <el-table-column prop="projectName" label="获得方式" width="100" />
              <el-table-column prop="projectName" label="项目名称" width="200" />
            </el-table>
          </template>

          <template v-if="activeIndex === '1-4'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="projectName" label="项目编号" width="80" />
              <el-table-column prop="projectName" label="项目名称" width="100" />
              <el-table-column prop="projectName" label="内部研究开发费用投入额" width="60" />
              <el-table-column prop="projectName" label="人员人工费用" width="60" />
              <el-table-column prop="projectName" label="直接投入费用" width="60" />
              <el-table-column prop="projectName" label="折旧费用与长期费用摊销" width="60" />
              <el-table-column prop="projectName" label="无形资产摊销费用" width="60" />
              <el-table-column prop="projectName" label="设计费用" width="60" />
              <el-table-column prop="projectName" label="装备调试费用与试验费用" width="60" />
              <el-table-column prop="projectName" label="其他费用" width="60" />
              <el-table-column prop="projectName" label="委托外部研究开发投入额（按80%计算）" width="80" />
              <el-table-column prop="projectName" label="其中：境内的外部研究开发投入额（按80%计算）" width="80" />
              <el-table-column prop="projectName" label="研究开发投入额（内、外部）小计" width="60" />
              <el-table-column prop="projectName" label="项目状态" width="60" />
            </el-table>
          </template>

          <template v-if="activeIndex === '2-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="projectName" label="项目名称" width="80" />
              <el-table-column prop="projectName" label="项目来源" width="60" />
              <el-table-column prop="projectName" label="项目开展形式" width="80" />
              <el-table-column prop="projectName" label="项目当年成果形式" width="80" />
              <el-table-column prop="projectName" label="项目技术经济目标" width="80" />
              <el-table-column prop="projectName" label="项目起始日期" width="80" />
              <el-table-column prop="projectName" label="项目完成日期" width="80" />
              <el-table-column prop="projectName" label="跨年项目当年所处主要进展阶段" width="120" />
              <el-table-column prop="projectName" label="项目研究开发人员（人）" width="100" />
              <el-table-column prop="projectName" label="项目人员实际工作时间（人月）" width="80" />
              <el-table-column prop="projectName" label="项目经费支出（千元）" width="80" />
              <el-table-column prop="projectName" label="政府资金（万元）" width="80" />
            </el-table>
          </template>

          <template v-if="activeIndex === '2-2'">
            <el-table :data="tableData_2_2" style="width: 90%; min-height: 350px" class="min-height-table" border>
              <el-table-column prop="metricName" label="指标名称" width="300" header-align="center" align="center" />
              <el-table-column prop="measurementUnit" label="计量单位" width="100" header-align="center" align="center" />
              <el-table-column prop="amount" label="金额" width="100" header-align="center" align="center" />
              <el-table-column prop="metricName2" label="指标名称" width="300" header-align="center" align="center" />
              <el-table-column prop="measurementUnit2" label="计量单位" width="100" header-align="center" align="center" />
              <el-table-column prop="amount2" label="金额" width="100" header-align="center" align="center" />
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./export.component.ts"></script>

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
  height: 150px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 20px 20px 30px 50px;
  float: left;
}

/* 调整边框颜色（示例） */
.el-table--border {
  border-color: #ebeef5;
}
.el-table--border th,
.el-table--border td {
  border-color: #ebeef5;
}
</style>
