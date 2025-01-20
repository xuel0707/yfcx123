<template>
  <div data-v-1a259ece="" data-v-c466b63c="" class="layout-container">
    <jhi-navbar></jhi-navbar>
    <top-navbar></top-navbar>
    <main data-v-1a259ece="" class="unfold" id="mainMenu">
        <div data-v-5a64cd80="" data-v-1a259ece="" class="index">
            <div data-v-993f93e8="" data-v-5a64cd80="">
                <div data-v-993f93e8="" class="ky-breadcrumb">
                    <span data-v-993f93e8="" class="breadcrumb-icon">
                        <span data-v-993f93e8="" class="position">
                            当前位置：
                        </span>
                    </span>
                    <div data-v-993f93e8="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb breadcrumb">
                        <span data-v-993f93e8="" class="el-breadcrumb__item">
                            <span role="link" class="el-breadcrumb__inner">
                                研发费用管理
                            </span>
                            <span role="presentation" class="el-breadcrumb__separator">
                                /
                            </span>
                        </span>
                        <span data-v-993f93e8="" class="el-breadcrumb__item" aria-current="page">
                            <span role="link" class="el-breadcrumb__inner">
                                会计凭证清单
                            </span>
                            <span role="presentation" class="el-breadcrumb__separator">
                                /
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div data-v-5a64cd80="" class="search module-container">
                <div data-v-5a64cd80="" class="search-wrap" style="height: 175px;">
                    <div data-v-5a64cd80="" class="content">
                        <form data-v-5a64cd80="" class="el-form demo-form-inline">
                            <div data-v-5a64cd80="" class="el-row" style="margin-left: -1px; margin-right: -1px;">
                                <div data-v-5a64cd80="" class="el-col el-col-24" style="padding-left: 1px; padding-right: 1px;">
                                    <div data-v-5a64cd80="" class="el-row">
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="proCode" class="el-form-item__label" style="width: 100px;">
                                                    项目编号
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-input el-input--small">
                                                        <!---->
                                                        <input type="text" autocomplete="off" placeholder="请输入项目编号" class="el-input__inner">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="proName" class="el-form-item__label" style="width: 100px;">
                                                    项目名称
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-input el-input--small">
                                                        <!---->
                                                        <input type="text" autocomplete="off" placeholder="请输入项目名称" class="el-input__inner">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="purpose" class="el-form-item__label" style="width: 100px;">
                                                    项目类型
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-select el-select--small">
                                                        <!---->
                                                        <div class="el-input el-input--small el-input--suffix">
                                                            <!---->
                                                            <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择"
                                                            class="el-input__inner">
                                                            <!---->
                                                            <span class="el-input__suffix">
                                                                <span class="el-input__suffix-inner">
                                                                    <i class="el-select__caret el-input__icon el-icon-arrow-up">
                                                                    </i>
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                </span>
                                                                <!---->
                                                            </span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;">
                                                            <div class="el-scrollbar" style="">
                                                                <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                                    <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                        <!---->
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                费用化
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                资本化
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-horizontal">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);">
                                                                    </div>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-vertical">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="psType" class="el-form-item__label" style="width: 100px;">
                                                    费用类型
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-select el-select--small">
                                                        <!---->
                                                        <div class="el-input el-input--small el-input--suffix">
                                                            <!---->
                                                            <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择"
                                                            class="el-input__inner">
                                                            <!---->
                                                            <span class="el-input__suffix">
                                                                <span class="el-input__suffix-inner">
                                                                    <i class="el-select__caret el-input__icon el-icon-arrow-up">
                                                                    </i>
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                </span>
                                                                <!---->
                                                            </span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;">
                                                            <div class="el-scrollbar" style="">
                                                                <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                                    <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                        <!---->
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                固定资产
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                领料
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                费用报销
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                无形资产
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                工资薪金
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                燃动费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                委外费用
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-horizontal">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);">
                                                                    </div>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-vertical">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-8">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--small">
                                                <!---->
                                                <i class="el-icon-search">
                                                </i>
                                                <span>
                                                    查询
                                                </span>
                                            </button>
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--default el-button--small">
                                                <!---->
                                                <i class="el-icon-refresh-right">
                                                </i>
                                                <span>
                                                    重置
                                                </span>
                                            </button>
                                            <button data-v-5a64cd80="" type="button" class="el-button choose el-button--primary el-button--small">
                                                <!---->
                                                <!---->
                                                <span>
                                                    凭证登记
                                                </span>
                                            </button>
                                            <button data-v-5a64cd80="" type="button" class="el-button choose el-button--primary el-button--small">
                                                <!---->
                                                <!---->
                                                <span>
                                                    导出
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div data-v-5a64cd80="" class="el-row">
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="hightEnterpriseSubject" class="el-form-item__label" style="width: 100px;">
                                                    高企科目
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-select el-select--small">
                                                        <!---->
                                                        <div class="el-input el-input--small el-input--suffix">
                                                            <!---->
                                                            <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择"
                                                            class="el-input__inner">
                                                            <!---->
                                                            <span class="el-input__suffix">
                                                                <span class="el-input__suffix-inner">
                                                                    <i class="el-select__caret el-input__icon el-icon-arrow-up">
                                                                    </i>
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                </span>
                                                                <!---->
                                                            </span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;">
                                                            <div class="el-scrollbar" style="">
                                                                <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                                    <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                        <!---->
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                人员人工费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                直接投入费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                折旧费用与长期待摊费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                无形资产摊销费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                设计费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                装备调试费用与试验费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                其他费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                委托外部研究开发费用
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-horizontal">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);">
                                                                    </div>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-vertical">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="additionalSubject" class="el-form-item__label" style="width: 100px;">
                                                    加计扣除科目
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-select el-select--small">
                                                        <!---->
                                                        <div class="el-input el-input--small el-input--suffix">
                                                            <!---->
                                                            <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择"
                                                            class="el-input__inner">
                                                            <!---->
                                                            <span class="el-input__suffix">
                                                                <span class="el-input__suffix-inner">
                                                                    <i class="el-select__caret el-input__icon el-icon-arrow-up">
                                                                    </i>
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                </span>
                                                                <!---->
                                                            </span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;">
                                                            <div class="el-scrollbar" style="">
                                                                <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                                    <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                        <!---->
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                直接从事研发活动人员工资薪金
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                直接从事研发活动人员五险一金
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                外聘研发人员的劳务费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                研发活动直接消耗材料费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                研发活动直接消耗燃料费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                研发活动直接消耗动力费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于中间试验和产品试制的模具、工艺装备开发及制造费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于不构成固定资产的样品、样机及一般测试手段购置费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于试制产品的检验费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                通过经营租赁方式租入的用于研发活动的仪器、设备租赁费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于研发活动的仪器的折旧费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于研发活动的设备的折旧费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于研发活动的软件的摊销费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于研发活动的专利权的摊销费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                新产品设计费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                新工艺规程制定费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                新药研制的临床试验费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                勘探开发技术的现场试验费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                技术图书资料费、资料翻译费、专家咨询费、高新科技研发保险费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                研发成果的检索、分析、评议、论证、鉴定、评审、评估、验收费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                知识产权的申请费、注册费、代理费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                职工福利费、补充养老保险费、补充医疗保险费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                差旅费、会议费
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                委托境内机构或个人进行研发活动所发生的费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                委托境外机构进行研发活动发生的费用
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                委托境外个人进行研发活动发生的费用
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-horizontal">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);">
                                                                    </div>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-vertical">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="certificateNumber" class="el-form-item__label" style="width: 100px;">
                                                    凭证号
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-input el-input--small">
                                                        <!---->
                                                        <input type="text" autocomplete="off" placeholder="请输入凭证号" class="el-input__inner">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="batchNo" class="el-form-item__label" style="width: 100px;">
                                                    批次号
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-input el-input--small">
                                                        <!---->
                                                        <input type="text" autocomplete="off" placeholder="请输入批次号" class="el-input__inner">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-5a64cd80="" class="el-row">
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="approStatus" class="el-form-item__label" style="width: 100px;">
                                                    状态
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-select el-select--small">
                                                        <!---->
                                                        <div class="el-input el-input--small el-input--suffix">
                                                            <!---->
                                                            <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择"
                                                            class="el-input__inner">
                                                            <!---->
                                                            <span class="el-input__suffix">
                                                                <span class="el-input__suffix-inner">
                                                                    <i class="el-select__caret el-input__icon el-icon-arrow-up">
                                                                    </i>
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                    <!---->
                                                                </span>
                                                                <!---->
                                                            </span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;">
                                                            <div class="el-scrollbar" style="">
                                                                <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                                    <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                        <!---->
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                凭证登记
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                审批中
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                完成
                                                                            </span>
                                                                        </li>
                                                                        <li data-v-5a64cd80="" class="el-select-dropdown__item">
                                                                            <span>
                                                                                不同意
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-horizontal">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);">
                                                                    </div>
                                                                </div>
                                                                <div class="el-scrollbar__bar is-vertical">
                                                                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="summaryArrivalDate" class="el-form-item__label" style="width: 100px;">
                                                    报账日期
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month">
                                                        <!---->
                                                        <input type="text" autocomplete="off" name="" placeholder="报账日期" class="el-input__inner">
                                                        <span class="el-input__prefix">
                                                            <i class="el-input__icon el-icon-date">
                                                            </i>
                                                            <!---->
                                                        </span>
                                                        <span class="el-input__suffix">
                                                            <span class="el-input__suffix-inner">
                                                                <i class="el-input__icon">
                                                                </i>
                                                                <!---->
                                                                <!---->
                                                                <!---->
                                                                <!---->
                                                            </span>
                                                            <!---->
                                                        </span>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5a64cd80="" class="el-col el-col-4">
                                            <div data-v-5a64cd80="" class="el-form-item el-form-item--small">
                                                <label for="summaryArrivalDate" class="el-form-item__label" style="width: 100px;">
                                                    所属日期
                                                </label>
                                                <div class="el-form-item__content" style="margin-left: 100px;">
                                                    <div data-v-5a64cd80="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month">
                                                        <!---->
                                                        <input type="text" autocomplete="off" name="" placeholder="所属日期" class="el-input__inner">
                                                        <span class="el-input__prefix">
                                                            <i class="el-input__icon el-icon-date">
                                                            </i>
                                                            <!---->
                                                        </span>
                                                        <span class="el-input__suffix">
                                                            <span class="el-input__suffix-inner">
                                                                <i class="el-input__icon">
                                                                </i>
                                                                <!---->
                                                                <!---->
                                                                <!---->
                                                                <!---->
                                                            </span>
                                                            <!---->
                                                        </span>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p data-v-5a64cd80="" class="search-down">
                        <i data-v-5a64cd80="" class="el-icon-d-arrow-left">
                        </i>
                    </p>
                </div>
            </div>
            <div data-v-5a64cd80="" class="table">
                <div data-v-5a64cd80="" class="el-table drag_table el-table--fit el-table--border el-table--fluid-height el-table--scrollable-x el-table--enable-row-transition"
                style="width: 100%; max-height: 550px;">
                    <div class="hidden-columns">
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                        <div data-v-5a64cd80="">
                        </div>
                    </div>
                    <div class="el-table__header-wrapper">
                        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                        style="width: 100%;">
                            <colgroup>
                                <col name="el-table_2_column_9" width="2.12%">
                                <col name="el-table_2_column_10" width="2.64%">
                                <col name="el-table_2_column_11" width="4.23%">
                                <col name="el-table_2_column_12" width="4.23%">
                                <col name="el-table_2_column_13" width="6.34%">
                                <col name="el-table_2_column_14" width="4.23%">
                                <col name="el-table_2_column_15" width="4.23%">
                                <col name="el-table_2_column_16" width="4.23%">
                                <col name="el-table_2_column_17" width="4.23%">
                                <col name="el-table_2_column_18" width="5.29%">
                                <col name="el-table_2_column_19" width="4.23%">
                                <col name="el-table_2_column_20" width="4.23%">
                                <col name="el-table_2_column_21" width="7.93%">
                                <col name="el-table_2_column_22" width="4.23%">
                                <col name="el-table_2_column_23" width="7.93%">
                                <col name="el-table_2_column_24" width="4.23%">
                                <col name="el-table_2_column_25" width="4.23%">
                                <col name="el-table_2_column_26" width="4.23%">
                                <col name="el-table_2_column_27" width="4.23%">
                                <col name="el-table_2_column_28" width="7.93%">
                                <col name="el-table_2_column_29" width="4.76%">
                                <col name="gutter" width="0">
                            </colgroup>
                            <thead class="has-gutter">
                                <tr class="">
                                    <th colspan="1" rowspan="1" class="el-table_2_column_9   el-table-column--selection  is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox">
                                                <span class="el-checkbox__input">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_10  is-center   is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            序号
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_11  is-center   is-hidden is-leaf drag_active_null el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        报账日期
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_12  is-center   is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        所属日期
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_13  is-center   is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        批次号
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_14  is-center   is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        项目编号
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_15  is-center   is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        项目名称
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_16  is-center   is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        费用类型
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_17  is-center   is-hidden is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        审批状态
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_18  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        凭证日期
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_19  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        凭证类型
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_20  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        凭证号
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_21  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        凭证金额
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_22  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        凭证摘要
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_23  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        计入加计扣除金额
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_24  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        借贷方向
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_25  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        费用化/资本化
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_26  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        高企科目
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_27  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        加计扣除科目
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_28  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                <span>
                                                    <span>
                                                        项目金额
                                                    </span>
                                                </span>
                                                <span class="virtual">
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_29  is-center   is-leaf  el-table__cell">
                                        <div class="cell">
                                            操作
                                        </div>
                                    </th>
                                    <th class="el-table__cell gutter" style="width: 0px; display: none;">
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="el-table__body-wrapper is-scrolling-left" style="max-height: 507px;">
                        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                        style="width: 100%;">
                            <colgroup>
                                <col name="el-table_2_column_9" width="2.12%">
                                <col name="el-table_2_column_10" width="2.64%">
                                <col name="el-table_2_column_11" width="4.23%">
                                <col name="el-table_2_column_12" width="4.23%">
                                <col name="el-table_2_column_13" width="6.34%">
                                <col name="el-table_2_column_14" width="4.23%">
                                <col name="el-table_2_column_15" width="4.23%">
                                <col name="el-table_2_column_16" width="4.23%">
                                <col name="el-table_2_column_17" width="4.23%">
                                <col name="el-table_2_column_18" width="5.29%">
                                <col name="el-table_2_column_19" width="4.23%">
                                <col name="el-table_2_column_20" width="4.23%">
                                <col name="el-table_2_column_21" width="7.93%">
                                <col name="el-table_2_column_22" width="4.23%">
                                <col name="el-table_2_column_23" width="7.93%">
                                <col name="el-table_2_column_24" width="4.23%">
                                <col name="el-table_2_column_25" width="4.23%">
                                <col name="el-table_2_column_26" width="4.23%">
                                <col name="el-table_2_column_27" width="4.23%">
                                <col name="el-table_2_column_28" width="7.93%">
                                <col name="el-table_2_column_29" width="4.76%">
                            </colgroup>
                            <tbody>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox">
                                                <span class="el-checkbox__input">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                1
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            WXZC202103292248285
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC001
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            安全软件进程权限管理方法和装置
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            无形资产
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            凭证登记
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            1,571.33
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            费用化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            无形资产摊销费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            用于研发活动的软件的摊销费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            1,571.33
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox">
                                                <span class="el-checkbox__input">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                2
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            RDF20210329221958
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC001
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            安全软件进程权限管理方法和装置
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            燃动费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            凭证登记
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            300.00
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            费用化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            直接投入费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            研发活动直接消耗燃料费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            300.00
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox is-disabled">
                                                <span class="el-checkbox__input is-disabled">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                3
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            RDF202103292222691
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC001
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            安全软件进程权限管理方法和装置
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            燃动费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            完成
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            2021-04-02
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            转
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            14
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            动力费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            借
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            费用化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            直接投入费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            研发活动直接消耗动力费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox is-disabled">
                                                <span class="el-checkbox__input is-disabled">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                4
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            ZJCT202103292245650
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC001
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            安全软件进程权限管理方法和装置
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            固定资产
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            完成
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            2020-01-31
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            转
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            16
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            34,877.75
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            1月折旧
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            34,877.75
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            借
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            资本化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            折旧费用与长期待摊费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            用于研发活动的设备的折旧费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            34,877.75
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox">
                                                <span class="el-checkbox__input">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                5
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            WXZC202103292248285
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC002
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            基于软件定义网络控制器的网络ARP完全代理方法及系统
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            无形资产
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            凭证登记
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            1,305.98
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            费用化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            无形资产摊销费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            用于研发活动的软件的摊销费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            1,305.98
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox is-disabled">
                                                <span class="el-checkbox__input is-disabled">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                6
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            RDF202103292222691
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC002
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            基于软件定义网络控制器的网络ARP完全代理方法及系统
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            燃动费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            完成
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            2021-04-02
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            转
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            14
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            动力费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            借
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            费用化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            直接投入费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            研发活动直接消耗动力费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox is-disabled">
                                                <span class="el-checkbox__input is-disabled">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                7
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            ZJCT202103292245650
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC002
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            基于软件定义网络控制器的网络ARP完全代理方法及系统
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            固定资产
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            完成
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            2020-01-31
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            转
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            16
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            40,707.01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            1月折旧
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            40,707.01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            借
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            资本化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            折旧费用与长期待摊费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            用于研发活动的设备的折旧费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            40,707.01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox">
                                                <span class="el-checkbox__input">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                8
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            WXZC202103292248285
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC004
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            软件装载数量和激活的控制方法及系统
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            无形资产
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            凭证登记
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            1,040.65
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            费用化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            无形资产摊销费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            用于研发活动的软件的摊销费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            1,040.65
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox is-disabled">
                                                <span class="el-checkbox__input is-disabled">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                9
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            RDF202103292222691
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC004
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            软件装载数量和激活的控制方法及系统
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            燃动费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            完成
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            2021-04-02
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            转
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            14
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            动力费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            借
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            费用化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            直接投入费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            研发活动直接消耗动力费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            58.25
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection is-hidden  el-table__cell">
                                        <div class="cell">
                                            <label class="el-checkbox is-disabled">
                                                <span class="el-checkbox__input is-disabled">
                                                    <span class="el-checkbox__inner">
                                                    </span>
                                                    <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                    value="">
                                                </span>
                                                <!---->
                                            </label>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center  is-hidden  el-table__cell">
                                        <div class="cell">
                                            <div>
                                                10
                                            </div>
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  is-hidden dragging_column el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            2020-01
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip">
                                            ZJCT202103292245650
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            ZC004
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            软件装载数量和激活的控制方法及系统
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            固定资产
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center  is-hidden  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            完成
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            2020-01-31
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            转
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            16
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            0.00
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            1月折旧
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center   el-table__cell">
                                        <div class="cell">
                                            0.00
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center   el-table__cell">
                                        <div class="cell el-tooltip">
                                            借
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            资本化
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            折旧费用与长期待摊费用
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center   el-table__cell">
                                        <div class="cell el-tooltip" style="width: 78px;">
                                            用于研发活动的设备的折旧费
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center   el-table__cell">
                                        <div class="cell">
                                            0.00
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center   el-table__cell">
                                        <div class="cell">
                                            <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                <!---->
                                                <i class="el-icon-view">
                                                </i>
                                                <span>
                                                    查看
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!---->
                            </tbody>
                        </table>
                        <!---->
                        <!---->
                    </div>
                    <!---->
                    <div class="el-table__fixed" style="width: 690px; bottom: 17px;">
                        <div class="el-table__fixed-header-wrapper">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                            style="width: 1890px;">
                                <colgroup>
                                    <col name="el-table_2_column_9" width="40">
                                        <col name="el-table_2_column_10" width="50">
                                            <col name="el-table_2_column_11" width="80">
                                                <col name="el-table_2_column_12" width="80">
                                                    <col name="el-table_2_column_13" width="120">
                                                        <col name="el-table_2_column_14" width="80">
                                                            <col name="el-table_2_column_15" width="80">
                                                                <col name="el-table_2_column_16" width="80">
                                                                    <col name="el-table_2_column_17" width="80">
                                                                        <col name="el-table_2_column_18" width="100">
                                                                            <col name="el-table_2_column_19" width="80">
                                                                                <col name="el-table_2_column_20" width="80">
                                                                                    <col name="el-table_2_column_21" width="150">
                                                                                        <col name="el-table_2_column_22" width="80">
                                                                                            <col name="el-table_2_column_23" width="150">
                                                                                                <col name="el-table_2_column_24" width="80">
                                                                                                    <col name="el-table_2_column_25" width="80">
                                                                                                        <col name="el-table_2_column_26" width="80">
                                                                                                            <col name="el-table_2_column_27" width="80">
                                                                                                                <col name="el-table_2_column_28" width="150">
                                                                                                                    <col name="el-table_2_column_29" width="90">
                                </colgroup>
                                <thead class="">
                                    <tr class="">
                                        <th colspan="1" rowspan="1" class="el-table_2_column_9   el-table-column--selection  is-leaf  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox">
                                                    <span class="el-checkbox__input">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_10  is-center   is-leaf  el-table__cell">
                                            <div class="cell">
                                                序号
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_11  is-center   is-leaf drag_active_null el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            报账日期
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_12  is-center   is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            所属日期
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_13  is-center   is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            批次号
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_14  is-center   is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            项目编号
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_15  is-center   is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            项目名称
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_16  is-center   is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            费用类型
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_17  is-center   is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            审批状态
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_18  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            凭证日期
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_19  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            凭证类型
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_20  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            凭证号
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_21  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            凭证金额
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_22  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            凭证摘要
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_23  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            计入加计扣除金额
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_24  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            借贷方向
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_25  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            费用化/资本化
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_26  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            高企科目
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_27  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            加计扣除科目
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_28  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                <span class="thead-cell" style="display: block; width: 100%; cursor: move;">
                                                    <span>
                                                        <span>
                                                            项目金额
                                                        </span>
                                                    </span>
                                                    <span class="virtual">
                                                    </span>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_2_column_29  is-center   is-hidden is-leaf  el-table__cell">
                                            <div class="cell">
                                                操作
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="el-table__fixed-body-wrapper" style="top: 43px; max-height: 490px;">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                            style="width: 1890px;">
                                <colgroup>
                                    <col name="el-table_2_column_9" width="40">
                                        <col name="el-table_2_column_10" width="50">
                                            <col name="el-table_2_column_11" width="80">
                                                <col name="el-table_2_column_12" width="80">
                                                    <col name="el-table_2_column_13" width="120">
                                                        <col name="el-table_2_column_14" width="80">
                                                            <col name="el-table_2_column_15" width="80">
                                                                <col name="el-table_2_column_16" width="80">
                                                                    <col name="el-table_2_column_17" width="80">
                                                                        <col name="el-table_2_column_18" width="100">
                                                                            <col name="el-table_2_column_19" width="80">
                                                                                <col name="el-table_2_column_20" width="80">
                                                                                    <col name="el-table_2_column_21" width="150">
                                                                                        <col name="el-table_2_column_22" width="80">
                                                                                            <col name="el-table_2_column_23" width="150">
                                                                                                <col name="el-table_2_column_24" width="80">
                                                                                                    <col name="el-table_2_column_25" width="80">
                                                                                                        <col name="el-table_2_column_26" width="80">
                                                                                                            <col name="el-table_2_column_27" width="80">
                                                                                                                <col name="el-table_2_column_28" width="150">
                                                                                                                    <col name="el-table_2_column_29" width="90">
                                </colgroup>
                                <tbody>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox">
                                                    <span class="el-checkbox__input">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    1
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                WXZC202103292248285
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC001
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                安全软件进程权限管理方法和装置
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                无形资产
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                凭证登记
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                1,571.33
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                费用化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                无形资产摊销费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                用于研发活动的软件的摊销费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                1,571.33
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox">
                                                    <span class="el-checkbox__input">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    2
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                RDF20210329221958
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC001
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                安全软件进程权限管理方法和装置
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                燃动费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                凭证登记
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                300.00
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                费用化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                直接投入费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                研发活动直接消耗燃料费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                300.00
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox is-disabled">
                                                    <span class="el-checkbox__input is-disabled">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    3
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                RDF202103292222691
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC001
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                安全软件进程权限管理方法和装置
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                燃动费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                完成
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                2021-04-02
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                转
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                14
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                动力费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                借
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                费用化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                直接投入费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                研发活动直接消耗动力费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox is-disabled">
                                                    <span class="el-checkbox__input is-disabled">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    4
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                ZJCT202103292245650
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC001
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                安全软件进程权限管理方法和装置
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                固定资产
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                完成
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                2020-01-31
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                转
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                16
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                34,877.75
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                1月折旧
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                34,877.75
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                借
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                资本化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                折旧费用与长期待摊费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                用于研发活动的设备的折旧费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                34,877.75
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox">
                                                    <span class="el-checkbox__input">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    5
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                WXZC202103292248285
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC002
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                基于软件定义网络控制器的网络ARP完全代理方法及系统
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                无形资产
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                凭证登记
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                1,305.98
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                费用化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                无形资产摊销费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                用于研发活动的软件的摊销费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                1,305.98
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox is-disabled">
                                                    <span class="el-checkbox__input is-disabled">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    6
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                RDF202103292222691
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC002
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                基于软件定义网络控制器的网络ARP完全代理方法及系统
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                燃动费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                完成
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                2021-04-02
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                转
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                14
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                动力费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                借
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                费用化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                直接投入费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                研发活动直接消耗动力费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox is-disabled">
                                                    <span class="el-checkbox__input is-disabled">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    7
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                ZJCT202103292245650
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC002
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                基于软件定义网络控制器的网络ARP完全代理方法及系统
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                固定资产
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                完成
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                2020-01-31
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                转
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                16
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                40,707.01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                1月折旧
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                40,707.01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                借
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                资本化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                折旧费用与长期待摊费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                用于研发活动的设备的折旧费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                40,707.01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox">
                                                    <span class="el-checkbox__input">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    8
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                WXZC202103292248285
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC004
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                软件装载数量和激活的控制方法及系统
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                无形资产
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                凭证登记
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                1,040.65
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                费用化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                无形资产摊销费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                用于研发活动的软件的摊销费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                1,040.65
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox is-disabled">
                                                    <span class="el-checkbox__input is-disabled">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    9
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                RDF202103292222691
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC004
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                软件装载数量和激活的控制方法及系统
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                燃动费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                完成
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                2021-04-02
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                转
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                14
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                动力费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                借
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                费用化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                直接投入费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                研发活动直接消耗动力费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                58.25
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_2_column_9  el-table-column--selection  el-table__cell">
                                            <div class="cell">
                                                <label class="el-checkbox is-disabled">
                                                    <span class="el-checkbox__input is-disabled">
                                                        <span class="el-checkbox__inner">
                                                        </span>
                                                        <input type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original"
                                                        value="">
                                                    </span>
                                                    <!---->
                                                </label>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center   el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    10
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center  dragging_column el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                2020-01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center   el-table__cell">
                                            <div class="cell el-tooltip">
                                                ZJCT202103292245650
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                ZC004
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                软件装载数量和激活的控制方法及系统
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_16 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                固定资产
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_17 is-center   el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                完成
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_18 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                2020-01-31
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_19 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                转
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_20 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                16
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_21 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                0.00
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_22 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                1月折旧
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_23 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                0.00
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_24 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip">
                                                借
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                资本化
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                折旧费用与长期待摊费用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  is-hidden  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                用于研发活动的设备的折旧费
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                0.00
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  is-hidden  el-table__cell">
                                            <div class="cell">
                                                <button data-v-5a64cd80="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view">
                                                    </i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!---->
                                </tbody>
                            </table>
                            <!---->
                        </div>
                        <!---->
                    </div>
                    <!---->
                    <!---->
                    <div class="el-table__column-resize-proxy" style="display: none;">
                    </div>
                </div>
                <div data-v-5a64cd80="" class="pagination">
                    <div data-v-5a64cd80="" class="el-pagination">
                        <slot>
                            <span data-v-5a64cd80="" class="pageTotal">
                                共
                                <span data-v-5a64cd80="" class="pageTotalTxt">
                                    153
                                </span>
                                条
                            </span>
                        </slot>
                        <span class="el-pagination__sizes">
                            <div class="el-select el-select--mini">
                                <!---->
                                <div class="el-input el-input--mini el-input--suffix">
                                    <!---->
                                    <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择"
                                    class="el-input__inner">
                                    <!---->
                                    <span class="el-input__suffix">
                                        <span class="el-input__suffix-inner">
                                            <i class="el-select__caret el-input__icon el-icon-arrow-up">
                                            </i>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                        </span>
                                        <!---->
                                    </span>
                                    <!---->
                                    <!---->
                                </div>
                                <div class="el-select-dropdown el-popper" style="display: none; min-width: 110px;">
                                    <div class="el-scrollbar" style="">
                                        <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                            <ul class="el-scrollbar__view el-select-dropdown__list">
                                                <!---->
                                                <li class="el-select-dropdown__item selected">
                                                    <span>
                                                        10条/页
                                                    </span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                    <span>
                                                        50条/页
                                                    </span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                    <span>
                                                        100条/页
                                                    </span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                    <span>
                                                        200条/页
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="el-scrollbar__bar is-horizontal">
                                            <div class="el-scrollbar__thumb" style="transform: translateX(0%);">
                                            </div>
                                        </div>
                                        <div class="el-scrollbar__bar is-vertical">
                                            <div class="el-scrollbar__thumb" style="transform: translateY(0%);">
                                            </div>
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                        </span>
                        <button type="button" disabled="disabled" class="btn-prev">
                            <i class="el-icon el-icon-arrow-left">
                            </i>
                        </button>
                        <ul class="el-pager">
                            <li class="number active">
                                1
                            </li>
                            <!---->
                            <li class="number">
                                2
                            </li>
                            <li class="number">
                                3
                            </li>
                            <li class="number">
                                4
                            </li>
                            <li class="number">
                                5
                            </li>
                            <li class="number">
                                6
                            </li>
                            <li class="el-icon more btn-quicknext el-icon-more">
                            </li>
                            <li class="number">
                                16
                            </li>
                        </ul>
                        <button type="button" class="btn-next">
                            <i class="el-icon el-icon-arrow-right">
                            </i>
                        </button>
                        <span class="el-pagination__jump">
                            前往
                            <div class="el-input el-pagination__editor is-in-pagination">
                                <!---->
                                <input type="number" autocomplete="off" min="1" max="16" class="el-input__inner">
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                            </div>
                            页
                        </span>
                    </div>
                </div>
            </div>
            <div data-v-79b0c3d8="" data-v-5a64cd80="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 50%;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title">
                        </span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close">
                            </i>
                        </button>
                    </div>
                    <!---->
                    <!---->
                </div>
            </div>
            <div data-v-e9593782="" data-v-5a64cd80="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title">
                        </span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close">
                            </i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-e9593782="" class="dialog-footer">
                            <button data-v-e9593782="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-e9593782="" type="button" class="el-button el-button--primary el-button--small">
                                <!---->
                                <!---->
                                <span>
                                </span>
                            </button>
                            <button data-v-e9593782="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    提 交
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-52ef2581="" data-v-5a64cd80="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title">
                        </span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close">
                            </i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-52ef2581="" class="dialog-footer">
                            <button data-v-52ef2581="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <!---->
                            <button data-v-52ef2581="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    提 交
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <jhi-footer></jhi-footer>  
  </div>
