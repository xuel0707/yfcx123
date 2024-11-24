<template>
  <div data-v-0ac3ba95="" data-v-10823e5a="" id="header">
    <header data-v-0ac3ba95="" class="back_white">
      <div data-v-0ac3ba95="" class="shortcut color_f">
        <div data-v-0ac3ba95="" class="web_width clearfix">
          <div data-v-0ac3ba95="" class="left">
            <i data-v-0ac3ba95="" class="icon ico cc_laba"></i> 查政策， 找服务， 就上远方123 ！
          </div>
    
          <div data-v-0ac3ba95="" class="right sho_r">
            <a data-v-0ac3ba95="" href="javascript:void(0);">
              <i data-v-0ac3ba95="" class="icon ico cc_huiyuan"></i> 注册/登录
            </a>
            丨
            <a data-v-0ac3ba95="" href="/usercenter/dashboard">会员中心</a><!----><!---->
          </div>
        </div>
      </div>
    
      <div data-v-0ac3ba95="" class="web_width clearfix top_search bg_none">
        <div data-v-0ac3ba95="" class="logo left">
          <a data-v-0ac3ba95="" style="cursor: pointer;">
            <img data-v-0ac3ba95="" src="/content/images/logo-4.png" class="display_in_bk"></a>
          <a data-v-0ac3ba95="" href="javascript:void(0);" title="选择城市" class="selectcity color_blue ellipsis">
            深圳
            <span data-v-0ac3ba95="" style="font-size: 12px;">[切换城市]</span>
          </a>
        </div>
        <nav data-v-0ac3ba95="" class="tool_nav relative right font16 pr_40">
          <ul data-v-0ac3ba95="">
            <li data-v-0ac3ba95="">
              <a data-v-0ac3ba95="" href="/">首页</a>
            </li>

            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="">查政策</a>
              <div data-v-0ac3ba95="" class="dropdown_menu all_3">
                <a data-v-0ac3ba95="" href="/chanye/news">政策原文</a>
                <a data-v-0ac3ba95="" href="/chanye/index">政策项目</a>
              </div>
            </li>
            
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="">查企业</a>
              <div data-v-0ac3ba95="" class="dropdown_menu all_3">
                <a data-v-0ac3ba95="" href="/gaoqi/index">资质荣誉</a>
                <a data-v-0ac3ba95="" href="/chanye/zizhu">已获资助</a>
              </div>
            </li>
            
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="">政策匹配</a>
              <div data-v-0ac3ba95="" class="dropdown_menu all_3">
                <a data-v-0ac3ba95="" href="/usercenter/smart/match/policy/fast">无感极速匹配</a>
                <a data-v-0ac3ba95="" href="/usercenter/smart/match/policy/exact">
                  <div data-v-0ac3ba95="" class="smartmatha">
                    精准匹配
                    <img data-v-0ac3ba95="" src="/content/images/dashboard/vip.png" alt="">
                  </div>
                </a>
              </div>
            </li>
            
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="">企业诊断</a>
              <div data-v-0ac3ba95="" class="dropdown_menu all_3">
                <a data-v-0ac3ba95="" href="/usercenter/hts/identification/score">高企评分</a>
                <a data-v-0ac3ba95="" href="/usercenter/specialization_new/evaluation/accreditation">专精特新评分</a>
              </div>
            </li>
            
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="">政策工具</a>
              <div data-v-0ac3ba95="" class="dropdown_menu all_3">
                <a data-v-0ac3ba95="" href="/usercenter/sub/list">政策推送</a>
                <a data-v-0ac3ba95="" href="/chanye/chart">政策图谱</a>
                <a data-v-0ac3ba95="" href="/chanye/duibi">政策对比</a>
                <a data-v-0ac3ba95="" href="/bigdata/report/">大数据报告</a>
              </div>
            </li>
            
            <li data-v-0ac3ba95="" class="">
              <a data-v-0ac3ba95="">商务合作</a>
              <div data-v-0ac3ba95="" class="dropdown_menu all_3">
                <a data-v-0ac3ba95="" href="/cooperation">解决方案</a>
              </div>
            </li>
          </ul>
      
          <div data-v-0ac3ba95="" class="nav_search abs_rc">
            <a data-v-0ac3ba95="" style="cursor: pointer;">
              <i data-v-0ac3ba95="" class="icon ico cc_sousuo font20"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts" src="./jhi-navbar.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a, abbr, acronym, address, applet, big, blockquote, body, caption, center, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, html, i, iframe, img, input, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, u, ul, var {
    margin: 0;
    padding: 0;
}

div {
    display: block;
    unicode-bidi: isolate;
}

