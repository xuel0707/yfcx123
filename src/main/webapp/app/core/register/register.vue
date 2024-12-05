<template>
  <reg-navbar></reg-navbar>
  <div data-v-f9a245ba="" class="main">
    <div data-v-f9a245ba="" class="el-row">
        <div data-v-f9a245ba="" class="el-col el-col-16">
            <div data-v-f9a245ba="" class="form-area">
                <form data-v-f9a245ba="" class="el-form" method="post">
                    <h3 data-v-f9a245ba="" class="sub-title">账户信息</h3>
                    <div data-v-f9a245ba="" class="form-module">
                        <div data-v-f9a245ba="" class="el-form-item is-required el-form-item--small">
                            <label for="companyName" class="el-form-item__label" style="width: 150px;">单位名称</label>
                            <div class="el-form-item__content" style="margin-left: 150px;">
                                <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                    <input type="text" autocomplete="off" name="companyName" placeholder="请输入单位名称" class="el-input__inner"><!----><!----><!----><!---->
                                </div><!---->
                            </div>
                        </div>
                            
                        <div data-v-f9a245ba="" class="el-form-item is-required el-form-item--small">
                            <label for="taxCode" class="el-form-item__label" style="width: 150px;">社会信用代码</label>
                            <div class="el-form-item__content" style="margin-left: 150px;">
                                <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                    <input type="text" autocomplete="off" name="taxCode" placeholder="请输入社会信用代码" class="el-input__inner"><!----><!----><!----><!----></div><!---->
                                </div>
                            </div>
                            
                            <div data-v-f9a245ba="" class="el-form-item is-success is-required el-form-item--small">
                                <label for="artificial" class="el-form-item__label" style="width: 150px;">企业法人</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                        <input type="text" autocomplete="off" name="artificial" placeholder="请输入企业法人" class="el-input__inner"><!----><!----><!----><!---->
                                    </div><!---->
                                </div>
                            </div>
                            
                            <div data-v-f9a245ba="" class="el-form-item is-success is-required el-form-item--small">
                                <label for="pwd" class="el-form-item__label" style="width: 150px;">登录密码</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                        <input type="password" autocomplete="off" name="pwd" placeholder="请输入8-20位字符，必须包含数字、大/小写字母、特殊字符中的三种或以上组合" class="el-input__inner"><!----><!----><!----><!---->
                                    </div><!---->
                                </div>
                            </div>
                            
                            <div data-v-f9a245ba="" class="el-form-item is-error is-required el-form-item--small">
                                <label for="checkPwd" class="el-form-item__label" style="width: 150px;">确认密码</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                        <input type="password" autocomplete="off" placeholder="请再次输入密码" class="el-input__inner"><!----><!----><!----><!---->
                                    </div>
                                    <div class="el-form-item__error">
                                    请再次输入密码
                                    </div>
                                </div>
                            </div>
                            
                            <div data-v-f9a245ba="" class="el-form-item is-required el-form-item--small">
                                <label for="address" class="el-form-item__label" style="width: 150px;">公司地址:</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div data-v-f9a245ba="" class="el-col el-col-24">
                                        <div data-v-f9a245ba="" class="distpicker-address-wrapper">
                                            <label>
                                                <select>
                                                    <option value="省">省</option> 
                                                    <option value="北京市">北京市</option>
                                                    <option value="天津市">天津市</option>
                                                    <option value="河北省">河北省</option>
                                                    <option value="山西省">山西省</option>
                                                    <option value="内蒙古自治区">内蒙古自治区</option>
                                                    <option value="辽宁省">辽宁省</option>
                                                    <option value="吉林省">吉林省</option>
                                                    <option value="黑龙江省">黑龙江省</option>
                                                    <option value="上海市">上海市</option>
                                                    <option value="江苏省">江苏省</option>
                                                    <option value="浙江省">浙江省</option>
                                                    <option value="安徽省">安徽省</option>
                                                    <option value="福建省">福建省</option>
                                                    <option value="江西省">江西省</option>
                                                    <option value="山东省">山东省</option>
                                                    <option value="河南省">河南省</option>
                                                    <option value="湖北省">湖北省</option>
                                                    <option value="湖南省">湖南省</option>
                                                    <option value="广东省">广东省</option>
                                                    <option value="广西壮族自治区">广西壮族自治区</option>
                                                    <option value="海南省">海南</option>
                                                    <option value="重庆市">重庆市</option>
                                                    <option value="四川省">四川省</option>
                                                    <option value="贵州省">贵州省</option>
                                                    <option value="云南省">云南省</option>
                                                    <option value="西藏自治区">西藏自治区</option>
                                                    <option value="陕西省">陕西省</option>
                                                    <option value="甘肃省">甘肃省</option>
                                                    <option value="青海省">青海省</option>
                                                    <option value="宁夏回族自治区">宁夏回族自治</option>
                                                    <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                                                    <option value="台湾省">台湾省</option>
                                                    <option value="香港特别行政区">香港特别行政区</option>
                                                    <option value="澳门特别行政区">澳门特别行政区</option>
                                                    <option value="海外">海外</option>
                                                </select>
                                            </label> 
                                            <label>
                                                <select>
                                                    <option value="市">市</option> 
                                                </select>
                                            </label> 
                                            <label>
                                                <select>
                                                    <option value="区">区</option> 
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                <div data-v-f9a245ba="" class="margin-t-10 el-col el-col-24">
                                    <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                        <input type="text" autocomplete="off" placeholder="请输入详细地址" class="el-input__inner"><!----><!----><!----><!---->
                                    </div>
                                </div><!---->
                            </div>
                        </div>
                    </div>
                    <h3 data-v-f9a245ba="" class="sub-title">联系方式</h3>
                    <div data-v-f9a245ba="" class="form-module">
                        <div data-v-f9a245ba="" class="el-form-item is-required el-form-item--small">
                            <label for="contactPerson" class="el-form-item__label" style="width: 150px;">企业联系人</label>
                            <div class="el-form-item__content" style="margin-left: 150px;">
                                <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                    <input type="text" autocomplete="off" name="contactPerson" placeholder="请输入企业联系人" class="el-input__inner"><!----><!----><!----><!---->
                                </div><!---->
                            </div>
                        </div>
                        <div data-v-f9a245ba="" class="el-form-item is-required el-form-item--small">
                            <label for="telephone" class="el-form-item__label" style="width: 150px;">手机号码</label>
                            <div class="el-form-item__content" style="margin-left: 150px;">
                                <div data-v-f9a245ba="" class="width-500 el-input el-input--small"><!---->
                                    <input type="text" autocomplete="off" name="telephone" placeholder="请输入手机号码" class="el-input__inner"><!----><!----><!----><!---->
                                </div><!---->
                            </div>
                        </div>
                        <div data-v-f9a245ba="" class="el-form-item is-required el-form-item--small">
                            <label for="SMSCode" class="el-form-item__label" style="width: 150px;">短信验证码</label>
                            <div class="el-form-item__content" style="margin-left: 150px;">
                                <div data-v-f9a245ba="" class="el-col el-col-12">
                                    <div data-v-f9a245ba="" class="width-400 el-input el-input--small"><!---->
                                        <input type="text" autocomplete="off" placeholder="请输入短信验证码" class="el-input__inner"><!----><!----><!----><!---->
                                    </div>
                                    <div data-v-f9a245ba="" class="width-400 el-input el-input--small" style="display: none;"><!---->
                                        <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!----><!---->
                                    </div>
                                </div>
                                    
                                <div data-v-f9a245ba="" class="el-col el-col-12">
                                    <button data-v-f9a245ba="" disabled="disabled" type="button" class="el-button el-button--primary el-button--small is-disabled" id="SMSCodeTip" style="margin-left: 108px;"><!----><!---->
                                        <span>获取验证码</span>
                                    </button>
                                </div><!---->
                            </div>
                        </div>
                        <div data-v-f9a245ba="" class="el-form-item is-required el-form-item--small"><!---->
                            <div class="el-form-item__content" style="margin-left: 150px;">
                                <div data-v-f9a245ba="" class="agree">
                                    <div data-v-f9a245ba="" role="group" aria-label="checkbox-group" class="el-checkbox-group">
                                        <label data-v-f9a245ba="" class="el-checkbox" prop="agreement">
                                            <span class="el-checkbox__input">
                                                <span class="el-checkbox__inner"></span>
                                                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="">
                                            </span>
                                            <span class="el-checkbox__label">
                                                <span data-v-f9a245ba="">我已阅读并同意遵守</span>
                                                <span data-v-f9a245ba="" class="agreement">《用户服务协议》</span> 和 
                                                <span data-v-f9a245ba="" class="agreement">《隐私政策》</span><!---->
                                            </span>
                                        </label>
                                    </div>
                                </div><!---->
                            </div>
                        </div>
                        <div data-v-f9a245ba="" class="btn-area">
                            <button data-v-f9a245ba="" type="button" class="el-button submit-btn el-button--primary"><!----><!---->
                                <span>注册</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
  <jhi-footer></jhi-footer>  <!-- 底部内容始终显示 -->
