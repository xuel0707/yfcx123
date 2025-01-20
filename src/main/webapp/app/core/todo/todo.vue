<template>
  <div data-v-1a259ece="" data-v-c466b63c="" class="layout-container">
    <jhi-navbar></jhi-navbar>
    <el-container>
    <top-navbar></top-navbar>
        <el-container>
            <el-aside data-v-1a259ece="" class="el-aside aside-wrap" style="width: 250px;">
                <div data-v-1a259ece="" class="aside-logo skinMenu0">
                    <i data-v-1a259ece="" class="iconkuaijiecaidan font-icon"></i>
                    <span data-v-1a259ece="" class="icon-right-txt">
                        功能菜单
                    </span>
                    <span data-v-1a259ece="" class="margin-l-110">
                        <i data-v-1a259ece="" class="el-icon-s-fold foldIcon"></i>
                    </span>
                </div>
                <ul data-v-1a259ece="" role="menubar" class="el-menu-vertical-demo el-menu"
                style="background-color: rgb(255, 255, 255);" height="20px">
                    <li data-v-1a259ece="" role="menuitem" tabindex="-1" class="el-menu-item"
                    style="padding-left: 20px; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">
                        <i data-v-1a259ece="" class="font-icon-sec el-icon-connection"></i>
                        <span data-v-1a259ece="">
                            待处理
                        </span>
                    </li>
                    <li data-v-1a259ece="" role="menuitem" tabindex="-1" class="el-menu-item"
                    style="padding-left: 20px; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">
                        <i data-v-1a259ece="" class="font-icon-sec el-icon-time"></i>
                        <span data-v-1a259ece="">
                            办理中
                        </span>
                    </li>
                    <li data-v-1a259ece="" role="menuitem" tabindex="-1" class="el-menu-item"
                    style="padding-left: 20px; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">
                        <i data-v-1a259ece="" class="font-icon-sec el-icon-circle-check"></i>
                        <span data-v-1a259ece="">
                            已办结
                        </span>
                    </li>
                </ul>
            </el-aside>
            <el-container>
                <el-main data-v-1a259ece="" class="unfold" id="mainMenu">
        <div data-v-1954a2dd="" data-v-1a259ece="" class="index">
            <div data-v-993f93e8="" data-v-1954a2dd="">
                <div data-v-993f93e8="" class="ky-breadcrumb">
                    <span data-v-993f93e8="" class="breadcrumb-icon">
                        <span data-v-993f93e8="" class="position">
                            当前位置：
                        </span>
                    </span>
                    <div data-v-993f93e8="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb breadcrumb">
                        <span data-v-993f93e8="" class="el-breadcrumb__item">
                            <span role="link" class="el-breadcrumb__inner">
                                待办事项
                            </span>
                            <span role="presentation" class="el-breadcrumb__separator">
                                /
                            </span>
                        </span>
                        <span data-v-993f93e8="" class="el-breadcrumb__item" aria-current="page">
                            <span role="link" class="el-breadcrumb__inner">
                                待处理
                            </span>
                            <span role="presentation" class="el-breadcrumb__separator">
                                /
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div data-v-1954a2dd="" class="search module-container">
                <form data-v-1954a2dd="" class="el-form demo-form-inline">
                    <div data-v-1954a2dd="" class="el-row" style="margin-left: -15px; margin-right: -15px;">
                        <div data-v-1954a2dd="" class="el-col el-col-18" style="padding-left: 15px; padding-right: 15px;">
                            <div data-v-1954a2dd="" class="el-row">
                                <div data-v-1954a2dd="" class="el-col el-col-8">
                                    <div data-v-1954a2dd="" class="el-form-item el-form-item--small">
                                        <label class="el-form-item__label" style="width: 80px;">
                                            待办类型
                                        </label>
                                        <div class="el-form-item__content" style="margin-left: 80px;">
                                            <div data-v-1954a2dd="" class="el-select el-select--small">
                                                <!---->
                                                <div class="el-input el-input--small el-input--suffix">
                                                    <!---->
                                                    <input type="text" readonly="readonly" autocomplete="off" placeholder="请选择"
                                                    class="el-input__inner">
                                                    <!---->
                                                    <span class="el-input__suffix">
                                                        <span class="el-input__suffix-inner">
                                                                        <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                                        <!----></span>
                                                                    <!----></span>
                                                            <!---->
                                                                <!----></div>
                                                <div class="el-select-dropdown el-popper" style="display: none; min-width: 0px;">
                                                    <div class="el-scrollbar" style="">
                                                        <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                            <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                <!---->
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item selected">
                                                                    <span>
                                                                        全部
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        项目立项审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        项目立项完成审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        项目实施完成审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        项目结题完成审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        项目变更审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        成果鉴定审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        项目中止审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        考勤工时审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        设备工时审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        材料消耗审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        材料费用审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        高品指引确认审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        高服指引确认审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        薪资管理审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        燃动费审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        委外费用审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        费用报销审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        折旧与长期摊销费用审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        无形资产审批
                                                                    </span>
                                                                </li>
                                                                <li data-v-1954a2dd="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        会计凭证审批
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="el-scrollbar__bar is-horizontal">
                                                                        <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                                                        </div>
                                                        <div class="el-scrollbar__bar is-vertical">
                                                                        <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                                                            </div>
                                                        </div>
                                                                <!----></div>
                                                    </div>
                                                        <!----></div>
                                    </div>
                                </div>
                                <div data-v-1954a2dd="" class="el-col el-col-8">
                                    <div data-v-1954a2dd="" class="el-form-item el-form-item--small">
                                        <label class="el-form-item__label" style="width: 80px;">
                                            发起人
                                        </label>
                                        <div class="el-form-item__content" style="margin-left: 80px;">
                                            <div data-v-1954a2dd="" class="el-input el-input--small el-input--suffix">
                                                <!---->
                                                <input type="text" autocomplete="off" placeholder="请选择发起人" class="el-input__inner">
                                                <!---->
                                                <!---->
                                                <!---->
                                                            <!----></div>
                                                        <!----></div>
                                    </div>
                                </div>
                                <div data-v-1954a2dd="" class="el-col el-col-8">
                                    <div data-v-1954a2dd="" class="el-form-item el-form-item--small">
                                        <label class="el-form-item__label" style="width: 80px;">
                                            发起日期
                                        </label>
                                        <div class="el-form-item__content" style="margin-left: 80px;">
                                            <div data-v-1954a2dd="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--datetime">
                                                <!---->
                                                <input type="text" autocomplete="off" name="" placeholder="选择日期" class="el-input__inner">
                                                <span class="el-input__prefix">
                                                                <i class="el-input__icon el-icon-time"></i>
                                                                <!----></span>
                                                <span class="el-input__suffix">
                                                    <span class="el-input__suffix-inner">
                                                                    <i class="el-input__icon"></i>
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                                    <!----></span>
                                                                <!----></span>
                                                        <!---->
                                                            <!----></div>
                                                        <!----></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-1954a2dd="" class="el-col el-col-6" style="padding-left: 15px; padding-right: 15px; text-align: right;">
                            <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--small">
                                <!---->
                                            <i class="el-icon-search"></i>
                                <span>
                                    查询
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div data-v-1954a2dd="" class="space-top">
                <div data-v-1954a2dd="" class="table">
                    <div data-v-1954a2dd="" class="el-table el-table--fit el-table--border el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                    style="width: 100%; max-height: 600px;">
                        <div class="hidden-columns">
                                        <div data-v-1954a2dd=""></div>
                                        <div data-v-1954a2dd=""></div>
                                        <div data-v-1954a2dd=""></div>
                                        <div data-v-1954a2dd=""></div>
                                        <div data-v-1954a2dd=""></div>
                                        <div data-v-1954a2dd=""></div>
                                        <div data-v-1954a2dd=""></div>
                                        <div data-v-1954a2dd=""></div>
                        </div>
                        <div class="el-table__header-wrapper">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                                        style="width: 100%;">
                                <colgroup>
                                                <col name="el-table_4_column_26" width="4.67%">
                                                <col name="el-table_4_column_27" width="18.69%">
                                                <col name="el-table_4_column_28" width="11.21%">
                                                <col name="el-table_4_column_29" width="14%">
                                                <col name="el-table_4_column_30" width="9.81%">
                                                <col name="el-table_4_column_31" width="9.81%">
                                                <col name="el-table_4_column_32" width="16.82%">
                                                <col name="el-table_4_column_33" width="14.95%">
                                                                    <col name="gutter" width="0">
                                </colgroup>
                                <thead class="has-gutter">
                                    <tr class="">
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_26  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                序号
                                            </div>
                                        </th>
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_27  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                待办标题
                                            </div>
                                        </th>
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_28  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                待办类型
                                            </div>
                                        </th>
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_29  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                待办节点
                                            </div>
                                        </th>
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_30  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                发起人
                                            </div>
                                        </th>
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_31  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                待处理人
                                            </div>
                                        </th>
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_32  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                提交日期
                                            </div>
                                        </th>
                                                    <th colspan="1" rowspan="1" class="el-table_4_column_33  is-left   is-leaf el-table__cell">
                                            <div class="cell">
                                                管理
                                            </div>
                                        </th>
                                                    <th class="el-table__cell gutter" style="width: 0px; display: none;"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="el-table__body-wrapper is-scrolling-left" style="max-height: 560px;">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                                        style="width: 100%;">
                                <colgroup>
                                                <col name="el-table_4_column_26" width="4.67%">
                                                <col name="el-table_4_column_27" width="18.69%">
                                                <col name="el-table_4_column_28" width="11.21%">
                                                <col name="el-table_4_column_29" width="14%">
                                                <col name="el-table_4_column_30" width="9.81%">
                                                <col name="el-table_4_column_31" width="9.81%">
                                                <col name="el-table_4_column_32" width="16.82%">
                                                <col name="el-table_4_column_33" width="14.95%">
                                </colgroup>
                                <tbody>
                                    <tr class="el-table__row">
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_26 is-center  el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    1
                                                </div>
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_27 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 198px;">
                                                基于软件定义网络控制器的网络ARP完全代理方法及系统的项目变更审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_28 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 118px;">
                                                项目变更审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_29 is-center  el-table__cell">
                                            <div class="cell">
                                                变更登记
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_30 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_31 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_32 is-center  el-table__cell">
                                            <div class="cell">
                                                2022-02-23 16:42:30
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_33 is-left  el-table__cell">
                                            <div class="cell">
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-edit"></i>
                                                    <span>
                                                        处理
                                                    </span>
                                                </button>
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-document"></i>
                                                    <span>
                                                        流程
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_26 is-center  el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    2
                                                </div>
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_27 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 198px;">
                                                2020年03月构造软件模型的可视软件建模编辑器的研发的材料消耗审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_28 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 118px;">
                                                材料消耗审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_29 is-center  el-table__cell">
                                            <div class="cell">
                                                材料领用登记
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_30 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_31 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_32 is-center  el-table__cell">
                                            <div class="cell">
                                                2022-01-26 10:22:07
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_33 is-left  el-table__cell">
                                            <div class="cell">
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-edit"></i>
                                                    <span>
                                                        处理
                                                    </span>
                                                </button>
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-document"></i>
                                                    <span>
                                                        流程
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_26 is-center  el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    3
                                                </div>
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_27 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 198px;">
                                                0的项目立项审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_28 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 118px;">
                                                项目立项审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_29 is-center  el-table__cell">
                                            <div class="cell">
                                                项目登记
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_30 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_31 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_32 is-center  el-table__cell">
                                            <div class="cell">
                                                2022-01-24 16:16:42
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_33 is-left  el-table__cell">
                                            <div class="cell">
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-edit"></i>
                                                    <span>
                                                        处理
                                                    </span>
                                                </button>
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-document"></i>
                                                    <span>
                                                        流程
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_26 is-center  el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    4
                                                </div>
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_27 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 198px;">
                                                研发的项目实施完成审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_28 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 118px;">
                                                项目实施完成审批
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_29 is-center  el-table__cell">
                                            <div class="cell">
                                                实施完成登记
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_30 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_31 is-center  el-table__cell">
                                            <div class="cell">
                                                邓论
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_32 is-center  el-table__cell">
                                            <div class="cell">
                                                2022-01-13 14:50:51
                                            </div>
                                        </td>
                                                    <td rowspan="1" colspan="1" class="el-table_4_column_33 is-left  el-table__cell">
                                            <div class="cell">
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-edit"></i>
                                                    <span>
                                                        处理
                                                    </span>
                                                </button>
                                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                                <i class="el-icon-document"></i>
                                                    <span>
                                                        流程
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                                <!----></tbody>
                            </table>
                            <!---->
                                        <!----></div>
                            <!---->
                        <!---->
                        <!---->
                        <!---->
                                    <div class="el-table__column-resize-proxy" style="display: none;"></div>
                    </div>
                </div>
            </div>
            <div data-v-1954a2dd="" class="pagination">
                <div data-v-1954a2dd="" class="el-pagination">
                    <slot>
                        <span data-v-1954a2dd="" class="pageTotal">
                            共
                            <span data-v-1954a2dd="" class="pageTotalTxt">
                                4
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
                                                    <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                                        <!---->
                                        <!---->
                                        <!---->
                                        <!---->
                                                    <!----></span>
                                                <!----></span>
                                        <!---->
                                            <!----></div>
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
                                                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                                    </div>
                                    <div class="el-scrollbar__bar is-vertical">
                                                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                                        </div>
                                    </div>
                                            <!----></div>
                        </div>
                    </span>
                    <button type="button" disabled="disabled" class="btn-prev">
                                    <i class="el-icon el-icon-arrow-left"></i>
                    </button>
                    <ul class="el-pager">
                        <li class="number active">
                            1
                        </li>
                        <!---->
                        <!---->
                                    <!----></ul>
                    <button type="button" disabled="disabled" class="btn-next">
                                    <i class="el-icon el-icon-arrow-right"></i>
                    </button>
                    <span class="el-pagination__jump">
                        前往
                        <div class="el-input el-pagination__editor is-in-pagination">
                            <input type="number" autocomplete="off" min="1" max="1" class="el-input__inner">
                        </div>
                        页
                    </span>
                </div>
                <div data-v-93762a08="" data-v-1954a2dd="" class="el-dialog__wrapper"
                style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="部门" class="el-dialog"
                    style="margin-top: 15vh; width: 500px;">
                        <div class="el-dialog__header">
                            <span class="el-dialog__title">
                                部门
                            </span>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                            <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div>
                        <!---->
                                    <!----></div>
                </div>
                <div data-v-1954a2dd="" class="el-dialog__wrapper" style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="选择发起人" class="el-dialog"
                    style="margin-top: 15vh; width: 30%;">
                        <div class="el-dialog__header">
                            <span class="el-dialog__title">
                                选择发起人
                            </span>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                            <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div>
                        <!---->
                        <div class="el-dialog__footer">
                            <div data-v-1954a2dd="" class="dialog-footer">
                                <button data-v-1954a2dd="" type="button" class="el-button el-button--default el-button--small">
                                    <!---->
                                    <!---->
                                    <span>
                                        取 消
                                    </span>
                                </button>
                                <button data-v-1954a2dd="" type="button" class="el-button el-button--primary el-button--small">
                                    <!---->
                                    <!---->
                                    <span>
                                        确 定
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-d846a890="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-d846a890="" class="dialog-footer">
                            <button data-v-d846a890="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-d846a890="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-d846a890="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    提 交
                                </span>
                            </button>
                            <button data-v-d846a890="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-652ee963="" data-v-1954a2dd="" class="el-dialog__wrapper abow_dialog"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="编辑" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title">
                            编辑
                        </span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-652ee963="" class="dialog-footer">
                            <button data-v-652ee963="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-652ee963="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-652ee963="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    提 交
                                </span>
                            </button>
                            <button data-v-652ee963="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-47dafff1="" data-v-1954a2dd="" class="el-dialog__wrapper abow_dialog"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-47dafff1="" class="dialog-footer">
                            <button data-v-47dafff1="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-47dafff1="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-47dafff1="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    提 交
                                </span>
                            </button>
                            <button data-v-47dafff1="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-7183496b="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-7183496b="" class="dialog-footer">
                            <button data-v-7183496b="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <button data-v-7183496b="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    审批发起
                                </span>
                            </button>
                            <button data-v-7183496b="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    审批提交
                                </span>
                            </button>
                            <button data-v-7183496b="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    审批提交
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-b6224bea="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-b6224bea="" class="dialog-footer">
                            <button data-v-b6224bea="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <button data-v-b6224bea="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    审批发起
                                </span>
                            </button>
                            <button data-v-b6224bea="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    审批提交
                                </span>
                            </button>
                            <button data-v-b6224bea="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    审批提交
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-70145d12="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-70145d12="" class="dialog-footer">
                            <button data-v-70145d12="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <!---->
                                        <!----></div>
                    </div>
                </div>
            </div>
            <div data-v-56e2879d="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-56e2879d="" class="dialog-footer">
                            <!---->
                                        <!----></div>
                    </div>
                </div>
            </div>
            <!---->
            <div data-v-247469d0="" data-v-1954a2dd="">
                <div data-v-247469d0="" class="el-dialog__wrapper abow_dialog" style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                    style="margin-top: 15vh; width: 1200px;">
                        <div class="el-dialog__header">
                            <div data-v-247469d0="" class="header-title">
                                            <p data-v-247469d0="" class="itemTitleWrap"></p>
                                <span data-v-247469d0="" class="itemTitle">
                                    项目名称：
                                                <span data-v-247469d0="" class="proNameSty"></span>
                                </span>
                                <div data-v-247469d0="" class="el-col el-col-24">
                                    <div data-v-247469d0="" class="margin-top-20 el-tabs el-tabs--card el-tabs--top">
                                        <div class="el-tabs__header is-top">
                                            <div class="el-tabs__nav-wrap is-top">
                                                <div class="el-tabs__nav-scroll">
                                                    <div role="tablist" class="el-tabs__nav is-top" style="transform: translateX(0px);">
                                                        <div id="tab-first" aria-controls="pane-first" role="tab" aria-selected="true"
                                                        tabindex="0" class="el-tabs__item is-top is-active">
                                                            基本信息
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="el-tabs__content">
                                            <div data-v-247469d0="" role="tabpanel" id="pane-first" aria-labelledby="tab-first"
                                            class="el-tab-pane">
                                            </div>
                                            <!---->
                                                        <!----></div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                            <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div>
                        <!---->
                        <div class="el-dialog__footer">
                            <div data-v-247469d0="" class="dialog-footer">
                                <button data-v-247469d0="" type="button" class="el-button el-button--default el-button--small">
                                    <!---->
                                    <!---->
                                    <span>
                                        取消
                                    </span>
                                </button>
                                <!---->
                                <!---->
                                <button data-v-247469d0="" type="button" class="el-button el-button--primary el-button--small"
                                style="display: none;">
                                    <!---->
                                    <!---->
                                    <span>
                                        提交
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-247469d0="">
                    <div data-v-8e58896e="" data-v-247469d0="" class="el-dialog__wrapper"
                    style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="设备选择" class="el-dialog"
                        style="margin-top: 15vh; width: 800px;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">
                                    设备选择
                                </span>
                                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                                <i class="el-dialog__close el-icon el-icon-close"></i>
                                </button>
                            </div>
                            <!---->
                                        <!----></div>
                    </div>
                    <div data-v-3ea7bd7a="" data-v-247469d0="" class="el-dialog__wrapper"
                    style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="人员" class="el-dialog"
                        style="margin-top: 15vh; width: 500px;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">
                                    人员
                                </span>
                                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                                <i class="el-dialog__close el-icon el-icon-close"></i>
                                </button>
                            </div>
                            <!---->
                                        <!----></div>
                    </div>
                    <div data-v-57613223="" data-v-247469d0="" class="el-dialog__wrapper"
                    style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="人员" class="el-dialog"
                        style="margin-top: 15vh; width: 500px;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">
                                    人员
                                </span>
                                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                                <i class="el-dialog__close el-icon el-icon-close"></i>
                                </button>
                            </div>
                            <!---->
                                        <!----></div>
                    </div>
                </div>
            </div>
            <div data-v-9992d7be="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-9992d7be="" class="dialog-footer">
                            <button data-v-9992d7be="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <!---->
                            <button data-v-9992d7be="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-355b75f4="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-355b75f4="" class="dialog-footer">
                            <button data-v-355b75f4="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <!---->
                            <button data-v-355b75f4="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-3588ffe0="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-3588ffe0="" class="dialog-footer">
                            <button data-v-3588ffe0="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <!---->
                            <button data-v-3588ffe0="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-c7fa5bd0="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-c7fa5bd0="" class="dialog-footer">
                            <button data-v-c7fa5bd0="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <!---->
                            <!---->
                                        <!----></div>
                    </div>
                </div>
            </div>
            <!---->
            <div data-v-96968de6="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-96968de6="" class="dialog-footer">
                            <!---->
                                        <!----></div>
                    </div>
                </div>
            </div>
            <div data-v-2959dc91="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-2959dc91="" class="dialog-footer">
                            <button data-v-2959dc91="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-2959dc91="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-2959dc91="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    提 交
                                </span>
                            </button>
                            <button data-v-2959dc91="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-5fbb47ab="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-5fbb47ab="" class="dialog-footer">
                            <button data-v-5fbb47ab="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-5fbb47ab="" type="button" class="el-button el-button--primary el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-5fbb47ab="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-1f94017c="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-1f94017c="" class="dialog-footer">
                            <button data-v-1f94017c="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-1f94017c="" type="button" class="el-button el-button--primary el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-1f94017c="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-1f94017c="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-1f94017c="" class="dialog-footer">
                            <button data-v-1f94017c="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-1f94017c="" type="button" class="el-button el-button--primary el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-1f94017c="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-16a3190f="" data-v-1954a2dd="">
                <div data-v-16a3190f="" class="el-dialog__wrapper" style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="流程图" class="el-dialog"
                    style="margin-top: 15vh; width: 80%;">
                        <div class="el-dialog__header">
                            <span class="el-dialog__title">
                                流程图
                            </span>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                            <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div>
                        <!---->
                                    <!----></div>
                </div>
            </div>
            <div data-v-1aa13954="" data-v-1954a2dd="">
                <div data-v-1aa13954="" class="el-dialog__wrapper" style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                    style="margin-top: 15vh; width: 1200px;">
                        <div class="el-dialog__header">
                                        <span class="el-dialog__title"></span>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                            <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div>
                        <!---->
                        <div class="el-dialog__footer">
                            <div data-v-1aa13954="" class="dialog-footer">
                                <!---->
                                            <!----></div>
                        </div>
                    </div>
                </div>
                <div data-v-1aa13954="">
                    <div data-v-eb6ab44e="" data-v-1aa13954="" class="el-dialog__wrapper"
                    style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="卡片号选择" class="el-dialog"
                        style="margin-top: 15vh; width: 900px;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">
                                    卡片号选择
                                </span>
                                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                                <i class="el-dialog__close el-icon el-icon-close"></i>
                                </button>
                            </div>
                            <!---->
                                        <!----></div>
                    </div>
                </div>
            </div>
            <div data-v-52ef2581="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
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
            <div data-v-2a6a05a2="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="考勤详情" class="el-dialog"
                style="margin-top: 15vh; width: 1200px;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title">
                            考勤详情
                        </span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-2a6a05a2="" class="dialog-footer">
                            <button data-v-2a6a05a2="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-2a6a05a2="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    确 定
                                </span>
                            </button>
                            <button data-v-2a6a05a2="" type="button" class="el-button el-button--primary el-button--small"
                            style="display: none;">
                                <!---->
                                <!---->
                                <span>
                                    提 交
                                </span>
                            </button>
                            <button data-v-2a6a05a2="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-42c02ea3="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-42c02ea3="" class="dialog-footer">
                            <button data-v-42c02ea3="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-42c02ea3="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-5f0bf300="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-5f0bf300="" class="dialog-footer">
                            <button data-v-5f0bf300="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-5f0bf300="" type="button" class="el-button el-button--primary el-button--small"
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
            <div data-v-0ad1a514="" data-v-1954a2dd="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header">
                                    <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                        <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <div class="el-dialog__footer">
                        <div data-v-0ad1a514="" class="dialog-footer">
                            <button data-v-0ad1a514="" type="button" class="el-button el-button--default el-button--small">
                                <!---->
                                <!---->
                                <span>
                                    取 消
                                </span>
                            </button>
                            <button data-v-0ad1a514="" type="button" class="el-button el-button--primary el-button--small"
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
                </el-main>
    <jhi-footer></jhi-footer>  
            </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" src="./todo.component.ts"></script>

