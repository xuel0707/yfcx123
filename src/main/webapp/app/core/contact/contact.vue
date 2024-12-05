<template>
    <div class="page-container">
        <jhi-navbar class="nav"></jhi-navbar> 
            <div data-v-59045788="" data-v-08ae8c56="" class="call">
            <div data-v-59045788="" class="call-png"></div>
            <div data-v-59045788="" class="charges">
            <p data-v-59045788="" class="title">联系我们</p>
            <p data-v-59045788="" class="title2">contact us</p>
            <div data-v-59045788="" class="cpyfw">
                <div data-v-59045788="" class="el-col el-col-24 el-col-xs-8 el-col-sm-8 el-col-md-8 el-col-lg-8 el-col-xl-8">
                <div data-v-59045788="" class="cpyfw-wrap">
                    <img data-v-59045788="" src="data:image/png;base64,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" class="cpyfw-wrap-png"><div data-v-59045788="" class="message"><p data-v-59045788="" class="contactTxt">公司地址</p><p data-v-59045788="" class="contactDetail">深圳市宝安区新安街道办宝民一路广场大厦</p></div></div></div><div data-v-59045788="" class="el-col el-col-24 el-col-xs-8 el-col-sm-8 el-col-md-8 el-col-lg-9 el-col-xl-9"><div data-v-59045788="" class="cpyfw-wrap"><img data-v-59045788="" src="data:image/png;base64,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" alt="" class="cpyfw-wrap-png">
                    <div data-v-59045788="" class="message">
                    <p data-v-59045788="" class="contactTxt">联系方式</p>
                    <p data-v-59045788="" class="contactDetail"> 客服电话：0755-27960108  </p>
                    </div>
                    </div>
                </div>
                
                <div data-v-59045788="" class="el-col el-col-24 el-col-xs-8 el-col-sm-8 el-col-md-8 el-col-lg-7 el-col-xl-7">
                    <div data-v-59045788="" class="cpyfw-wrap">
                    <img data-v-59045788="" src="data:image/png;base64,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" alt="" class="cpyfw-wrap-png">
                    <div data-v-59045788="" class="message">
                        <p data-v-59045788="" class="contactTxt">电子邮箱</p>
                        <p data-v-59045788="" class="contactDetail">wujia@szyfcx.com </p>
                    </div>
                    </div>
                </div>
                </div>
                
                <div data-v-59045788="" class="address-png">
                <div data-v-59045788="" class="building-medium">
                    <div data-v-59045788="" class="building-png"></div>
                </div>
                </div>
            </div>
        </div>
        <jhi-footer class="footer"></jhi-footer>  
    </div>
</template>


<script  lang="ts">

import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue'; // 导入全局组件
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';

export default {
  name: 'Contact',
  components: {
    JhiNavbar, // 注册全局组件
    JhiFooter, // 注册全局组件
  },
  methods: {

  },
  mounted() {
    
  },
};


</script>

<style scoped>
.nav {
    height: 160px;
}

.call[data-v-59045788] {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    padding-top: 5.625rem;
    padding-bottom: 6.25rem;
}

.call-png[data-v-59045788] {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
}

.call-png[data-v-59045788] {
    height: 25rem;
    background-image: url(content/img/contactBanner.35f7b3f9.png);
}

.charges[data-v-59045788] {
    padding-top: 3.125rem;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    background-color: #f0f0f0;
}

.title[data-v-59045788] {
    font-size: 2.125rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #2a2a2b;
    background-color: #f0f0f0;
}

.title2[data-v-59045788] {
    font-size: .875rem;
    font-family: DIN;
    font-weight: 300;
    line-height: 0;
    color: #a4a4a4;
    margin-bottom: 3.125rem;
    margin-top: .9375rem;
    letter-spacing: .1875rem;
}

.cpyfw[data-v-59045788] {
    width: 87.5rem;
    height: 17.5rem;
    margin: 0 auto;
    margin-top: 3.125rem;
    background-color: #fff;
    border-radius: .25rem;
    text-align: center;
}

@media only screen and (max-width: 767px) {
    .el-col-xs-8 {
        width: 33.33333%;
    }
}

.cpyfw-wrap[data-v-59045788] {
    margin: 0 auto;
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex
;
    padding: 5.9375rem 0 5.9375rem 5.625rem;
}

.cpyfw-wrap-png[data-v-59045788] {
    width: 4.25rem;
    height: 4.25rem;
}

fieldset, img {
    border: 0;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.message[data-v-59045788] {
    margin-left: 1.25rem;
    text-align: left;
}

.contactTxt[data-v-59045788] {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: #4d82ff;
    opacity: 1;
    margin-top: .4375rem;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.contactDetail[data-v-59045788] {
    color: #8f8f8f;
    font-size: .875rem;
    line-height: 0;
    margin-top: 1rem;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

@media only screen and (max-width: 767px) {
    .el-col-xs-8 {
        width: 33.33333%;
    }
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.cpyfw-wrap[data-v-59045788] {
    margin: 0 auto;
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex
;
    padding: 5.9375rem 0 5.9375rem 5.625rem;
}

.cpyfw-wrap-png[data-v-59045788] {
    width: 4.25rem;
    height: 4.25rem;
}

fieldset, img {
    border: 0;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.message[data-v-59045788] {
    margin-left: 1.25rem;
    text-align: left;
}

.contactTxt[data-v-59045788] {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: #4d82ff;
    opacity: 1;
    margin-top: .4375rem;
}

blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.contactDetail[data-v-59045788] {
    color: #8f8f8f;
    font-size: .875rem;
    line-height: 0;
    margin-top: 1rem;
}

.address-png[data-v-59045788] {
    height: 37.5rem;
    width: 87.5rem;
    background-image: url(content/img/contactMap.a7cd3095.png);
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
}

.address-png[data-v-59045788], .call-png[data-v-59045788] {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
}

.building-medium[data-v-59045788] {
    padding-top: 13.6875rem;
    padding-left: 41.125rem;
}

.building-medium .building-png[data-v-59045788] {
    height: 5.5rem;
    width: 7.25rem;
    background-image: url(content/img/contactBuilding.6b74b1fd.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>