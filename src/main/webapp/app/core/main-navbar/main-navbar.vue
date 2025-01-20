<template>
<main data-v-1a259ece="" class="el-main main" id="mainMenu">
    <div data-v-0c0d23e9="" data-v-1a259ece="">
        <div data-v-0c0d23e9="" class="search">
            <form data-v-0c0d23e9="" class="el-form demo-form-inline">
                <div data-v-0c0d23e9="" class="el-row" style="margin-left: -1px; margin-right: -1px;">
                    <div data-v-0c0d23e9="" class="el-col el-col-24" style="padding-left: 1px; padding-right: 1px;">
                        <div data-v-0c0d23e9="" class="el-row">
                            <div data-v-0c0d23e9="" class="el-col el-col-6">
                                <div data-v-0c0d23e9="" role="radiogroup" class="el-radio-group">
                                    <label data-v-0c0d23e9="" role="radio" aria-checked="true" tabindex="0" class="el-radio-button is-active">
                                        <input type="radio" tabindex="-1" autocomplete="off" class="el-radio-button__orig-radio" value="今年">
                                        <span class="el-radio-button__inner">今年</span>
                                    </label>

                                    <label data-v-0c0d23e9="" role="radio" tabindex="-1" class="el-radio-button">
                                        <input type="radio" tabindex="-1" autocomplete="off" class="el-radio-button__orig-radio" value="上一年">
                                        <span class="el-radio-button__inner">上一年</span>
                                    </label>

                                    <label data-v-0c0d23e9="" role="radio" tabindex="-1" class="el-radio-button">
                                        <input type="radio" tabindex="-1" autocomplete="off" class="el-radio-button__orig-radio" value="前三年">
                                        <span class="el-radio-button__inner">前三年</span>
                                    </label>
                                </div>
                            </div>

                            <div data-v-0c0d23e9="" class="add-inp el-col el-col-8">
                                <div data-v-0c0d23e9="" class="el-form-item el-form-item--small">
                                    <label class="el-form-item__label" style="width: 60px;">日期</label>
                                    <div class="el-form-item__content" style="margin-left: 60px;">
                                        <div data-v-0c0d23e9="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month" style="width: 45%;"><!---->
                                            <input type="text" autocomplete="off" name="" placeholder="开始日期" class="el-input__inner">
                                            <span class="el-input__prefix">
                                                <i class="el-input__icon el-icon-date"></i><!---->
                                            </span>
                                            
                                            <span class="el-input__suffix">
                                                <span class="el-input__suffix-inner">
                                                    <i class="el-input__icon"></i><!----><!----><!----><!---->
                                                </span><!---->
                                            </span><!----><!---->
                                        </div>
                                        
                                        <span data-v-0c0d23e9="" class="at">至</span>
                                        <div data-v-0c0d23e9="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month" style="width: 45%;"><!---->
                                            <input type="text" autocomplete="off" name="" placeholder="结束日期" class="el-input__inner">
                                            <span class="el-input__prefix">
                                                <i class="el-input__icon el-icon-date"></i><!---->
                                            </span>
                                            
                                            <span class="el-input__suffix">
                                                <span class="el-input__suffix-inner">
                                                    <i class="el-input__icon"></i><!----><!----><!----><!---->
                                                </span><!---->
                                            </span><!----><!---->
                                        </div><!---->
                                    </div>
                                </div>
                            </div>

                            <div data-v-0c0d23e9="" class="el-col el-col-8">
                                <button data-v-0c0d23e9="" type="button" class="el-button el-button--primary el-button--small" style="background-color: #409eff;"><!---->
                                    <i class="el-icon-search"></i>
                                    <span>查询</span>
                                </button><!---->
                                
                                <button data-v-0c0d23e9="" type="button" class="el-button el-button--default el-button--small"><!---->
                                    <i class="el-icon-refresh-right"></i>
                                    <span>重置</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
        <span data-v-0c0d23e9="">
            <div data-v-0c0d23e9="" class="num-div">
                <div data-v-0c0d23e9="" class="el-row" style="margin-left: -10px; margin-right: -10px;">
                    <div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;">
                        <div data-v-0c0d23e9="" class="txt-wrap border-r">
                            <img data-v-0c0d23e9="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAvCAYAAAB+OePrAAADT0lEQVRYhdWZz2sTQRTHP7tJ80sSmyqtgj0pagW1Iohgeyj4B5Se/NVLUfEgerFFD6JeFFoPCgrSiwfb0ksRBG+WXip4sKgI1UIPgiBejP0hjTZNViadjTHZTfbHpMYPDOmUfTPfvJn38mZWo4iu9iWzEwKGgF4gSW35DjwB+oHVqbeJssmCNtMPApdqLM4kKedKA1etHtBtDHvlZyeg1bh1yrnO2X0LO5FN8nPajUs8Ys7RZGceLNqHdYudJ+sKXUbyfSAFGLKZGIpbSs4VcuOEYL1FshV6vUWynci6imQr/ovAsfzFGR6Pt8olaVE8X+b8iWXXRmUih8fjQthroFmVMr9YLXd3PQnERmStqx7X2FVBDN5YySeNgZuxQn9+Lutq/F17AwV7P1SObsPn6H7tJbaeHLgVq9jfSGxF/is6jXL3b3gyj23S8s0NNfPkig4zcfgQg08RWAxCWodwX4hIDtbOhkaBSWAieKhyglcuUoh7vgUmk7Bq4bDMqkFm/c9Tsj2oNqZSka8SMNYMPwKuzKLGyQbI8jN7LXIaGHUssjRPvpzKkPqWs3xWbPXZGMxH1/uFjb5NJ9fdUFWlkci7PAKMAAdkrVmIICV5Uuw7U6ACBoDbxcM4zpPHuqw9IpZ4brsygSbCk++BMfymoKUAjKgu5v7w0CwVfYl8tnU9mmtEI3Ddl0ghbnpzzQSa9AmxnkWKRG2VBxUjwrHHs8jZjas3jnvOkx8bQa+WtB3mySoc9Jwn0xtXmuzwnCef7lEk4atcnbDtBk94/u2O5nx4M22gP/r117+MNtvBlj0vWnLNq2UJYQ1jfwDjiK2/Pnv2ZOtP+OLqbqyIqEbuQtjp0+88e3LfildL10x6Fnl4GUKKToMVEFeEE7q82BR0uLGO5aBj0eWU1SO5lMfAgtbVvnQPuOxyugJai062293WNtoDGEer2iwAbeKrBWWRqXl9sRTLguN7MhHJu/VKkVzMRSFQ9DUVbx/W3sTvuLledsCQdF4e13WM1eFdjiPu3q8oEHhXCnR4xnGOId8NnikKRLekpH1/adWgukwQx9Gd0qsifThBPCeeF3Zlx1mBquW2QpT/PaIeFGlVFG6iWBBHIxkQM8ALkQcB+2QG/AYfO93rv2Bx/QAAAABJRU5ErkJggg==" alt="" class="im img-size padding-l-40">
                            <span data-v-0c0d23e9="" class="txt-name">研发项目</span>
                            <span data-v-0c0d23e9="" class="txt-num">1</span>
                        </div>
                    </div>
                    
                    <div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;">
                        <div data-v-0c0d23e9="" class="txt-wrap border-r">
                            <img data-v-0c0d23e9="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAEdElEQVRogeWZW4gbVRzGfzOZXHfT7e52tdX6YBT0qV76IsoKFUEQH8qqEKx9cGmLlGpF7HYtSpUiyK59cKEPVqF4qVa8oSD2waWoqyiloC9ecCvFLXbrarfZbHb2kpyRk5zEbJJJZpJJiPhBmMnMme98+c//dk40irDl5rn8lwAwCjwM9NAazAJvAvuA5VPfr6k6qWFzfQR4vEWC8+hWc5rAcK3Bus317erYD2gt+vSrOXc6+ZV2wvPuMeGExCPk53LkmnauYoujJ6LXNsnvF3fFk44HOxZ+9ETUD3wI3FevMi9h5yqVsLNdRONS+F1N1OEaboRf2Saas3AdnBIjBxeY/CVT14TX3+hj6LlIXc8Ww43FvYHlDY0bi3fkT4aeb9xijcKNxetyq3YQ3lb4XwjvaqIO1/jPpsPWB5zDdNhvVR9Yl/B2SIcttfiCDmei8FMEzoUgYYCpQ1hAVxr863QMAcnxDhlPiWpcboRrDsbYCv60F8a7YbkCixRvBkC/32Apd+kCMAa8CFyuxOkmq1Rfvdrg2zUwHIPPeiqLtkEY2A9MAtsqDWmaq8jQeq8PTja2VuoF3gI2qQV0IWI9Ff71qRUu/S2y5z9G4NdwhVe6Xkds9bulHgIk8dP5C02pnOeDOdEeQ1r8oTylpxa/Y4ufOR8ciIFoTjNxBBgHLnpO/8m6XBZpEtYCz0pqo2jbrRZqOqYUPNH8jmYQeKbYVaRXbigZFMufzPwpysql36+xtvvfHCeLi23Km7HQlqqXcW0ud187nwtwq0+HYNkwqXNAUxbfAxxWm52OcfU1OgdHCwsjXtkA39lke98DKbSzwg199h2LJ4OIeJmsdwwVoCPq+JsdR98Veqz4+18zgovTgkXTIhTOmXkqZPNwykL7XWRzmHWV8wDQ/hDoLy8jHgyAb9Wtmwy1lgyr3uA6O5IXxjp6lOvIMbFDw6ndU+fExpMfLye2xoNRmVpnbXKU/vYKrIB1u0HmiPM8afTPw7wFpgWdq3xwo3SVLtUPJFTUOsWdwBdyLzsU1gbGjnVODt7Az2VW+yaN7wkT0pB5LYJ1q8/xBHnh6a86S4U3VIC+VJv/gUXT+mhXPPkIF8R84e60QB9bwrfXzFpbbA+4El0DyUYLkGyE0uq437g3BfksM6syiA5iMIDYU54eGsBUo6VCqjsA3Aa8S5CVrODZnE9a9xhk3oggHgs20BRXxA9elfzTQDw9Ed1Bwno1e0VavnkVdNxbaoP36dVMepsqWv5H9IGn9MYtSZmdjnnJWQGS/7J0lZT6FTIXn22U1dic9FnrdYHugc0XLAhpEC4EiDTMIVS1TKtG/XBxb1I3RK7ieQJZ8veuqpqyNZmWJ1pRd1ipyaobmdcj++jRHm2Eo6TJGlUGhpKFhFmtV3E96SbfbkAWpKc8oHtJ1YoCPMmuNXadtqmthnqWzZfUv83HS2+0Yrf2uGrMZAcq36oTyHFyvHyuTLREKyxeDNnEDQB3A5vlml/t18hAk0F3Bvhc5umqO1nAP2TuIp0+0Ix/AAAAAElFTkSuQmCC" alt="" class="im img-size padding-l-20">
                            <span data-v-0c0d23e9="" class="txt-name">科技成果</span>
                            <span data-v-0c0d23e9="" class="txt-num">0</span>
                        </div>
                    </div>
                    
                    <div data-v-0c0d23e9="" class="el-col el-col-4" style="padding-left: 10px; padding-right: 10px;">
                        <div data-v-0c0d23e9="" class="txt-wrap border-r">
                            <img data-v-0c0d23e9="" src="data:image/png;base64,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" alt="" class="im img-size padding-l-20">
                            
                            <span data-v-0c0d23e9="" class="txt-name">成果转化</span>
                            <span data-v-0c0d23e9="" class="txt-num">0</span>
                        </div>
                    </div>
                
                    <div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;">
                        <div data-v-0c0d23e9="" class="txt-wrap border-r">
                            <img data-v-0c0d23e9="" src="data:image/png;base64,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" alt="" class="im img-size padding-l-20">
                            <span data-v-0c0d23e9="" class="txt-name">高新产品(服务)</span>
                            <span data-v-0c0d23e9="" class="txt-num">0</span>
                        </div>
                    </div>
                
                    <div data-v-0c0d23e9="" class="el-col el-col-5" style="padding-left: 10px; padding-right: 10px;">
                        <div data-v-0c0d23e9="" class="txt-wrap">
                            <img data-v-0c0d23e9="" src="data:image/png;base64,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" alt="" class="im img-size padding-l-20">
                            <span data-v-0c0d23e9="" class="txt-name">知识产权</span>
                            <span data-v-0c0d23e9="" class="txt-num">0</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <div data-v-0c0d23e9="" class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div><!----><!---->
                </div>
            </div>
            
            <div data-v-0c0d23e9="" class="chart-wrap el-row">
                <div data-v-0c0d23e9="" class="chartOdd el-col el-col-12">
                    <div data-v-0c0d23e9="" id="echarts_pie2" class="echarts-pie" _echarts_instance_="ec_1734007625160" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                        <div style="position: relative; width: 670px; height: 228px; padding: 0px; margin: 0px; border-width: 0px;">
                            <img data-v-0c0d23e9="" src="/content/images/yanfazhichu.png" alt="" class="data_show">
                        </div>
                        
                        <div></div>
                    </div>
                </div>
                
                <div data-v-0c0d23e9="" class="chartEven el-col el-col-12">
                    <div data-v-0c0d23e9="" id="echarts_pie3" class="echarts-pie" _echarts_instance_="ec_1734007625159" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                        <div style="position: relative; width: 656px; height: 228px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                            <img data-v-0c0d23e9="" src="/content/images/kemuzhanbi.png" alt="" class="data_show">
                        </div>
                        
                        <div></div>
                    </div>
                </div>
                
                <div data-v-0c0d23e9="" class="chartOdd el-col el-col-12">
                    <div data-v-0c0d23e9="" id="echarts_pie4" class="echarts-pie" _echarts_instance_="ec_1734007625161" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                        <div style="position: relative; width: 670px; height: 228px; padding: 0px; margin: 0px; border-width: 0px;">
                            <img data-v-0c0d23e9="" src="/content/images/fuwushouru.png" alt="" class="data_show">
                        </div>
                
                        <div></div>
                    </div>
                </div>
                
                <div data-v-0c0d23e9="" class="chartEven el-col el-col-12">
                    <div data-v-0c0d23e9="" id="echarts_pie" class="echarts-pie" _echarts_instance_="ec_1734007625158" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                        <div style="position: relative; width: 656px; height: 228px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                            <img data-v-0c0d23e9="" src="/content/images/zhishichanquan.png" alt="" class="data_show">
                        </div>
                        
                        <div></div>
                    </div>
                </div>
            </div>
        </span><!---->
    </div>
