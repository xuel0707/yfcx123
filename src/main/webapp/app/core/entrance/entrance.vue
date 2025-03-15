<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row style="height: 15px">
          <el-image style="width: 100%; height: 100%" src="/content/images/register_header.jpg" :fit="fit" />
        </el-row>
        <el-row
          :style="{ backgroundImage: 'url(/content/images/entrance_header.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }"
        >
          <el-col :span="4"></el-col>

          <el-col :span="16">
            <el-image style="width: 224px; height: 38px" src="/content/images/logo1.jpg" :fit="fit" />
          </el-col>

          <el-col :span="4">
            <el-link :underline="false" href="/login">
              <span class="item_login">
                <el-icon><User /></el-icon>
                注册/登录
              </span>
            </el-link>
          </el-col>
        </el-row>
        <el-row>
          <el-image style="width: 100%; height: 100%" src="/content/images/bg1.png" :fit="fit" />
        </el-row>
        <div class="section section-1 content-flex">
          <div class="content-left">
            <div class="sys-title logo-title">
              <span class="logo logo2"><img src="/content/images/logo2.png" alt="" /></span>
              <span></span>
              <!-- <span  class="logo logo2"><img  src="/content/images/logo3.png" alt=""></span>  -->
              <span class="bold" style="padding-top: 3px">远方123·</span>
              <span style="padding-top: 3px">研发费管理系统</span>
            </div>
            <div class="info">
              以研发立项为基础、以研发费数字化归集和核算为核心，构建企业研发管理体系，
              固化立项管理、研发人员出勤及项目工时分配、研发资产折旧分摊、动能分配等研发活动完整证据链，
              自动生成会计核算、国高认定、R&amp;D统计、加计扣除税收等不同口径报表、辅助账和相应的备查文件。
            </div>
          </div>
        </div>

        <div class="section section-2">
          <div class="section-title">研发合规分类指引</div>
          <div class="value-list">
            <div class="value-item">
              <div class="item-bg">
                <div class="item-icon">
                  <img src="/content/images/s2-1.png" mode="" />
                </div>

                <div class="item-title">研发管理体系不明<br data-v-4be6273f="" />执行难</div>
                <div class="item-text">
                  清晰、适配、可执行的研发管理体系是提高团队效率和研发速度，降低风险确保项目按时、按质完成的重要架构，是一切研发活动开展的重要前提。
                </div>
              </div>
            </div>

            <div class="value-item">
              <div class="item-bg">
                <div class="item-icon">
                  <img src="/content/images/s2-2.png" mode="" />
                </div>

                <div class="item-title">研、财、人协同差<br data-v-4be6273f="" />统计难</div>
                <div class="item-text">
                  数据的采集和统计对整个企业的费用归集和研发合规起着至关重要的作用，需依托数字化工具实现多部门间信息共享和协同工作。
                </div>
              </div>
            </div>

            <div class="value-item">
              <div class="item-bg">
                <div class="item-icon">
                  <img src="/content/images/s2-3.png" mode="" />
                </div>
                <div class="item-title">研发生产难划分<br data-v-4be6273f="" />举证难</div>
                <div class="item-text">
                  人员、设备和材料之间需准确合规依照各自的独立性与相互的重叠性进行记录与划分，并形成能够相互佐证的完整证据链。
                </div>
              </div>
            </div>

            <div class="value-item">
              <div class="item-bg">
                <div class="item-icon">
                  <img src="/content/images/s2-4.png" mode="" />
                </div>
                <div class="item-title">加计、国高成功后<br data-v-4be6273f="" />保持难</div>
                <div class="item-text">
                  企业需要以研发立项与科创属性培育为核心，提前规划高企/专精特新小巨人等创新主体资质申报和成功后享受加计扣除等税收优惠政策。
                </div>
              </div>
            </div>
          </div>
        </div>

        <el-row>
          <el-image style="width: 100%; height: 100%" src="/content/images/bg4.png" :fit="fit" />
        </el-row>

        <div class="section section-3">
          <div class="content-left">
            <div class="content-title">系统功能</div>
            <div class="icon"><img src="/content/images/s3-0.png" mode="" /></div>
          </div>

          <div class="content-right">
            <div class="func-list">
              <div class="list-left">
                <div class="func-item">
                  <div class="func-icon"><img src="/content/images/s3-1.png" mode="" /></div>
                  <div class="func-text">专业研发项目管理模块和大数据技术文库支持，帮助 <span class="bold">企业充分立项</span>。</div>
                </div>

                <div class="func-item">
                  <div class="func-icon">
                    <img src="/content/images/s3-2.png" mode="" />
                  </div>
                  <div class="func-text">实现企业人员、设备按项目研发工时 <span class="bold">智能打卡，高效监管无瑕疵</span>。</div>
                </div>

                <div class="func-item">
                  <div class="func-icon">
                    <img src="/content/images/s3-3.png" mode="" />
                  </div>

                  <div class="func-text">
                    帮助企业实现研发立项—研发投入—结题验收—成果转化和试产等全过程痕迹化管理，规范夯实
                    <span class="bold">研发费管理证据链。</span>
                  </div>
                </div>
              </div>

              <div class="list-right">
                <div class="func-item">
                  <div class="func-icon">
                    <img src="/content/images/s3-4.png" mode="" />
                  </div>
                  <div class="func-text">
                    按项目研发工时，智能化分配人员工资、水电动能费及资产折旧分摊，并自动生成规范的项目研发费
                    <span class="bold">备查文件</span>，满足各部门审计监管对研发费的要求。
                  </div>
                </div>
                <div class="func-item">
                  <div class="func-icon">
                    <img src="/content/images/s3-5.png" mode="" />
                  </div>
                  <div class="func-text">
                    自动生成企业会计准则/税务加计扣除/高新技术企业认定/R&amp;D统计/财政专项资金/IPO等
                    <span class="bold">多政策口径报表</span>和 <span class="bold">相应辅助账</span>。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 130px">
          <el-image style="width: 100%; height: 100%" src="/content/images/bg3.png" :fit="fit" />
        </div>
      </el-header>

      <el-main>
        <el-link :underline="false" href="/login">
          <div class="entrance">
            <p>进入系统</p>
          </div>
        </el-link>
      </el-main>

      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" src="./entrance.component.ts"></script>

