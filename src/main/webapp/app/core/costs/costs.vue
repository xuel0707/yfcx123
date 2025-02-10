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
                ><el-icon><Box /></el-icon>研发费用核算</span
              ></template
            >
            <el-sub-menu index="1-1">
              <template #title
                ><span
                  ><el-icon><DataAnalysis /></el-icon>薪资管理</span
                ></template
              >
              <el-menu-item index="1-1-1"
                ><el-icon><Timer /></el-icon>考勤工时</el-menu-item
              >
              <el-menu-item index="1-1-2"
                ><el-icon><Tickets /></el-icon>薪资导入</el-menu-item
              >
            </el-sub-menu>

            <el-sub-menu index="1-2">
              <template #title
                ><span
                  ><el-icon><Files /></el-icon>材料领用</span
                ></template
              >
              <el-menu-item index="1-2-1"
                ><el-icon><Paperclip /></el-icon>材料消耗</el-menu-item
              >
              <el-menu-item index="1-2-2"
                ><el-icon><Coin /></el-icon>材料费用</el-menu-item
              >
            </el-sub-menu>

            <el-menu-item index="1-3">
              <template #title
                ><el-icon><Money /></el-icon>燃动费摊入</template
              >
            </el-menu-item>

            <el-sub-menu index="1-4">
              <template #title
                ><span
                  ><el-icon><Tickets /></el-icon>折旧/长期待摊</span
                ></template
              >
              <el-menu-item index="1-4-1"
                ><el-icon><Timer /></el-icon>设备工时</el-menu-item
              >
              <el-menu-item index="1-4-2"
                ><el-icon><Coin /></el-icon>折旧或长期待摊费用</el-menu-item
              >
            </el-sub-menu>

            <el-menu-item index="1-5">
              <template #title
                ><el-icon><User /></el-icon>研发无形资产</template
              >
            </el-menu-item>

            <el-menu-item index="1-6">
              <template #title
                ><el-icon><Coin /></el-icon>委外费用</template
              >
            </el-menu-item>

            <el-menu-item index="1-7">
              <template #title
                ><el-icon><Tickets /></el-icon>费用报销</template
              >
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item index="2">
            <template #title
              ><el-icon><Tickets /></el-icon>会计凭证清单</template
            >
          </el-menu-item>

          <el-sub-menu index="3">
            <template #title
              ><span
                ><el-icon><Paperclip /></el-icon>加计扣除管理</span
              ></template
            >
            <el-menu-item index="3-1">
              <template #title
                ><el-icon><Money /></el-icon>特殊收入</template
              >
            </el-menu-item>

            <el-menu-item index="3-2">
              <template #title
                ><el-icon><Coin /></el-icon>不可扣除材料费用</template
              >
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item index="4">
            <template #title
              ><el-icon><Tickets /></el-icon>会计凭证清单(导入)</template
            >
          </el-menu-item>

          <el-sub-menu index="5">
            <template #title
              ><span
                ><el-icon><Search /></el-icon>研发费用查询</span
              ></template
            >
            <el-menu-item index="5-1">
              <template #title
                ><el-icon><Files /></el-icon>研发费用结构表</template
              >
            </el-menu-item>

            <el-menu-item index="5-2">
              <template #title
                ><el-icon><Money /></el-icon>辅助账</template
              >
            </el-menu-item>

            <el-menu-item index="5-3">
              <template #title
                ><el-icon><Paperclip /></el-icon>研发费用汇总表</template
              >
            </el-menu-item>

            <el-menu-item index="5-4">
              <template #title
                ><el-icon><Tickets /></el-icon>加计扣除辅助账</template
              >
            </el-menu-item>

            <el-menu-item index="5-5">
              <template #title
                ><el-icon><Box /></el-icon>加计扣除辅助账汇总表</template
              >
            </el-menu-item>

            <el-menu-item index="5-6">
              <template #title
                ><el-icon><Coin /></el-icon>加计扣除汇总表</template
              >
            </el-menu-item>

            <el-menu-item index="5-7">
              <template #title
                ><el-icon><User /></el-icon>研发人员参与项目情况</template
              >
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div class="navgation">
            <span class="position"> 当前位置：</span>
            <span>研发费用管理 / </span>
            <template v-if="activeIndex === '1-1-1'">
              <span>研发费用核算/薪资管理/考勤工时</span>
            </template>

            <template v-if="activeIndex === '1-1-2'">
              <span>研发费用核算/薪资管理/薪资导入</span>
            </template>

            <template v-if="activeIndex === '1-2-1'">
              <span>研发费用核算/材料领用/材料消耗</span>
            </template>

            <template v-if="activeIndex === '1-2-2'">
              <span>研发费用核算/材料领用/材料费用</span>
            </template>

            <template v-if="activeIndex === '1-3'">
              <span>研发费用核算/燃动费摊入</span>
            </template>

            <template v-if="activeIndex === '1-4-1'">
              <span>研发费用核算/折旧/长期待摊费用/设备工时</span>
            </template>

            <template v-if="activeIndex === '1-4-2'">
              <span>研发费用核算/折旧/长期待摊费用/折旧或长期摊销费用</span>
            </template>

            <template v-if="activeIndex === '1-5'">
              <span>研发费用核算/研发无形资产</span>
            </template>

            <template v-if="activeIndex === '1-6'">
              <span>研发费用核算/委外费用</span>
            </template>

            <template v-if="activeIndex === '1-7'">
              <span>研发费用核算/费用报销</span>
            </template>

            <template v-if="activeIndex === '2'">
              <span>会计凭证清单</span>
            </template>

            <template v-if="activeIndex === '3-1'">
              <span>加计扣除管理/特殊收入</span>
            </template>

            <template v-if="activeIndex === '3-2'">
              <span>加计扣除管理/不可扣除材料费用</span>
            </template>

            <template v-if="activeIndex === '4'">
              <span>会计凭证清单(导入)</span>
            </template>

            <template v-if="activeIndex === '5-1'">
              <span>研发费用查询/研发费用结构表</span>
            </template>

            <template v-if="activeIndex === '5-2'">
              <span>研发费用查询/辅助账</span>
            </template>

            <template v-if="activeIndex === '5-3'">
              <span>研发费用查询/研发费用汇总表</span>
            </template>

            <template v-if="activeIndex === '5-4'">
              <span>研发费用查询/加计扣除辅助账</span>
            </template>

            <template v-if="activeIndex === '5-5'">
              <span>研发费用查询/加计扣除辅助账汇总表</span>
            </template>

            <template v-if="activeIndex === '5-6'">
              <span>研发费用查询/加计扣除汇总表</span>
            </template>

            <template v-if="activeIndex === '5-7'">
              <span>研发费用查询/研发人员参与项目情况</span>
            </template>
          </div>

          <template v-if="activeIndex === '1-1-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item>
                      <span style="font-size: 14px">出勤日期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button
                        ><el-icon><Refresh /></el-icon>重置</el-button
                      >
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-1-2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">所属期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options" />
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
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-2-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">领料月份</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="项目名" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入项目名" style="width: 150px" />
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
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-2-2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">领料月份</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="类型" :label-position="itemLabelPosition">
                      <input v-model="projectLeader" placeholder="请输入项目名" style="width: 150px" />
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
                  <el-col :span="6">
                    <el-form-item label="报账日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="所属日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options1" />
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
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-4-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="使用日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
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
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-4-2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary">一键转结</el-button>
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

          <template v-if="activeIndex === '1-5'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <el-button type="primary">一键转结</el-button>
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

          <template v-if="activeIndex === '1-6'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="报账日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="所属日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options2" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="3">
                    <el-form-item label="受托单位" :label-position="itemLabelPosition">
                      <input v-model="entrustedUnit" placeholder="请输入" style="width: 50px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="3">
                    <el-form-item label="研发形式" :label-position="itemLabelPosition">
                      <el-cascader :options="options3" />
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
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '1-7'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="报账日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="所属日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="费用类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options4" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="摘要" :label-position="itemLabelPosition">
                      <input v-model="summary" placeholder="摘要内容" style="width: 100px" />
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
                      <el-button type="primary">导出</el-button>
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
                  <el-col :span="4">
                    <el-form-item label="项目编号" :label-position="itemLabelPosition">
                      <input v-model="projectNo" placeholder="请输入项目编号" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入项目名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="项目类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options5" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="费用类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options6" />
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
                      <el-button type="primary">凭证登记</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="高企科目" :label-position="itemLabelPosition">
                      <el-cascader :options="options7" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="加计扣除科目" :label-position="itemLabelPosition">
                      <el-cascader :options="options8" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="凭证号" :label-position="itemLabelPosition">
                      <input v-model="documentNo" placeholder="请输入凭证号" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="批次号" :label-position="itemLabelPosition">
                      <input v-model="batchNo" placeholder="请输入批次号" style="width: 150px" />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="状态" :label-position="itemLabelPosition">
                      <el-cascader :options="options9" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="报账日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="所属日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="40" />
              <el-table-column prop="expenseDate" label="报账日期" width="60" />
              <el-table-column prop="relatedDate" label="所属日期" width="60" />
              <el-table-column prop="batchNo" label="批次号" width="60" />
              <el-table-column prop="projectNo" label="项目编号" width="60" />
              <el-table-column prop="projectName" label="项目名称" width="60" />
              <el-table-column prop="costType" label="费用类型" width="60" />
              <el-table-column prop="reviewStatus" label="审批状态" width="60" />
              <el-table-column prop="documentDate" label="凭证日期" width="60" />
              <el-table-column prop="documentType" label="凭证类型" width="60" />
              <el-table-column prop="documentNo" label="凭证号" width="60" />
              <el-table-column prop="documentTotal" label="凭证金额" width="60" />
              <el-table-column prop="documentSummary" label="凭证摘要" width="60" />
              <el-table-column prop="additionDeductionAmount" label="计入加计扣除金额" width="60" />
              <el-table-column prop="creditDirection" label="借贷方向" width="60" />
              <el-table-column prop="costCapital" label="费用化/资本化" width="60" />
              <el-table-column prop="highTech" label="高企科目" width="60" />
              <el-table-column prop="additionDeductionAccount" label="加计扣除科目" width="60" />
              <el-table-column prop="projectAmount" label="项目金额" width="60" />
              <el-table-column fixed="operation" label="操作" min-width="100">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '3-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="商品名称" :label-position="itemLabelPosition">
                      <input v-model="productName" placeholder="请输入商品名称" style="width: 80px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="3">
                    <el-form-item label="项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入商品名称" style="width: 80px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="7">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="10">
                    <el-form-item>
                      <el-button type="primary"
                        ><el-icon><Search /></el-icon>查询</el-button
                      >
                      <el-button type="primary"
                        ><el-icon><Plus /></el-icon>新增</el-button
                      >
                      <el-button type="primary">导入</el-button>
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
                  <el-col :span="5">
                    <el-form-item label="材料名称" :label-position="itemLabelPosition">
                      <input v-model="materialName" placeholder="请输入材料名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item label="项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入商品名称" style="width: 120px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="费用抵扣日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
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
              </el-form>
            </div>
          </template>

          <template v-if="activeIndex === '4'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <el-form-item label="项目编号" :label-position="itemLabelPosition">
                      <input v-model="projectNo" placeholder="请输入项目编号" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="项目名称" :label-position="itemLabelPosition">
                      <input v-model="projectName" placeholder="请输入项目名称" style="width: 100px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="项目类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options5" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item label="费用类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options6" />
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
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="高企科目" :label-position="itemLabelPosition">
                      <el-cascader :options="options7" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="加计扣除科目" :label-position="itemLabelPosition">
                      <el-cascader :options="options8" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="凭证号" :label-position="itemLabelPosition">
                      <input v-model="documentNo" placeholder="请输入凭证号" style="width: 150px" />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="状态" :label-position="itemLabelPosition">
                      <el-cascader :options="options9" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="报账日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="所属日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>

            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="40" />
              <el-table-column prop="expenseDate" label="报账日期" width="60" />
              <el-table-column prop="relatedDate" label="所属日期" width="60" />
              <el-table-column prop="projectNo" label="项目编号" width="60" />
              <el-table-column prop="projectName" label="项目名称" width="60" />
              <el-table-column prop="costType" label="费用类型" width="60" />
              <el-table-column prop="documentDate" label="凭证日期" width="60" />
              <el-table-column prop="documentType" label="凭证类型" width="60" />
              <el-table-column prop="documentNo" label="凭证号" width="60" />
              <el-table-column prop="documentTotal" label="凭证金额" width="60" />
              <el-table-column prop="documentSummary" label="凭证摘要" width="60" />
              <el-table-column prop="additionDeductionAmount" label="计入加计扣除金额" width="60" />
              <el-table-column prop="creditDirection" label="借贷方向" width="60" />
              <el-table-column prop="costCapital" label="费用化/资本化" width="60" />
              <el-table-column prop="highTech" label="高企科目" width="60" />
              <el-table-column prop="additionDeductionAccount" label="加计扣除科目" width="60" />
              <el-table-column prop="projectAmount" label="项目金额" width="60" />
              <el-table-column fixed="operation" label="操作" min-width="100">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '5-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
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

          <template v-if="activeIndex === '5-2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
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

          <template v-if="activeIndex === '5-3'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
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

          <template v-if="activeIndex === '5-4'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
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

          <template v-if="activeIndex === '5-5'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
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

          <template v-if="activeIndex === '5-6'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
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

          <template v-if="activeIndex === '5-7'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="所属日期" :label-position="itemLabelPosition">
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="2">
                    <el-form-item label="类型" :label-position="itemLabelPosition">
                      <el-cascader :options="options10" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item label="工资计提月" :label-position="itemLabelPosition">
                      <input type="month" v-model="s1date" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="e1date" placeholder="发起日期" :min="minDate" :max="maxDate" />
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
        </el-header>

        <el-main>
          <template v-if="activeIndex === '1-1-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="projectId" label="项目编号" width="120" />
              <el-table-column prop="projectName" label="项目名称" width="120" />
              <el-table-column prop="monthNum" label="月份" width="120" />
              <el-table-column prop="personNum" label="人数" width="120" />
              <el-table-column prop="total" label="合计" width="120" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120"> </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-1-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="wageDate" label="工资所属期" width="120" />
              <el-table-column prop="wageAccrualMonth" label="工资计提月" width="120" />
              <el-table-column prop="wageType" label="类型" width="120" />
              <el-table-column prop="wageTotal" label="总金额" width="120" />
              <el-table-column prop="includedInRdTotal" label="计入研发总额" width="120" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-2-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="projectNo" label="项目编号" width="200" />
              <el-table-column prop="projectName" label="项目名称" width="200" />
              <el-table-column prop="totalNum" label="总数量" width="120" />
              <el-table-column prop="materialIssueMonth" label="领料月份" width="200" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="200">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-2-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="materialIssueDate" label="领料日期" width="120" />
              <el-table-column prop="projectNo" label="项目编号" width="120" />
              <el-table-column prop="projectName" label="项目名称" width="200" />
              <el-table-column prop="totalNum" label="总数量" width="120" />
              <el-table-column prop="wageTotal" label="总金额" width="120" />
              <el-table-column prop="includedInRdTotal" label="计入研发总额" width="120" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-3'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="fuelPowerFeeType" label="类别" width="80" />
              <el-table-column prop="projectName" label="项目名称" width="120" />
              <el-table-column prop="allocationMethod" label="分摊选择" width="100" />
              <el-table-column prop="wageTotal" label="总金额（元）" width="120" />
              <el-table-column prop="includedInRdTotal" label="计入研发总额" width="120" />
              <el-table-column prop="expenseDate" label="报账日期" width="120" />
              <el-table-column prop="issueDate" label="所属日期" width="120" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-4-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="projectName" label="项目名称" width="120" />
              <el-table-column prop="projectNo" label="项目编号" width="120" />
              <el-table-column prop="month" label="月份" width="100" />
              <el-table-column prop="totalHours" label="总工时（小时）" width="150" />
              <el-table-column prop="totalDevelopmentHours" label="总研发工时（小时）" width="150" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-4-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="date" label="日期" width="150" />
              <el-table-column prop="currentMonthDepreciationCount" label="本月折旧资产数量" width="150" />
              <el-table-column prop="currentMonthTotalAmortization" label="本月总摊销额" width="120" />
              <el-table-column prop="includedInRdTotal" label="计入研发总额" width="150" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-5'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="date" label="日期" width="150" />
              <el-table-column prop="currentMonthDepreciationCount" label="本月无形资产数量" width="150" />
              <el-table-column prop="currentMonthTotalAmortization" label="本月总摊销额" width="120" />
              <el-table-column prop="includedInRdTotal" label="计入研发摊销总额" width="150" />
              <el-table-column prop="reviewStatus" label="审批状态" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-6'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="allocationSelection" label="分配选择" width="80" />
              <el-table-column prop="developmentType" label="研发形式" width="100" />
              <el-table-column prop="entrustedUnit" label="受托单位" width="100" />
              <el-table-column prop="entrustedUnitAttributes" label="受托单位属性" width="120" />
              <el-table-column prop="contractTotal" label="合同总金额（元）" width="140" />
              <el-table-column prop="includedInRdTotal" label="计入研发总额" width="120" />
              <el-table-column prop="expenseDate" label="报账日期" width="100" />
              <el-table-column prop="relatedDate" label="所属日期" width="100" />
              <el-table-column prop="reviewStatus" label="审批状态" width="100" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '1-7'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="60" />
              <el-table-column prop="expenseAccount" label="所属科目" width="80" />
              <el-table-column prop="costType" label="费用类型" width="100" />
              <el-table-column prop="expenseDate" label="报账日期" width="100" />
              <el-table-column prop="relatedDate" label="所属日期" width="100" />
              <el-table-column prop="allocSelection" label="分配选择" width="100" />
              <el-table-column prop="contractTotal" label="总金额" width="140" />
              <el-table-column prop="includedInRdTotal" label="计入研发总额" width="120" />
              <el-table-column prop="reviewStatus" label="审批状态" width="100" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <el-button type="primary"
                  ><el-icon><View /></el-icon>查看</el-button
                >
                <el-button type="primary"
                  ><el-icon><Delete /></el-icon>撤销</el-button
                >
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '2'"> </template>

          <template v-if="activeIndex === '3-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="expenseAccount" label="凭证日期" width="100" />
              <el-table-column prop="costType" label="商品名称" width="120" />
              <el-table-column prop="expenseDate" label="项目名称" width="120" />
              <el-table-column prop="relatedDate" label="特殊收入类型" width="150" />
              <el-table-column prop="allocSelection" label="数量" width="100" />
              <el-table-column prop="contractTotal" label="单价" width="120" />
              <el-table-column prop="includedInRdTotal" label="金额" width="120" />
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

          <template v-if="activeIndex === '3-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="expenseAccount" label="材料名称" width="150" />
              <el-table-column prop="costType" label="项目名称" width="250" />
              <el-table-column prop="expenseDate" label="金额" width="120" />
              <el-table-column prop="relatedDate" label="折扣日期" width="150" />
              <el-table-column prop="includedInRdTotal" label="费用日期" width="150" />
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

          <template v-if="activeIndex === '4'"> </template>

          <template v-if="activeIndex === '5-1'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="40" />
              <el-table-column prop="projectNo" label="项目编号" width="80" />
              <el-table-column prop="projectName" label="项目名称" width="80" />
              <el-table-column prop="costType" label="项目期间" width="120" />
              <el-table-column prop="reviewStatus" label="内部研究开发费用投入额" width="80" />
              <el-table-column prop="documentDate" label="人员人工费用" width="60" />
              <el-table-column prop="documentType" label="直接投入费用" width="60" />
              <el-table-column prop="documentNo" label="折旧费用与长期摊销费用" width="80" />
              <el-table-column prop="documentTotal" label="无形资产摊销费用" width="80" />
              <el-table-column prop="documentSummary" label="设计费用" width="80" />
              <el-table-column prop="additionDeductionAmount" label="装备调试费用与试验费用" width="80" />
              <el-table-column prop="creditDirection" label="其中：境内的外部研发投入额（按80%计算）" width="80" />
              <el-table-column prop="costCapital" label="研究开发投入额（内、外部）小计" width="80" />
              <el-table-column prop="projectStatus" label="项目状态" width="60" />
            </el-table>
          </template>

          <template v-if="activeIndex === '5-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="40" />
              <el-table-column prop="projectNo" label="日期" width="80" />
              <el-table-column prop="projectNo" label="项目编号" width="80" />
              <el-table-column prop="projectName" label="项目名称" width="80" />
              <el-table-column prop="costType" label="凭证号数" width="80" />
              <el-table-column prop="reviewStatus" label="摘要" width="80" />
              <el-table-column prop="documentDate" label="人员人工费用" width="60" />
              <el-table-column prop="documentType" label="直接投入费用" width="60" />
              <el-table-column prop="documentNo" label="折旧费用与长期摊销费用" width="80" />
              <el-table-column prop="documentTotal" label="无形资产摊销费用" width="80" />
              <el-table-column prop="documentSummary" label="设计费用" width="80" />
              <el-table-column prop="additionDeductionAmount" label="装备调试费用与试验费用" width="80" />
              <el-table-column prop="creditDirection" label="其他费用" width="80" />
              <el-table-column prop="costCapital" label="委托外部研究开发费用" width="80" />
              <el-table-column prop="projectStatus" label="项目状态" width="60" />
            </el-table>
          </template>

          <template v-if="activeIndex === '5-3'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="projectNo" label="年月" width="100" />
              <el-table-column prop="projectNo" label="高科项目" width="100" />
              <el-table-column prop="projectNo" label="费用项目" width="100" />
              <el-table-column prop="projectNo" label="项目编号" width="100" />
              <el-table-column prop="projectName" label="项目名称" width="150" />
              <el-table-column prop="projectName" label="项目起止时间" width="150" />
              <el-table-column prop="projectName" label="金额" width="100" />
            </el-table>
          </template>

          <template v-if="activeIndex === '5-4'"> </template>

          <template v-if="activeIndex === '5-5'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="30" />
              <el-table-column prop="projectName" label="项目名称" width="30" />
              <el-table-column prop="projectName" label="项目编号" width="30" />
              <el-table-column prop="projectName" label="研发形式" width="30" />
              <el-table-column prop="projectName" label="资本化、费用化支出选项" width="30" />
              <el-table-column prop="projectName" label="项目实施状态选项" width="30" />
              <el-table-column prop="projectName" label="委托方与受托方是否存在关联关系选项" width="30" />
              <el-table-column prop="projectName" label="是否委托境外选项" width="30" />
              <el-table-column prop="projectName" label="研发成果" width="30" />
              <el-table-column prop="projectName" label="研发成果证书号" width="30" />
              <el-table-column prop="projectName" label="内部从事研发活动人员工资薪金" width="30" />
              <el-table-column prop="projectName" label="内部从事研发活动人员五险一金" width="30" />
              <el-table-column prop="projectName" label="外聘研发人员的劳务费用" width="30" />
              <el-table-column prop="projectName" label="消耗材料费用（研发活动直接消耗）" width="30" />
              <el-table-column prop="projectName" label="消耗燃料费用（研发活动直接消耗）" width="30" />
              <el-table-column prop="projectName" label="消耗动力费用（研发活动直接消耗）" width="30" /><el-table-column
                prop="projectName"
                label="消耗材料费用（研发活动直接消耗）"
                width="30"
              />
              <el-table-column prop="projectName" label="用于中间试验和产品试制的模具、工艺装备开发及制造费" width="30" />
              <el-table-column prop="projectName" label="用于不构成固定资产的样品、样机及一般测试手段购置费" width="30" />
              <el-table-column prop="projectName" label="用于试制产品的检验费" width="30" />
              <el-table-column prop="projectName" label="用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用" width="30" />
              <el-table-column prop="projectName" label="仪器折旧费" width="30" />
              <el-table-column prop="projectName" label="设备折旧费" width="30" />
              <el-table-column prop="projectName" label="用于研发活动的软件的摊销费用" width="30" />
              <el-table-column prop="projectName" label="用于研发活动的专利权的摊销费用" width="30" />
              <el-table-column
                prop="projectName"
                label="用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用"
                width="30"
              />
              <el-table-column prop="projectName" label="新产品设计费" width="30" />
              <el-table-column prop="projectName" label="新工艺规程制定费" width="30" />
              <el-table-column prop="projectName" label="新药研制的临床试验费" width="30" />
              <el-table-column prop="projectName" label="勘探技术开发的现场试验费" width="30" />
              <el-table-column prop="projectName" label="技术图书资料费、资料翻译费、专家咨询费、高新科技研发保险费" width="30" />
              <el-table-column prop="projectName" label="研发成果的检索、分析、评议、论证、鉴定、评审、评估、验收费用" width="30" />
              <el-table-column prop="projectName" label="知识产品的申请费、注册非、代理费" width="30" />
              <el-table-column prop="projectName" label="职工福利费、补充养老保险费、补充医疗保险费" width="30" />
              <el-table-column prop="projectName" label="差旅费、会议费" width="30" />
              <el-table-column prop="projectName" label="委托外部机构或个人进行研发活动所发生的费用" width="30" />
              <el-table-column prop="projectName" label="其中：委托境外进行研发活动所发生的费用（包括存在关联关系的委托研发）" width="30" />
              <el-table-column prop="projectName" label="允许加计扣除的研发费用中第1至5类费用合计" width="30" />
              <el-table-column prop="projectName" label="其他相关费用限额" width="30" />
              <el-table-column prop="projectName" label="当前费用化支出可加计扣除总额" width="30" />
              <el-table-column prop="projectName" label="当期资本化可加计扣除的研发费用率" width="30" />
            </el-table>
          </template>

          <template v-if="activeIndex === '5-6'"> </template>

          <template v-if="activeIndex === '5-7'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="projectName" label="年份" width="100" />
              <el-table-column prop="projectName" label="项目名称" width="120" />
              <el-table-column prop="projectName" label="项目编号" width="100" />
              <el-table-column prop="projectName" label="姓名" width="100" />
              <el-table-column prop="projectName" label="工号" width="100" />
              <el-table-column prop="projectName" label="部门" width="100" />
              <el-table-column prop="projectName" label="属性" width="100" />
              <el-table-column prop="projectName" label="分摊工时" width="100" />
              <el-table-column prop="projectName" label="分摊金额" width="100" />
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./costs.component.ts"></script>

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
  height: 200px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 20px 20px 30px 50px;
  float: left;
}
</style>