</template>

<script lang="ts" src="./costs.component.ts"></script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.unfold[data-v-1a259ece] {
    margin: 0 20px 0 60px;
}

main {
    display: block;
    unicode-bidi: isolate;
}

.ky-breadcrumb[data-v-993f93e8] {
    padding: 20px 0 5px;
    font-weight: 700;
}

.ky-breadcrumb .breadcrumb-icon[data-v-993f93e8] {
    float: left;
    display: inline-block;
    font-size: 14px;
}

.ky-breadcrumb .position[data-v-993f93e8] {
    border-left: 4px solid #eeae3e;
    padding-left: 10px;
}

.ky-breadcrumb .breadcrumb[data-v-993f93e8] {
    display: inline-block;
}

[data-v-993f93e8] .el-breadcrumb {
    line-height: 1.4;
}

.el-breadcrumb {
    font-size: 14px;
    /* line-height: 1; */
}

.el-breadcrumb:after, .el-breadcrumb:before {
    display: table;
    content: "";
}

.el-breadcrumb__item {
    float: left;
}

.el-breadcrumb__inner {
    color: #606266;
}

.el-breadcrumb__separator {
    margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
}

.el-breadcrumb__item {
    float: left;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
    font-weight: 400;
    color: #606266;
    cursor: text;
}