<style scoped>
.item_login {
  color: white; /* 设置字体颜色为白色 */
  display: flex; /* 使用flexbox来居中对齐 */
  align-items: center; /* 垂直居中 */
  font-size: 14px; /* 可以调整字体大小 */
}

.section-1 {
  width: 100%;
  aspect-ratio: 1684 / 902;
  background-image: url(/content/images/bg2.png);
  background-size: 100% 100%;
  padding: 0 14%;
}

.content-flex {
  /* display: -webkit-box; */
  display: -ms-flexbox;
  display: flex;
}

.section-1 .content-left {
  width: 41%;
}

@media screen and (max-width: 1550px) {
  .section-1 .content-left .sys-title {
    padding-top: 110px;
  }
}

.section-1 .content-left .sys-title {
  /* padding-top: 7vw; */
  font-size: 23px;
  line-height: 40px;
  letter-spacing: 1px;
  /* display: -webkit-box; */
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 520px;
}

.logo {
  /* display: -webkit-box; */
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.section-1 .content-left .sys-title .logo1 img {
  width: 182px;
  height: 40px;
}

img {
  border: none;
  vertical-align: top;
}

.section-1 .content-left .sys-title .logo2 {
  margin-left: 18px;
  margin-right: 6px;
}

.logo {
  /* display: -webkit-box; */
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.logo img {
  height: 60px;
}

img {
  border: none;
  vertical-align: top;
}

.bold {
  font-weight: 700;
}

.section-1 .content-left .info {
  padding-top: 6%;
  font-size: 15px;
}

.section-2 {
  width: 100%;
  aspect-ratio: 960 / 495.5;
  background-color: #fff;
}

.section {
  width: 100%;
}

.section-2 .section-title {
  padding-top: 8vw;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
}

.section-2 .value-list {
  margin: 4% 4% 0;
  display: flex;
  justify-content: space-around;
  height: 50%;
}

.section-2 .value-list .value-item:not(:last-child) {
  margin-right: 1.4%;
}

.section-2 .value-list .value-item {
  width: 23%;
  min-width: 254px;
}

.section-2 .value-list .value-item .item-bg {
  height: 80%;
  min-height: 344px;
  margin-top: 26%;
  border-radius: 8px;
  background-color: #eff3fd;
  position: relative;
}

.section-2 .value-list .value-item .item-icon {
  position: absolute;
  top: -26%;
  left: 50%;
  transform: translateX(-50%);
  width: 68%;
}

.section-2 .value-list .value-item .item-icon img {
  width: 100%;
}

img {
  border: none;
  vertical-align: top;
}

img {
  overflow-clip-margin: content-box;
  overflow: clip;
}

.section-2 .value-list .value-item .item-bg .item-title {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 50%;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
}

.section-2 .value-list .value-item .item-bg .item-text {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 7% 13% 0;
  color: #3e4a59;
}

.section-3 {
  background-image: url(/content/images/bg3.png);
  aspect-ratio: 960 / 344;
  display: flex;
  min-height: 550px;
}

.section-3 .content-left {
  width: 34%;
  margin-right: 2vw;
  position: relative;
}

.section-3 .content-left .content-title {
  padding-top: 6.45vw;
  padding-left: 23%;
  font-size: 28px;
  font-weight: 700;
}

.section-3 .content-left .icon {
  position: absolute;
  top: 27%;
}

.section-3 .content-left .icon img {
  width: 100%;
}

img {
  border: none;
  vertical-align: top;
}

.section-3 .content-right {
  width: 42%;
}

.section-3 .content-right .func-list {
  display: flex;
}

.section-3 .content-right .func-list .list-left {
  padding-top: 4vw;
  padding-right: 2vw;
}

.section-3 .content-right .func-list .func-item {
  height: 8vw;
  min-height: 134px;
  width: 25vw;
  min-width: 330px;
  padding: 1.6vw;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 2vw;
  border-radius: 8px;
}

.section-3 .content-right .func-list .func-item .func-icon {
  width: 4vw;
  min-width: 50px;
}

.section-3 .content-right .func-list .func-item .func-icon img {
  width: 100%;
}

img {
  border: none;
  vertical-align: top;
}

.section-3 .content-right .func-list .func-item .func-text {
  width: 12.8vw;
  padding-left: 1.2vw;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #525b72;
  min-width: 240px;
}

.bold {
  font-weight: 700;
}

.entrance {
  position: fixed;
  /* -webkit-transform: translateY(-50%); */
  transform: translateY(-50%);
  right: 24px;
  top: 33%;
  /* border-radius: 6px; */
  background-color: #ff7f26;
  color: #ffffff;
  cursor: pointer;
  border-radius: 53%;
  text-align: center;
  /* -webkit-box-shadow: 3px 3px 1px rgba(0, 0, 0, .2); */
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.2);
  width: 80px;
  height: 50px;
  padding-top: 7px;
  font-size: 14px;
  line-height: 20px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
</style>