header.back_white {
    top: 0;
    /* height: 160px; */
    width: 100%;
    z-index: 100;
    min-width: 1400px;
}

.back_white {
    background: #fff;
}

header {
    display: block;
    unicode-bidi: isolate;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.shortcut {
    background: #1395f3;
    line-height: 60px;
}

*+html .clearfix, html .clearfix {
    zoom: 1;
}

.web_widht, .web_width {
    width: 1200px;
    margin: 0 auto;
}

.left {
    float: left;
}

.ico {
    font-family: ico !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.cc_laba:before {
    content: "\E6EB";
}

.right {
    float: right;
}

.sho_r {
    color: #fff;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.sho_r a {
    display: inline-block;
    padding: 0 15px;
}

.all_3, .back_gray_an, .btn, .btn_35, .btn_35_primary, .btn_40, .btn_40_primary, .btn_sm, .btn_xs, .btn_xs1, .cc_youjian, .dotted_ine_box li, .hover_box>*, .i, .ico, .input_v, .input_vl, .mer_list dl, .pay_way li, .QA_list li, .rec_ser_bok li, .rec_ser_list li, .sho_nav1 .cc_sanjiaoyou, .sho_navl, .sho_navl li, .sho_navl li .cc_youjiantou, .sho_navl li dl, .ul_listImg li, :after, :before, a, img, input, textarea {
    /* transition: all .3s linear 0s; */
    -webkit-transition: all .3s linear 0s;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.cc_huiyuan:before {
    content: "\E678";
}

.sho_r a:last-child {
    padding-right: 0;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.sho_r a {
    display: inline-block;
    padding: 0 15px;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.all_3, .back_gray_an, .btn, .btn_35, .btn_35_primary, .btn_40, .btn_40_primary, .btn_sm, .btn_xs, .btn_xs1, .cc_youjian, .dotted_ine_box li, .hover_box>*, .i, .ico, .input_v, .input_vl, .mer_list dl, .pay_way li, .QA_list li, .rec_ser_bok li, .rec_ser_list li, .sho_nav1 .cc_sanjiaoyou, .sho_navl, .sho_navl li, .sho_navl li .cc_youjiantou, .sho_navl li dl, .ul_listImg li, :after, :before, a, img, input, textarea {
    /* transition: all .3s linear 0s; */
    -webkit-transition: all .3s linear 0s;
}

.bg_none[data-v-0ac3ba95] {
    background: none !important;
    position: absolute !important;
    z-index: 100;
    left: 0;
    right: 0;
}

*+html .clearfix, html .clearfix {
    zoom: 1;
}

.web_widht, .web_width {
    width: 1200px;
    margin: 0 auto;
}

.top_search {
    height: 80px;
    margin-bottom: 3px !important;
    padding-top: 20px;
}

.left {
    float: left;
}

.logo {
    display: flex
;
    align-items: center;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.logo img {
    height: 60px;
}

.display_in_bk {
    display: inline-block;
}

img {
    border: none;
    vertical-align: top;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.color_blue, .color_blue a {
    color: #409eff;
}

.ellipsis, .ellipsis2 {
    overflow: hidden;
    text-overflow: ellipsis;
}

.ellipsis {
    white-space: nowrap;
}

.selectcity {
    margin-left: 10px;
    max-width: 100px;
}

.tool_nav {
    line-height: 60px;
}

.font16 {
    font-size: 16px;
}

.pr_40 {
    padding-right: 40px;
}

.relative {
    position: relative;
}

.right {
    float: right;
}

nav {
    display: block;
    unicode-bidi: isolate;
}

dl, li, ul {
    list-style-type: none;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

.tool_nav li {
    display: inline-block;
    margin: 0 26px;
    position: relative;
    cursor: pointer;
}

li {
    vertical-align: top;
}

dl, li, ul {
    list-style-type: none;
}

li {
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.tool_nav li:before {
    content: " ";
    position: absolute;
    width: 0;
    height: 3px;
    background: #409eff;
    right: 0;
    bottom: -20px;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.dropdown_menu {
    box-shadow: 0 0 20px 0 #ddd;
    position: absolute;
    left: 50%;
    top: 60px;
    margin-top: 10px;
    background: #fff;
    width: 120px;
    margin-left: -60px;
    text-align: center;
    padding: 5px 0;
    border-radius: 5px;
    visibility: hidden;
    opacity: 0;
    z-index: 10;
}

.tool_nav .dropdown_menu a {
    display: block;
    position: relative;
    line-height: 40px;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.abs_rc {
    position: absolute;
    right: 0;
    top: 0;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}
</style>
