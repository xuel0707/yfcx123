<template>
  <jhi-navbar></jhi-navbar>  <!-- 导航栏始终显示 -->
  <div data-v-00d846e7="" data-v-10823e5a="">
    <div data-v-7cd33a07="" data-v-00d846e7="" class="homebanner">
      <div data-v-7cd33a07="" class="homebanneritem">
        <div data-v-7cd33a07="" class="swiper-container swiper-container-initialized swiper-container-horizontal"> 
          <div class="swiper-wrapper" style="transform: translate3d(-2800px, 0px, 0px); transition-duration: 0ms;">
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/6a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/1a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/2a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/3a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide" data-swiper-slide-index="3" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/4a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide" data-swiper-slide-index="4" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/5a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide" data-swiper-slide-index="5" style="width: 1400px;" @click="goToYffgl">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/6a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/1a.jpg">
            </div>
          </div> 
          
          <div data-v-7cd33a07="" class="swiper-pagination center-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
            <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="1" role="button" aria-label="Go to slide 2"></span>
            <span class="swiper-pagination-bullet" tabindex="2" role="button" aria-label="Go to slide 3"></span>
            <span class="swiper-pagination-bullet" tabindex="3" role="button" aria-label="Go to slide 4"></span>
            <span class="swiper-pagination-bullet" tabindex="4" role="button" aria-label="Go to slide 5"></span>
            <span class="swiper-pagination-bullet" tabindex="5" role="button" aria-label="Go to slide 6"></span>
          </div> 
          
          <div data-v-7cd33a07="" class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div> 
          <div data-v-7cd33a07="" class="swiper-button-next" tabindex="5" role="button" aria-label="Next slide"></div> 
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
      
      <div data-v-7cd33a07="" class="bannersearchcontainer">
        <div data-v-7cd33a07="" class="web_width">
          <div data-v-7cd33a07="" class="searchtype">
            <a data-v-7cd33a07="" t="all" name="all" class="">全部</a>
            <a data-v-7cd33a07="" t="chanye" name="chanye" class="">政策项目</a>
            <a data-v-7cd33a07="" t="news" name="news" class="">政策原文</a>
            <a data-v-7cd33a07="" t="pipei" name="pipei" class="">无感极速匹配</a>
            <a data-v-7cd33a07="" t="gaoqi" name="gaoqi" class="on">资质荣誉</a>
            <a data-v-7cd33a07="" t="zizhu" name="zizhu" class="">已获资助</a>
            <a data-v-7cd33a07="" t="innovative" name="innovative" class="">创新载体
              <i data-v-7cd33a07="" class="el-tooltip el-icon-question item" aria-describedby="el-tooltip-3705" tabindex="0"></i>
            </a>
          </div>
        
          <div data-v-7cd33a07="" class="search_a relative homesearch">
            <button data-v-7cd33a07="" id="btnsearch" class="btn absolute">
              <i data-v-7cd33a07="" class="icon ico cc_sousuo"></i>搜索
            </button>
            <input data-v-7cd33a07="" type="text" name="home_keywords" id="home_keywords" placeholder="请输入您要搜索的公司名/地区/行业" autocomplete="off" class="input_h6">
            <div data-v-7cd33a07="" id="searchresult" class="searchresult"></div>
          </div>
        </div>
      </div>
    </div>
  
    <div data-v-30b75d3a="" data-v-00d846e7="" class="map_con pt_40 pb_20">
      <div data-v-30b75d3a="" class="web_width">
        <div data-v-30b75d3a="" class="title_a">
          <span data-v-30b75d3a="" class="x_fk"></span>
          <span data-v-30b75d3a="" class="m_fk"></span>
          <h1 data-v-30b75d3a=""><b data-v-30b75d3a="">政策</b>数据中心</h1>
          <p data-v-30b75d3a="">发现数据价值</p>
        </div>
        
        <div data-v-30b75d3a="" class="h_ser_bok justify_between flex_wrap mt_5" style="position: relative;">
          <div data-v-30b75d3a="" id="chinamap" _echarts_instance_="ec_1731828013980" style="width: 1000px; height: 620px; margin-left: -100px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;">
            <div style="position: relative; width: 1000px; height: 620px; padding: 0px; margin: 0px; border-width: 0px; cursor: pointer;">
              <canvas data-zr-dom-id="zr_0" width="1200" height="744" style="position: absolute; left: 0px; top: 0px; width: 1000px; height: 620px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;">
              </canvas>
              <img class="china_map" src="/content/images/china.png">
            </div>

            <div class="" style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1); background-color: rgb(255, 255, 255); border-width: 1px; border-radius: 4px; color: rgb(51, 51, 51); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 0px; top: 0px; left: 0px; transform: translate3d(804px, 82px, 0px); border-color: rgb(19, 149, 243); pointer-events: none; visibility: hidden; opacity: 0;">
              <div style="padding: 5px 10px">
                <div style="border-bottom: 1px solid #e2f0f6; line-height: 30px; min-width: 120px;color:#1395f3">黑龙江省</div>
                  <div style="padding-top: 10px; line-height: 20px">
                    <div><span style="color:#1395f3">精选政策：</span>707</div>
                    <div><span style="color:#1395f3">高企数量：</span>5533</div>
                    <div><span style="color:#1395f3">政策发布单位：</span>47</div>
                  </div>
                </div>
              </div>
            </div>
          
            <div data-v-30b75d3a="" class="mapinfo" style="float: right; position: absolute; right: 0px;">
              <div data-v-30b75d3a="" id="china_map_num">
                <div data-v-30b75d3a="" id="proname" class="map_num_t">
                  <b data-v-30b75d3a="">全国</b>政策数据
                </div>
                
                <div data-v-30b75d3a="" class="map_num_item">
                  <div data-v-30b75d3a="">精选政策
                    <div data-v-30b75d3a="" onclick="javascript:window.location.href='/chanye'" style="cursor: pointer;">
                      <b data-v-30b75d3a="" id="all_projectcount">165,067</b>条
                    </div>
                  </div>
                  
                  <div data-v-30b75d3a="">精选政策原文
                    <div data-v-30b75d3a="" onclick="javascript:window.location.href='/news'" style="cursor: pointer;">
                      <b data-v-30b75d3a="" id="all_newscount">908,152</b>篇
                    </div>
                  </div>
                  
                  <div data-v-30b75d3a="">政策发布单位
                    <div data-v-30b75d3a="" onclick="javascript:window.location.href='/chanye'" style="cursor: pointer;">
                      <b data-v-30b75d3a="" id="all_deptcount">10,689</b>个
                    </div>
                  </div>
                  
                  <div data-v-30b75d3a="">高新技术企业收录
                    <div data-v-30b75d3a="" onclick="javascript:window.location.href='/gaoqi'" style="cursor: pointer;">
                      <b data-v-30b75d3a="" id="all_hightcount">446,903</b>家
                    </div>
                  </div>
                </div>
                
                <div data-v-30b75d3a="" class="map_num_t" style="margin-top: 50px;">
                  <a data-v-30b75d3a="" href="/hotspot/index" class="" style="color: rgb(19, 149, 243);">政策热点</a>
                </div>
                
                <div data-v-30b75d3a="" class="newslist"><div data-v-30b75d3a="" class="seamless-warp"><!----> <!----> 
                  <div style="transform: translate(0px, -161px); transition: ease-in; overflow: hidden;">
                    <div style="overflow: hidden;">
                      <li data-v-30b75d3a="" data-id="JLmGDwM5bKrNPvRKmDlApOkV1QnY760z">
                        <a data-v-30b75d3a="" data-id="JLmGDwM5bKrNPvRKmDlApOkV1QnY760z" style="cursor: pointer;">【部委】2024国家级单项冠军的遴选认定将重点关注这些领域！</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="QkBw5LzorJMYPeljjPlnON7mD60GKvaE">
                        <a data-v-30b75d3a="" data-id="QkBw5LzorJMYPeljjPlnON7mD60GKvaE" style="cursor: pointer;">【部委】软件企业必读！“双软认定”竟然有这么多好处，赶紧收藏！</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="nv13OqeWK0MVyPlw8B2rYZ7wm46GE9kA">
                        <a data-v-30b75d3a="" data-id="nv13OqeWK0MVyPlw8B2rYZ7wm46GE9kA" style="cursor: pointer;">【部委】政策解读 | 工信部组织开展2024年物联网赋能行业发展典型案例征集工作</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="90N4WBxq1YpEbz2aQO2me6KJQyo7MjwZ">
                        <a data-v-30b75d3a="" data-id="90N4WBxq1YpEbz2aQO2me6KJQyo7MjwZ" style="cursor: pointer;">【部委】科技部发布！“创新积分制”适用范围扩至全国</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="1OYyxzdMAWpDo92z6e2q0VNm64gvrnGP">
                        <a data-v-30b75d3a="" data-id="1OYyxzdMAWpDo92z6e2q0VNm64gvrnGP" style="cursor: pointer;">【部委】最高20万补贴！2024年广东省知识产权示范企业即将启动申报</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="5Q8a7LyOkexj0mRLaJXJvENA3wzW6gDB">
                        <a data-v-30b75d3a="" data-id="5Q8a7LyOkexj0mRLaJXJvENA3wzW6gDB" style="cursor: pointer;">【深圳】“深圳标准”开始认证，生态环境专项最高奖励1000万，中国特色智库发展资助等15个项目正在申报</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="rPNnwVW1OkE5962DZ0XYjm0o4DGyLxp3">
                        <a data-v-30b75d3a="" data-id="rPNnwVW1OkE5962DZ0XYjm0o4DGyLxp3" style="cursor: pointer;">【深圳】最高200万，技术转移和成果转化资助项目，人才专项奖励开始申报，深圳市近期可申报政策项目推荐</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="YzDn6kojb9Gw4ml0JkRL73gdQNxBA8rE">
                        <a data-v-30b75d3a="" data-id="YzDn6kojb9Gw4ml0JkRL73gdQNxBA8rE" style="cursor: pointer;">【深圳】最高600万！标准化项目资助申报，品牌工程技术人才职称申报开始，深圳市近期可申报政策项目推荐</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="LdbOojKrM34zx92Njy2aZGq5VD6vyJE8">
                        <a data-v-30b75d3a="" data-id="LdbOojKrM34zx92Njy2aZGq5VD6vyJE8" style="cursor: pointer;">【深圳】781家企业享受科技企业研发投入激励项目公示，661家企业获得科技创新专项资金资助，深圳近期资助公示名单汇总</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="KE90J46Q58zaojR4axXprAN1Bk7GVWnZ">
                        <a data-v-30b75d3a="" data-id="KE90J46Q58zaojR4axXprAN1Bk7GVWnZ" style="cursor: pointer;">【深圳】最高1500万！知识产权领域专项资金开始申报，工业企业租金补贴项目，深圳市近期可申报政策项目推荐</a>
                      </li>
                    </div> 
                  
                    <div style="overflow: hidden;">
                      <li data-v-30b75d3a="" data-id="JLmGDwM5bKrNPvRKmDlApOkV1QnY760z">
                        <a data-v-30b75d3a="" data-id="JLmGDwM5bKrNPvRKmDlApOkV1QnY760z" style="cursor: pointer;">【部委】2024国家级单项冠军的遴选认定将重点关注这些领域！</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="QkBw5LzorJMYPeljjPlnON7mD60GKvaE">
                        <a data-v-30b75d3a="" data-id="QkBw5LzorJMYPeljjPlnON7mD60GKvaE" style="cursor: pointer;">【部委】软件企业必读！“双软认定”竟然有这么多好处，赶紧收藏！</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="nv13OqeWK0MVyPlw8B2rYZ7wm46GE9kA">
                        <a data-v-30b75d3a="" data-id="nv13OqeWK0MVyPlw8B2rYZ7wm46GE9kA" style="cursor: pointer;">【部委】政策解读 | 工信部组织开展2024年物联网赋能行业发展典型案例征集工作</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="90N4WBxq1YpEbz2aQO2me6KJQyo7MjwZ">
                        <a data-v-30b75d3a="" data-id="90N4WBxq1YpEbz2aQO2me6KJQyo7MjwZ" style="cursor: pointer;">【部委】科技部发布！“创新积分制”适用范围扩至全国</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="1OYyxzdMAWpDo92z6e2q0VNm64gvrnGP">
                        <a data-v-30b75d3a="" data-id="1OYyxzdMAWpDo92z6e2q0VNm64gvrnGP" style="cursor: pointer;">【部委】最高20万补贴！2024年广东省知识产权示范企业即将启动申报</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="5Q8a7LyOkexj0mRLaJXJvENA3wzW6gDB">
                        <a data-v-30b75d3a="" data-id="5Q8a7LyOkexj0mRLaJXJvENA3wzW6gDB" style="cursor: pointer;">【深圳】“深圳标准”开始认证，生态环境专项最高奖励1000万，中国特色智库发展资助等15个项目正在申报</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="rPNnwVW1OkE5962DZ0XYjm0o4DGyLxp3">
                        <a data-v-30b75d3a="" data-id="rPNnwVW1OkE5962DZ0XYjm0o4DGyLxp3" style="cursor: pointer;">【深圳】最高200万，技术转移和成果转化资助项目，人才专项奖励开始申报，深圳市近期可申报政策项目推荐</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="YzDn6kojb9Gw4ml0JkRL73gdQNxBA8rE">
                        <a data-v-30b75d3a="" data-id="YzDn6kojb9Gw4ml0JkRL73gdQNxBA8rE" style="cursor: pointer;">【深圳】最高600万！标准化项目资助申报，品牌工程技术人才职称申报开始，深圳市近期可申报政策项目推荐</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="LdbOojKrM34zx92Njy2aZGq5VD6vyJE8">
                        <a data-v-30b75d3a="" data-id="LdbOojKrM34zx92Njy2aZGq5VD6vyJE8" style="cursor: pointer;">【深圳】781家企业享受科技企业研发投入激励项目公示，661家企业获得科技创新专项资金资助，深圳近期资助公示名单汇总</a>
                      </li>
                      
                      <li data-v-30b75d3a="" data-id="KE90J46Q58zaojR4axXprAN1Bk7GVWnZ">
                        <a data-v-30b75d3a="" data-id="KE90J46Q58zaojR4axXprAN1Bk7GVWnZ" style="cursor: pointer;">【深圳】最高1500万！知识产权领域专项资金开始申报，工业企业租金补贴项目，深圳市近期可申报政策项目推荐</a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-v-43dc6cba="" data-v-00d846e7="" class="web_width pt_40 pb_40">
      <div data-v-43dc6cba="" class="title_a">
        <span data-v-43dc6cba="" class="x_fk"></span>
        <span data-v-43dc6cba="" class="m_fk"></span>
        <h1 data-v-43dc6cba=""><b data-v-43dc6cba="">政策</b>原文</h1>
        <p data-v-43dc6cba="">即时更新，政策早知道</p>
      </div>

      <div data-v-43dc6cba="" class="justify_between policy_news mt_30">
        <dl data-v-43dc6cba="" element-loading-text="加载中...">
          <dt data-v-43dc6cba="" class="justify_between color_f pl_20 pr_20" style="background-image: url(&quot;/content/images/dashboard/policy_news_bj1.jpg&quot;);">
            <h1 data-v-43dc6cba="" class="font18">申报通知</h1>
            <a data-v-43dc6cba="" class="cursor_pointer">更多 &gt;</a>
          </dt>
          
          <dd data-v-43dc6cba="">
            <ul data-v-43dc6cba="">
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="区国有企业产业空间支持（商务局）" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                  【福田】区国有企业产业空间支持（商务局）
                  </div><!---->
                </a>
                
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="区国有企业产业空间支持（金融局）" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                  【福田】区国有企业产业空间支持（金融局）
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市科学技术协会关于申报2025年度学会学术项目（第一批）的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                  【深圳】深圳市科学技术协会关于申报2025年度学会学术项目（第一批）的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="盐田区科技创新局关于开展2024年度盐田区未来产业企业认定工作的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【盐田】盐田区科技创新局关于开展2024年度盐田区未来产业企业认定工作的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="盐田区科技创新局关于开展2024年度盐田区未来产业企业认定工作的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【盐田】盐田区科技创新局关于开展2024年度盐田区未来产业企业认定工作的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="市市场监督管理局大鹏监管局开展病媒生物防制培训活动" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【大鹏】市市场监督管理局大鹏监管局开展病媒生物防制培训活动
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="广东省工业和信息化厅关于公开遴选服务机构开展2024-2025年中央财政重点“小巨人”资金项目绩效评价工作的通告" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【广东】广东省工业和信息化厅关于公开遴选服务机构开展2024-2025年中央财政重点“小巨人”资金项目绩效评价工作的通告
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市宝安区科技创新局关于延长2024年宝安区世界500强企业建设研发机构资助项目申报时间的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【宝安】深圳市宝安区科技创新局关于延长2024年宝安区世界500强企业建设研发机构资助项目申报时间的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-21</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市龙岗区科技创新局关于申报2024年科技企业研发投入扶持项目的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【龙岗】深圳市龙岗区科技创新局关于申报2024年科技企业研发投入扶持项目的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-21</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于支持企业数字化转型（工业）资助项目申报的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【南山】关于支持企业数字化转型（工业）资助项目申报的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-21</span>
              </li>
            </ul>
          </dd>
        </dl>
        
        <dl data-v-43dc6cba="" element-loading-text="加载中...">
          <dt data-v-43dc6cba="" class="justify_between color_f pl_20 pr_20" style="background-image: url(&quot;/content/images/dashboard/policy_news_bj2.jpg&quot;);">
            <h1 data-v-43dc6cba="" class="font18">公示公告</h1>
            <a data-v-43dc6cba="" class="cursor_pointer">更多 &gt;</a>
          </dt>

          <dd data-v-43dc6cba="">
            <ul data-v-43dc6cba="">
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市龙岗区龙城街道非居用户燃具改造补贴公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【龙岗】深圳市龙岗区龙城街道非居用户燃具改造补贴公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-23</span>
              </li>
            
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市商务局关于公示2024年7-12月境外展览重点支持项目清单的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市商务局关于公示2024年7-12月境外展览重点支持项目清单的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="广东省科学技术厅关于公布第十三届中国创新创业大赛（广东赛区）暨第十二届“珠江天使杯”科技创新创业大赛获奖名单的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【广东】广东省科学技术厅关于公布第十三届中国创新创业大赛（广东赛区）暨第十二届“珠江天使杯”科技创新创业大赛获奖名单的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="光明区民政局关于光明区“2024年智能居家适老化改造消费提升专项活动”资助名单（第四批）的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】光明区民政局关于光明区“2024年智能居家适老化改造消费提升专项活动”资助名单（第四批）的公示
                  </div><!---->
                </a><span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="光明区民政局关于光明区“2024年智能居家适老化改造消费提升专项活动”资助名单（第四批）的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】光明区民政局关于光明区“2024年智能居家适老化改造消费提升专项活动”资助名单（第四批）的公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市市场监督管理局光明监管局关于2024年光明区“个转企”拟奖励名单（第四批）的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】深圳市市场监督管理局光明监管局关于2024年光明区“个转企”拟奖励名单（第四批）的公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="光明区教育局关于光明区2023-2024学年普惠性民办幼儿园班级人数核定、等级评定、补助金额情况的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】光明区教育局关于光明区2023-2024学年普惠性民办幼儿园班级人数核定、等级评定、补助金额情况的公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市市场监督管理局关于公示2024年第四届深圳广告创意制作大赛终审结果的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市市场监督管理局关于公示2024年第四届深圳广告创意制作大赛终审结果的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于福田区彩梅立交改造工程迁移城市树木事宜的结果公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【福田】关于福田区彩梅立交改造工程迁移城市树木事宜的结果公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="2023年福田区产业发展专项资金商务局分项第五批拟支持企业及项目的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【福田】2023年福田区产业发展专项资金商务局分项第五批拟支持企业及项目的公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
            </ul>
          </dd>
        </dl>
    
        <dl data-v-43dc6cba="" element-loading-text="加载中...">
          <dt data-v-43dc6cba="" class="justify_between color_f pl_20 pr_20" style="background-image: url(&quot;/content/images/dashboard/policy_news_bj3.jpg&quot;);">
            <h1 data-v-43dc6cba="" class="font18">政策法规</h1>
            <a data-v-43dc6cba="" class="cursor_pointer">更多 &gt;</a>
          </dt>
          
          <dd data-v-43dc6cba="">
            <ul data-v-43dc6cba="">
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="李强主持召开国务院常务会议研究推动平台经济健康发展有关工作等" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【宝安】李强主持召开国务院常务会议研究推动平台经济健康发展有关工作等
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-23</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市市场监督管理局等10部门关于加强河套深港科技创新合作区深圳园区知识产权保护和运用的意见" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市市场监督管理局等10部门关于加强河套深港科技创新合作区深圳园区知识产权保护和运用的意见
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市光明区科技创新局关于发布《光明区2024年科技金融知识产权证券化资金补贴申报指南》的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】深圳市光明区科技创新局关于发布《光明区2024年科技金融知识产权证券化资金补贴申报指南》的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于爱华大院静态交通提升项目迁移砍伐城市树木事宜的公众意见征询" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【福田】关于爱华大院静态交通提升项目迁移砍伐城市树木事宜的公众意见征询
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市光明区科技创新局关于发布《光明区2024年科技金融知识产权证券化资金补贴申报指南》的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】深圳市光明区科技创新局关于发布《光明区2024年科技金融知识产权证券化资金补贴申报指南》的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市宝安区文化广电旅游体育局2024年体育场地统计调查项目交易结果公告" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【宝安】深圳市宝安区文化广电旅游体育局2024年体育场地统计调查项目交易结果公告
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="首届“桃花源硬科技节”在宝安成功举办" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【宝安】首届“桃花源硬科技节”在宝安成功举办
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="宝安发布“妈妈岗”就业支持十项措施" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【宝安】宝安发布“妈妈岗”就业支持十项措施
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市光明区工业和信息化局领导" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】深圳市光明区工业和信息化局领导
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="第六届粤港澳大湾区知识产权交易博览会暨国际地理标志产品交易博览会招商招展和项目征集工作正式启动" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【广东】第六届粤港澳大湾区知识产权交易博览会暨国际地理标志产品交易博览会招商招展和项目征集工作正式启动
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-22</span>
              </li>
            </ul>
          </dd>
        </dl>
      </div>

    </div>
  
    <div data-v-5b726c2c="" data-v-00d846e7="" class="web_width pt_40 pb_40">
      <div data-v-5b726c2c="" class="title_a">
        <span data-v-5b726c2c="" class="x_fk"></span>
        <span data-v-5b726c2c="" class="m_fk"></span>
        <h1 data-v-5b726c2c="">
          <b data-v-5b726c2c="">远方123</b>精选
        </h1>
        <p data-v-5b726c2c="">一览全国政策</p>
        <a data-v-5b726c2c="" href="https://www.yfcx123.com/newslist/list.html" target="_blank" class="more">更多</a>
      </div>
    
      <div data-v-5b726c2c="" class="mt_30 back_white radius_5">
        <div data-v-5b726c2c="" class="title-wrap back_blue">
          <div data-v-5b726c2c="" class="item-title">文件标题</div>
          <div data-v-5b726c2c="" class="item-area">地区范围</div>
          <div data-v-5b726c2c="" class="item-dept">信息来源</div>
        </div>
        
        <div data-v-5b726c2c="" class="news-list">
          <div data-v-5b726c2c="" class="seamless-warp"><!----> <!----> 
            <div style="transform: translate(0px, -80px); transition: ease-in; overflow: hidden;">
              <div style="overflow: hidden;">
                <div data-v-5b726c2c="" id="replace">
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news555002.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市工业和信息化局关于印发《深圳市工业和信息化局新材料产业发展扶持计划操作规程》的通知
                    </div>
                    
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市人民政府
                    </div>
                  </a>
                  
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news552656.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市工业和信息化局深圳市发展和改革委员会深圳市科技创新局深圳市财政局深圳市文化广电旅游体育局关于印发《深圳市关于推动超高清视频显示产业集群高质量发展的若干措施》的通知
                    </div>
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市工业和信息化局
                    </div>
                  </a>
                
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news552067.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市科技创新局关于提交2023年度深圳市科技型中小微企业贷款贴息贴保资助项目资金续拨材料的通知
                    </div>
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市科技创新局
                    </div>
                  </a>
                
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news551943.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      市工业和信息化局关于印发《深圳市工业和信息化局新材料产业发展扶持计划操作规程》的通知
                    </div>
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市工业和信息化局
                    </div>
                  </a>
                
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news551247.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市龙岗区工业和信息化局关于征集人工智能创新应用场景的通知
                    </div>
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      龙岗区
                    </div>
                    <div data-v-5b726c2c="" class="item-dept">
                      龙岗区人民政府
                    </div>
                  </a>
                </div>
              </div> 
            
              <div style="overflow: hidden;">
                <div data-v-5b726c2c="" id="replace">
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news555002.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市工业和信息化局关于印发《深圳市工业和信息化局新材料产业发展扶持计划操作规程》的通知
                    </div>
                    
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市人民政府
                    </div>
                  </a>

                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news552656.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市工业和信息化局深圳市发展和改革委员会深圳市科技创新局深圳市财政局深圳市文化广电旅游体育局关于印发《深圳市关于推动超高清视频显示产业集群高质量发展的若干措施》的通知
                    </div>
                    
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市工业和信息化局
                    </div>
                  </a>
                  
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news552067.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市科技创新局关于提交2023年度深圳市科技型中小微企业贷款贴息贴保资助项目资金续拨材料的通知
                    </div>
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市科技创新局
                    </div>
                  </a>
                  
                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news551943.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      市工业和信息化局关于印发《深圳市工业和信息化局新材料产业发展扶持计划操作规程》的通知
                    </div>
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      深圳市
                    </div>
                    <div data-v-5b726c2c="" class="item-dept">
                      深圳市工业和信息化局
                    </div>
                  </a>

                  <a data-v-5b726c2c="" href="https://www.yfcx123.com/newsdetail/news551247.html" target="_blank" class="news-item">
                    <div data-v-5b726c2c="" class="item-title pr_20">
                      深圳市龙岗区工业和信息化局关于征集人工智能创新应用场景的通知
                    </div>
                    <div data-v-5b726c2c="" class="item-area pr_20">
                      龙岗区
                    </div>
                    <div data-v-5b726c2c="" class="item-dept">
                      龙岗区人民政府
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-v-8a7a961c="" data-v-00d846e7="" class="web_width pt_40 pb_40">
      <div data-v-8a7a961c="" class="title_a">
        <span data-v-8a7a961c="" class="x_fk"></span>
        <span data-v-8a7a961c="" class="m_fk"></span>
        <h1 data-v-8a7a961c=""><b data-v-8a7a961c="">政策</b>服务</h1>
        <p data-v-8a7a961c="">智政企，慧链接</p>
      </div>

      <div data-v-8a7a961c="" class="justify_between mt_30">
        <a data-v-8a7a961c="" href="http://lam.yfcx123-ai.com/" target="_blank">
          <dl data-v-8a7a961c="" class="policy_fw">
            <dd data-v-8a7a961c="">
              <ul data-v-8a7a961c="">
                <li data-v-8a7a961c="" class="policy_fw_icon">
                  <div data-v-8a7a961c="" class="icon-wrap">
                    <i data-v-8a7a961c="" class="el-icon-s-data"></i>
                  </div>
                </li>
                
                <li data-v-8a7a961c="" class="policy_fw_title">智慧政务</li>
                <li data-v-8a7a961c="" class="policy_fw_ms">政企链接、高效服务</li>
              </ul>
              
              <div data-v-8a7a961c="" class="policy_fw_img">

              </div>
            </dd>
          </dl>
        </a>

        <a data-v-8a7a961c="" href="https://recent.yfcx123-ai.com" target="_blank">
          <dl data-v-8a7a961c="" class="policy_fw">
            <dd data-v-8a7a961c="">
              <ul data-v-8a7a961c="">
                <li data-v-8a7a961c="" class="policy_fw_icon">
                  <div data-v-8a7a961c="" class="icon-wrap">
                    <i data-v-8a7a961c="" class="el-icon-office-building"></i>
                  </div>
                </li>
                
                <li data-v-8a7a961c="" class="policy_fw_title">智慧园区</li>
                <li data-v-8a7a961c="" class="policy_fw_ms">赋能智慧园区建设</li>
              </ul>
              <div data-v-8a7a961c="" class="policy_fw_img">
   
              </div>
            </dd>
          </dl>
        </a>
      </div>
    </div>
  </div>
  <jhi-footer></jhi-footer>  <!-- 底部内容始终显示 -->
