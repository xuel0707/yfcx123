<template>
  <side-bar class="site-sidebar">
    <div data-v-db90dd08="" data-v-10823e5a="" class="sideBar">
      <div data-v-db90dd08="" class="side-bar side-bar-1">
        <div data-v-db90dd08="" class="side-bar-item">
          <p data-v-db90dd08="" class="icon-wrap pt_10">
            <i data-v-db90dd08="" class="icon el-icon-video-play"></i>
          </p>
          
          <p data-v-db90dd08="" class="text-wrap">
            <span data-v-db90dd08="">视频指引</span>
          </p>
        </div>
        <span data-v-db90dd08="">
          <span class="el-popover__reference-wrapper">
            <div data-v-db90dd08="" class="side-bar-item el-popover__reference" aria-describedby="el-popover-2322" tabindex="0">
              <p data-v-db90dd08="" class="icon-wrap pt_10">
                <i data-v-db90dd08="" class="icon ico cc_kefu"></i>
              </p>
              
              <p data-v-db90dd08="" class="text-wrap">
                <span data-v-db90dd08="">客服</span>
              </p>
            </div>
          </span>
        </span>
        
        <span data-v-db90dd08="">
          <span class="el-popover__reference-wrapper">
            <div data-v-db90dd08="" class="side-bar-item el-popover__reference" aria-describedby="el-popover-1785" tabindex="0">
              <p data-v-db90dd08="" class="icon-wrap pt_10">
                <i data-v-db90dd08="" class="icon ico cc_shouji"></i>
              </p>
              
              <p data-v-db90dd08="" class="text-wrap">
                <span data-v-db90dd08="">小程序</span>
              </p>
            </div>
          </span>
        </span><!---->
        
        <div data-v-db90dd08="" class="side-bar-item" style="">
          <p data-v-db90dd08="" class="icon-wrap">
            <i data-v-db90dd08="" class="el-icon-upload2"></i>
          </p>
          
          <p data-v-db90dd08="" class="text-wrap">
            <span data-v-db90dd08="">回到顶部</span>
          </p>
        </div>
      </div>
      
      <div data-v-db90dd08="" class="dialog custom-dialog">
        <div data-v-db90dd08="" class="el-dialog__wrapper wrap-class" style="display: none;">
          <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh; width: 68%;">
            <div class="el-dialog__header">
              <span class="el-dialog__title"></span>
              <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div><!----><!---->
          </div>
        </div>
      </div>
    </div>
  </side-bar>
</template>

<style scoped>
.side-bar-1[data-v-db90dd08] {
    height: 140px;
    top: calc(70% - 210px);
}

.side-bar[data-v-db90dd08] {
    position: fixed;
    z-index: 999;
    right: 10px;
    width: 60px;
}

.side-bar-item[data-v-db90dd08] {
    position: relative;
    background: #1395f3;
    height: 70px;
    color: #fff;
    padding: 5px 0;
    box-sizing: border-box;
}

.side-bar-item p[data-v-db90dd08] {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pt_10 {
    padding-top: 10px;
}

.side-bar-item p i[data-v-db90dd08] {
    font-size: 30px;
}

.ico {
    font-family: ico !important;
    /* font-size: 16px; */
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.cc_kefu:before {
    content: "\E6A9";
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-video-play:before {
    content: "\E7C0";
}

.side-bar-item p span[data-v-db90dd08] {
    font-size: 12px;
}

.side-bar-item p i.el-icon-upload2[data-v-db90dd08] {
    padding-top: 6px;
}

.wrap-class[data-v-db90dd08] {
    overflow: hidden !important;
}

.el-dialog {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    /* -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3); */
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;
    /* width: 50%; */
}

.el-dialog, .el-pager li {
    background: #fff;
    /* -webkit-box-sizing: border-box; */
}

.dialog .el-dialog__header {
    display: none;
}

.el-dialog__header {
    padding: 20px 20px 10px;
}

.el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
}

.el-dialog__headerbtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
}

button {
    appearance: auto;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-variant-alternates: ;
    font-variant-position: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    font-optical-sizing: ;
    font-size-adjust: ;
    font-kerning: ;
    font-feature-settings: ;
    font-variation-settings: ;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: buttonface;
    margin: 0em;
    padding-block: 1px;
    padding-inline: 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
}

.el-dialog__headerbtn .el-dialog__close {
    color: #909399;
}
</style>
