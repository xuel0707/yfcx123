<template>
  <div data-v-1a259ece="" data-v-c466b63c="" class="layout-container">
    <jhi-navbar></jhi-navbar>
    <top-navbar></top-navbar>

    <main data-v-1a259ece="" class="unfold" id="mainMenu">
        <div data-v-418bd115="" data-v-1a259ece="" class="index">
            <div data-v-993f93e8="" data-v-418bd115="">
                <div data-v-993f93e8="" class="ky-breadcrumb">
                    <span data-v-993f93e8="" class="breadcrumb-icon">
                        <span data-v-993f93e8="" class="position">
                            当前位置：
                        </span>
                    </span>
                    <div data-v-993f93e8="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb breadcrumb">
                        <span data-v-993f93e8="" class="el-breadcrumb__item">
                            <span role="link" class="el-breadcrumb__inner">
                                运营管理
                            </span>
                            <span role="presentation" class="el-breadcrumb__separator">
                                /
                            </span>
                        </span>
                        <span data-v-993f93e8="" class="el-breadcrumb__item" aria-current="page">
                            <span role="link" class="el-breadcrumb__inner">
                                账号管理
                            </span>
                            <span role="presentation" class="el-breadcrumb__separator">
                                /
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div data-v-418bd115="" class="search module-container">
                <form data-v-418bd115="" class="el-form demo-form-inline">
                    <div data-v-418bd115="" class="el-row" style="margin-left: -15px; margin-right: -15px;">
                        <div data-v-418bd115="" class="el-col el-col-24" style="padding-left: 15px; padding-right: 15px;">
                            <div data-v-418bd115="" class="el-row">
                                <!---->
                                <div data-v-418bd115="" class="el-col el-col-3">
                                    <div data-v-418bd115="" class="el-form-item el-form-item--small">
                                        <label class="el-form-item__label" style="width: 60px;">
                                            账号
                                        </label>
                                        <div class="el-form-item__content" style="margin-left: 60px;">
                                            <div data-v-418bd115="" class="el-input el-input--small">
                                                <!---->
                                                <input type="text" autocomplete="off" placeholder="账号" class="el-input__inner">
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></div>
                                            <!----></div>
                                    </div>
                                </div>
                                <div data-v-418bd115="" class="el-col el-col-3">
                                    <div data-v-418bd115="" class="el-form-item el-form-item--small">
                                        <label class="el-form-item__label" style="width: 60px;">
                                            姓名
                                        </label>
                                        <div class="el-form-item__content" style="margin-left: 60px;">
                                            <div data-v-418bd115="" class="el-input el-input--small">
                                                <!---->
                                                <input type="text" autocomplete="off" placeholder="姓名" class="el-input__inner">
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></div>
                                            <!----></div>
                                    </div>
                                </div>
                                <div data-v-418bd115="" class="el-col el-col-4">
                                    <div data-v-418bd115="" class="el-form-item el-form-item--small">
                                        <label class="el-form-item__label" style="width: 60px;">
                                            手机
                                        </label>
                                        <div class="el-form-item__content" style="margin-left: 60px;">
                                            <div data-v-418bd115="" class="el-input el-input--small">
                                                <!---->
                                                <input type="text" autocomplete="off" placeholder="手机" class="el-input__inner">
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></div>
                                            <!----></div>
                                    </div>
                                </div>
                                <div data-v-418bd115="" class="el-col el-col-4">
                                    <div data-v-418bd115="" class="el-form-item el-form-item--small">
                                        <label class="el-form-item__label" style="width: 60px;">
                                            状态
                                        </label>
                                        <div class="el-form-item__content" style="margin-left: 60px;">
                                            <div data-v-418bd115="" class="el-select el-select--small">
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
                                                        <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -21px; margin-right: -21px;">
                                                            <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                <!---->
                                                                <li data-v-418bd115="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        全部
                                                                    </span>
                                                                </li>
                                                                <li data-v-418bd115="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        正常使用
                                                                    </span>
                                                                </li>
                                                                <li data-v-418bd115="" class="el-select-dropdown__item">
                                                                    <span>
                                                                        已冻结
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
                                <div data-v-418bd115="" class="el-col el-col-6" style="float: right;">
                                    <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--small">
                                        <!---->
                                        <i class="el-icon-search"></i>
                                        <span>
                                            查询
                                        </span>
                                    </button>
                                    <button data-v-418bd115="" type="button" class="el-button el-button--default el-button--small">
                                        <!---->
                                        <i class="el-icon-refresh-right"></i>
                                        <span>
                                            重置
                                        </span>
                                    </button>
                                    <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--small">
                                        <!---->
                                        <i class="el-icon-plus"></i>
                                        <span>
                                            新增
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div data-v-418bd115="" class="space-top">
                <div data-v-418bd115="" class="table">
                    <div data-v-418bd115="" class="el-table el-table--fit el-table--border el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                    style="width: 100%; max-height: 600px;">
                        <div class="hidden-columns">
                            <div data-v-418bd115=""></div>
                            <!---->
                            <div data-v-418bd115=""></div>
                            <div data-v-418bd115=""></div>
                            <div data-v-418bd115=""></div>
                            <div data-v-418bd115=""></div>
                            <div data-v-418bd115=""></div>
                            <div data-v-418bd115=""></div>
                        </div>
                        <div class="el-table__header-wrapper">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                            style="width: 890px;">
                                <colgroup>
                                    <col name="el-table_1_column_1" width="50">
                                        <col name="el-table_1_column_2" width="80">
                                            <col name="el-table_1_column_3" width="80">
                                                <col name="el-table_1_column_4" width="100">
                                                    <col name="el-table_1_column_5" width="80">
                                                        <col name="el-table_1_column_6" width="80">
                                                            <col name="el-table_1_column_7" width="420">
                                                                <col name="gutter" width="0"></colgroup>
                                <thead class="has-gutter">
                                    <tr class="">
                                        <th colspan="1" rowspan="1" class="el-table_1_column_1  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                序号
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_1_column_2  is-center   is-leaf is-sortable el-table__cell"
                                        style="cursor: pointer;">
                                            <div class="cell">
                                                登录账号
                                                <span class="caret-wrapper">
                                                    <i class="sort-caret ascending"></i>
                                                    <i class="sort-caret descending"></i>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_1_column_3  is-center   is-leaf is-sortable el-table__cell"
                                        style="cursor: pointer;">
                                            <div class="cell">
                                                姓名
                                                <span class="caret-wrapper">
                                                    <i class="sort-caret ascending"></i>
                                                    <i class="sort-caret descending"></i>
                                                </span>
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_1_column_4  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                手机号码
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_1_column_5  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                状态
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_1_column_6  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                角色
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" class="el-table_1_column_7  is-center   is-leaf el-table__cell">
                                            <div class="cell">
                                                管理
                                            </div>
                                        </th>
                                        <th class="el-table__cell gutter" style="width: 0px; display: none;"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="el-table__body-wrapper is-scrolling-left" style="max-height: 541px;">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                            style="width: 890px;">
                                <colgroup>
                                    <col name="el-table_1_column_1" width="50">
                                        <col name="el-table_1_column_2" width="80">
                                            <col name="el-table_1_column_3" width="80">
                                                <col name="el-table_1_column_4" width="100">
                                                    <col name="el-table_1_column_5" width="80">
                                                        <col name="el-table_1_column_6" width="80">
                                                            <col name="el-table_1_column_7" width="420"></colgroup>
                                <tbody>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_1_column_1 is-center  el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    1
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                lizi1234567
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                杨紫
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_4 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 98px;">
                                                12345678910
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_5 is-center  el-table__cell">
                                            <div class="cell">
                                                正常使用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_6 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                科研财务助理
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_7 is-center  el-table__cell">
                                            <div class="cell">
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view"></i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-edit"></i>
                                                    <span>
                                                        编辑
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-lock"></i>
                                                    <span>
                                                        重置密码
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-user"></i>
                                                    <span>
                                                        绑定角色
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--warning el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-switch-button"></i>
                                                    <span>
                                                        冻结
                                                    </span>
                                                </button>
                                                <!----></div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_1_column_1 is-center  el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    2
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                dengchao01
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                邓超
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_4 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 98px;">
                                                18602013906
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_5 is-center  el-table__cell">
                                            <div class="cell">
                                                正常使用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_6 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                研发项目负责人,企业领导
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_7 is-center  el-table__cell">
                                            <div class="cell">
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view"></i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-edit"></i>
                                                    <span>
                                                        编辑
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-lock"></i>
                                                    <span>
                                                        重置密码
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-user"></i>
                                                    <span>
                                                        绑定角色
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--warning el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-switch-button"></i>
                                                    <span>
                                                        冻结
                                                    </span>
                                                </button>
                                                <!----></div>
                                        </td>
                                    </tr>
                                    <tr class="el-table__row">
                                        <td rowspan="1" colspan="1" class="el-table_1_column_1 is-center  el-table__cell">
                                            <div class="cell">
                                                <div>
                                                    3
                                                </div>
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                91440300MA5DPFR15Y
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                邓论
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_4 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 98px;">
                                                13533622405
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_5 is-center  el-table__cell">
                                            <div class="cell">
                                                正常使用
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_6 is-center  el-table__cell">
                                            <div class="cell el-tooltip" style="width: 78px;">
                                                企业管理员
                                            </div>
                                        </td>
                                        <td rowspan="1" colspan="1" class="el-table_1_column_7 is-center  el-table__cell">
                                            <div class="cell">
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-view"></i>
                                                    <span>
                                                        查看
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-edit"></i>
                                                    <span>
                                                        编辑
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-lock"></i>
                                                    <span>
                                                        重置密码
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--primary el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-user"></i>
                                                    <span>
                                                        绑定角色
                                                    </span>
                                                </button>
                                                <button data-v-418bd115="" type="button" class="el-button el-button--warning el-button--mini">
                                                    <!---->
                                                    <i class="el-icon-switch-button"></i>
                                                    <span>
                                                        冻结
                                                    </span>
                                                </button>
                                                <!----></div>
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
                <div data-v-418bd115="" class="pagination">
                    <div data-v-418bd115="" class="el-pagination">
                        <slot>
                            <span data-v-418bd115="" class="pageTotal">
                                共
                                <span data-v-418bd115="" class="pageTotalTxt">
                                    3
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
                                        <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -21px; margin-right: -21px;">
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
                                <!---->
                                <input type="number" autocomplete="off" min="1" max="1" class="el-input__inner">
                                <!---->
                                <!---->
                                <!---->
                                <!----></div>
                            页
                        </span>
                    </div>
                </div>
            </div>
            <div data-v-ab1e58a4="" data-v-418bd115="">
                <div data-v-ab1e58a4="" class="el-dialog__wrapper" style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                    style="margin-top: 15vh; width: 850px;">
                        <div class="el-dialog__header">
                            <span class="el-dialog__title"></span>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div>
                        <!---->
                        <div class="el-dialog__footer">
                            <div data-v-ab1e58a4="" class="dialog-footer">
                                <!---->
                                <!----></div>
                        </div>
                    </div>
                </div>
                <div data-v-ab1e58a4="">
                    <div data-v-52edd9aa="" data-v-ab1e58a4="" class="el-dialog__wrapper"
                    append-to-body="" style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="开通职工系统账号" class="el-dialog"
                        style="margin-top: 15vh;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">
                                    开通职工系统账号
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
            <div data-v-439d2ff4="" data-v-418bd115="" class="el-dialog__wrapper"
            style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="绑定角色" class="el-dialog"
                style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title">
                            绑定角色
                        </span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                    <!---->
                    <!----></div>
            </div>
            <div data-v-3b320d64="" data-v-418bd115="">
                <div data-v-3b320d64="" class="el-dialog__wrapper" style="display: none;">
                    <div role="dialog" aria-modal="true" aria-label="新增账号" class="el-dialog"
                    style="margin-top: 15vh; width: 850px;">
                        <div class="el-dialog__header">
                            <span class="el-dialog__title">
                                新增账号
                            </span>
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                        </div>
                        <!---->
                        <!----></div>
                </div>
                <div data-v-3b320d64="">
                    <div data-v-52edd9aa="" data-v-3b320d64="" class="el-dialog__wrapper"
                    append-to-body="" style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="开通职工系统账号" class="el-dialog"
                        style="margin-top: 15vh;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">
                                    开通职工系统账号
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
        </div>
    </main>
    
    <jhi-footer></jhi-footer>  
  </div>