<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f7fa; /* 更柔和的背景 */
}

.el-aside.aside-wrap {
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #dcdfe6;
}

.unfold#mainMenu {
  margin-left: 250px;
  min-height: calc(100vh - 60px);
  background-color: #f5f7fa;
  padding: 20px;

  .index {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);

    .ky-breadcrumb {
      margin-bottom: 10px;
      font-weight: 500;
      color: #333;
    }
  }

  .search.module-container {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    padding: 20px;

    .el-form-item--small {
      display: flex;
      align-items: center;

      .el-form-item__label {
        width: auto;
        margin-right: 10px;
      }
      .el-form-item__content {
        flex: 1;
        margin-left: 0;
      }
    }
  }

  .table {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  }
}

.el-aside {
  height: 100%;
  background: #f0f0f0;
  color: #646d90 !important;
  position: absolute;

  top: 89px;
  left: 13px;
  bottom: 60px;

  /* 为了保证侧边栏完整可视，常配合设置一个合适的高度或可滚动区域 */
  
  overflow-y: auto;
  font-size: 14px;
}

.aside-wrap[data-v-1a259ece] {
    margin-top: 0;
    border: 2px solid #e7efff;
}

.el-aside {
    overflow: auto;
    box-sizing: border-box;
}

aside {
    display: block;
    unicode-bidi: isolate;
}

