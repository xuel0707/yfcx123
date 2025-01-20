<template>
  <div data-v-1a259ece="" data-v-c466b63c="" class="layout-container">
    <jhi-navbar></jhi-navbar>
    <top-navbar></top-navbar>

    <main data-v-1a259ece="" class="unfold" id="mainMenu">
      <div data-v-744de854="" data-v-1a259ece="">
          <div data-v-993f93e8="" data-v-744de854="">
              <div data-v-993f93e8="" class="ky-breadcrumb">
                  <span data-v-993f93e8="" class="breadcrumb-icon">
                      <span data-v-993f93e8="" class="position">
                          当前位置：
                      </span>
                  </span>
                  <div data-v-993f93e8="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb breadcrumb">
                      <span data-v-993f93e8="" class="el-breadcrumb__item">
                          <span role="link" class="el-breadcrumb__inner">
                              报表查询
                          </span>
                          <span role="presentation" class="el-breadcrumb__separator">
                              /
                          </span>
                      </span>
                      <span data-v-993f93e8="" class="el-breadcrumb__item">
                          <span role="link" class="el-breadcrumb__inner">
                              分析统计
                          </span>
                          <span role="presentation" class="el-breadcrumb__separator">
                              /
                          </span>
                      </span>
                      <span data-v-993f93e8="" class="el-breadcrumb__item" aria-current="page">
                          <span role="link" class="el-breadcrumb__inner">
                              人员情况统计表
                          </span>
                          <span role="presentation" class="el-breadcrumb__separator">
                              /
                          </span>
                      </span>
                  </div>
              </div>
          </div>
          <div data-v-744de854="" class="search module-container">
              <form data-v-744de854="" class="el-form">
                  <div data-v-744de854="" class="el-row">
                      <div data-v-744de854="" class="el-col el-col-6" style="display: none;">
                          <div data-v-744de854="" class="el-form-item el-form-item--small">
                              <label class="el-form-item__label" style="width: 100px;">
                                  入职截止日期:
                              </label>
                              <div class="el-form-item__content" style="margin-left: 100px;">
                                  <div data-v-744de854="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month">
                                      <!---->
                                      <input type="text" autocomplete="off" name="" placeholder="入职截止日期" class="el-input__inner">
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
                      <div data-v-744de854="" class="el-col el-col-6">
                          <div data-v-744de854="" class="el-form-item el-form-item--small">
                              <label class="el-form-item__label" style="width: 80px;">
                                  年份:
                              </label>
                              <div class="el-form-item__content" style="margin-left: 80px;">
                                  <div data-v-744de854="" class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--year">
                                      <!---->
                                      <input type="text" autocomplete="off" name="" placeholder="年份" class="el-input__inner">
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
                      <div data-v-744de854="" class="el-col el-col-12 el-col-offset-2" style="float: right;">
                          <!---->
                          <!---->
                          <!---->
                          <button data-v-744de854="" type="button" class="el-button el-button--primary el-button--small">
                              <!---->
                              <i class="el-icon-search">
                              </i>
                              <span>
                                  查询
                              </span>
                          </button>
                          <button data-v-744de854="" type="button" class="el-button el-button--default el-button--small">
                              <!---->
                              <i class="el-icon-refresh-right">
                              </i>
                              <span>
                                  重置
                              </span>
                          </button>
                          <!---->
                          <!---->
                          <button data-v-744de854="" type="button" class="el-button el-button--primary el-button--small">
                              <!---->
                              <i class="el-icon-download">
                              </i>
                              <span>
                                  导出
                              </span>
                          </button>
                      </div>
                  </div>
              </form>
          </div>
          <br data-v-744de854="">
          <nav data-v-744de854="">
              <a data-v-744de854="" class="active">
                  人员情况统计表
              </a>
              <a data-v-744de854="" class="">
                  人员信息表
              </a>
              <a data-v-744de854="" class="">
                  人员年度情况统计表
              </a>
          </nav>
          <div data-v-744de854="" class="content">
              <div data-v-744de854="" class="table">
                  <div data-v-744de854="" class="el-table el-table--fit el-table--border el-table--group el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                  style="width: 100%;">
                      <div class="hidden-columns">
                          <div data-v-744de854="">
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                          </div>
                          <div data-v-744de854="">
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                          </div>
                          <div data-v-744de854="">
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                          </div>
                          <div data-v-744de854="">
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                          </div>
                          <div data-v-744de854="">
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                          </div>
                          <div data-v-744de854="">
                          </div>
                      </div>
                      <div class="el-table__header-wrapper">
                          <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                          style="width: 100%;">
                            <colgroup>
                                <col name="el-table_1_column_1_column_2" width="7.05%">
                                <col name="el-table_1_column_1_column_3" width="5.128%">
                                <col name="el-table_1_column_4_column_5" width="5.128%">
                                <col name="el-table_1_column_4_column_6" width="6.41%">
                                <col name="el-table_1_column_4_column_7" width="5.128%">
                                <col name="el-table_1_column_4_column_8" width="5.128%">
                                <col name="el-table_1_column_9_column_10" width="4.16%">
                                <col name="el-table_1_column_9_column_11" width="4.16%">
                                <col name="el-table_1_column_9_column_12" width="4.16%">
                                <col name="el-table_1_column_9_column_13" width="6.089%">
                                <col name="el-table_1_column_14_column_15" width="5.128%">
                                <col name="el-table_1_column_14_column_16" width="5.128%">
                                <col name="el-table_1_column_14_column_17" width="5.128%">
                                <col name="el-table_1_column_14_column_18" width="5.128%">
                                <col name="el-table_1_column_19_column_20" width="5.77%">
                                <col name="el-table_1_column_19_column_21" width="5.128%">
                                <col name="el-table_1_column_19_column_22" width="5.128%">
                                <col name="el-table_1_column_19_column_23" width="5.77%">
                                <col name="el-table_1_column_24" width="5.128%">
                                <col name="gutter" width="0">
                            </colgroup>
                            <thead class="is-group has-gutter">
                                <tr class="">
                                    <th colspan="2" rowspan="1" class="el-table_1_column_1     el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </th>
                                    <th colspan="4" rowspan="1" class="el-table_1_column_4  is-center   el-table__cell">
                                        <div class="cell">
                                            人员类型
                                        </div>
                                    </th>
                                    <th colspan="4" rowspan="1" class="el-table_1_column_9  is-center   el-table__cell">
                                        <div class="cell">
                                            学历
                                        </div>
                                    </th>
                                    <th colspan="4" rowspan="1" class="el-table_1_column_14  is-center   el-table__cell">
                                        <div class="cell">
                                            职称
                                        </div>
                                    </th>
                                    <th colspan="4" rowspan="1" class="el-table_1_column_19  is-center   el-table__cell">
                                        <div class="cell">
                                            年龄
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="2" class="el-table_1_column_24  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            年末人数
                                        </div>
                                    </th>
                                    <th class="el-table__cell gutter" style="width: 0px; display: none;">
                                    </th>
                                </tr>
                                <tr class="">
                                    <th colspan="1" rowspan="1" class="el-table_1_column_1_column_2  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_1_column_3  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            年均人数
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_4_column_5  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            外籍人员
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_4_column_6  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            其中：外籍常驻人员
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_4_column_7  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            留学归国人员
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_4_column_8  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            千人计划人员
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_9_column_10  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            博士
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_9_column_11  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            硕士
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_9_column_12  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            本科
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_9_column_13  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            大专及以下
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_14_column_15  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            高级职称
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_14_column_16  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            中级职称
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_14_column_17  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            初级职称
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_14_column_18  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            高级技工
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_19_column_20  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            30及以下
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_19_column_21  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            31-40
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_19_column_22  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            41-50
                                        </div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_19_column_23  is-center   is-leaf el-table__cell">
                                        <div class="cell">
                                            51及以上
                                        </div>
                                    </th>
                                    <th class="el-table__cell gutter" style="width: 0px; display: none;">
                                    </th>
                                </tr>
                            </thead>
                          </table>
                      </div>
                      <div class="el-table__body-wrapper is-scrolling-left">
                          <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                          style="width: 100%">
                            <colgroup>
                                <col name="el-table_1_column_1_column_2" width="7.05%">
                                <col name="el-table_1_column_1_column_3" width="5.128%">
                                <col name="el-table_1_column_4_column_5" width="5.128%">
                                <col name="el-table_1_column_4_column_6" width="6.41%">
                                <col name="el-table_1_column_4_column_7" width="5.128%">
                                <col name="el-table_1_column_4_column_8" width="5.128%">
                                <col name="el-table_1_column_9_column_10" width="4.16%">
                                <col name="el-table_1_column_9_column_11" width="4.16%">
                                <col name="el-table_1_column_9_column_12" width="4.16%">
                                <col name="el-table_1_column_9_column_13" width="6.089%">
                                <col name="el-table_1_column_14_column_15" width="5.128%">
                                <col name="el-table_1_column_14_column_16" width="5.128%">
                                <col name="el-table_1_column_14_column_17" width="5.128%">
                                <col name="el-table_1_column_14_column_18" width="5.128%">
                                <col name="el-table_1_column_19_column_20" width="5.77%">
                                <col name="el-table_1_column_19_column_21" width="5.128%">
                                <col name="el-table_1_column_19_column_22" width="5.128%">
                                <col name="el-table_1_column_19_column_23" width="5.77%">
                                <col name="el-table_1_column_24" width="5.128%">
                            </colgroup>
                            <tbody>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_1_column_1_column_2 is-center  el-table__cell">
                                        <div class="cell">
                                            企业人员
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_1_column_3 is-center  el-table__cell">
                                        <div class="cell">
                                            18
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_5 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_6 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_7 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_8 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_10 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                            1
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_11 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_12 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_13 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_15 is-center  el-table__cell">
                                        <div class="cell">
                                            3
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_16 is-center  el-table__cell">
                                        <div class="cell">
                                            3
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_17 is-center  el-table__cell">
                                        <div class="cell">
                                            2
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_18 is-center  el-table__cell">
                                        <div class="cell">
                                            3
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_20 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_21 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_22 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_23 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_24 is-center  el-table__cell">
                                        <div class="cell">
                                            18
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_1_column_1_column_2 is-center  el-table__cell">
                                        <div class="cell">
                                            科技人员
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_1_column_3 is-center  el-table__cell">
                                        <div class="cell">
                                            18
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_5 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_6 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_7 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_8 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_10 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                            1
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_11 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_12 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_13 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_15 is-center  el-table__cell">
                                        <div class="cell">
                                            3
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_16 is-center  el-table__cell">
                                        <div class="cell">
                                            3
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_17 is-center  el-table__cell">
                                        <div class="cell">
                                            2
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_18 is-center  el-table__cell">
                                        <div class="cell">
                                            3
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_20 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_21 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_22 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_23 is-center  el-table__cell">
                                        <div class="cell">
                                            0
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_24 is-center  el-table__cell">
                                        <div class="cell">
                                            18
                                        </div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_1_column_1_column_2 is-center  el-table__cell">
                                        <div class="cell">
                                            科技人数占比
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_1_column_3 is-center  el-table__cell">
                                        <div class="cell">
                                            100%
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_5 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_6 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_7 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_4_column_8 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_10 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_11 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_12 is-center  el-table__cell">
                                        <div class="cell el-tooltip" style="width: 63px;">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_9_column_13 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_15 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_16 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_17 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_14_column_18 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_20 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_21 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_22 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_19_column_23 is-center  el-table__cell">
                                        <div class="cell">
                                        </div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_1_column_24 is-center  el-table__cell">
                                        <div class="cell">
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
                      <!---->
                      <!---->
                      <!---->
                      <div class="el-table__column-resize-proxy" style="display: none;">
                      </div>
                  </div>
              </div>
              <div data-v-744de854="" class="table" style="display: none;">
                  <div data-v-744de854="" class="table">
                      <div data-v-744de854="" class="el-table el-table--fit el-table--border el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                      style="width: 100%; max-height: 500px;">
                          <div class="hidden-columns">
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                              <div data-v-744de854="">
                              </div>
                          </div>
                          <div class="el-table__header-wrapper">
                              <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                              style="width: 100%;">
                                  <colgroup>
                                    <col name="el-table_2_column_25" width="3.43%">
                                    <col name="el-table_2_column_26" width="6.87%">
                                    <col name="el-table_2_column_27" width="5.5%">
                                    <col name="el-table_2_column_28" width="5.5%">
                                    <col name="el-table_2_column_29" width="6.87%">
                                    <col name="el-table_2_column_30" width="6.87%">
                                    <col name="el-table_2_column_31" width="6.87%">
                                    <col name="el-table_2_column_32" width="5.5%">
                                    <col name="el-table_2_column_33" width="5.5%">
                                    <col name="el-table_2_column_34" width="5.5%">
                                    <col name="el-table_2_column_35" width="5.5%">
                                    <col name="el-table_2_column_36" width="6.19%">
                                    <col name="el-table_2_column_37" width="6.19%">
                                    <col name="el-table_2_column_38" width="6.19%">
                                    <col name="el-table_2_column_39" width="6.19%">
                                    <col name="el-table_2_column_40" width="5.5%">
                                    <col name="el-table_2_column_41" width="5.84%">
                                    <col name="gutter" width="0">
                                  </colgroup>
                                  <thead class="has-gutter">
                                      <tr class="">
                                          <th colspan="1" rowspan="1" class="el-table_2_column_25  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  序号
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_26  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  工号
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_27  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  部门
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_28  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  姓名
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_29  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  身份证
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_30  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  入职时间
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_31  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  离职时间
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_32  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  专业
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_33     is-leaf el-table__cell">
                                              <div class="cell">
                                                  职称
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_34  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  毕业院校
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_35  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  最高学历
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_36  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  是否签署劳动合同
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_37  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  是否缴纳社会保险
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_38  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  是否申报个税
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_39  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  是否科技人员
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_40  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  属性
                                              </div>
                                          </th>
                                          <th colspan="1" rowspan="1" class="el-table_2_column_41  is-center   is-leaf el-table__cell">
                                              <div class="cell">
                                                  是否在职183天
                                              </div>
                                          </th>
                                          <th class="el-table__cell gutter" style="width: 0px; display: none;">
                                          </th>
                                      </tr>
                                  </thead>
                              </table>
                          </div>
                          <div class="el-table__body-wrapper is-scrolling-left" style="max-height: 500px;">
                              <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                              style="width: 100%;">
                                  <colgroup>
                                    <col name="el-table_2_column_25" width="3.43%">
                                    <col name="el-table_2_column_26" width="6.87%">
                                    <col name="el-table_2_column_27" width="5.5%">
                                    <col name="el-table_2_column_28" width="5.5%">
                                    <col name="el-table_2_column_29" width="6.87%">
                                    <col name="el-table_2_column_30" width="6.87%">
                                    <col name="el-table_2_column_31" width="6.87%">
                                    <col name="el-table_2_column_32" width="5.5%">
                                    <col name="el-table_2_column_33" width="5.5%">
                                    <col name="el-table_2_column_34" width="5.5%">
                                    <col name="el-table_2_column_35" width="5.5%">
                                    <col name="el-table_2_column_36" width="6.19%">
                                    <col name="el-table_2_column_37" width="6.19%">
                                    <col name="el-table_2_column_38" width="6.19%">
                                    <col name="el-table_2_column_39" width="6.19%">
                                    <col name="el-table_2_column_40" width="5.5%">
                                    <col name="el-table_2_column_41" width="5.84%">
                                    <col name="gutter" width="0">
                                  </colgroup>
                                  <tbody>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      1
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc62
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  推广部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  周杰伦
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  否
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  其他人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  未知
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      2
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc61
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  技术部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  周星驰
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                                  2019-12-25
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  管理人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      3
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc60
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  销售部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  张艺兴
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  否
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  其他人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  未知
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      4
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc59
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  技术部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  胡歌
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                                  2020-06-18
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  研发人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      5
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc58
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  技术部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  薛之谦
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                                  2020-04-01
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  研发人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      6
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc57
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  财务部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  杨幂
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                                  2019-08-15
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  辅助人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      7
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc56
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  销售部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  范冰冰
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  否
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  其他人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  未知
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      8
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc55
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  财务部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  杨紫
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                                  2019-02-05
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                                  初级职称
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  辅助人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      9
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc54
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  总经办
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  关晓彤
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                                  2019-06-10
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                                  初级职称
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  辅助人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                      </tr>
                                      <tr class="el-table__row">
                                          <td rowspan="1" colspan="1" class="el-table_2_column_25 is-center  el-table__cell">
                                              <div class="cell">
                                                  <div>
                                                      10
                                                  </div>
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_26 is-center  el-table__cell">
                                              <div class="cell el-tooltip">
                                                  zc53
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_27 is-center  el-table__cell">
                                              <div class="cell">
                                                  技术部
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_28 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                                  鹿晗
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_29 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 98px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_30 is-center  el-table__cell">
                                              <div class="cell">
                                                  2018-04-15
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_31 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_32 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_33   el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_34 is-center  el-table__cell">
                                              <div class="cell el-tooltip" style="width: 78px;">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_35 is-center  el-table__cell">
                                              <div class="cell">
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_36 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_37 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_38 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_39 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_40 is-center  el-table__cell">
                                              <div class="cell">
                                                  研发人员
                                              </div>
                                          </td>
                                          <td rowspan="1" colspan="1" class="el-table_2_column_41 is-center  el-table__cell">
                                              <div class="cell">
                                                  是
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
                          <!---->
                          <!---->
                          <!---->
                          <div class="el-table__column-resize-proxy" style="display: none;">
                          </div>
                      </div>
                  </div>
              </div>
              <div data-v-744de854="" class="table" style="display: none;">
                  <div data-v-744de854="" class="el-table el-table--fit el-table--border el-table--fluid-height el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition"
                  style="width: 100%; max-height: 600px;">
                      <div class="hidden-columns">
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                          <div data-v-744de854="">
                          </div>
                      </div>
                      <div class="el-table__header-wrapper">
                          <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                          style="width: 100%;">
                              <colgroup>
                                <col name="el-table_3_column_42" width="6%">
                                <col name="el-table_3_column_43" width="15.15%">
                                <col name="el-table_3_column_44" width="6%">
                                <col name="el-table_3_column_45" width="6%">
                                <col name="el-table_3_column_46" width="6%">
                                <col name="el-table_3_column_47" width="6%">
                                <col name="el-table_3_column_48" width="6%">
                                <col name="el-table_3_column_49" width="6%">
                                <col name="el-table_3_column_50" width="6%">
                                <col name="el-table_3_column_51" width="6%">
                                <col name="el-table_3_column_52" width="6%">
                                <col name="el-table_3_column_53" width="6%">
                                <col name="el-table_3_column_54" width="6%">
                                <col name="el-table_3_column_55" width="6%">
                                <col name="el-table_3_column_56" width="6%">
                                <col name="gutter" width="0">
                              </colgroup>
                              <thead class="has-gutter">
                                  <tr class="">
                                      <th colspan="1" rowspan="1" class="el-table_3_column_42  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              分类
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_43     is-leaf el-table__cell">
                                          <div class="cell">
                                              类别
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_44  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              一月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_45  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              二月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_46  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              三月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_47  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              四月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_48  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              五月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_49  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              六月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_50  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              七月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_51  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              八月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_52  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              九月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_53  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              十月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_54  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              十一月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_55  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              十二月
                                          </div>
                                      </th>
                                      <th colspan="1" rowspan="1" class="el-table_3_column_56  is-center   is-leaf el-table__cell">
                                          <div class="cell">
                                              平均数
                                          </div>
                                      </th>
                                      <th class="el-table__cell gutter" style="width: 0px; display: none;">
                                      </th>
                                  </tr>
                              </thead>
                          </table>
                      </div>
                      <div class="el-table__body-wrapper is-scrolling-left" style="max-height: 600px;">
                          <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                          style="width: 100%;">
                            <colgroup>
                                <col name="el-table_3_column_42" width="6%">
                                <col name="el-table_3_column_43" width="15.15%">
                                <col name="el-table_3_column_44" width="6%">
                                <col name="el-table_3_column_45" width="6%">
                                <col name="el-table_3_column_46" width="6%">
                                <col name="el-table_3_column_47" width="6%">
                                <col name="el-table_3_column_48" width="6%">
                                <col name="el-table_3_column_49" width="6%">
                                <col name="el-table_3_column_50" width="6%">
                                <col name="el-table_3_column_51" width="6%">
                                <col name="el-table_3_column_52" width="6%">
                                <col name="el-table_3_column_53" width="6%">
                                <col name="el-table_3_column_54" width="6%">
                                <col name="el-table_3_column_55" width="6%">
                                <col name="el-table_3_column_56" width="6%">
                                <col name="gutter" width="0">
                            </colgroup>
                              <tbody>
                                  <tr class="el-table__row">
                                      <td rowspan="5" colspan="1" class="el-table_3_column_42 is-center  el-table__cell">
                                          <div class="cell">
                                              人数
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              每月企业劳动合同人数
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              实发工资人数
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              0
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              系统申报所得税人数
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              缴纳社保人数
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              科技人数
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              18
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="4" colspan="1" class="el-table_3_column_42 is-center  el-table__cell">
                                          <div class="cell">
                                              职称
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              高级职称
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              中级职称
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              初级职称
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              2
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                              高级技工
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              3
                                          </div>
                                      </td>
                                  </tr>
                                  <tr class="el-table__row">
                                      <td rowspan="1" colspan="1" class="el-table_3_column_42 is-center  el-table__cell">
                                          <div class="cell">
                                              学历
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_43   el-table__cell">
                                          <div class="cell">
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_44 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_45 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_46 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_47 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_48 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_49 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_50 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_51 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_52 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_53 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_54 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_55 is-center  el-table__cell">
                                          <div class="cell">
                                              1
                                          </div>
                                      </td>
                                      <td rowspan="1" colspan="1" class="el-table_3_column_56 is-center  el-table__cell">
                                          <div class="cell">
                                              1
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
                      <!---->
                      <!---->
                      <!---->
                      <div class="el-table__column-resize-proxy" style="display: none;">
                      </div>
                  </div>
              </div>
              <div data-v-744de854="" class="pagination" style="display: none;">
                  <div data-v-744de854="" class="el-pagination">
                      <slot>
                          <span data-v-744de854="" class="pageTotal">
                              共
                              <span data-v-744de854="" class="pageTotalTxt">
                                  63
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
                              <div class="el-select-dropdown el-popper" style="display: none;">
                                  <div class="el-scrollbar" style="">
                                      <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -19px; margin-right: -19px;">
                                          <ul class="el-scrollbar__view el-select-dropdown__list">
                                              <!---->
                                              <li class="el-select-dropdown__item selected">
                                                  <span>
                                                      10条/页
                                                  </span>
                                              </li>
                                              <li class="el-select-dropdown__item">
                                                  <span>
                                                      30条/页
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
                          <li class="number">
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
                          <!---->
                          <li class="number">
                              7
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
                              <input type="number" autocomplete="off" min="1" class="el-input__inner"
                              max="7">
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
      </div>
    </main>
    
    <jhi-footer></jhi-footer>  
  </div>