</template>

<script  lang="ts">
// 引入 Swiper 相关功能
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // 引入 Swiper 的样式
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue'; // 导入全局组件
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';

export default {
  name: 'Home',
  components: {
    JhiNavbar, // 注册全局组件
    JhiFooter, // 注册全局组件
  },
  methods: {
    // 跳转到 研发费管理 页面
    goToYffgl() {
      // 打开一个新的空白网页标签
      window.open('/yffgl', '_blank');
    },
  },
  mounted() {
    // 确保 DOM 更新后再初始化 Swiper
    this.$nextTick(() => {
      // 初始化 Swiper
      new Swiper('.swiper-container', {
        loop: true, // 开启循环模式
        autoplay: {
          delay: 3000, // 设置自动切换的延时为 3 秒
        },
        pagination: {
          el: '.swiper-pagination',  // 指定分页器元素
          clickable: true,            // 启用点击跳转功能
        },
        navigation: {
          nextEl: '.swiper-button-next',  // 下一页按钮
          prevEl: '.swiper-button-prev',  // 上一页按钮
        },
        spaceBetween: 50,  // 每个 slide 之间的间距
        slidesPerView: 1,  // 每次显示一个 slide
        grabCursor: true,  // 启用鼠标拖动效果
      });
    });
  },
};
</script>