.el-breadcrumb__item:last-child .el-breadcrumb__separator, .el-menu--collapse>.el-menu-item .el-submenu__icon-arrow, .el-menu--collapse>.el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: none;
}

.el-breadcrumb__separator {
    margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
}

.el-breadcrumb:after {
    clear: both;
}

.el-breadcrumb:after, .el-breadcrumb:before {
    display: table;
    content: "";
}

.search[data-v-5a64cd80] {
    margin-bottom: -22px;
    padding-bottom: 0;
}

.create, .search, .ul-form, .ul-search {
    padding: 5px;
}

.create, .search, .ul-form, .ul-search {
    margin: 0;
    /* padding: 10px; */
}

.module-container {
    border: 1px solid hsla(0, 0%, 93.3%, .6588235294117647);
    background-color: #fff;
    border-radius: 10px;
    /* -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .08); */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .08);
}

.search-wrap[data-v-5a64cd80] {
    overflow: hidden;
    position: relative;
    /* -webkit-transition: height .5s; */
    transition: height .5s;
}

blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}

form {
    display: block;
    unicode-bidi: isolate;
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-col-pull-0, .el-col-pull-1, .el-col-pull-2, .el-col-pull-3, .el-col-pull-4, .el-col-pull-5, .el-col-pull-6, .el-col-pull-7, .el-col-pull-8, .el-col-pull-9, .el-col-pull-10, .el-col-pull-11, .el-col-pull-12, .el-col-pull-13, .el-col-pull-14, .el-col-pull-15, .el-col-pull-16, .el-col-pull-17, .el-col-pull-18, .el-col-pull-19, .el-col-pull-20, .el-col-pull-21, .el-col-pull-22, .el-col-pull-23, .el-col-pull-24, .el-col-push-0, .el-col-push-1, .el-col-push-2, .el-col-push-3, .el-col-push-4, .el-col-push-5, .el-col-push-6, .el-col-push-7, .el-col-push-8, .el-col-push-9, .el-col-push-10, .el-col-push-11, .el-col-push-12, .el-col-push-13, .el-col-push-14, .el-col-push-15, .el-col-push-16, .el-col-push-17, .el-col-push-18, .el-col-push-19, .el-col-push-20, .el-col-push-21, .el-col-push-22, .el-col-push-23, .el-col-push-24, .el-row, .el-upload-dragger, .el-upload-list__item {
    position: relative;
}

.el-row:after, .el-row:before {
    display: table;
}

.el-button-group:after, .el-button-group:before, .el-color-dropdown__main-wrapper:after, .el-link.is-underline:hover:after, .el-page-header__left:after, .el-progress-bar__inner:after, .el-row:after, .el-row:before, .el-slider:after, .el-slider:before, .el-slider__button-wrapper:after, .el-transfer-panel .el-transfer-panel__footer:after, .el-upload-cover:after, .el-upload-list--picture-card .el-upload-list__item-actions:after {
    content: "";
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

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-col-pull-0, .el-col-pull-1, .el-col-pull-2, .el-col-pull-3, .el-col-pull-4, .el-col-pull-5, .el-col-pull-6, .el-col-pull-7, .el-col-pull-8, .el-col-pull-9, .el-col-pull-10, .el-col-pull-11, .el-col-pull-12, .el-col-pull-13, .el-col-pull-14, .el-col-pull-15, .el-col-pull-16, .el-col-pull-17, .el-col-pull-18, .el-col-pull-19, .el-col-pull-20, .el-col-pull-21, .el-col-pull-22, .el-col-pull-23, .el-col-pull-24, .el-col-push-0, .el-col-push-1, .el-col-push-2, .el-col-push-3, .el-col-push-4, .el-col-push-5, .el-col-push-6, .el-col-push-7, .el-col-push-8, .el-col-push-9, .el-col-push-10, .el-col-push-11, .el-col-push-12, .el-col-push-13, .el-col-push-14, .el-col-push-15, .el-col-push-16, .el-col-push-17, .el-col-push-18, .el-col-push-19, .el-col-push-20, .el-col-push-21, .el-col-push-22, .el-col-push-23, .el-col-push-24, .el-row, .el-upload-dragger, .el-upload-list__item {
    position: relative;
}

.el-row:after, .el-row:before {
    display: table;
}

.el-button-group:after, .el-button-group:before, .el-color-dropdown__main-wrapper:after, .el-link.is-underline:hover:after, .el-page-header__left:after, .el-progress-bar__inner:after, .el-row:after, .el-row:before, .el-slider:after, .el-slider:before, .el-slider__button-wrapper:after, .el-transfer-panel .el-transfer-panel__footer:after, .el-upload-cover:after, .el-upload-list--picture-card .el-upload-list__item-actions:after {
    content: "";
}

.search .el-col {
    text-align: right;
}

.el-col-4 {
    width: 16.66667%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--mini .el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 5px;
}

.search .el-form-item {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    /* margin-bottom: -1px; */
    margin-right: -1px;
    padding: 5px;
}

.el-form-item:after, .el-form-item:before {
    display: table;
    content: "";
}

.search .el-form-item .el-form-item__label {
    text-align: right;
    padding-right: 10px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
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

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    display: inline-block;
    width: 100%;
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

nput {
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
    font-size: ;
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

.el-form-item__content:after {
    clear: both;
}

.el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
}

.el-form-item:after {
    clear: both;
}

.el-form-item:after, .el-form-item:before {
    display: table;
    content: "";
}

.search .el-col {
    text-align: right;
}

.el-col-4 {
    width: 16.66667%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-form-item--mini .el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 5px;
}

.search .el-form-item {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    /* margin-bottom: -1px; */
    margin-right: -1px;
    padding: 5px;
}

.el-form-item:after, .el-form-item:before {
    display: table;
    content: "";
}

.search .el-form-item .el-form-item__label {
    text-align: right;
    padding-right: 10px;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
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

label {
    cursor: default;
}

.el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
    line-height: 40px;
}

.el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
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
    width: 100%;
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

.el-input-group__append .el-button, .el-input-group__append .el-input, .el-input-group__prepend .el-button, .el-input-group__prepend .el-input, .el-input__inner {
    font-size: inherit;
}

.el-form-item__content:after {
    clear: both;
}

.el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
}

.el-row {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-col-pull-0, .el-col-pull-1, .el-col-pull-2, .el-col-pull-3, .el-col-pull-4, .el-col-pull-5, .el-col-pull-6, .el-col-pull-7, .el-col-pull-8, .el-col-pull-9, .el-col-pull-10, .el-col-pull-11, .el-col-pull-12, .el-col-pull-13, .el-col-pull-14, .el-col-pull-15, .el-col-pull-16, .el-col-pull-17, .el-col-pull-18, .el-col-pull-19, .el-col-pull-20, .el-col-pull-21, .el-col-pull-22, .el-col-pull-23, .el-col-pull-24, .el-col-push-0, .el-col-push-1, .el-col-push-2, .el-col-push-3, .el-col-push-4, .el-col-push-5, .el-col-push-6, .el-col-push-7, .el-col-push-8, .el-col-push-9, .el-col-push-10, .el-col-push-11, .el-col-push-12, .el-col-push-13, .el-col-push-14, .el-col-push-15, .el-col-push-16, .el-col-push-17, .el-col-push-18, .el-col-push-19, .el-col-push-20, .el-col-push-21, .el-col-push-22, .el-col-push-23, .el-col-push-24, .el-row, .el-upload-dragger, .el-upload-list__item {
    position: relative;
}

.el-row:after, .el-row:before {
    display: table;
}

.search-down {
    width: 100%;
    text-align: center;
    background: #fff;
    position: absolute;
    height: 22px;
    bottom: 0;
    line-height: 22px;
    color: #666;
    border-radius: 10px;
    cursor: pointer;
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

.search-down i {
    /* -webkit-transform: rotate(90deg); */
    transform: rotate(90deg);
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

.el-icon-d-arrow-left:before {
    content: "\e6dd";
}

.table[data-v-5a64cd80] {
    margin-top: 30px;
}

.table .el-table--border, .ul-table .el-table--border {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.el-table--border {
    border-right: none;
    border-bottom: none;
}

.el-table--border, .el-table--group {
    border: 1px solid #ebeef5;
}

.el-table {
    position: relative;
    overflow: hidden;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    /* width: 100%; */
    max-width: 100%;
    font-size: 14px;
    color: #606266;
}

.el-table, .el-table__expanded-cell {
    background-color: #fff;
}

.el-table:before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
}

.el-table--border:after, .el-table--group:after, .el-table:before {
    content: "";
    position: absolute;
    background-color: #ebeef5;
    z-index: 1;
}

.el-table .hidden-columns {
    visibility: hidden;
    position: absolute;
    z-index: -1;
}

.el-table__footer-wrapper, .el-table__header-wrapper {
    overflow: hidden;
}

.el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper {
    width: 100%;
}

.el-table__body, .el-table__footer, .el-table__header {
    table-layout: fixed;
    border-collapse: separate;
}

table {
    /* border-collapse: collapse; */
    border-spacing: 0;
}

table {
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    unicode-bidi: isolate;
    border-color: gray;
}

colgroup {
    display: table-column-group;
    unicode-bidi: isolate;
}

col {
    display: table-column;
    unicode-bidi: isolate;
}

.search .el-button {
    margin-top: 8px;
}

.create .el-button, .create .el-button+.el-button, .search .el-button, .search .el-button+.el-button, .ul-form .el-button, .ul-form .el-button+.el-button, .ul-search .el-button, .ul-search .el-button+.el-button {
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


.el-table thead {
    color: #353535;
    background-color: #ecf6ff;
}

.el-table thead {
    /* color: #909399; */
    font-weight: 500;
}

thead {
    display: table-header-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
}

.el-table th, .el-table tr {
    background-color: transparent !important;
}

tr {
    display: table-row;
    vertical-align: inherit;
    unicode-bidi: isolate;
    border-color: inherit;
}

.table .el-table td, .table .el-table th.is-leaf, .ul-table .el-table td, .ul-table .el-table th.is-leaf {
    border-bottom-color: #dceefe;
}

.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
    border-bottom: 1px solid #ebeef5;
}

.table .el-table th, .ul-table .el-table th {
    padding: 3px 0;
}

.table .el-table--border td, .table .el-table--border th, .table .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed, .ul-table .el-table--border td, .ul-table .el-table--border th, .ul-table .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right-color: #dceefe;
}

.table .el-table th, .ul-table .el-table th {
    text-align: center;
    height: 40px;
    /* padding: 2px 0; */
}

.el-table th.el-table__cell {
    overflow: hidden;
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* background-color: #fff; */
}

.el-table--border .el-table__cell, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right: 1px solid #ebeef5;
}

.el-table .el-table__cell {
    padding: 12px 0;
    min-width: 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    /* text-align: left; */
}

.el-table th, .el-table tr {
    background-color: transparent !important;
}

.el-table--border .el-table__cell:first-child .cell {
    padding-left: 10px;
}

.el-table th.el-table__cell>.cell {
    display: inline-block;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    /* padding-left: 10px; */
    padding-right: 10px;
    width: 100%;
}

.table .el-table .cell, .ul-table .el-table .cell {
    line-height: 18px;
}

.el-table .cell {
    /* -webkit-box-sizing: border-box; */
    /* box-sizing: border-box; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    /* line-height: 23px; */
    /* padding-left: 10px; */
    /* padding-right: 10px; */
}

.el-checkbox:last-of-type {
    margin-right: 0;
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

.el-checkbox__inner:after {
    /* -webkit-box-sizing: content-box; */
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    /* -webkit-transform: rotate(45deg) scaleY(0); */
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    /* -webkit-transition: -webkit-transform .15s ease-in .05s; */
    /* transition: -webkit-transform .15s ease-in .05s; */
    /* transition: transform .15s ease-in .05s; */
    transition: transform .15s ease-in .05s, -webkit-transform .15s ease-in .05s;
    /* -webkit-transform-origin: center; */
    transform-origin: center;
}

.el-table tr input[type=checkbox] {
    margin: 0;
}

.el-checkbox__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    /* margin: 0; */
    width: 0;
    height: 0;
    z-index: -1;
}

button, input, select, textarea {
    font-size: 100%;
}

input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
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
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-rtl-ordering: logical;
    padding-block: 1px;
    padding-inline: 2px;
}

.el-table th.el-table__cell>.cell {
    display: inline-block;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    /* padding-left: 10px; */
    padding-right: 10px;
    width: 100%;
}

.table .el-table .cell, .ul-table .el-table .cell {
    line-height: 18px;
}

.el-table .cell {
    /* -webkit-box-sizing: border-box; */
    /* box-sizing: border-box; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    /* line-height: 23px; */
    /* padding-left: 10px; */
    /* padding-right: 10px; */
}

.table .el-table td, .table .el-table th.is-leaf, .ul-table .el-table td, .ul-table .el-table th.is-leaf {
    border-bottom-color: #dceefe;
}

.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
    border-bottom: 1px solid #ebeef5;
}

.el-table .el-table__cell.is-center {
    text-align: center;
}

.table .el-table th, .ul-table .el-table th {
    padding: 3px 0;
}

.table .el-table--border td, .table .el-table--border th, .table .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed, .ul-table .el-table--border td, .ul-table .el-table--border th, .ul-table .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right-color: #dceefe;
}

