<template>
  <div data-v-00d846e7="" data-v-10823e5a="">
    <div data-v-7cd33a07="" data-v-00d846e7="" class="homebanner">
      <div data-v-7cd33a07="" class="homebanneritem">
        <div data-v-7cd33a07="" class="swiper-container swiper-container-initialized swiper-container-horizontal"> 
          <div class="swiper-wrapper" style="transform: translate3d(-2800px, 0px, 0px); transition-duration: 0ms;">
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/1a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/2a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/3a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/4a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide" data-swiper-slide-index="3" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/5a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide" data-swiper-slide-index="4" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/6a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide" data-swiper-slide-index="5" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/1a.jpg">
            </div>
            
            <div data-v-7cd33a07="" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 1400px;">
              <img data-v-7cd33a07="" src="/content/images/upload/banner/2a.jpg">
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
              <canvas data-zr-dom-id="zr_0" width="1200" height="744" style="position: absolute; left: 0px; top: 0px; width: 1000px; height: 620px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
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
        <dl data-v-43dc6cba="" element-loading-text="加载中..." class="">
          <dt data-v-43dc6cba="" class="justify_between color_f pl_20 pr_20" style="background-image: url(&quot;/content/images/dashboard/policy_news_bj1.jpg&quot;);">
            <h1 data-v-43dc6cba="" class="font18">申报通知</h1>
            <a data-v-43dc6cba="" class="cursor_pointer">更多 &gt;</a>
          </dt>
          
          <dd data-v-43dc6cba="">
            <ul data-v-43dc6cba="">
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="龙岗区低空经济产业政策扶持企业申报指南（2024年度第二批）" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【龙岗】龙岗区低空经济产业政策扶持企业申报指南（2024年度第二批）
                  </div><!---->
                </a>
                
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于推荐2024年广东省全国科普日优秀活动和优秀组织单位有关事项的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【广东】关于推荐2024年广东省全国科普日优秀活动和优秀组织单位有关事项的通知
                  </div><!---->
                </a>
                
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市市场监督管理局关于印发《2023年度“圳品”品牌培育项目申报指南》的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市市场监督管理局关于印发《2023年度“圳品”品牌培育项目申报指南》的通知
                  </div><!---->
                </a>
                
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市市场监督管理局关于印发《2024年度“圳品”品牌培育项目申报指南》的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市市场监督管理局关于印发《2024年度“圳品”品牌培育项目申报指南》的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于组织开展2024年绿色低碳产业认定（第二批）工作的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】关于组织开展2024年绿色低碳产业认定（第二批）工作的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于发布2024年度国家自然科学基金专项项目“数据科学与人工智能前沿探索”申请指南的通告" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【部委】关于发布2024年度国家自然科学基金专项项目“数据科学与人工智能前沿探索”申请指南的通告
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市罗湖区科技和工业信息化局关于开展2024年国家高新技术企业认定（第二批）复议工作的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【罗湖】深圳市罗湖区科技和工业信息化局关于开展2024年国家高新技术企业认定（第二批）复议工作的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-14</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="市工业和信息化局关于开展先进适用技术（第一批）遴选工作的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】市工业和信息化局关于开展先进适用技术（第一批）遴选工作的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-14</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市市场监督管理局关于印发《深圳市2023年度养殖环节病死猪无害化处理》等6个项目申报指南的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市市场监督管理局关于印发《深圳市2023年度养殖环节病死猪无害化处理》等6个项目申报指南的通知
                  </div><!---->
                </a>  
                <span data-v-43dc6cba="" class="ml_10">11-14</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于组织开展2024年度中小企业“揭榜”工作的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【部委】关于组织开展2024年度中小企业“揭榜”工作的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-14</span>
              </li>
            </ul>
          </dd>

          <div class="el-loading-mask" style="display: none;">
            <div class="el-loading-spinner">
              <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
              </svg>
          
              <p class="el-loading-text">加载中...</p>
            </div>
          </div>
        </dl>
        
        <dl data-v-43dc6cba="" element-loading-text="加载中..." class="">
          <dt data-v-43dc6cba="" class="justify_between color_f pl_20 pr_20" style="background-image: url(&quot;/content/images/dashboard/policy_news_bj2.jpg&quot;);">
            <h1 data-v-43dc6cba="" class="font18">公示公告</h1>
            <a data-v-43dc6cba="" class="cursor_pointer">更多 &gt;</a>
          </dt>
          <dd data-v-43dc6cba="">
            <ul data-v-43dc6cba="">
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市前海管理局关于深港智汇产业园（和一）项目公开征集企业购置厂房需求的公告" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【前海】深圳市前海管理局关于深港智汇产业园（和一）项目公开征集企业购置厂房需求的公告
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-16</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市龙岗区工业和信息化局关于公示2024年度龙岗区低空经济产业扶持项目拟扶持企业名单的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【龙岗】深圳市龙岗区工业和信息化局关于公示2024年度龙岗区低空经济产业扶持项目拟扶持企业名单的通知
                  </div><!---->
                </a>
                
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="关于公布广东省2024年第二批续期评估通过社会培训评价组织名单的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【广东】关于公布广东省2024年第二批续期评估通过社会培训评价组织名单的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="光明区2022—2023年度省、市级创新平台配套资助项目拟资助平台名单公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】光明区2022—2023年度省、市级创新平台配套资助项目拟资助平台名单公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市住房和建设局关于2024年第三批超低能耗、（近）零能耗及近零碳建筑试点项目的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市住房和建设局关于2024年第三批超低能耗、（近）零能耗及近零碳建筑试点项目的公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="第四批深圳市港澳青年创新创业基地公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】第四批深圳市港澳青年创新创业基地公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="光明区民政局关于光明区“2024年智能居家适老化改造消费提升专项活动”资助名单（第二批）的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                <div data-v-43dc6cba="" class="ellipsis">
                  【光明】光明区民政局关于光明区“2024年智能居家适老化改造消费提升专项活动”资助名单（第二批）的公示
                </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>

              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="园山街道拟发放2024年11月汇总就业创业补贴信息公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【龙岗】园山街道拟发放2024年11月汇总就业创业补贴信息公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市商务局关于2024年深圳市汽车“报废更新”第七批名单公示的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市商务局关于2024年深圳市汽车“报废更新”第七批名单公示的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="光明区2022—2023年度省、市级创新平台配套资助项目拟资助平台名单公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】光明区2022—2023年度省、市级创新平台配套资助项目拟资助平台名单公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
            </ul>
          </dd>
        
          <div class="el-loading-mask" style="display: none;">
            <div class="el-loading-spinner">
              <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
              </svg>
              <p class="el-loading-text">加载中...</p>
            </div>
          </div>
        </dl>
        
        <dl data-v-43dc6cba="" element-loading-text="加载中..." class="">
          <dt data-v-43dc6cba="" class="justify_between color_f pl_20 pr_20" style="background-image: url(&quot;/content/images/dashboard/policy_news_bj3.jpg&quot;);">
            <h1 data-v-43dc6cba="" class="font18">政策法规</h1>
            <a data-v-43dc6cba="" class="cursor_pointer">更多 &gt;</a>
          </dt>

          <dd data-v-43dc6cba="">
            <ul data-v-43dc6cba="">
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市前海管理局关于支持前海深港国际法务区高端法律服务业集聚的申报指南" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【前海】深圳市前海管理局关于支持前海深港国际法务区高端法律服务业集聚的申报指南
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-16</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市光明区人民政府关于印发《光明区政府投资管理办法》的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】深圳市光明区人民政府关于印发《光明区政府投资管理办法》的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市住房和建设局关于《2024年度深圳市工程建设地方标准制修订计划（第二批）》的公示" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【深圳】深圳市住房和建设局关于《2024年度深圳市工程建设地方标准制修订计划（第二批）》的公示
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市福田区人力资源局关于印发《深圳市福田区支持人力资源服务业高质量发展若干措施》的通知" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【福田】深圳市福田区人力资源局关于印发《深圳市福田区支持人力资源服务业高质量发展若干措施》的通知
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市人力资源和社会保障局关于公开征求深圳市智能终端、网络与通信、软件与信息服务、人工智能、智能网联汽车、低空经济与空天、新能源、脑科学与脑机工程产业高端紧缺岗位清单意见的通告" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                <div data-v-43dc6cba="" class="ellipsis">
                  【深圳】深圳市人力资源和社会保障局关于公开征求深圳市智能终端、网络与通信、软件与信息服务、人工智能、智能网联汽车、低空经济与空天、新能源、脑科学与脑机工程产业高端紧缺岗位清单意见的通告
                </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="深圳市互联网软件知识产权保护若干规定" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】深圳市互联网软件知识产权保护若干规定
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="广东省展会专利保护办法" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【光明】广东省展会专利保护办法
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>

              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="中法民用航空工业合作工作组第九次会议暨第二次中法绿色航空论坛在珠海召开" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【部委】中法民用航空工业合作工作组第九次会议暨第二次中法绿色航空论坛在珠海召开
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="2024年中国新能源汽车1000万辆达成活动在武汉举办" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【部委】2024年中国新能源汽车1000万辆达成活动在武汉举办
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
              
              <li data-v-43dc6cba="" class="flex">
                <a data-v-43dc6cba="" title="龙岗区发布“培土倍增”五年行动方案" class="flex_1 ml_20 tooltip-inner" style="cursor: pointer;">
                  <div data-v-43dc6cba="" class="ellipsis">
                    【龙岗】龙岗区发布“培土倍增”五年行动方案
                  </div><!---->
                </a>
                <span data-v-43dc6cba="" class="ml_10">11-15</span>
              </li>
            </ul>
          </dd>
          
          <div class="el-loading-mask" style="display: none;">
            <div class="el-loading-spinner">
              <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
              </svg>
              <p class="el-loading-text">加载中...</p>
            </div>
          </div>
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
</template>

<script>
// 引入 Swiper 相关功能
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // 引入 Swiper 的样式

export default {
  name: 'Home',
  
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