<style scoped>
.homebanner[data-v-7cd33a07] {
    height: 32.6vw;
    min-height: 456.4px;
}

.homebanner {
    /* height: 500px; */
    position: relative;
}

.homebanner .homebanneritem[data-v-7cd33a07], .homebanner .swiper-container[data-v-7cd33a07] {
    height: 100%;
}

.homebanneritem {
    position: relative;
    width: 100%;
    /* height: 500px; */
}

.homebanner .homebanneritem[data-v-7cd33a07], .homebanner .swiper-container[data-v-7cd33a07] {
    height: 100%;
}

.homebanner .swiper-container {
    width: 100%;
    /* height: 500px; */
}

.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}

element.style {
    transform: translate3d(-1400px, 0px, 0px);
    transition-duration: 0ms;
}

.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: -ms-flexbox;
    display: flex
;
    /* -webkit-transition-property: -webkit-transform; */
    /* transition-property: -webkit-transform; */
    -o-transition-property: transform;
    /* transition-property: transform; */
    transition-property: transform, -webkit-transform;
    /* -webkit-box-sizing: content-box; */
    box-sizing: content-box;
}

.swiper-slide {
    /* -webkit-flex-shrink: 0; */
    -ms-flex-negative: 0;
    flex-shrink: 0;
    /* width: 100%; */
    height: 100%;
    position: relative;
    /* -webkit-transition-property: -webkit-transform; */
    /* transition-property: -webkit-transform; */
    -o-transition-property: transform;
    /* transition-property: transform; */
    transition-property: transform, -webkit-transform;
}