</main>
</template>

<script lang="ts" src="./main-navbar.component.ts"></script>

<style scoped>
.main[data-v-1a259ece] {
    width: auto;
    /* padding-right: 20px; */
    margin: 0 auto;
    padding: 0 20px;
    overflow: hidden;
}

.el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    /* overflow: auto; */
}

main {
    unicode-bidi: isolate;
}

.search[data-v-0c0d23e9] {
    width: 100%;
    height: 60px;
    float: left;
    line-height: 55px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 15px;
    border-radius: 10px;
    padding-top: 0;
    background-color: #fff;
    /* -webkit-box-shadow: 0 8px 12px 0 rgba(0, 0, 0, .08); */
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, .08);
}

.search[data-v-0c0d23e9], .ul-form[data-v-0c0d23e9], .ul-search[data-v-0c0d23e9], [data-v-0c0d23e9] .create {
    padding: 0;
}

form {
    margin: 0;
    padding: 0;
    display: block;
    unicode-bidi: isolate;
    
}

.el-row[data-v-0c0d23e9], .el-row[data-v-0c0d23e9]:last-child {
    margin-bottom: 0;
    width: 100%;
    height:auto;
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    position: relative;
}

.search .el-col {
    text-align: right;
}

.el-col-24 {
    width: 100%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-row[data-v-0c0d23e9], .el-row[data-v-0c0d23e9]:last-child {
    margin-bottom: 0;
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    position: relative;
}

.search .el-col {
    text-align: right;
}

.el-col-6 {
    width: 25%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-radio-group {
    font-size: 0;
}

.el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}

.el-radio-button {
    position: relative;
    display: inline-block;
    outline: 0;
}

label {
    cursor: default;
}

.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
}

