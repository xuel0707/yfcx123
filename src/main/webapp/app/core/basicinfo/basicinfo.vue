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
          <el-menu-item index="1">
            <template #title
              ><el-icon><HomeFilled /></el-icon>企业信息</template
            >
          </el-menu-item>

          <el-menu-item index="2">
            <template #title
              ><el-icon><Box /></el-icon>部门架构</template
            >
          </el-menu-item>

          <el-menu-item index="3">
            <template #title
              ><el-icon><User /></el-icon>职工信息</template
            >
          </el-menu-item>

          <el-menu-item index="4">
            <template #title
              ><el-icon><Tickets /></el-icon>科研制度</template
            >
          </el-menu-item>

          <el-sub-menu index="5">
            <template #title
              ><span
                ><el-icon><DataAnalysis /></el-icon>财务信息管理</span
              ></template
            >
            <el-menu-item index="5-1"
              ><el-icon><Files /></el-icon>项目之间分摊方式</el-menu-item
            >
            <el-menu-item index="5-2"
              ><el-icon><Timer /></el-icon>科研人员出勤管理</el-menu-item
            >
            <el-menu-item index="5-3"
              ><el-icon><Paperclip /></el-icon>材料管理</el-menu-item
            >
            <el-menu-item index="5-4"
              ><el-icon><House /></el-icon>研发固定资产</el-menu-item
            >
            <el-menu-item index="5-5"
              ><el-icon><Coin /></el-icon>无形资产与长期待摊费</el-menu-item
            >
            <el-menu-item index="5-6"
              ><el-icon><Money /></el-icon>企业收入信息</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div class="navgation">
            <span class="position"> 当前位置：</span>
            <span>基础信息维护 / </span>
            <template v-if="activeIndex === '1'">
              <span>企业信息</span>
            </template>

            <template v-if="activeIndex === '2'">
              <span>部门架构</span>
            </template>

            <template v-if="activeIndex === '3'">
              <span>职工信息</span>
            </template>

            <template v-if="activeIndex === '4'">
              <span>科研制度</span>
            </template>

            <template v-if="activeIndex === '5-1'">
              <span>财务信息管理 / </span>
              <span>项目之间分摊方式</span>
            </template>

            <template v-if="activeIndex === '5-2'">
              <span>财务信息管理 / </span>
              <span>科研人员出勤管理</span>
            </template>

            <template v-if="activeIndex === '5-3'">
              <span>财务信息管理 / </span>
              <span>材料管理</span>
            </template>

            <template v-if="activeIndex === '5-4'">
              <span>财务信息管理 / </span>
              <span>研发固定资产</span>
            </template>

            <template v-if="activeIndex === '5-5'">
              <span>财务信息管理 / </span>
              <span>无形资产与长期待摊费</span>
            </template>

            <template v-if="activeIndex === '5-6'">
              <span>财务信息管理 / </span>
              <span>企业收入信息</span>
            </template>
          </div>
          <template v-if="activeIndex === '1'">
            <div class="info">
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-image src="/content/images/enterprise_bg.png" />
                </el-col>
                <el-col :span="18">
                  <el-form :model="form" label-width="auto">
                    <el-row>
                      <el-col :span="2">
                        <span>企业信息</span>
                      </el-col>
                      <el-col :span="14"> </el-col>
                      <el-col :span="8">
                        <el-form-item>
                          <el-button type="primary"
                            ><el-icon><Edit /></el-icon>编辑</el-button
                          >
                          <el-button type="primary">保存</el-button>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="8">
                        <el-form-item label="单位名称" :label-position="itemLabelPosition">
                          <input v-model="companyName" placeholder="请输入单位名称" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="企业联系人" :label-position="itemLabelPosition">
                          <input v-model="companyContact" placeholder="请输入企业联系人" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="社会信用码" :label-position="itemLabelPosition">
                          <input v-model="socialCreditCode" placeholder="请输入社会信用代码" />
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="8">
                        <el-form-item label="手机号码" :label-position="itemLabelPosition">
                          <input v-model="mobileNumber" @input="validateMobile" placeholder="请输入手机号码" style="width: 550px" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="16">
                        <el-form-item label="企业性质" :label-position="itemLabelPosition">
                          <el-cascader :options="options" :props="props1" clearable />
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="10">
                        <el-form-item label="企业法人" :label-position="itemLabelPosition">
                          <input v-model="entityLegalPerson" placeholder="请输入企业法人" />
                        </el-form-item>
                      </el-col>
                      <el-col :span="14">
                        <el-form-item label="加计扣除比例%" :label-position="itemLabelPosition">
                          <input v-model="additionDeductionRate" placeholder="" />
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col>
                        <el-form-item label="行业性质" :label-position="itemLabelPosition">
                          <el-cascader :options="options1" />
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="8">
                        <el-form-item label="行政区划" :label-position="itemLabelPosition">
                          <el-cascader
                            placeholder="请选择省市区"
                            size="large"
                            :options="pcaTextArr"
                            v-model="selectedOptions"
                            style="width: 550px"
                          >
                          </el-cascader>
                        </el-form-item>
                      </el-col>

                      <el-col :span="16">
                        <el-form-item label="公司地址" :label-position="itemLabelPosition">
                          <input v-model="detailedAddress" placeholder="请输入详细地址" style="width: 550px" />
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col>
                        <el-form-item label="公司简介" :label-position="itemLabelPosition">
                          <el-input
                            v-model="companyInfo"
                            style="width: 650px"
                            :rows="8"
                            type="textarea"
                            placeholder="公司简介，不超过255字。"
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col>
                        <el-form-item label="公司LOGO" :label-position="itemLabelPosition">
                          <el-upload action="#" list-type="picture-card" :auto-upload="false">
                            <el-icon><Plus /></el-icon>

                            <template #file="{ file }">
                              <div>
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                <span class="el-upload-list__item-actions">
                                  <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <el-icon><zoom-in /></el-icon>
                                  </span>
                                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <el-icon><Download /></el-icon>
                                  </span>
                                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <el-icon><Delete /></el-icon>
                                  </span>
                                </span>
                              </div>
                            </template>
                          </el-upload>

                          <el-dialog v-model="dialogVisible">
                            <img w-full :src="dialogImageUrl" alt="Preview Image" />
                          </el-dialog>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col>
                        <el-form-item label="营业执照" :label-position="itemLabelPosition">
                          <el-upload
                            ref="upload"
                            class="upload-demo"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :auto-upload="false"
                          >
                            <el-button class="ml-3" type="success" @click="submitUpload"> 上传 </el-button>
                            <template #tip>
                              <div class="el-upload__tip text-red">附件格式为jpg、png、doc、docx、pdf</div>
                            </template>
                          </el-upload>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </el-col>
              </el-row>
            </div>
          </template>

          <template v-if="activeIndex === '2'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">部门名称</span>
                      <input v-model="departmentName" placeholder="请输入部门名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">部门编号</span>
                      <input v-model="departmentId" placeholder="请输入部门编号" style="width: 150px" />
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

          <template v-if="activeIndex === '3'">
            <div class="search2">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item>
                      <span style="font-size: 14px">职工姓名</span>
                      <input v-model="employeeName" placeholder="请输入职工姓名" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <span style="font-size: 14px">职工工号</span>
                      <input v-model="employeeId" placeholder="请输入职工工号" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="职称信息" :label-position="itemLabelPosition">
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
                  <el-col :span="6">
                    <el-form-item>
                      <span style="font-size: 14px">部门名称</span>
                      <input v-model="departmentName" placeholder="请输入部门名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="职工属性" :label-position="itemLabelPosition">
                      <el-cascader :options="options3" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item>
                      <span style="font-size: 14px">职工岗位</span>
                      <input v-model="jobPosition" placeholder="请输入岗位" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="职工学历" :label-position="itemLabelPosition">
                      <el-cascader :options="options4" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item>
                      <el-button type="primary">导入</el-button>
                      <el-button type="primary">导出</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="是否缴纳个税" :label-position="itemLabelPosition">
                      <el-cascader :options="options5" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="是否缴纳社保" :label-position="itemLabelPosition">
                      <el-cascader :options="options6" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="是否在职183天以上" :label-position="itemLabelPosition">
                      <el-cascader :options="options7" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="6">
                    <el-form-item label="是否在职" :label-position="itemLabelPosition">
                      <el-cascader :options="options8" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="departmentName" label="序号" width="120" />
              <el-table-column prop="departmentId" label="职工工号" width="120" />
              <el-table-column prop="departmentContactPersron" label="职工姓名" width="120" />
              <el-table-column prop="departmentMobilePhome" label="职工部门" width="120" />
              <el-table-column prop="departmentMobilePhome" label="职工职称" width="120" />
              <el-table-column prop="departmentMobilePhome" label="职工属性" width="120" />
              <el-table-column prop="departmentMobilePhome" label="是否在职183天" width="120" />
              <el-table-column prop="departmentMobilePhome" label="是否科技人员" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <template #default>
                  <el-button link type="primary" size="small">编辑</el-button>
                  <el-button link type="primary" size="small">详情</el-button>
                  <el-button link type="primary" size="small">删除</el-button>
                  <el-button link type="primary" size="small">绑定</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '4'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="5">
                    <el-form-item>
                      <span style="font-size: 14px">名称</span>
                      <input v-model="ruleName" placeholder="请输入制度名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item>
                      <span style="font-size: 14px">编号</span>
                      <input v-model="ruleId" placeholder="请输入制度编号" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">实施日期</span>
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

          <template v-if="activeIndex === '5-1'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item>
                      <span style="font-size: 14px">年份</span>
                      <el-date-picker v-model="initYear" type="year" placeholder="请选择年份" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item>
                      <el-button type="primary">初始化</el-button>
                      <el-button type="primary"
                        ><el-icon><Refresh /></el-icon>刷新</el-button
                      >
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
                    <el-form-item>
                      <span style="font-size: 14px">年份</span>
                      <el-date-picker v-model="initYear" type="year" placeholder="请选择年份" />
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
                  <el-col :span="6">
                    <el-form-item>
                      <span style="font-size: 14px">名称</span>
                      <input v-model="materialName" placeholder="请输入材料名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">录入时间</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
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

          <template v-if="activeIndex === '5-4'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item>
                      <span style="font-size: 14px">名称</span>
                      <input v-model="RDFixedAssetsName" placeholder="请输入名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">日期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
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

          <template v-if="activeIndex === '5-5'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item>
                      <span style="font-size: 14px">名称</span>
                      <input v-model="LongTermDeferredExpenseName" placeholder="请输入名称" style="width: 150px" />
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item>
                      <span style="font-size: 14px">日期</span>
                      <input type="month" v-model="sdate" placeholder="发起日期" :min="minDate" :max="maxDate" />
                      <span style="font-size: 14px">至</span>
                      <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
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

          <template v-if="activeIndex === '5-6'">
            <div class="search">
              <el-form :model="form" label-width="auto">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item>
                      <span style="font-size: 14px">日期范围</span>
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
        </el-header>

        <el-main>
          <template v-if="activeIndex === '2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="departmentName" label="部门名称" width="120" />
              <el-table-column prop="departmentId" label="部门编号" width="200" />
              <el-table-column prop="departmentContactPersron" label="联系人" width="120" />
              <el-table-column prop="departmentMobilePhome" label="联系电话" width="120" />
              <el-table-column fixed="operation" label="操作" min-width="120">
                <template #default>
                  <el-button link type="primary" size="small">查看</el-button>
                  <el-button link type="primary" size="small">编辑</el-button>
                  <el-button link type="primary" size="small">新增</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '3'"> </template>

          <template v-if="activeIndex === '4'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="ruleName" label="制度名称" width="200" />
              <el-table-column prop="ruldId" label="制度编号" width="200" />
              <el-table-column prop="ruldDate" label="实施日期" width="200" />
              <el-table-column fixed="operation" label="操作" min-width="200">
                <template #default>
                  <el-button link type="primary" size="small">查看</el-button>
                  <el-button link type="primary" size="small">编辑</el-button>
                  <el-button link type="primary" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '5-2'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="attendanceYear" label="年份" width="200" />
              <el-table-column prop="attendanceUnit" label="应出勤单位" width="200" />
              <el-table-column prop="creator" label="创建人" width="200" />
              <el-table-column fixed="operation" label="操作" min-width="200">
                <template #default>
                  <el-button link type="primary" size="small">查看</el-button>
                  <el-button link type="primary" size="small">明细</el-button>
                  <el-button link type="primary" size="small">切换</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '5-3'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="materialType" label="类型" width="200" />
              <el-table-column prop="materialCode" label="编码" width="200" />
              <el-table-column prop="materialName" label="名称" width="200" />
              <el-table-column prop="materialUnit" label="单位" width="200" />
              <el-table-column prop="materialDate" label="日期" width="200" />
              <el-table-column fixed="operation" label="操作" min-width="200">
                <template #default>
                  <el-button link type="primary" size="small">查看</el-button>
                  <el-button link type="primary" size="small">编辑</el-button>
                  <el-button link type="primary" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '5-4'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="RDFixedAssetsNo" label="卡片号" width="100" />
              <el-table-column prop="RDFixedAssetsName" label="名称" width="100" />
              <el-table-column prop="RDFixedAssetsType" label="类别" width="100" />
              <el-table-column prop="RDFixedAssetsDate" label="购入日期" width="100" />
              <el-table-column prop="originalValue" label="原值" width="80" />
              <el-table-column prop="estimatedResidualValue" label="预计残值" width="80" />
              <el-table-column prop="depreciationRate" label="折旧率" width="80" />
              <el-table-column prop="netResidualValueRate" label="净残值率" width="80" />
              <el-table-column prop="estimatedUsageMonths" label="预计使用月份" width="120" />
              <el-table-column prop="monthlyDepreciationRate" label="月折旧率" width="80" />
              <el-table-column fixed="operation" label="操作" min-width="80">
                <template #default>
                  <el-button link type="primary" size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '5-5'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="80" />
              <el-table-column prop="RDFixedAssetsNo" label="卡片号" width="80" />
              <el-table-column prop="RDFixedAssetsName" label="名称" width="100" />
              <el-table-column prop="RDFixedAssetsType" label="类别" width="100" />
              <el-table-column prop="originalValue" label="原值" width="80" />
              <el-table-column prop="estimatedUsageMonths" label="预计使用月份" width="120" />
              <el-table-column prop="monthlyDepreciationRate" label="研发比例" width="80" />
              <el-table-column prop="originalValue" label="月摊销额（月）" width="120" />
              <el-table-column prop="originalValue" label="月折旧摊销额（月）" width="140" />
              <el-table-column prop="originalValue" label="购入日期" width="80" />
              <el-table-column fixed="operation" label="操作" min-width="80">
                <template #default>
                  <el-button link type="primary" size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>

          <template v-if="activeIndex === '5-6'">
            <el-table :data="tableData" style="width: 90%; min-height: 350px" class="min-height-table">
              <el-table-column fixed prop="id" label="序号" width="120" />
              <el-table-column prop="companyIncomeDate" label="月份" width="200" />
              <el-table-column prop="salesRevenue" label="营业收入（元）" width="200" />
              <el-table-column prop="totalIncome" label="总收入（元）" width="200" />
              <el-table-column prop="modifyPerson" label="最后修改人" width="200" />
              <el-table-column fixed="operation" label="操作" min-width="200">
                <template #default>
                  <el-button link type="primary" size="small">编辑</el-button>
                  <el-button link type="primary" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./basicinfo.component.ts"></script>

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

.info {
  width: 90%;
  height: 850px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 20px 20px 10px 20px;
  float: left;
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