.aside-wrap .aside-logo[data-v-1a259ece] {
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
}

.skinMenu0[data-v-1a259ece] {
    background-color: #ea7c07;
}

.aside-wrap .aside-logo .font-icon[data-v-1a259ece] {
    font-size: 22px;
    margin-left: 20px;
}

.iconfont, [class*=" icon"], [class^=icon] {
    font-family: iconfont !important;
    /* font-size: 16px; */
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.iconkuaijiecaidan:before {
    content: "\e623";
}

.aside-wrap .aside-logo .icon-right-txt[data-v-1a259ece] {
    margin-left: 10px;
    font-size: 14px;
}

.margin-l-110[data-v-1a259ece] {
    margin-left: 110px;
    cursor: pointer;
}

.foldIcon[data-v-1a259ece] {
    font-size: 20px;
    color: #fff;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    /* font-size: 16px; */
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-menu {
    border: none;
}

.el-menu {
    /* border-right: 1px solid #e6e6e6; */
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}

ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

.el-aside .el-menu-item[data-v-1a259ece], .el-aside .el-submenu .el-menu[data-v-1a259ece] {
    background-color: #fff !important;
    border-bottom: 1px solid #f2f2f2;
    height: 45px;
    line-height: 44px;
}

.el-menu-item {
    /* color: #303133; */
    /* -webkit-transition: border-color .3s, background-color .3s, color .3s; */
    transition: border-color .3s, background-color .3s, color .3s;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    white-space: nowrap;
}

.el-menu-item, .el-submenu__title {
    /* height: 56px; */
    /* line-height: 56px; */
    list-style: none;
}

.el-menu-item {
    position: relative;
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.font-icon-sec[data-v-1a259ece] {
    margin-right: 5px;
    color: #333;
}

.el-menu-item * {
    vertical-align: middle;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    /* vertical-align: baseline; */
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-menu-item * {
    vertical-align: middle;
}

.el-aside .el-menu-item[data-v-1a259ece], .el-aside .el-submenu .el-menu[data-v-1a259ece] {
    background-color: #fff !important;
    border-bottom: 1px solid #f2f2f2;
    height: 45px;
    line-height: 44px;
}

.el-menu-item {
    /* color: #303133; */
    /* -webkit-transition: border-color .3s, background-color .3s, color .3s; */
    transition: border-color .3s, background-color .3s, color .3s;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    white-space: nowrap;
}

.el-menu-item, .el-submenu__title {
    /* height: 56px; */
    /* line-height: 56px; */
    list-style: none;
}

.el-menu-item * {
    vertical-align: middle;
}

.unfold#mainMenu {
  margin-left: 250px;
  min-height: calc(100vh - 60px);
  background-color: #f0f2f5;
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

.search[data-v-1954a2dd] {
    margin-bottom: -22px;
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
    position: relative;
}

.el-row:after, .el-row:before {
    display: table;
}

.search .el-col {
    text-align: right;
}

.el-col-18 {
    width: 75%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-col-8 {
    width: 33.33333%;
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

.el-select {
    /* display: inline-block; */
    position: relative;
}
.el-select>.el-input {
    display: block;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-color-picker__icon, .el-input, .el-textarea {
    /* display: inline-block; */
    width: 100%;
}

.el-input--small .el-input__inner {
    height: 35px;
    line-height: 35px;
}

.el-input--suffix .el-input__inner {
    padding-right: 30px;
}

.el-select .el-input__inner {
    cursor: pointer;
    /* padding-right: 35px; */
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
    line-height: 40px;
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
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
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

.el-select .el-input .el-select__caret {
    color: #c0c4cc;
    font-size: 14px;
    /* -webkit-transition: -webkit-transform .3s; */
    /* transition: -webkit-transform .3s; */
    /* transition: transform .3s; */
    transition: transform .3s, -webkit-transform .3s;
    /* -webkit-transform: rotate(180deg); */
    transform: rotate(180deg);
    cursor: pointer;
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
    /* transition: all .3s; */
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

.el-icon-arrow-up:before {
    content: "\e6e1";
}

.el-input__icon:after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
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

ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
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
    margin: 0;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.el-scrollbar__bar.is-horizontal {
    height: 6px;
    left: 2px;
}

.el-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    /* -webkit-transition: opacity .12s ease-out; */
    transition: opacity .12s ease-out;
}

.el-scrollbar__bar.is-horizontal>div {
    height: 100%;
}

.el-scrollbar__thumb {
    position: relative;
    display: block;
    width: 0;
    /* height: 0; */
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(144, 147, 153, .3);
    /* -webkit-transition: background-color .3s; */
    transition: background-color .3s;
}

.el-scrollbar__bar.is-vertical {
    width: 6px;
    top: 2px;
}

.el-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    /* -webkit-transition: opacity .12s ease-out; */
    transition: opacity .12s ease-out;
}

.el-scrollbar__bar.is-vertical>div {
    width: 100%;
}

.el-scrollbar__thumb {
    position: relative;
    display: block;
    /* width: 0; */
    /* height: 0; */
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(144, 147, 153, .3);
    /* -webkit-transition: background-color .3s; */
    transition: background-color .3s;
}

.el-form-item__content:after {
    clear: both;
}

.el-form-item:after {
    clear: both;
}

.el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
}

.el-col-6 {
    width: 25%;
}

[class*=el-col-] {
    float: left;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.search .el-button {
    margin-top: 8px;
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
    /* margin: 0; */
    /* -webkit-transition: .1s; */
    transition: .1s;
    font-weight: 500;
    /* padding: 12px 20px; */
    /* font-size: 14px; */
    /* border-radius: 4px; */
    -webkit-user-select: none;
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

.el-row:after {
    clear: both;
}

.el-row:after, .el-row:before {
    display: table;
}

.space-top[data-v-1954a2dd] {
    margin-top: 20px;
    background-color: transparent;
}

.table[data-v-1954a2dd] {
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

.el-table--scrollable-x .el-table__body-wrapper {
    overflow-x: auto;
}

.el-table__body-wrapper {
    overflow: hidden;
    position: relative;
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

tbody {
    display: table-row-group;
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

.el-table--enable-row-transition .el-table__body td.el-table__cell {
    /* -webkit-transition: background-color .25s ease; */
    transition: background-color .25s ease;
}

.el-table .el-table__cell.is-center {
    text-align: center;
}

.table .el-table td, .table .el-table th.is-leaf, .ul-table .el-table td, .ul-table .el-table th.is-leaf {
    border-bottom-color: #dceefe;
}

.table .el-table--border td, .table .el-table--border th, .table .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed, .ul-table .el-table--border td, .ul-table .el-table--border th, .ul-table .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right-color: #dceefe;
}

.table .el-table td, .table .el-table th, .ul-table .el-table td, .ul-table .el-table th {
    padding: 10px 0;
}

.el-table--enable-row-transition .el-table__body td {
    background-color: #fff;
}

.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
    border-bottom: 1px solid #ebeef5;
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

td {
    display: table-cell;
    margin: 0;
    unicode-bidi: isolate;
}

.el-table--border .el-table__cell:first-child .cell {
    padding-left: 10px;
}

.table .el-table .cell, .ul-table .el-table .cell {
    line-height: 18px;
}

.el-table td.el-table__cell div {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
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

.el-table td.el-table__cell div {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
}

.el-table__column-resize-proxy {
    position: absolute;
    left: 200px;
    top: 0;
    bottom: 0;
    width: 0;
    border-left: 1px solid #ebeef5;
    z-index: 10;
}

.el-table--border:after, .el-table--group:after {
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
}

.el-table--border:after, .el-table--group:after, .el-table:before {
    content: "";
    position: absolute;
    background-color: #ebeef5;
    z-index: 1;
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
    /* display: inline-block; */
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

.el-pagination__sizes .el-input .el-input__inner {
    font-size: 13px;
    padding-left: 8px;
}

.el-input--mini .el-input__inner {
    height: 28px;
    line-height: 28px;
}

.el-select .el-input__inner {
    cursor: pointer;
    /* padding-right: 35px; */
}

.el-pagination .el-input__inner {
    text-align: center;
    -moz-appearance: textfield;
    /* line-height: normal; */
}

.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    /* border-radius: 4px; */
    border: 1px solid #dcdfe6;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    /* height: 40px; */
    line-height: 40px;
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

.el-pagination .el-input__suffix {
    right: 0;
    /* -webkit-transform: scale(.8); */
    transform: scale(.8);
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

.el-select .el-input .el-select__caret {
    color: #c0c4cc;
    font-size: 14px;
    /* -webkit-transition: -webkit-transform .3s; */
    /* transition: -webkit-transform .3s; */
    /* transition: transform .3s; */
    transition: transform .3s, -webkit-transform .3s;
    /* -webkit-transform: rotate(180deg); */
    transform: rotate(180deg);
    cursor: pointer;
}

.el-input--mini .el-input__icon {
    line-height: 28px;
}

.el-input__icon {
    width: 25px;
    text-align: center;
    /* line-height: 40px; */
}

.el-input__icon, .el-input__prefix {
    height: 100%;
    /* -webkit-transition: all .3s; */
    /* transition: all .3s; */
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

.el-icon-arrow-up:before {
    content: "\e6e1";
}

.el-input__icon:after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
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

ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
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
    margin: 0;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
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

.el-scrollbar__bar.is-horizontal {
    height: 6px;
    left: 2px;
}

.el-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    /* -webkit-transition: opacity .12s ease-out; */
    transition: opacity .12s ease-out;
}

.el-scrollbar__bar.is-horizontal>div {
    height: 100%;
}

.el-scrollbar__thumb {
    position: relative;
    display: block;
    /* width: 0; */
    /* height: 0; */
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(144, 147, 153, .3);
    /* -webkit-transition: background-color .3s; */
    transition: background-color .3s;
}

.el-scrollbar__bar.is-vertical {
    width: 6px;
    top: 2px;
}

.el-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    /* -webkit-transition: opacity .12s ease-out; */
    transition: opacity .12s ease-out;
}

.el-scrollbar__bar.is-vertical>div {
    width: 100%;
}

.el-scrollbar__thumb {
    position: relative;
    display: block;
    /* width: 0; */
    /* height: 0; */
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(144, 147, 153, .3);
    /* -webkit-transition: background-color .3s; */
    transition: background-color .3s;
}

.el-pagination button:disabled {
    background-color: transparent;
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
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    /* line-height: 1; */
    vertical-align: baseline;
    /* display: inline-block; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-arrow-left:before {
    content: "\e6de";
}

.el-pager {
    /* -webkit-user-select: none; */
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

.pagination .el-dialog, .pagination .el-pager li, .pagination .el-pagination .btn-next, .pagination .el-pagination .btn-prev, .pagination .el-pagination button:disabled {
    background-color: transparent;
}

.el-pagination button:disabled {
    color: #c0c4cc;
    /* background-color: #fff; */
    cursor: not-allowed;
}

.el-pagination .btn-next {
    padding-left: 12px;
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
    /* line-height: 1; */
    vertical-align: baseline;
    /* display: inline-block; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-arrow-right:before {
    content: "\e6e0";
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

.el-pagination__jump {
    margin-left: 24px;
    font-weight: 400;
    color: #606266;
}

.el-pagination__editor.el-input {
    width: 50px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-pagination__editor {
    line-height: 18px;
    padding: 0 2px;
    height: 28px;
    text-align: center;
    margin: 0 2px;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    border-radius: 3px;
}

.el-pagination__editor.el-input .el-input__inner {
    height: 28px;
}

.el-pagination__jump .el-input__inner {
    padding: 0 3px;
}

.el-pagination .el-input__inner {
    text-align: center;
    -moz-appearance: textfield;
    /* line-height: normal; */
}

.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    /* border-radius: 4px; */
    border: 1px solid #dcdfe6;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    /* height: 40px; */
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    /* -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1); */
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

.el-pagination:after {
    clear: both;
}

.el-pagination:after, .el-pagination:before {
    display: table;
    content: "";
}

.el-dialog__wrapper {
    top: -50px;
}

</style>