</template>


<script  lang="ts">

import RegNavbar from '@/core/reg-navbar/reg-navbar.vue';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import { ElCheckbox, ElCheckboxGroup, ElButton } from 'element-plus';
import 'element-plus/dist/index.css';

export default {
  name: 'Register',
  components: {
    RegNavbar,
    JhiFooter, // 注册全局组件
  },

  methods: {

  },
  mounted() {
    
  },
};


</script>

<style scoped>
.main[data-v-f9a245ba] {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto 100px auto;
}

.main {
    padding: 20px 40px;
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-col-16 {
    width: 66.66667%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

form {
    display: block;
    unicode-bidi: isolate;
}

.sub-title[data-v-f9a245ba] {
    line-height: 40px;
    border-bottom: 2px solid #82aad3;
    overflow: hidden;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 30px;
}

h3 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

label {
    cursor: default;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    /* height: 40px; */
    /* line-height: 40px; */
    outline: 0;
    padding: 0 15px;
    /* -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1); */
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

input[type="text" i] {
    padding-block: 1px;
    padding-inline: 2px;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

[data-v-f9a245ba] .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color: #606266;
    /* line-height: 40px; */
    padding: 0 12px 0 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

label {
    cursor: default;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-form-item__content {
    /* line-height: 40px; */
    position: relative;
    font-size: 14px;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    /* height: 40px; */
    /* line-height: 40px; */
    outline: 0;
    padding: 0 15px;
    /* -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1); */
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

[data-v-f9a245ba] .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color: #606266;
    /* line-height: 40px; */
    padding: 0 12px 0 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-form-item__content {
    /* line-height: 40px; */
    position: relative;
    font-size: 14px;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input__inner {
    -webkit-appearance: none;
    /* background-color: #fff; */
    /* background-image: none; */
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    /* height: 40px; */
    /* line-height: 40px; */
    outline: 0;
    padding: 0 15px;
    /* -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1); */
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

[data-v-f9a245ba] .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color: #606266;
    /* line-height: 40px; */
    padding: 0 12px 0 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-form-item__content {
    /* line-height: 40px; */
    position: relative;
    font-size: 14px;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

input:-internal-autofill-selected {
    background-image: none !important;
    background-color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
    color: fieldtext !important;
}

input:not([type="image" i], [type="range" i], [type="checkbox" i], [type="radio" i]) {
    overflow-clip-margin: 0px !important;
    overflow: clip !important;
}

input[type="password" i] {
    -webkit-text-security: disc !important;
    padding-block: 1px;
    padding-inline: 2px;
}

input:not([type="file" i], [type="image" i], [type="checkbox" i], [type="radio" i]) {
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

[data-v-f9a245ba] .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color: #606266;
    /* line-height: 40px; */
    padding: 0 12px 0 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-form-item__content {
    /* line-height: 40px; */
    position: relative;
    font-size: 14px;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-form-item.is-error .el-input__inner, .el-form-item.is-error .el-input__inner:focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:focus, .el-message-box__input input.invalid, .el-message-box__input input.invalid:focus {
    border-color: #f56c6c;
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-form-item--small .el-form-item__error {
    padding-top: 2px;
}

.el-form-item__error {
    z-index: 99;
}

.el-form-item__error {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    /* padding-top: 4px; */
    position: absolute;
    top: 100%;
    left: 0;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

[data-v-f9a245ba] .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color: #606266;
    /* line-height: 40px; */
    padding: 0 12px 0 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-col-24 {
    width: 100%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.distpicker-address-wrapper {
    color: #9caebf;
}

label {
    cursor: default;
}

[data-v-f9a245ba] .distpicker-address-wrapper select {
    width: 164px;
    font-size: 14px;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
}

.margin-t-10[data-v-f9a245ba] {
    margin-top: 10px;
}

.el-col-24 {
    width: 100%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

[data-v-f9a245ba] .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color: #606266;
    /* line-height: 40px; */
    padding: 0 12px 0 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-form-item__content {
    /* line-height: 40px; */
    position: relative;
    font-size: 14px;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input__inner {
    -webkit-appearance: none;
    /* background-color: #fff; */
    /* background-image: none; */
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    /* height: 40px; */
    /* line-height: 40px; */
    outline: 0;
    padding: 0 15px;
    /* -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1); */
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

.width-500[data-v-f9a245ba] {
    width: 500px;
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

[data-v-f9a245ba] .el-form-item {
    padding-right: 150px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

[data-v-f9a245ba] .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color: #606266;
    /* line-height: 40px; */
    padding: 0 12px 0 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-col-12 {
    width: 50%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.width-400[data-v-f9a245ba] {
    width: 400px;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    /* width: 100%; */
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}

.el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
    /* color: #c0c4cc; */
    cursor: not-allowed;
    background-image: none;
    /* background-color: #fff; */
    /* border-color: #ebeef5; */
}

.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}

.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    /* cursor: pointer; */
    background: #fff;
    border: 1px solid #dcdfe6;
    /* color: #606266; */
    -webkit-appearance: none;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    /* -webkit-transition: .1s; */
    transition: .1s;
    font-weight: 500;
    /* padding: 12px 20px; */
    /* font-size: 14px; */
    /* border-radius: 4px; */
}

.el-form-item--mini .el-form-item[data-v-f9a245ba], .el-form-item--small.el-form-item[data-v-f9a245ba] {
    margin-bottom: 14px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.agree[data-v-f9a245ba] {
    font-size: 14px;
    color: #333;
    line-height: 40px;
}

.el-checkbox-group {
    font-size: 0;
}

[data-v-f9a245ba] .el-checkbox {
    margin-right: 15px;
}

.el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* margin-right: 30px; */
}

.el-checkbox, .el-checkbox__input {
    display: inline-block;
    position: relative;
    white-space: nowrap;
}

.el-checkbox__input {
    cursor: pointer;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
}

.el-checkbox, .el-checkbox__input {
    display: inline-block;
    position: relative;
    white-space: nowrap;
}

.el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    /* -webkit-transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46), background-color .25s cubic-bezier(.71,-.46,.29,1.46); */
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46), background-color .25s cubic-bezier(.71,-.46,.29,1.46);
}

.el-checkbox__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
}

input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
}

.el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
}

.agreement[data-v-f9a245ba] {
    color: #0a2658;
    cursor: pointer;
}

.btn-area[data-v-f9a245ba] {
    margin: 20px 0 0 280px;
}

.submit-btn[data-v-f9a245ba] {
    width: 140px;
    font-size: 14px;
    color: #fff;
}

.el-button--primary {
    /* color: #fff; */
    background-color: #409eff;
    border-color: #409eff;
}

</style>