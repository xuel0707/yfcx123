<template>
    <div class="page-container">
        <jhi-navbar class="nav"></jhi-navbar>

        <div data-v-80e23d10="" data-v-08ae8c56="" class="buss">
        
            <div data-v-80e23d10="" class="buss-png"></div>

            <div data-v-80e23d10="" class="charges">
                <p data-v-80e23d10="" class="title">两个方向</p>
                <p data-v-80e23d10="" class="title2">both directions</p>
                <div data-v-80e23d10="" class="direct-png">
                    <div data-v-80e23d10="" class="left-ky">
                        <div data-v-80e23d10="" class="left_png">
                            <img data-v-80e23d10="" src="/content/img/buss-ky.b01afcb3.png" alt="" style="width: 41.25rem; height: 20rem;">
                        </div>
                        <div data-v-80e23d10="">
                            <p data-v-80e23d10="" class="direct-text">企业科研管理</p>
                            <p data-v-80e23d10="" class="direct-text2">科研管理是研发费用核算的前端</p>
                        </div>
                    </div>
                    
                    <div data-v-80e23d10="" class="right-ky">
                        <div data-v-80e23d10="" class="right_png">
                            <img data-v-80e23d10="" src="/content/img/buss-money.a15daa07.png" alt="" style="width: 41.25rem; height: 20rem;">
                        </div>
                        
                        <div data-v-80e23d10="">
                            <p data-v-80e23d10="" class="direct-text">财务管理及费用核算</p>
                            <p data-v-80e23d10="" class="direct-text2">研发费用是科研管理的财务结果体现</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div data-v-80e23d10="" class="sixFunction">
                <p data-v-80e23d10="" class="title">六大功能</p>
                <p data-v-80e23d10="" class="title2">Six functions</p>
                <div data-v-80e23d10="" class="cpyfw">
                    <div data-v-80e23d10="" class="buss-card-first">
                        <img data-v-80e23d10="" src="/content/img/buss-icon1.ceab0ee3.png" class="card-png">
                        <div data-v-80e23d10="" class="card-word">
                            <p data-v-80e23d10="" class="card-text">研发基础工作的组建功能</p>
                            <p data-v-80e23d10="" class="card-text2"> 组织架构、岗位、研发人员角色、研发设备、相关制度等研发基础工作 </p>
                        </div>
                    </div>
                
                    <div data-v-80e23d10="" class="buss-card">
                        <div data-v-80e23d10="" class="card-png">
                            <img data-v-80e23d10="" src="/content/img/buss-icon2.c4cf8216.png" class="card-png">
                        </div>
                    
                        <div data-v-80e23d10="" class="card-word">
                            <p data-v-80e23d10="" class="card-text">研发过程与审批功能</p>
                            <p data-v-80e23d10="" class="card-text2">立项、实施、结题</p>
                        </div>
                    </div>
                
                    <div data-v-80e23d10="" class="buss-card">
                        <div data-v-80e23d10="" class="card-png">
                            <img data-v-80e23d10="" src="/content/img/buss-icon3.658032d6.png" class="card-png">
                        </div>
                        
                        <div data-v-80e23d10="" class="card-word">
                            <div data-v-80e23d10="" class="card-text">科研全流程管理功能</div>
                            <div data-v-80e23d10="" class="card-text2"> 研发项目、知识产权、科技成果、科技成果转化、高新收入和研发费用相印证 </div>
                        </div>
                    </div>
                
                <div data-v-80e23d10="" class="buss-card-first">
                    <div data-v-80e23d10="" class="card-png">
                        <img data-v-80e23d10="" src="/content/img/buss-icon4.9b82b642.png" class="card-png"></div>
                        <div data-v-80e23d10="" class="card-word">
                            <div data-v-80e23d10="" class="card-text">资料保存功能</div>
                            <div data-v-80e23d10="" class="card-text2">立项报告、会议记录、结题报告等</div>
                        </div>
                    </div>
            
                    <div data-v-80e23d10="" class="buss-card">
                        <div data-v-80e23d10="" class="card-png">
                            <img data-v-80e23d10="" src="/content/img/buss-icon5.88158698.png" class="card-png">
                        </div>
                        <div data-v-80e23d10="" class="card-word">
                            <div data-v-80e23d10="" class="card-text">研发费用财务管理功能</div>
                            <div data-v-80e23d10="" class="card-text2"> 研发费用结构表、辅助账及可加计扣除的 研发费用 </div>
                        </div>
                    </div>
                    
                    <div data-v-80e23d10="" class="buss-card">
                        <div data-v-80e23d10="" class="card-png">
                            <img data-v-80e23d10="" src="/content/img/buss-icon6.177d4603.png" class="card-png">
                        </div>
                        
                        <div data-v-80e23d10="" class="card-word">
                            <div data-v-80e23d10="" class="card-text">查询及一键导出功能</div>
                            <div data-v-80e23d10="" class="card-text2"> 各维度的组合查询及一键导出各部门所需资料及表单（科技、统计、税务等） </div>
                        </div>
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
  name: 'Bussiness',
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