input {
    font-size: 100%;
    margin: 0;
    padding: 0;
}

input[type="radio" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
}

[data-v-0c0d23e9] .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    border-radius: 5px;
    border: none;
    background-color: #85c2f9;
    color: #fff;
    margin-right: 10px;
    font-size: 12px;
}

.el-radio-button__inner, .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}

.el-radio-button__inner, .el-submenu__title {
    /* -webkit-box-sizing: border-box; */
    position: relative;
    white-space: nowrap;
}

.el-radio-button {
    position: relative;
    display: inline-block;
    outline: 0;
}

label {
    cursor: default;
}

.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
}

button, input, select, textarea {
    font-size: 100%;
}

input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}

input[type="radio" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
}

[data-v-0c0d23e9] .el-radio-button .el-radio-button__inner {
    border-radius: 5px;
    border: none;
    background-color: #dedede;
    color: #474747;
    margin-right: 10px;
    font-size: 12px;
}

.el-radio-button__inner {
    background: #fff;
    /* border: 1px solid #dcdfe6; */
    font-weight: 500;
    /* border-left: 0; */
    /* color: #606266; */
    -webkit-appearance: none;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    cursor: pointer;
    /* -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1); */
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 12px 20px;
    /* font-size: 14px; */
    /* border-radius: 0; */
}

