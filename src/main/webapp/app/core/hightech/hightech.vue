<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '260px'" style="transition: width 0.3s; min-height: 850px !important" class="custom-aside">
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
              ><el-icon><Tickets /></el-icon>高新技术产品(服务)</template
            >
          </el-menu-item>

          <el-sub-menu index="2">
            <template #title
              ><span
                ><el-icon><Box /></el-icon>高新技术产品(服务)分类</span
              ></template
            >
            <el-menu-item index="2-1"
              ><el-icon><Tickets /></el-icon>产品收入明细</el-menu-item
            >
            <el-menu-item index="2-2"
              ><el-icon><Money /></el-icon>服务收入明细</el-menu-item
            >
            <el-menu-item index="2-3"
              ><el-icon><Paperclip /></el-icon>高品分类指引确认</el-menu-item
            >
            <el-menu-item index="2-4"
              ><el-icon><DataAnalysis /></el-icon>高服分类指引确认</el-menu-item
            >
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title
              ><span
                ><el-icon><House /></el-icon>高新技术产品(服务)收入查询</span
              ></template
            >
            <el-menu-item index="3-1"
              ><el-icon><Files /></el-icon>高品收入汇总查询</el-menu-item
            >
            <el-menu-item index="3-2"
              ><el-icon><Coin /></el-icon>高服收入汇总查询</el-menu-item
            >
            <el-menu-item index="3-3"
              ><el-icon><Tickets /></el-icon>高品收入明细查询</el-menu-item
            >
            <el-menu-item index="3-4"
              ><el-icon><User /></el-icon>高服收入明细查询</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="navgation">
            <span class="position"> 当前位置：</span>
            <span>高新技术产品(服务)及收入 / </span>
            <template v-if="activeIndex === '1'">
              <span>高新技术产品(服务)</span>
            </template>

            <template v-if="activeIndex === '2-1'">
              <span>高新技术产品(服务)分类/产品收入明细</span>
            </template>

            <template v-if="activeIndex === '2-2'">
              <span>高新技术产品(服务)分类/服务收入明细</span>
            </template>

            <template v-if="activeIndex === '2-3'">
              <span>高新技术产品(服务)分类/高品分类指引确认</span>
            </template>

            <template v-if="activeIndex === '2-4'">
              <span>高新技术产品(服务)分类/高服分类指引确认</span>
            </template>

            <template v-if="activeIndex === '3-1'">
              <span>高新技术产品(服务)收入查询/高品收入汇总查询</span>
            </template>

            <template v-if="activeIndex === '3-2'">
              <span>高新技术产品(服务)收入查询/高服收入汇总查询</span>
            </template>

            <template v-if="activeIndex === '3-3'">
              <span>高新技术产品(服务)收入查询/高品收入明细查询</span>
            </template>

            <template v-if="activeIndex === '3-4'">
              <span>高新技术产品(服务)收入查询/高服收入明细查询</span>
            </template>
          </div>

          <template v-if="activeIndex === '1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="高品(服务)编号" :label-position="itemLabelPosition">
                      <input v-model="highQualityServiceId" placeholder="高品(服务)编号" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="高品(服务)名称" :label-position="itemLabelPosition">
                      <input v-model="highQualityServiceName" placeholder="高品(服务)名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="形成年度" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="year" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
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
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '2-1'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="产品名称" :label-position="itemLabelPosition">
                      <input v-model="productName" placeholder="产品名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="凭证号" :label-position="itemLabelPosition">
                      <input v-model="credentialNo" placeholder="凭证号" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="年度" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="year" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="客户名称" :label-position="itemLabelPosition">
                      <input v-model="clientName" placeholder="客户名称" style="width: 100px" />
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
                  <el-col :span="16">
                    <el-form-item>
                      <span style="font-size: 14px">凭证日期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="year" label="年度" width="100" />
              <el-table-column prop="projectName" label="产品名称" width="100" />
              <el-table-column prop="documentDate" label="凭证日期" width="100" />
              <el-table-column prop="documentNo" label="凭证号" width="100" />
              <el-table-column prop="documentTotal" label="客户名称" width="100" />
              <el-table-column prop="documentSummary" label="单据号" width="100" />
              <el-table-column prop="additionDeductionAmount" label="产品型号" width="100" />
              <el-table-column prop="projectAmount" label="金额" width="100" />
              <el-table-column fixed="operation" label="操作" min-width="100">
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

          <template v-if="activeIndex === '2-2'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="服务名称" :label-position="itemLabelPosition">
                      <input v-model="serviceName" placeholder="服务名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="凭证号" :label-position="itemLabelPosition">
                      <input v-model="credentialNo" placeholder="凭证号" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="年度" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="year" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="客户名称" :label-position="itemLabelPosition">
                      <input v-model="clientName" placeholder="客户名称" style="width: 100px" />
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
                  <el-col :span="16">
                    <el-form-item>
                      <span style="font-size: 14px">凭证日期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="year" label="年度" width="120" />
              <el-table-column prop="projectName" label="产品(服务)名称" width="150" />
              <el-table-column prop="documentDate" label="凭证日期" width="120" />
              <el-table-column prop="documentNo" label="凭证号" width="120" />
              <el-table-column prop="documentTotal" label="客户名称" width="120" />
              <el-table-column prop="documentSummary" label="单据号" width="120" />
              <el-table-column prop="projectAmount" label="金额" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="100">
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

          <template v-if="activeIndex === '2-3'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="年度" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="year" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary">导出</el-button>
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '2-4'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="年度" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="year" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary">导出</el-button>
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '3-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="年度" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="year" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary">导出</el-button>
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '3-2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="年度" :label-position="itemLabelPosition">
                      <el-config-provider :locale="locale">
                        <el-date-picker v-model="year" type="year" placeholder="请选择年份" format="YYYY-MM-DD" value-format="YYYY-MM-DD">
                        </el-date-picker>
                      </el-config-provider>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary">导出</el-button>
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '3-3'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="产品名称" :label-position="itemLabelPosition">
                      <input v-model="productName" placeholder="产品名称" style="width: 120px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="凭证号" :label-position="itemLabelPosition">
                      <input v-model="credentialNo" placeholder="凭证号" style="width: 120px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">凭证日期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
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

                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="客户名称" :label-position="itemLabelPosition">
                      <input v-model="clientName" placeholder="客户名称" style="width: 120px" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="projectName" label="产品名称" width="100" />
              <el-table-column prop="documentDate" label="凭证日期" width="100" />
              <el-table-column prop="documentNo" label="凭证号" width="80" />
              <el-table-column prop="documentTotal" label="客户名称" width="100" />
              <el-table-column prop="documentSummary" label="单据号" width="100" />
              <el-table-column prop="documentSummary" label="高新技术服务（名称）" width="180" />
              <el-table-column prop="additionDeductionAmount" label="产品型号" width="100" />
              <el-table-column prop="projectAmount" label="单价" width="80" />
              <el-table-column prop="projectAmount" label="数量" width="80" />
              <el-table-column prop="projectAmount" label="金额" width="100" />
            </el-table>
          </template>

          <template v-if="activeIndex === '3-4'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="产品(服务)名称" :label-position="itemLabelPosition">
                      <input v-model="productName" placeholder="产品(服务)名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="凭证号" :label-position="itemLabelPosition">
                      <input v-model="credentialNo" placeholder="凭证号" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">凭证日期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
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

                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item label="高新技术服务" :label-position="itemLabelPosition">
                      <input v-model="clientName" placeholder="高新技术服务" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="客户名称" :label-position="itemLabelPosition">
                      <input v-model="clientName" placeholder="客户名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="projectName" label="产品（服务）名称" width="150" />
              <el-table-column prop="documentDate" label="凭证日期" width="100" />
              <el-table-column prop="documentNo" label="凭证号" width="100" />
              <el-table-column prop="documentTotal" label="客户名称" width="150" />
              <el-table-column prop="documentSummary" label="单据号" width="100" />
              <el-table-column prop="additionDeductionAmount" label="高新技术服务名称" width="200" />
              <el-table-column prop="projectAmount" label="金额" width="100" />
            </el-table>
          </template>
        </el-header>

        <el-main>
          <template v-if="activeIndex === '1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="projectName" label="高新技术产品(服务)编号" width="120" />
              <el-table-column prop="projectName" label="高新技术产品(服务)名称" width="120" />
              <el-table-column prop="projectName" label="当年度销售收入" width="100" />
              <el-table-column prop="projectName" label="收入形成时间" width="100" />
              <el-table-column prop="projectName" label="关联IP" width="100" />
              <el-table-column prop="projectName" label="关联IP名称" width="100" />
              <el-table-column prop="projectName" label="关联RD" width="100" />
              <el-table-column prop="projectName" label="关联研发项目名称" width="100" />
              <el-table-column fixed="operation" label="操作" min-width="100">
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

          <template v-if="activeIndex === '2-3'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="projectName" label="年度" width="150" />
              <el-table-column prop="projectName" label="高新技术产品总数量" width="250" />
              <el-table-column prop="projectName" label="审批状态" width="150" />
              <el-table-column fixed="operation" label="操作" min-width="100">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary">指引确认</el-button>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '2-4'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="100" />
              <el-table-column prop="projectName" label="年度" width="150" />
              <el-table-column prop="projectName" label="高新技术服务总数量" width="250" />
              <el-table-column prop="projectName" label="审批状态" width="150" />
              <el-table-column fixed="operation" label="操作" min-width="100">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary">指引确认</el-button>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '3-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column prop="projectName" label="高新技术产品名称" width="250" />
              <el-table-column prop="projectName" label="知识产权" width="250" />
              <el-table-column prop="projectName" label="产品名称" width="250" />
              <el-table-column prop="projectName" label="产品型号" width="150" />
              <el-table-column prop="projectName" label="金额" width="150" />
            </el-table>
          </template>

          <template v-if="activeIndex === '3-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column prop="projectName" label="高新技术服务名称" width="250" />
              <el-table-column prop="projectName" label="知识产权" width="250" />
              <el-table-column prop="projectName" label="产品（服务）名称" width="250" />
              <el-table-column prop="projectName" label="客户名称" width="150" />
              <el-table-column prop="projectName" label="金额" width="150" />
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./hightech.component.ts"></script>

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
  height: 140px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 20px 20px 30px 50px;
  float: left;
}
</style>