.buss[data-v-80e23d10] {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding-top: 5.625rem;
    padding-bottom: 6.25rem;
}

.buss-png[data-v-80e23d10] {
    height: 25rem;
    background-image: url(content/img/buss-banner.b2dd399b.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
}

.charges[data-v-80e23d10] {
    padding-top: .625rem;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    background-color: #fff;
}

.title[data-v-80e23d10] {
    font-size: 2.125rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #2a2a2b;
    margin-top: 3.125rem;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    margin: 0;
    padding: 0;
}

.title2[data-v-80e23d10] {
    font-size: .875rem;
    font-family: DIN;
    font-weight: 300;
    line-height: 0;
    color: #fff;
    margin-bottom: 3.125rem;
    margin-top: .9375rem;
    letter-spacing: .1875rem;
}

p {
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.direct-png[data-v-80e23d10] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 87.5rem;
    margin: 0 auto;
}

img {
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
}

.direct-text[data-v-80e23d10] {
    padding-top: 1.25rem;
    height: 1.5rem;
    font-size: 1.5rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 0;
    color: #4d82ff;
    opacity: 1;
}

p {
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.direct-text2[data-v-80e23d10] {
    height: .875rem;
    font-size: .875rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 0;
    color: #8f8f8f;
    opacity: 1;
}

.sixFunction[data-v-80e23d10] {
    background-color: #fff;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    padding-top: .625rem;
}

.title[data-v-80e23d10] {
    font-size: 2.125rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #4a4a4a;
    margin-top: 3.125rem;
    background-color: #fff;
}

.title2[data-v-80e23d10] {
    font-size: .875rem;
    font-family: DIN;
    font-weight: 300;
    line-height: 0;
    color: #fff;
    margin-bottom: 3.125rem;
    margin-top: .9375rem;
    letter-spacing: .1875rem;
}

.cpyfw[data-v-80e23d10] {
    width: 87.5rem;
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex
;
    height: 34.375rem;
    margin: 0 auto;
    margin-top: 3.125rem;
    border-radius: .25rem;
    text-align: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.buss-card-first[data-v-80e23d10], .buss-card[data-v-80e23d10] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    height: 15rem;
    width: 28.12rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
}

.card-png[data-v-80e23d10] {
    float: left;
    width: 5.625rem;
    height: 5.625rem;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
    border: 0;
}

.card-word[data-v-80e23d10] {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    height: 8.75rem;
    width: 16.25rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.card-text[data-v-80e23d10] {
    text-align: left;
    height: 1.25rem;
    font-size: 1.25rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 0;
    color: #414141;
}

p {
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.card-text2[data-v-80e23d10] {
    height: 2.375rem;
    font-size: .875rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #8f8f8f;
    text-align: left;
    opacity: 1;
}

.buss-card[data-v-80e23d10] {
    margin-left: 1.5625rem;
}

.buss-card[data-v-80e23d10] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex
;
    height: 15rem;
    width: 28.12rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
}


</style>