.homebanner .homebanneritem .swiper-slide img[data-v-7cd33a07], .homebanner .swiper-container .swiper-slide img[data-v-7cd33a07] {
    cursor: pointer;
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    position: fixed;
    vertical-align: middle;
}

img {
    border: none;
    /* vertical-align: top; */
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.center-pagination[data-v-7cd33a07] {
    width: auto;
    transform: translateX(-50%);
    left: 50%;
}

.homebanner .swiper-pagination {
    margin-bottom: 160px;
}

.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    /* left: 0; */
    /* width: 100%; */
}

.swiper-pagination {
    position: absolute;
    text-align: center;
    /* -webkit-transition: opacity .3s; */
    -o-transition: .3s opacity;
    transition: opacity .3s;
    /* -webkit-transform: translateZ(0); */
    /* transform: translateZ(0); */
    z-index: 10;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
}

.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    /* background: #000; */
    /* opacity: .2; */
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E);
    left: 10px;
    right: auto;
}

.swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: 50%;
    background-repeat: no-repeat;
}

.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}

.bannersearchcontainer {
    height: 154px;
    margin-top: -164px;
    padding-top: 5px;
    padding-bottom: 6px;
    background: rgba(255, 255, 255, 0.5);
    z-index: 99;
    position: relative;
}