.table .el-table th, .ul-table .el-table th {
    /* text-align: center; */
    height: 40px;
    /* padding: 2px 0; */
}

.el-table th.el-table__cell {
    overflow: hidden;
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* background-color: #fff; */
}

.el-table--border .el-table__cell, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right: 1px solid #ebeef5;
}

.el-table .el-table__cell {
    /* padding: 12px 0; */
    min-width: 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    /* text-align: left; */
}

.el-table th, .el-table tr {
    background-color: transparent !important;
}

blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    /* padding: 0; */
}

.el-table th.el-table__cell>.cell {
    display: inline-block;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    /* padding-left: 10px; */
    padding-right: 10px;
    width: 100%;
}

.table .el-table .cell, .ul-table .el-table .cell {
    line-height: 18px;
}

.el-table--scrollable-x .el-table__body-wrapper {
    overflow-x: auto;
}

.el-table__body-wrapper {
    overflow: hidden;
    position: relative;
}

.pagination {
    text-align: right;
    padding: 20px;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
}

.el-pagination:after, .el-pagination:before {
    display: table;
    content: "";
}

slot {
    display: contents;
}

.el-pagination button, .el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.pageTotal {
    font-weight: 400;
    margin-right: 10px;
}

.pageTotal .pageTotalTxt {
    color: #1184f6;
    text-align: center;
}