.el-radio-button__inner, .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}

.el-radio-button__inner, .el-submenu__title {
    /* -webkit-box-sizing: border-box; */
    position: relative;
    white-space: nowrap;
}

.el-radio-button {
    position: relative;
    display: inline-block;
    outline: 0;
}

label {
    cursor: default;
}

.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
}

input {
    font-size: 100%;
    margin: 0;
    padding: 0;
}

input[type="radio" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
}

[data-v-0c0d23e9] .el-radio-button .el-radio-button__inner {
    border-radius: 5px;
    border: none;
    background-color: #dedede;
    color: #474747;
    margin-right: 10px;
    font-size: 12px;
}

.el-radio-button__inner {
    background: #fff;
    /* border: 1px solid #dcdfe6; */
    font-weight: 500;
    /* border-left: 0; */
    /* color: #606266; */
    -webkit-appearance: none;
    text-align: center;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    cursor: pointer;
    /* -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1); */
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 12px 20px;
    /* font-size: 14px; */
    /* border-radius: 0; */
}

.el-radio-button__inner, .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}

.el-radio-button__inner, .el-submenu__title {
    /* -webkit-box-sizing: border-box; */
    position: relative;
    white-space: nowrap;
}

.search .el-col {
    text-align: right;
}

.add-inp[data-v-0c0d23e9] {
    padding-top: 5px;
}

