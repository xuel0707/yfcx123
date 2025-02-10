<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="search">
          <el-form :model="form" label-width="auto">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item>
                  <el-button type="primary" plain>今年</el-button>
                  <el-button type="primary" plain>上一年</el-button>
                  <el-button type="primary" plain>前三年</el-button>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item>
                  <span style="color: var(--el-text-color-secondary); font-size: 14px">日期</span>
                  <input type="month" v-model="sdate" placeholder="开始日期" :min="minDate" :max="maxDate" />

                  <span style="color: var(--el-text-color-secondary); font-size: 14px">至</span>
                  <input type="month" v-model="edate" placeholder="结束日期" :min="minDate" :max="maxDate" />
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item>
                  <el-button type="primary"
                    ><el-icon><Search /></el-icon>查询</el-button
                  >
                  <el-button type="primary" plain
                    ><el-icon><Refresh /></el-icon>重置</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-header>

      <el-main>
        <div class="num-div">
          <el-row :gutter="20">
            <el-col :span="5">
              <el-image style="width: 40px; height: 40px" src="/content/images/num1.png" :fit="fit" />
              <span>研发项目</span>
              <span>0</span>
              <el-divider direction="vertical" border-style="dotted" class="thick-divider" />
            </el-col>
            <el-col :span="5">
              <el-image style="width: 40px; height: 40px" src="/content/images/num2.png" :fit="fit" />
              <span>科技成果</span>
              <span>0</span>
              <el-divider direction="vertical" border-style="dotted" class="thick-divider" />
            </el-col>
            <el-col :span="5">
              <el-image style="width: 40px; height: 40px" src="/content/images/num3.png" :fit="fit" />
              <span>成果转化</span>
              <span>0</span>
              <el-divider direction="vertical" border-style="dotted" class="thick-divider" />
            </el-col>
            <el-col :span="5">
              <el-image style="width: 40px; height: 40px" src="/content/images/num4.png" :fit="fit" />
              <span>高新产品（服务）</span>
              <span>0</span>
              <el-divider direction="vertical" border-style="dotted" class="thick-divider" />
            </el-col>
            <el-col :span="4">
              <el-image style="width: 40px; height: 40px" src="/content/images/num5.png" :fit="fit" />
              <span>知识产权</span>
              <span>0</span>
            </el-col>
          </el-row>
        </div>

        <div class="chart-warp">
          <el-row :gutter="20">
            <el-col :span="12">
              <div
                style="
                  position: relative;
                  width: 100%;
                  height: 228px;
                  padding: 0px;
                  margin: 0px;
                  border-width: 0px;
                  cursor: default;
                  background-color: #fff;
                "
              >
                <el-image style="width: 100%; height: 100%" src="/content/images/echart1.png" :fit="fit" />
              </div>
            </el-col>

            <el-col :span="12">
              <div
                style="
                  position: relative;
                  width: 100%;
                  height: 228px;
                  padding: 0px;
                  margin: 0px;
                  border-width: 0px;
                  cursor: default;
                  background-color: #fff;
                "
              >
                <el-image style="width: 100%; height: 100%" src="/content/images/echart2.png" :fit="fit" />
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <div
                style="
                  position: relative;
                  width: 100%;
                  height: 228px;
                  padding: 0px;
                  margin: 0px;
                  border-width: 0px;
                  cursor: default;
                  background-color: #fff;
                "
              >
                <el-image style="width: 100%; height: 100%" src="/content/images/echart3.png" :fit="fit" />
              </div>
            </el-col>

            <el-col :span="12">
              <div
                style="
                  position: relative;
                  width: 100%;
                  height: 228px;
                  padding: 0px;
                  margin: 0px;
                  border-width: 0px;
                  cursor: default;
                  background-color: #fff;
                "
              >
                <el-image style="width: 100%; height: 100%" src="/content/images/echart4.png" :fit="fit" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" src="./main-navbar.component.ts"></script>

<style scoped>
.search {
  width: 90%;
  height: 60px;
  float: left;
  margin: 0 auto;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 30px;
  background-color: #fff;
}

.num-div {
  width: 90%;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 25px 25px 25px 25px;
  float: left;
}

.thick-divider {
  border-top-width: 10px; /* 修改线条的宽度 */
  height: 60px;
  border-color: #0000cd; /* 修改线条的颜色 */
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.chart-warp {
  width: 90%;
  height: 480px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0 0 0 0;
  float: left;
}
</style>