.el-pagination button, .el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-pagination__sizes {
    margin: 0 10px 0 0;
    font-weight: 400;
    color: #606266;
}

.el-select {
    display: inline-block;
    position: relative;
}

.el-pagination .el-select .el-input {
    width: 100px;
    margin: 0 5px;
}

.el-select>.el-input {
    display: block;
}

.el-input--mini {
    font-size: 12px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-pagination .el-select .el-input .el-input__inner {
    padding-right: 25px;
    border-radius: 3px;
}

.el-pagination .el-input__suffix {
    right: 0;
    /* -webkit-transform: scale(.8); */
    transform: scale(.8);
}

.el-input__suffix {
    height: 100%;
    /* right: 5px; */
    /* -webkit-transition: all .3s; */
    transition: all .3s;
    pointer-events: none;
}

.el-input__prefix, .el-input__suffix {
    position: absolute;
    top: 0;
    text-align: center;
}

.el-input__suffix-inner {
    pointer-events: all;
}

.el-select-dropdown {
    position: absolute;
    z-index: 1001;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    /* -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1); */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    margin: 5px 0;
}

.el-scrollbar {
    overflow: hidden;
    position: relative;
}

.el-scrollbar__wrap {
    overflow: scroll;
    height: 100%;
}

.el-select-dropdown__wrap {
    max-height: 274px;
}

.el-select-dropdown__list {
    list-style: none;
    padding: 6px 0;
    margin: 0;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-select-dropdown__item.selected {
    color: #409eff;
    font-weight: 700;
}

.el-select-dropdown__item {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* color: #606266; */
    height: 34px;
    line-height: 34px;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    cursor: pointer;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.el-pagination button:disabled {
    color: #c0c4cc;
    /* background-color: #fff; */
    cursor: not-allowed;
}

.el-pagination .btn-prev {
    padding-right: 12px;
}

.el-pagination .btn-next, .el-pagination .btn-prev {
    background: 50% no-repeat #fff;
    background-size: 16px;
    /* cursor: pointer; */
    margin: 0;
    /* color: #303133; */
}

.el-pagination button {
    border: none;
    padding: 0 6px;
    /* background: 0 0; */
}

.el-pagination button, .el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon {
    display: block;
    font-size: 12px;
    font-weight: 700;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    /* font-weight: 400; */
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    /* display: inline-block; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-arrow-left:before {
    content: "\e6de";
}

.el-pager {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    list-style: none;
    font-size: 0;
}

.el-pager, .el-pager li {
    vertical-align: top;
    margin: 0;
    display: inline-block;
}

.el-pager, .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev {
    padding: 0;
}

.el-pager li.active {
    color: #409eff;
    cursor: default;
}

.el-pager li {
    padding: 0 4px;
    background: #fff;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    text-align: center;
}

.el-pager, .el-pager li {
    vertical-align: top;
    margin: 0;
    display: inline-block;
}


</style>