</template>

<script lang="ts" src="./manage.component.ts"></script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #afafaf;
  position: absolute;
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

.search[data-v-418bd115] {
    margin-bottom: -22px;
    padding: 5px;
}

.module-container {
    border: 1px solid hsla(0, 0%, 93.3%, .6588235294117647);
    background-color: #fff;
    border-radius: 10px;
    /* -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .08); */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .08);
}

form {
    display: block;
    unicode-bidi: isolate;
    margin: 0;
    padding: 0;
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

.el-col-3 {
    width: 12.5%;
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

.el-col-3 {
    width: 12.5%;
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

.el-form-item__content:after {
    clear: both;
}

.el-form-item__content:after, .el-form-item__content:before {
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

.el-select>.el-input {
    display: block;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
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
    /* line-height: 40px; */
    outline: 0;
    padding: 0 15px;
    /* -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1); */
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

.el-input__suffix {
    height: 100%;
    right: 5px;
    /* -webkit-transition: all .3s; */
    transition: all .3s;
    pointer-events: none;
}

.el-input__suffix {
    position: absolute;
    top: 0;
    text-align: center;
}

.el-input__suffix {
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
    transition: -webkit-transform .3s;
    transition: transform .3s;
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

.el-select-dropdown__item {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
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
    -webkit-transition: background-color .3s;
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

.el-col-6 {
    width: 25%;
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
    /* background: #fff; */
    /* border: 1px solid #dcdfe6; */
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

.el-icon-refresh-right:before {
    content: "\e6c8";
}

.el-icon-plus:before {
    content: "\e6d9";
}

.space-top[data-v-418bd115] {
    margin-top: 20px;
    background-color: transparent;
}

.table[data-v-418bd115] {
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

.el-table:before {
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

.el-table__header-wrapper {
    width: 100%;
}

.el-table__header {
    table-layout: fixed;
    border-collapse: separate;
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

.el-table tr {
    background-color: transparent !important;
}

tr {
    display: table-row;
    vertical-align: inherit;
    unicode-bidi: isolate;
    border-color: inherit;
}

.table .el-table th.is-leaf, .ul-table .el-table td, .ul-table .el-table th.is-leaf {
    border-bottom-color: #dceefe;
}

.el-table th.el-table__cell.is-leaf {
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

th, ul {
    margin: 0;
    /* padding: 0; */
}

th {
    display: table-cell;
    font-weight: bold;
    unicode-bidi: isolate;
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

table {
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    unicode-bidi: isolate;
    border-color: gray;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
}

.el-table tr {
    background-color: transparent !important;
}

tr {
    display: table-row;
    vertical-align: inherit;
    unicode-bidi: isolate;
    border-color: inherit;
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

.el-pagination span:not([class*=suffix]) {
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

.el-pagination span:not([class*=suffix]) {
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

.el-pagination span:not([class*=suffix]) {
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

.el-input__suffix {
    position: absolute;
    top: 0;
    text-align: center;
}

.el-input__suffix {
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
    transition: -webkit-transform .3s;
    transition: transform .3s;
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

.el-icon-arrow-up:before {
    content: "\e6e1";
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
    margin: 0;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
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

.pagination .el-pagination .btn-prev, .pagination .el-pagination button:disabled {
    background-color: transparent;
}

.el-pagination button:disabled {
    color: #c0c4cc;
    /* background-color: #fff; */
    cursor: not-allowed;
}

.el-pagination .btn-prev {
    padding-right: 12px;
}

.el-pagination .btn-prev {
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

.el-pagination .btn-prev .el-icon {
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


</style>