.web_widht, .web_width {
    width: 1200px;
    margin: 0 auto;
}

.homebanner .searchtype {
    padding: 10px;
    margin: 0 auto;
    border-radius: 5px;
    color: #fff;
    width: 800px;
    line-height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
}

.homebanner .searchtype a.on {
    color: #fff;
    background: #1395f3;
    position: relative;
}

.homebanner .searchtype a {
    /* color: #1395f3; */
    margin: 0 5px;
    font-size: 16px;
    display: inline-block;
    padding: 0px 10px;
    min-width: 40px;
    border-radius: 40px;
    cursor: pointer;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.homebanner .searchtype a.on::after {
    content: " ";
    width: 0;
    height: 0;
    border-width: 6px 6px 0px;
    border-style: solid;
    position: absolute;
    bottom: -6px;
    border-color: #1395f3 transparent transparent;
    left: 50%;
    margin-left: -6px;
}

.homebanner .searchtype a {
    /* color: #1395f3; */
    margin: 0 5px;
    font-size: 16px;
    display: inline-block;
    padding: 0px 10px;
    min-width: 40px;
    border-radius: 40px;
    cursor: pointer;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
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

.el-icon-question:before {
    content: "\E7A4";
}

.relative {
    position: relative;
}

.homesearch {
    width: 1000px;
    margin: 5px auto;
}

.search_a .btn {
    right: 5px;
    top: 50%;
    margin-top: -25px;
    background: #1395f3;
    padding: 0 40px;
}

.btn, .btn_primary, .btn_primary2 {
    line-height: 50px;
    height: 50px;
    border-radius: 50px;
    /* padding: 0 30px; */
    display: inline-block;
}

.btn, .btn_35, .btn_40, .btn_h6, .btn_primary, .btn_primary_sm2, .btn_primary_sm3, .btn_primary_xs2, .btn_sm, .btn_sm2, .btn_xs, .btn_xs1 {
    font-size: 14px;
    /* display: inline-block; */
    /* background: #409eff; */
    color: #fff;
    cursor: pointer;
    border: none;
    outline: medium none;
}

.absolute {
    position: absolute;
}

.btn .cc_sousuo {
    font-size: 20px;
}

.btn .ico {
    margin: 0 5px;
}

.ico {
    font-family: ico !important;
    /* font-size: 16px; */
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.input_h6 {
    height: 58px;
    line-height: 58px;
    border-radius: 58px;
    text-indent: 30px;
    border: 1px solid #a8d2fe;
}

input, select, textarea {
    font-size: 14px;
    color: #1a1a1a;
    width: 100%;
    /* border: none; */
    outline: medium none;
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

.pb_20 {
    padding-bottom: 20px;
}

.pt_40 {
    padding-top: 40px;
}

.map_con {
    background: #f5f5f5 url(content/images/mapbg.png) bottom center no-repeat;
    background-size: 100% 100%;
}

.web_widht, .web_width {
    width: 1200px;
    margin: 0 auto;
}

.title_a {
    position: relative;
    padding-left: 35px;
}

.title_a .x_fk {
    background: #1395f3;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0;
    bottom: 5px;
    z-index: 2;
}

.title_a .m_fk {
    background: #89caf9;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 5px;
    bottom: 10px;
}

.title_a h1 {
    font-size: 32px;
    display: inline-block;
    line-height: 32px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    /* font-size: 14px; */
}

b {
    font-weight: bold;
}

.title_a p {
    display: inline-block;
    margin-left: 10px;
}

.flex_wrap {
    flex-wrap: wrap;
}

.justify_between {
    display: flex;
    justify-content: space-between;
}

.mt_5 {
    margin-top: 5px;
}

canvas[Attributes Style] {
    aspect-ratio: auto 1200 / 744;
}

canvas {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.china_map {
  display: block; /* 去除图片下方的空白间隙 */
  width: auto; /* 图片宽度为容器的100% */
  height: auto; /* 图片高度自动调整，保持宽高比 */
  max-width: 100%; /* 防止图片超出其容器的宽度 */
  max-height: 100%; /* 防止图片超出其容器的高度 */
  object-fit: contain; /* 图片保持宽高比，可能会有空白区域 */
}

.pb_40 {
    padding-bottom: 40px;
}

.pt_40 {
    padding-top: 40px;
}

.web_widht, .web_width {
    width: 1200px;
    margin: 0 auto;
}

.title_a {
    position: relative;
    padding-left: 35px;
}

.title_a .x_fk {
    background: #1395f3;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0;
    bottom: 5px;
    z-index: 2;
}

.title_a .m_fk {
    background: #89caf9;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 5px;
    bottom: 10px;
}

.title_a h1 {
    font-size: 32px;
    display: inline-block;
    line-height: 32px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    /* font-size: 14px; */
}

b {
    font-weight: bold;
}

.title_a p {
    display: inline-block;
    margin-left: 10px;
}

.title_a p {
    /* display: inline-block; */
    margin-left: 10px;
}

p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.justify_between {
    display: flex;
    justify-content: space-between;
}

.mt_30 {
    margin-top: 30px;
}

.policy_news dl {
    width: 32%;
}

dl, li, ul {
    list-style-type: none;
}

dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.policy_news dt {
    background: #1395f3;
    line-height: 50px;
    border-radius: 5px 5px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
}

.justify_between {
    display: flex;
    justify-content: space-between;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.pr_20 {
    padding-right: 20px;
}

.pl_20 {
    padding-left: 20px;
}

.font18 {
    font-size: 18px;
}

h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.cursor_pointer {
    cursor: pointer;
}

.policy_news dd {
    border: 1px solid #eee;
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding-right: 20px;
    padding-top: 10px;
    min-height: 200px;
    background: #fff;
}

dd {
    display: block;
    margin-inline-start: 40px;
    unicode-bidi: isolate;
}

dl, li, ul {
    list-style-type: none;
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

.policy_news dd li {
    position: relative;
    margin-bottom: 10px;
}

.flex {
    display: flex;
    flex-wrap: wrap;
}

li {
    vertical-align: top;
}

dl, li, ul {
    list-style-type: none;
}

.policy_news dd li a {
    height: 26px;
    margin-top: 0;
}

.policy_news dd li a {
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* height: 26px; */
    line-height: 26px;
    /* margin-top: 0; */
}

.flex_1 {
    flex: 1;
}

.ml_20 {
    margin-left: 20px;
}

.ellipsis[data-v-43dc6cba] {
    overflow: hidden;
    text-overflow: ellipsis;
}

.ellipsis {
    white-space: nowrap;
}

.policy_news dd li span {
    color: #999;
}

.ml_10 {
    margin-left: 10px;
}

.policy_news dd li {
    position: relative;
    margin-bottom: 10px;
}

li {
    vertical-align: top;
}

dl, li, ul {
    list-style-type: none;
}

.policy_news dd li a {
    height: 26px;
    margin-top: 0;
}

.policy_news dd li a {
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* height: 26px; */
    line-height: 26px;
    /* margin-top: 0; */
}

.flex_1 {
    flex: 1;
}

.ml_20 {
    margin-left: 20px;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.ellipsis[data-v-43dc6cba] {
    overflow: hidden;
    text-overflow: ellipsis;
}

.ellipsis {
    white-space: nowrap;
}

.policy_news dd li span {
    color: #999;
}

.ml_10 {
    margin-left: 10px;
}

.policy_news dl {
    width: 32%;
}

dl, li, ul {
    list-style-type: none;
}

dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.policy_news dt {
    background: #1395f3;
    line-height: 50px;
    border-radius: 5px 5px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
}

.justify_between {
    display: flex;
    justify-content: space-between;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.pr_20 {
    padding-right: 20px;
}

.pl_20 {
    padding-left: 20px;
}

.font18 {
    font-size: 18px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    /* font-size: 14px; */
}

h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.cursor_pointer {
    cursor: pointer;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.policy_news dd {
    border: 1px solid #eee;
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding-right: 20px;
    padding-top: 10px;
    min-height: 200px;
    background: #fff;
}

dd {
    display: block;
    margin-inline-start: 40px;
    unicode-bidi: isolate;
}

dl, li, ul {
    list-style-type: none;
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

.policy_news dd li {
    position: relative;
    margin-bottom: 10px;
}

.policy_news dd li a {
    height: 26px;
    margin-top: 0;
}

.policy_news dd li a {
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* height: 26px; */
    line-height: 26px;
    /* margin-top: 0; */
    font-weight: normal;
    background-color: white;
    color: black;
}

.flex_1 {
    flex: 1;
}

.ml_20 {
    margin-left: 20px;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
    
}

.policy_news dd li span {
    color: #999;
}

.ml_10 {
    margin-left: 10px;
}

.policy_news dd li {
    position: relative;
    margin-bottom: 10px;
}

.flex {
    display: flex;
    flex-wrap: wrap;
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

.justify_between {
    display: flex;
    justify-content: space-between;
}

.mt_30 {
    margin-top: 30px;
}

.policy_news dl {
    width: 32%;
}

dl, li, ul {
    list-style-type: none;
}

dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.policy_news dt {
    background: #1395f3;
    line-height: 50px;
    border-radius: 5px 5px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
}

.justify_between {
    display: flex;
    justify-content: space-between;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.pr_20 {
    padding-right: 20px;
}

.pl_20 {
    padding-left: 20px;
}

.font18 {
    font-size: 18px;
}

.color_f, .color_f:hover, .color_f a {
    color: #fff;
}

.cursor_pointer {
    cursor: pointer;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.policy_news dd {
    border: 1px solid #eee;
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding-right: 20px;
    padding-top: 10px;
    min-height: 200px;
    background: #fff;
}

dd {
    display: block;
    margin-inline-start: 40px;
    unicode-bidi: isolate;
}

dl, li, ul {
    list-style-type: none;
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

.policy_news dd li {
    position: relative;
    margin-bottom: 10px;
}

li {
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.policy_news dd li a {
    height: 26px;
    margin-top: 0;
}

.policy_news dd li a {
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* height: 26px; */
    line-height: 26px;
    /* margin-top: 0; */
}

.flex_1 {
    flex: 1;
}

.ml_20 {
    margin-left: 20px;
}

.ellipsis[data-v-43dc6cba] {
    overflow: hidden;
    text-overflow: ellipsis;
}

.ellipsis {
    white-space: nowrap;
}

.policy_news dd li span {
    color: #999;
}

.ml_10 {
    margin-left: 10px;
}

.pb_40 {
    padding-bottom: 40px;
}

.pt_40 {
    padding-top: 40px;
}

.web_widht, .web_width {
    width: 1200px;
    margin: 0 auto;
}

.title_a {
    position: relative;
    padding-left: 35px;
}

.title_a .x_fk {
    background: #1395f3;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0;
    bottom: 5px;
    z-index: 2;
}

.title_a .m_fk {
    background: #89caf9;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 5px;
    bottom: 10px;
}

.title_a h1 {
    font-size: 32px;
    display: inline-block;
    line-height: 32px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    /* font-size: 14px; */
}

h1 {
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

b {
    font-weight: bold;
}

.title_a p {
    display: inline-block;
    margin-left: 10px;
}

.title_a p {
    /* display: inline-block; */
    margin-left: 10px;
}

p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.title_a .more {
    bottom: 0;
    top: auto;
}

.more[data-v-5b726c2c] {
    position: absolute;
    cursor: pointer;
    /* bottom: 0; */
    right: 20px;
    color: #409eff;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.radius_5 {
    border-radius: 5px;
}

.back_white {
    background: #fff;
}

.mt_30 {
    margin-top: 30px;
}

.title-wrap[data-v-5b726c2c] {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #fff;
    font-weight: 700;
    padding: 10px 20px;
    display: flex;
}

.back_blue {
    background: #409eff;
    /* color: #fff; */
}

.item-title[data-v-5b726c2c] {
    width: calc(100% - 390px);
}

.item-area[data-v-5b726c2c] {
    width: 120px;
}

.item-dept[data-v-5b726c2c] {
    width: 250px;
}

.news-list[data-v-5b726c2c] {
    padding: 10px 20px;
}

.seamless-warp[data-v-5b726c2c] {
    height: 200px;
    overflow: hidden;
}

.news-list .news-item[data-v-5b726c2c] {
    font-size: 15px;
    display: flex;
    height: 40px;
    line-height: 40px;
    font-weight: normal;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.news-list .news-item div[data-v-5b726c2c] {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    flex-wrap: nowrap;
    box-sizing: border-box;
}

.item-title[data-v-5b726c2c] {
    width: calc(100% - 390px);
}

.pr_20 {
    padding-right: 20px;
}

.news-list .news-item div[data-v-5b726c2c] {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    flex-wrap: nowrap;
    box-sizing: border-box;
}

.item-area[data-v-5b726c2c] {
    width: 120px;
}

.pr_20 {
    padding-right: 20px;
}

.item-dept[data-v-5b726c2c] {
    width: 250px;
}

.news-list .news-item[data-v-5b726c2c] {
    font-size: 15px;
    display: flex;
    height: 40px;
    line-height: 40px;
}

a {
    /* color: #1a1a1a; */
    text-decoration: none;
    outline: none;
}

.news-list .news-item div[data-v-5b726c2c] {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    flex-wrap: nowrap;
    box-sizing: border-box;
}

.item-title[data-v-5b726c2c] {
    width: calc(100% - 390px);
}

.item-dept[data-v-5b726c2c] {
    width: 250px;
}

.pr_20 {
    padding-right: 20px;
}

.news-list .news-item[data-v-5b726c2c] {
    font-size: 15px;
    display: flex;
    height: 40px;
    line-height: 40px;
}

.pb_40 {
    padding-bottom: 40px;
}

.pt_40 {
    padding-top: 40px;
}

.web_widht, .web_width {
    width: 1200px;
    margin: 0 auto;
}

.title_a {
    position: relative;
    padding-left: 35px;
}


</style>