.el-col-8 {
    width: 33.33333%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.search .el-form-item[data-v-0c0d23e9] {
    border: 0 solid #eee;
}

.el-form-item--small.el-form-item {
    margin-bottom: 5px;
}

.search .el-form-item {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    /* margin-bottom: -1px; */
    margin-right: -1px;
    padding: 5px;
}

.search .el-form-item .el-form-item__label {
    text-align: right;
    padding-right: 10px;
}

.el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-form-item__label {
    /* text-align: right; */
    vertical-align: middle;
    float: left;
    font-size: 14px;
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

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
    display: inline-block;
}

.el-date-editor {
    /* position: relative; */
    /* display: inline-block; */
    text-align: left;
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input--prefix .el-input__inner {
    padding-left: 30px;
}

.el-input--suffix .el-input__inner {
    padding-right: 30px;
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

.el-input__inner {
    font-size: inherit;
}

.el-input__prefix {
    height: 100%;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
}

.el-input__prefix {
    left: 5px;
}

.el-input__prefix, .el-input__suffix {
    position: absolute;
    top: 0;
    text-align: center;
}

.el-input__prefix, .el-input__suffix {
    /* -webkit-transition: all .3s; */
    color: #c0c4cc;
}

.el-input--small .el-input__icon {
    line-height: 32px;
}

.el-input__icon {
    width: 25px;
    text-align: center;
    /* line-height: 40px; */
}

.el-input__icon, .el-input__prefix {
    height: 100%;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    /* line-height: 1; */
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-input__suffix {
    height: 100%;
    right: 5px;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
    pointer-events: none;
}

.el-input__prefix, .el-input__suffix {
    position: absolute;
    top: 0;
    text-align: center;
}

.el-input__prefix, .el-input__suffix {
    /* -webkit-transition: all .3s; */
    color: #c0c4cc;
}

.el-input__suffix-inner {
    pointer-events: all;
}

.el-input--small .el-input__icon {
    line-height: 32px;
}

.el-input__icon {
    width: 25px;
    text-align: center;
    /* line-height: 40px; */
}

.el-input__icon, .el-input__prefix {
    height: 100%;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
}

i {
    font-style: italic;
}

.el-input__icon:after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
}

.at {
    margin-left: 2.5%;
    margin-right: 2.5%;
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

.el-date-editor {
    /* position: relative; */
    /* display: inline-block; */
    text-align: left;
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input--prefix .el-input__inner {
    padding-left: 30px;
}

.el-input--suffix .el-input__inner {
    padding-right: 30px;
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

input:not([type="image" i], [type="range" i], [type="checkbox" i], [type="radio" i]) {
    overflow-clip-margin: 0px !important;
    overflow: clip !important;
}

input[type="text" i] {
    padding-block: 1px;
    padding-inline: 2px;
}

input:not([type="file" i], [type="image" i], [type="checkbox" i], [type="radio" i]) {
}

input {
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-variant-alternates: ;
    font-variant-position: ;
    font-variant-emoji: ;
    font-weight: ;
    font-stretch: ;
    font-family: ;
    font-optical-sizing: ;
    font-size-adjust: ;
    font-kerning: ;
    font-feature-settings: ;
    font-variation-settings: ;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
    cursor: text;
}

.el-input__icon, .el-input__prefix {
    height: 100%;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
}

.el-input__prefix {
    left: 5px;
}

.el-input__prefix, .el-input__suffix {
    position: absolute;
    top: 0;
    text-align: center;
}

.el-input__prefix, .el-input__suffix {
    /* -webkit-transition: all .3s; */
    color: #c0c4cc;
}

.el-input--small .el-input__icon {
    line-height: 32px;
}

.el-input__icon {
    width: 25px;
    text-align: center;
    /* line-height: 40px; */
}

.el-input__icon, .el-input__prefix {
    height: 100%;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    /* line-height: 1; */
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-date:before {
    content: "\e78e";
}

.el-input__icon:after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
}

.el-input__suffix {
    height: 100%;
    right: 5px;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
    pointer-events: none;
}

.el-input__prefix, .el-input__suffix {
    position: absolute;
    top: 0;
    text-align: center;
}

.el-input__prefix, .el-input__suffix {
    /* -webkit-transition: all .3s; */
    color: #c0c4cc;
}

.el-input__suffix-inner {
    pointer-events: all;
}

.el-input--small .el-input__icon {
    line-height: 32px;
}

.el-input__icon {
    width: 25px;
    text-align: center;
    /* line-height: 40px; */
}

.el-input__icon, .el-input__prefix {
    height: 100%;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
}

i {
    font-style: italic;
}

.el-input__icon:after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
}

.search .el-col {
    text-align: right;
}

.el-col-8 {
    width: 33.33333%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.search .el-button {
    margin-top: 8px;
}

.search .el-button, .search .el-button+.el-button, .ul-form .el-button, .ul-form .el-button+.el-button, .ul-search .el-button, .ul-search .el-button+.el-button {
    margin: 0 5px 10px 5px;
}

.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}

.el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}

.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
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

.el-button, .el-checkbox, .el-checkbox-button__inner, .el-empty__image img, .el-image-viewer__btn, .el-radio {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    /* line-height: 1; */
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-search:before {
    content: "\e778";
}

.el-button [class*=el-icon-]+span {
    margin-left: 5px;
}

.create .el-button, .create .el-button+.el-button, .search .el-button, .search .el-button+.el-button, .ul-form .el-button, .ul-form .el-button+.el-button, .ul-search .el-button, .ul-search .el-button+.el-button {
    margin: 0 5px 10px 5px;
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
    cursor: pointer;
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

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    /* line-height: 1; */
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-refresh-right:before {
    content: "\e6c8";
}

.el-button [class*=el-icon-]+span {
    margin-left: 5px;
}

.el-row:after {
    clear: both;
}

.el-row:after, .el-row:before {
    display: table;
}

.el-row:after {
    clear: both;
}

.el-row:after, .el-row:before {
    display: table;
}

.num-div[data-v-0c0d23e9] {
    width: 100%;
    height:10%;
    border-radius: 10px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 25px 0 25px 0;
    float: left;
}

.el-row[data-v-0c0d23e9], .el-row[data-v-0c0d23e9]:last-child {
    margin-bottom: 0;
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-row:after, .el-row:before {
    display: table;
}

.el-col-5 {
    width: 20.83333%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.border-r[data-v-0c0d23e9] {
    border-right: 2px dashed #e3e0ff;
}

.txt-wrap[data-v-0c0d23e9] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 40px;
    height: 50px;
}

.img-size[data-v-0c0d23e9] {
    width: 35px;
    height: 35px;
}

img {
    border: 0;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.txt-name[data-v-0c0d23e9] {
    margin-left: 10px;
    font-size: 16px;
}

.txt-num[data-v-0c0d23e9] {
    font-size: 18px;
    font-weight: 700;
    margin-top: -20px;
}

.txt-name[data-v-0c0d23e9] {
    margin-left: 10px;
    font-size: 16px;
}

.txt-num[data-v-0c0d23e9] {
    font-size: 18px;
    font-weight: 700;
    margin-top: -20px;
}

.el-col-5 {
    width: 20.83333%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.border-r[data-v-0c0d23e9] {
    border-right: 2px dashed #e3e0ff;
}

.txt-wrap[data-v-0c0d23e9] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 40px;
    height: 50px;
}

.el-col-4 {
    width: 16.66667%;
}

.border-r[data-v-0c0d23e9] {
    border-right: 2px dashed #e3e0ff;
}

.txt-wrap[data-v-0c0d23e9] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 40px;
    height: 50px;
}

.el-col-5 {
    width: 20.83333%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.border-r[data-v-0c0d23e9] {
    border-right: 2px dashed #e3e0ff;
}

.txt-wrap[data-v-0c0d23e9] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 40px;
    height: 50px;
}

.el-col-5 {
    width: 20.83333%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.txt-wrap[data-v-0c0d23e9] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 40px;
    height: 50px;
}

.el-row:after {
    clear: both;
}

.el-row:after, .el-row:before {
    display: table;
}

.el-dialog__wrapper {
    top: -50px;
}

.el-dialog__wrapper {
    position: fixed;
    /* top: 0; */
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}

.el-dialog {
    border-radius: 10px;
}

.el-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    /* border-radius: 2px; */
    /* -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3); */
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    width: 50%;
}

.el-dialog__header {
    padding: 20px 20px 10px;
}

.el-dialog__title {
    color: #0976bb;
    font-weight: 700;
}

.el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    /* color: #303133; */
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

.el-dialog__headerbtn .el-dialog__close {
    color: #909399;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    /* line-height: 1; */
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.chart-wrap[data-v-0c0d23e9] {
    width: 100%;
    height:auto;
    margin: 0 auto;
    float: left;
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-row:after, .el-row:before {
    display: table;
}

.chartOdd[data-v-0c0d23e9] {
    background-color: #fff;
    border-radius: 10px;
    margin-right: 1%;
    margin-bottom: 10px;
    width: 50%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.echarts-pie[data-v-0c0d23e9] {
    width: 50%;
    height: 50%;
    padding: 20px;
    margin: 0 auto;
}

canvas[Attributes Style] {
    aspect-ratio: auto 670 / 228;
}

canvas {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.chartEven[data-v-0c0d23e9] {
    background-color: #fff;
    width: 49%;
    border-radius: 10px;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

</style>