</template>

<script lang="ts" src="./export.component.ts"></script>

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

.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
    font-weight: 400;
    color: #606266;
    cursor: text;
}

.search {
    padding: 5px;
    margin-bottom: -28px;
    margin: 0;
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

.el-row:before {
    display: table;
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

.el-form-item--small.el-form-item {
    margin-bottom: 5px;
}

.search .el-form-item {
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    margin-bottom: -1px;
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

.search .el-date-editor.el-input {
    width: 100%;
}

.el-input--small {
    font-size: 13px;
}

.el-input {
    position: relative;
    /* font-size: 14px; */
}

.el-input, .el-textarea {
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

.create .el-date-editor--datetimerange.el-input, .create .el-date-editor--datetimerange.el-input__inner, .create .el-date-editor.el-input, .search .el-date-editor--datetimerange.el-input, .search .el-date-editor--datetimerange.el-input__inner, .search .el-date-editor.el-input, .ul-form .el-date-editor--datetimerange.el-input, .ul-form .el-date-editor--datetimerange.el-input__inner, .ul-form .el-date-editor.el-input, .ul-search .el-date-editor--datetimerange.el-input, .ul-search .el-date-editor--datetimerange.el-input__inner, .ul-search .el-date-editor.el-input {
    width: 100%;
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

.el-col-12 {
    width: 50%;
}

.el-col-offset-2 {
    margin-left: 8.33333%;
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
    /* background: #fff; */
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

.el-icon-refresh-right:before {
    content: "\e6c8";
}

.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
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

.el-icon-download:before {
    content: "\e77c";
}

.el-row:after {
    clear: both;
}

.el-row:after, .el-row:before {
    display: table;
}

nav[data-v-744de854] {
    border-bottom: 2px solid #e5e5e5;
    width: 100%;
    margin: 5px 0 5px 0;
}

nav {
    display: block;
    unicode-bidi: isolate;
}

.active[data-v-744de854] {
    border-bottom: 2px solid #409eff;
    color: #409eff;
}

nav a[data-v-744de854] {
    /* color: #666; */
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin-right: 30px;
    font-size: 14px;
    cursor: pointer;
}

a {
    text-decoration: none;
}

nav a[data-v-744de854] {
    /* color: #666; */
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin-right: 30px;
    font-size: 14px;
    cursor: pointer;
}

a {
    color: #606266;
}

a {
    text-decoration: none;
}

nav a[data-v-744de854]:last-child {
    margin-right: 0;
}

nav a[data-v-744de854] {
    /* color: #666; */
    display: inline-block;
    height: 40px;
    line-height: 40px;
    /* margin-right: 30px; */
    font-size: 14px;
    cursor: pointer;
}

a {
    color: #606266;
}

a {
    text-decoration: none;
}

.content[data-v-744de854] {
    width: 98%;
    height: 70vh;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 10px 0 10px;
}

.table .el-table--border[data-v-744de854], .ul-table .el-table--border[data-v-744de854] {
    border-radius: 0;
}

.el-table--border {
    border-right: none;
    border-bottom: none;
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

[data-v-744de854] .el-table thead {
    background-color: #e5e5e5;
}

.el-table thead {
    color: #353535;
    /* background-color: #ecf6ff; */
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

.el-table thead.is-group th.el-table__cell {
    background: #f5f7fa;
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

.el-table__fixed-right-patch[data-v-744de854], [data-v-744de854] .el-table--border th {
    border-right: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
}

.el-table th.el-table__cell {
    overflow: hidden;
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* background-color: #fff; */
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

th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
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

.el-table thead.is-group th.el-table__cell {
    background: #f5f7fa;
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

.el-table__fixed-right-patch[data-v-744de854], [data-v-744de854] .el-table--border th {
    border-right: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
}

.el-table th.el-table__cell {
    overflow: hidden;
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* background-color: #fff; */
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

th {
    display: table-cell;
    font-weight: bold;
    unicode-bidi: isolate;
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

colgroup {
    display: table-column-group;
    unicode-bidi: isolate;
}

col {
    display: table-column;
    unicode-bidi: isolate;
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

.table .el-table--border[data-v-744de854], .ul-table .el-table--border[data-v-744de854] {
    border-radius: 0;
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


</style>