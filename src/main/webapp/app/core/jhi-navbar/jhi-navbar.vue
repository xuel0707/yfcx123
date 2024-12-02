<template>
  <div data-v-0ac3ba95="" data-v-10823e5a="" id="header">
    <header data-v-0ac3ba95="" class="back_white">
      <div data-v-0ac3ba95="" class="shortcut color_f">
        <div data-v-0ac3ba95="" class="web_width clearfix">
          <div data-v-0ac3ba95="" class="right sho_r">
            <a data-v-0ac3ba95="" href="/login">控制台</a>
            <a data-v-0ac3ba95="" href="/login">登录</a>
            <a data-v-0ac3ba95="" href="/register">免费注册</a>
          </div>
        </div>
      </div>
      <div data-v-0ac3ba95="" class="web_width clearfix top_search bg_none">
        <div data-v-0ac3ba95="" class="logo left">
          <a data-v-0ac3ba95="" style="cursor: pointer">
            <img data-v-0ac3ba95="" src="/content/images/logo-4.png" class="display_in_bk" />
          </a>
        </div>
        <nav data-v-0ac3ba95="" class="tool_nav relative right font16 pr_40">
          <ul data-v-0ac3ba95="">
            <li data-v-0ac3ba95="">
              <a data-v-0ac3ba95="" href="/">首页</a>
            </li>
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="" href="/bussiness">主营业务</a>
            </li>
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="" href="/news">新闻资讯</a>
            </li>
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="" href="/corperate">合作加盟</a>
            </li>
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="" href="/tools">企业工具</a>
            </li>
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="" href="/contact">联系我们</a>
            </li>
          </ul>
          <div data-v-0ac3ba95="" class="nav_search abs_rc">
            <a data-v-0ac3ba95="" style="cursor: pointer">
              <i data-v-0ac3ba95="" class="icon ico cc_sousuo font20"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts" src="./jhi-navbar.component.ts"></script>

<style scoped>
header.back_white {
  top: 0;
  width: 100%;
  z-index: 100;
  background: #f36d13;
  line-height: 60px;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  color: #fff;
}

.back_white {
  background: #f36d13;
  line-height: 60px;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  color: #fff;
}

header {
  display: block;
  unicode-bidi: isolate;
  color: #fff;
}

.color_f,
.color_f:hover,
.color_f a {
  color: #fff;
  font-weight: normal;
}

.shortcut {
  background: #f36d13;
  line-height: 60px;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  color: #fff;
}

.tool_nav {
  left: 50%;
  transform: translateX(-50%);
  float: none;
}

a,
.tool_nav a,
.nav_search a,
.tool_nav li {
  color: #fff !important;
  font-weight: normal !important;
}

.icon {
  color: #fff;
}

.right.sho_r {
  padding-right: 100px;
}
</style>
