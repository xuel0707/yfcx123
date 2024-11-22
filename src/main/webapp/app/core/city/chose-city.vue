<template>
  <div class="city-container">
    <!-- 顶部导航 -->
    <div class="city-header">
      <div class="header-content">
        <router-link to="/" class="logo">
          <img src="/content/images/logo-4.png" alt="天策云">
        </router-link>
        <h1>选择城市</h1>
      </div>
    </div>

    <!-- 城市选择区域 -->
    <div class="city-content">
      <!-- 当前定位城市 -->
      <div class="location-section">
        <div class="section-title">当前定位城市</div>
        <div class="location-city" @click="handleCitySelect(currentCity)">
          <font-awesome-icon icon="map-marker-alt" />
          <span>{{ currentCity.name }}</span>
        </div>
      </div>

      <!-- 热门城市 -->
      <div class="hot-section">
        <div class="section-title">热门城市</div>
        <div class="hot-cities">
          <div v-for="city in hotCities" 
               :key="city.code"
               class="city-item"
               @click="handleCitySelect(city)"
          >
            {{ city.name }}
          </div>
        </div>
      </div>

      <!-- 城市列表 -->
      <div class="cities-section">
        <div class="section-title">全部城市</div>
        <div class="cities-wrapper">
          <!-- 省份列表 -->
          <div class="province-list">
            <div v-for="(cities, province) in groupedCities" 
                 :key="province"
                 class="province-group"
            >
              <div class="province-title">
                <span class="province-letter" v-if="getProvinceDisplay(province).letter">
                  {{ getProvinceDisplay(province).letter }}
                </span>
                {{ getProvinceDisplay(province).name }}
              </div>
              <div class="province-cities">
                <div v-for="city in cities" 
                     :key="city.code"
                     class="city-item"
                     @click="handleCitySelect(city)"
                     v-if="isCityMatch(city)"
                >
                  {{ city.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.city-container {
  min-height: 100vh;
  background: #f0f2f5;
}

.city-header {
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo img {
  height: 40px;
}

.header-content h1 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.city-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 15px;
}

.section-title {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

/* 定位城市样式 */
.location-section {
  margin-bottom: 30px;
}

.location-city {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: white;
  border-radius: 4px;
  color: #1890ff;
  cursor: pointer;
  transition: all 0.3s;
}

.location-city:hover {
  background: #e6f7ff;
}

/* 热门城市样式 */
.hot-section {
  margin-bottom: 30px;
}

.hot-cities {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
}

/* 省份列表样式 */
.cities-wrapper {
  background: white;
  border-radius: 4px;
  padding: 20px;
}

.province-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.province-group {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;
}

.province-group:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.province-title {
  margin-bottom: 15px;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
}

.province-letter {
  width: 24px;
  height: 24px;
  background: #1890ff;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.province-cities {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
}

.city-item {
  padding: 8px 15px;
  background: #f5f5f5;
  border-radius: 4px;
  text-align: center;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.city-item:hover {
  background: #e6f7ff;
  color: #1890ff;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .city-content {
    padding: 0 10px;
  }

  .hot-cities,
  .province-cities {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .city-item {
    padding: 8px 10px;
    font-size: 14px;
  }
}
</style>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCity } from '@/shared/composables/useCity';
import type { City } from '@/shared/composables/useCity';

export default defineComponent({
  name: 'ChoseCity',
  setup() {
    const router = useRouter();
    const { currentCity, setCurrentCity } = useCity();
    const searchQuery = ref('');

    // 热门城市
    const hotCities = ref<City[]>([
      { code: 'bj', name: '北京市', province: '直辖市' },
      { code: 'sh', name: '上海市', province: '直辖市' },
      { code: 'gz', name: '广州市', province: 'G 广东省' },
      { code: 'sz', name: '深圳市', province: 'G 广东省' },
      { code: 'hz', name: '杭州市', province: 'Z 浙江省' },
      { code: 'cd', name: '成都市', province: 'S 四川省' },
      { code: 'nj', name: '南京市', province: 'J 江苏省' },
      { code: 'wh', name: '武汉市', province: 'H 湖北省' }
    ]);

    // 所有城市
    const allCities = ref<City[]>([
      // 直辖市 - 修改 province 值，去掉 'Z ' 前缀
      { code: 'bj', name: '北京市', province: '直辖市' },
      { code: 'cq', name: '重庆市', province: '直辖市' },
      { code: 'sh', name: '上海市', province: '直辖市' },
      { code: 'tj', name: '天津市', province: '直辖市' },
      
      // A - 安徽省
      { code: 'ah-hf', name: '合肥市', province: 'A 安徽省' },
      { code: 'ah-wh', name: '芜湖市', province: 'A 安徽省' },
      { code: 'ah-bb', name: '蚌埠市', province: 'A 安徽省' },
      { code: 'ah-hn', name: '淮南市', province: 'A 安徽省' },
      { code: 'ah-mas', name: '马鞍山市', province: 'A 安徽省' },
      { code: 'ah-tl', name: '铜陵市', province: 'A 安徽省' },
      { code: 'ah-aq', name: '安庆市', province: 'A 安徽省' },
      
      // F - 福建省
      { code: 'fj-fz', name: '福州市', province: 'F 福建省' },
      { code: 'fj-xm', name: '厦门市', province: 'F 福建省' },
      { code: 'fj-pt', name: '莆田市', province: 'F 福建省' },
      { code: 'fj-sm', name: '三明市', province: 'F 福建省' },
      { code: 'fj-qz', name: '泉州市', province: 'F 福建省' },
      { code: 'fj-zz', name: '漳州市', province: 'F 福建省' },
      
      // G - 广东省
      { code: 'gd-gz', name: '广州市', province: 'G 广东省' },
      { code: 'gd-sz', name: '深圳市', province: 'G 广东省' },
      { code: 'gd-zs', name: '珠海市', province: 'G 广东省' },
      { code: 'gd-st', name: '汕头市', province: 'G 广东省' },
      { code: 'gd-fs', name: '佛山市', province: 'G 广东省' },
      { code: 'gd-dg', name: '东莞市', province: 'G 广东省' },
      
      // G - 广西壮族自治区
      { code: 'gx-nn', name: '南宁市', province: 'G 广西壮族自治区' },
      { code: 'gx-gl', name: '桂林市', province: 'G 广西壮族自治区' },
      { code: 'gx-lb', name: '州市', province: 'G 广西壮族自治区' },
      
      // G - 贵州省
      { code: 'gz-gy', name: '贵阳市', province: 'G 贵州省' },
      { code: 'gz-lps', name: '六盘水市', province: 'G 贵州省' },
      { code: 'gz-zy', name: '遵义市', province: 'G 贵州省' },
      
      // H - 海南省
      { code: 'hi-hk', name: '海口市', province: 'H 海南省' },
      { code: 'hi-sy', name: '三亚市', province: 'H 海南省' },
      
      // H - 河北省
      { code: 'he-sjz', name: '石家庄市', province: 'H 河北省' },
      { code: 'he-ts', name: '唐山市', province: 'H 河北省' },
      { code: 'he-qhd', name: '秦皇岛市', province: 'H 河北省' },
      
      // H - 河南省
      { code: 'ha-zz', name: '郑州市', province: 'H 河南省' },
      { code: 'ha-kf', name: '开封市', province: 'H 河南省' },
      { code: 'ha-ly', name: '洛阳市', province: 'H 河南省' },
      
      // H - 黑龙江省
      { code: 'hl-hrb', name: '哈尔滨市', province: 'H 黑龙江省' },
      { code: 'hl-qqhr', name: '齐齐哈尔市', province: 'H 黑龙江省' },
      { code: 'hl-jms', name: '佳木斯市', province: 'H 黑龙江省' },
      
      // H - 湖北省
      { code: 'hb-wh', name: '武汉市', province: 'H 湖北省' },
      { code: 'hb-hy', name: '黄石市', province: 'H 湖北省' },
      { code: 'hb-yc', name: '宜昌市', province: 'H 湖北省' },
      
      // H - 湖南省
      { code: 'hn-cs', name: '长沙市', province: 'H 湖南省' },
      { code: 'hn-zz', name: '株洲市', province: 'H 湖南省' },
      { code: 'hn-xy', name: '湘潭市', province: 'H 湖南省' },
      
      // J - 吉林省
      { code: 'jl-cc', name: '长春市', province: 'J 吉林省' },
      { code: 'jl-jl', name: '吉林市', province: 'J 吉林省' },
      { code: 'jl-sp', name: '四市', province: 'J 吉林省' },
      
      // J - 江苏省
      { code: 'js-nj', name: '南京市', province: 'J 江苏省' },
      { code: 'js-wx', name: '无锡市', province: 'J 江苏省' },
      { code: 'js-xz', name: '徐州市', province: 'J 江苏省' },
      { code: 'js-sz', name: '苏州市', province: 'J 江苏省' },
      
      // J - 江西省
      { code: 'jx-nc', name: '南昌市', province: 'J 江西省' },
      { code: 'jx-jj', name: '九江市', province: 'J 江西省' },
      { code: 'jx-gz', name: '赣州市', province: 'J 江西省' },
      
      // L - 辽宁省
      { code: 'ln-sy', name: '沈阳市', province: 'L 辽宁省' },
      { code: 'ln-dl', name: '大连市', province: 'L 辽宁省' },
      { code: 'ln-as', name: '鞍山市', province: 'L 辽宁省' },
      { code: 'ln-fs', name: '抚顺市', province: 'L 辽宁省' },
      { code: 'ln-bx', name: '本溪市', province: 'L 辽宁省' },
      { code: 'ln-dd', name: '丹东市', province: 'L 辽宁省' },
      { code: 'ln-jz', name: '锦州市', province: 'L 辽宁省' },
      
      // N - 内蒙古自治区
      { code: 'nm-hhht', name: '呼和浩特市', province: 'N 内蒙古自治区' },
      { code: 'nm-bt', name: '包头市', province: 'N 内蒙古自治区' },
      { code: 'nm-wh', name: '乌海市', province: 'N 内蒙古自治区' },
      { code: 'nm-cf', name: '赤峰市', province: 'N 内蒙古自治区' },
      { code: 'nm-tl', name: '通辽市', province: 'N 内蒙古自治区' },
      { code: 'nm-erds', name: '鄂尔多斯市', province: 'N 内蒙古自治区' },
      
      // N - 宁夏回族自治区
      { code: 'nx-yc', name: '银川市', province: 'N 宁夏回族自治区' },
      { code: 'nx-szs', name: '石嘴山市', province: 'N 宁夏回族自治区' },
      { code: 'nx-wz', name: '吴忠市', province: 'N 宁夏回族自治区' },
      { code: 'nx-gy', name: '固原市', province: 'N 宁夏回族自治区' },
      { code: 'nx-zw', name: '中卫市', province: 'N 宁夏回族自治区' },
      
      // Q - 青海省
      { code: 'qh-xn', name: '西宁市', province: 'Q 青海省' },
      { code: 'qh-hd', name: '海东市', province: 'Q 青海省' },
      { code: 'qh-hb', name: '海北藏族自治州', province: 'Q 青海省' },
      { code: 'qh-hn', name: '海南藏族自治州', province: 'Q 青海省' },
      { code: 'qh-gl', name: '果洛藏族自治州', province: 'Q 青海省' },
      
      // S - 山东省
      { code: 'sd-jn', name: '济南市', province: 'S 山东省' },
      { code: 'sd-qd', name: '青岛市', province: 'S 山东省' },
      { code: 'sd-zb', name: '淄博市', province: 'S 山东省' },
      { code: 'sd-zt', name: '枣庄市', province: 'S 山东省' },
      { code: 'sd-dy', name: '东营市', province: 'S 山东省' },
      { code: 'sd-yt', name: '烟台市', province: 'S 山东省' },
      { code: 'sd-wf', name: '潍坊市', province: 'S 山东省' },
      { code: 'sd-jn', name: '济宁市', province: 'S 山东省' },
      { code: 'sd-ta', name: '泰安市', province: 'S 山东省' },
      { code: 'sd-wh', name: '威海市', province: 'S 山东省' },
      { code: 'sd-rz', name: '日照市', province: 'S 山东省' },
      
      // S - 山西省
      { code: 'sx-ty', name: '太原市', province: 'S 山西省' },
      { code: 'sx-dt', name: '大同市', province: 'S 山西省' },
      { code: 'sx-yq', name: '阳泉市', province: 'S 山西省' },
      { code: 'sx-cz', name: '长治市', province: 'S 山西省' },
      { code: 'sx-jc', name: '晋城市', province: 'S 山西省' },
      { code: 'sx-sz', name: '州市', province: 'S 山西省' },
      { code: 'sx-jz', name: '晋中市', province: 'S 山西省' },
      
      // S - 陕西省
      { code: 'sn-xa', name: '西安市', province: 'S 陕西省' },
      { code: 'sn-tc', name: '铜川市', province: 'S 陕西省' },
      { code: 'sn-bj', name: '宝鸡市', province: 'S 陕西省' },
      { code: 'sn-xy', name: '咸阳市', province: 'S 陕西省' },
      { code: 'sn-wn', name: '渭南市', province: 'S 陕西省' },
      { code: 'sn-yl', name: '延安市', province: 'S 陕西省' },
      { code: 'sn-hz', name: '汉中市', province: 'S 陕西省' },
      
      // S - 四川省
      { code: 'sc-cd', name: '成都市', province: 'S 四川省' },
      { code: 'sc-zg', name: '自贡市', province: 'S 四川省' },
      { code: 'sc-pzh', name: '攀枝花市', province: 'S 四川省' },
      { code: 'sc-lz', name: '泸州市', province: 'S 四川省' },
      { code: 'sc-dy', name: '德阳市', province: 'S 四川省' },
      { code: 'sc-my', name: '绵阳市', province: 'S 四川省' },
      { code: 'sc-ga', name: '广元市', province: 'S 四川省' },
      { code: 'sc-sn', name: '遂宁市', province: 'S 四川省' },
      
      // X - 西藏自治区
      { code: 'xz-ls', name: '拉萨市', province: 'X 西藏自治区' },
      { code: 'xz-rkz', name: '日喀则市', province: 'X 西藏自治区' },
      { code: 'xz-qmd', name: '昌都市', province: 'X 西藏自治区' },
      { code: 'xz-lz', name: '林芝市', province: 'X 西藏自治区' },
      { code: 'xz-sn', name: '山南市', province: 'X 西藏自治区' },
      
      // X - 新疆维吾尔自治区
      { code: 'xj-wlmq', name: '乌鲁木齐市', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-klmy', name: '克拉玛依市', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-tl', name: '吐鲁番市', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-hm', name: '哈密市', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-aks', name: '阿克苏地区', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-ks', name: '喀什地区', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-ht', name: '和田地区', province: 'X 新疆维吾尔自治区' },
      
      // Y - 云南省
      { code: 'yn-km', name: '昆明市', province: 'Y 云南省' },
      { code: 'yn-qj', name: '曲靖市', province: 'Y 云南省' },
      { code: 'yn-yx', name: '玉溪市', province: 'Y 云南省' },
      { code: 'yn-bs', name: '保山市', province: 'Y 云南省' },
      { code: 'yn-zt', name: '昭通市', province: 'Y 云南省' },
      { code: 'yn-lj', name: '丽江市', province: 'Y 云南省' },
      { code: 'yn-pe', name: '普洱市', province: 'Y 云南省' },
      { code: 'yn-dl', name: '大理州', province: 'Y 云南省' },
      
      // Z - 浙江省
      { code: 'zj-hz', name: '杭州市', province: 'Z 浙江省' },
      { code: 'zj-nb', name: '宁波市', province: 'Z 浙江省' },
      { code: 'zj-wz', name: '温州市', province: 'Z 浙江省' },
      { code: 'zj-jx', name: '嘉兴市', province: 'Z 浙江省' },
      { code: 'zj-hu', name: '湖州市', province: 'Z 浙江省' },
      { code: 'zj-sx', name: '绍兴市', province: 'Z 浙江省' },
      { code: 'zj-jh', name: '金华市', province: 'Z 浙江省' },
      { code: 'zj-qz', name: '衢州市', province: 'Z 浙江省' },
      { code: 'zj-zs', name: '舟山市', province: 'Z 浙江省' },
      { code: 'zj-tz', name: '台州市', province: 'Z 浙江省' },
      { code: 'zj-ls', name: '丽水市', province: 'Z 浙江省' },

      // L - 辽宁省 (继续补充)
      { code: 'ln-yk', name: '营口市', province: 'L 辽宁省' },
      { code: 'ln-pj', name: '盘锦市', province: 'L 辽宁省' },
      { code: 'ln-tl', name: '铁岭市', province: 'L 辽宁省' },
      { code: 'ln-cy', name: '朝阳市', province: 'L 辽宁省' },
      { code: 'ln-hld', name: '葫芦岛市', province: 'L 辽宁省' },

      // S - 山东省 (继续补充)
      { code: 'sd-lw', name: '莱芜市', province: 'S 山东省' },
      { code: 'sd-lc', name: '聊城市', province: 'S 山东省' },
      { code: 'sd-bz', name: '滨州市', province: 'S 山东省' },
      { code: 'sd-dz', name: '德州市', province: 'S 山东省' },
      { code: 'sd-hz', name: '菏泽市', province: 'S 山东省' },

      // S - 山西省 (继续补充)
      { code: 'sx-ll', name: '吕梁市', province: 'S 山西省' },
      { code: 'sx-yc', name: '运城市', province: 'S 山西省' },
      { code: 'sx-xy', name: '忻州市', province: 'S 山西省' },
      { code: 'sx-lf', name: '临汾市', province: 'S 山西省' },

      // S - 陕西省 (继续补充)
      { code: 'sn-ak', name: '安康市', province: 'S 陕西省' },
      { code: 'sn-sl', name: '商洛市', province: 'S 陕西省' },
      { code: 'sn-ys', name: '榆林市', province: 'S 陕西省' },

      // S - 四川省 (继补充)
      { code: 'sc-nc', name: '南充市', province: 'S 四川省' },
      { code: 'sc-ms', name: '眉山市', province: 'S 四川省' },
      { code: 'sc-zy', name: '资阳市', province: 'S 四川省' },
      { code: 'sc-ls', name: '乐山市', province: 'S 四川省' },
      { code: 'sc-ya', name: '雅安市', province: 'S 四川省' },
      { code: 'sc-bz', name: '巴中市', province: 'S 四川省' },
      { code: 'sc-gz', name: '广安市', province: 'S 四川省' },
      { code: 'sc-ab', name: '阿坝藏族羌族自治州', province: 'S 四川省' },
      { code: 'sc-ganzi', name: '甘孜藏族自治州', province: 'S 四川省' },
      { code: 'sc-ls', name: '乐山市', province: 'S 四川省' },
      { code: 'sc-liangshan', name: '凉山彝族自治州', province: 'S 四川省' },

      // X - 西藏自治区 (继续补充)
      { code: 'xz-nq', name: '那曲市', province: 'X 西藏自治区' },
      { code: 'xz-al', name: '阿里地区', province: 'X 西藏自治区' },

      // X - 新疆维吾尔自治区 (继续补充)
      { code: 'xj-bygl', name: '巴音郭楞蒙古自治州', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-cj', name: '昌吉回族自治州', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-betl', name: '博尔塔拉蒙古自治州', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-yc', name: '伊犁哈萨克自治州', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-tcs', name: '塔城地区', province: 'X 新疆维吾尔自治区' },
      { code: 'xj-alt', name: '阿勒泰地区', province: 'X 新疆维吾尔自治区' },

      // Y - 云南省 (继续补充)
      { code: 'yn-cx', name: '楚雄彝族自治州', province: 'Y 云南省' },
      { code: 'yn-hh', name: '红河哈尼族彝族自治州', province: 'Y 云南省' },
      { code: 'yn-ws', name: '文山壮族苗族自治州', province: 'Y 云南省' },
      { code: 'yn-xsbn', name: '西双版纳傣族自治州', province: 'Y 云南省' },
      { code: 'yn-dh', name: '德宏傣族景颇族自治州', province: 'Y 云南省' },
      { code: 'yn-nc', name: '怒江傈僳族自治州', province: 'Y 云南省' },
      { code: 'yn-dq', name: '迪庆藏族自治州', province: 'Y 云南省' },
      { code: 'yn-lc', name: '临沧市', province: 'Y 云南省' },

      // F - 福建省 (继续补充)
      { code: 'fj-np', name: '南平市', province: 'F 福建省' },
      { code: 'fj-ly', name: '龙岩市', province: 'F 福建省' },
      { code: 'fj-nd', name: '宁德市', province: 'F 福建省' },

      // G - 广东省 (继续补充)
      { code: 'gd-sg', name: '韶关市', province: 'G 广东省' },
      { code: 'gd-hz', name: '惠州市', province: 'G 广东省' },
      { code: 'gd-mz', name: '州市', province: 'G 广东省' },
      { code: 'gd-sw', name: '汕尾市', province: 'G 广东省' },
      { code: 'gd-yj', name: '阳江市', province: 'G 广东省' },
      { code: 'gd-zj', name: '湛江市', province: 'G 广东省' },
      { code: 'gd-mm', name: '茂名市', province: 'G 广东省' },
      { code: 'gd-zq', name: '肇庆市', province: 'G 广东省' },
      { code: 'gd-cz', name: '潮州市', province: 'G 广东省' },
      { code: 'gd-jm', name: '江门市', province: 'G 广东省' },
      { code: 'gd-qy', name: '清远市', province: 'G 广东省' },
      { code: 'gd-yf', name: '云浮市', province: 'G 广东省' },

      // G - 广西壮族自治区 (继续补充)
      { code: 'gx-wz', name: '梧州市', province: 'G 广西壮族自治区' },
      { code: 'gx-bh', name: '北海市', province: 'G 广西壮族自治区' },
      { code: 'gx-fcg', name: '防城港市', province: 'G 广西壮族自治区' },
      { code: 'gx-qz', name: '钦州市', province: 'G 广西壮族自治区' },
      { code: 'gx-gg', name: '贵港市', province: 'G 广西壮族自治区' },
      { code: 'gx-yu', name: '玉林市', province: 'G 广西壮族自治区' },
      { code: 'gx-bs', name: '百色市', province: 'G 广西壮族自治区' },
      { code: 'gx-hc', name: '河池市', province: 'G 广西壮族自治区' },
      { code: 'gx-lb', name: '来宾市', province: 'G 广西壮族自治区' },
      { code: 'gx-cz', name: '崇左市', province: 'G 广西壮族自治区' },

      // G - 贵州省 (继续补充)
      { code: 'gz-tr', name: '铜仁市', province: 'G 贵州省' },
      { code: 'gz-qxn', name: '黔西南布依族苗族自治州', province: 'G 贵州省' },
      { code: 'gz-qdn', name: '黔东南苗族侗族自治州', province: 'G 贵州省' },
      { code: 'gz-qn', name: '黔南布依族苗族自治州', province: 'G 贵州省' },
      { code: 'gz-as', name: '安顺市', province: 'G 贵州省' },
      { code: 'gz-bj', name: '毕节市', province: 'G 贵州省' },

      // H - 河北省 (继续补充)
      { code: 'he-hd', name: '邯郸市', province: 'H 河北省' },
      { code: 'he-xt', name: '邢台市', province: 'H 河北省' },
      { code: 'he-bd', name: '保定市', province: 'H 河北省' },
      { code: 'he-zjk', name: '张家口市', province: 'H 河北省' },
      { code: 'he-cd', name: '承德市', province: 'H 河北省' },
      { code: 'he-cz', name: '沧州市', province: 'H 河北省' },
      { code: 'he-lf', name: '廊坊市', province: 'H 河北省' },
      { code: 'he-hs', name: '衡水市', province: 'H 河北省' },

      // H - 河南省 (继续补充)
      { code: 'ha-pds', name: '平顶山市', province: 'H 河南省' },
      { code: 'ha-ay', name: '安阳市', province: 'H 河南省' },
      { code: 'ha-hb', name: '鹤壁市', province: 'H 河南省' },
      { code: 'ha-xx', name: '新乡市', province: 'H 河南省' },
      { code: 'ha-jz', name: '焦作', province: 'H 河南省' },
      { code: 'ha-py', name: '濮阳市', province: 'H 河南省' },
      { code: 'ha-xc', name: '许昌市', province: 'H 河南省' },
      { code: 'ha-ly', name: '漯河市', province: 'H 河南省' },
      { code: 'ha-smx', name: '三门峡市', province: 'H 河南省' },
      { code: 'ha-ny', name: '南阳市', province: 'H 河南省' },
      { code: 'ha-sq', name: '商丘市', province: 'H 河南省' },
      { code: 'ha-xy', name: '信阳市', province: 'H 河南省' },
      { code: 'ha-zk', name: '周口市', province: 'H 河南省' },
      { code: 'ha-zmd', name: '驻马店市', province: 'H 河南省' },

      // H - 黑龙江省 (继续补充)
      { code: 'hl-mdj', name: '牡丹江市', province: 'H 黑龙江省' },
      { code: 'hl-hh', name: '黑河市', province: 'H 黑龙江省' },
      { code: 'hl-sh', name: '绥化市', province: 'H 黑龙江省' },
      { code: 'hl-dxal', name: '大兴安岭地区', province: 'H 黑龙江省' },
      { code: 'hl-hg', name: '鹤岗市', province: 'H 黑龙江省' },
      { code: 'hl-sys', name: '双鸭山市', province: 'H 黑龙江省' },
      { code: 'hl-dq', name: '大庆市', province: 'H 黑龙江省' },
      { code: 'hl-yc', name: '伊春市', province: 'H 黑龙江省' },
      { code: 'hl-qth', name: '七台河市', province: 'H 黑龙江省' },

      // H - 湖北省 (继续补充)
      { code: 'hb-ez', name: '鄂州市', province: 'H 湖北省' },
      { code: 'hb-jm', name: '荆门市', province: 'H 湖北省' },
      { code: 'hb-xn', name: '咸宁市', province: 'H 湖北省' },
      { code: 'hb-sys', name: '十堰市', province: 'H 湖北省' },
      { code: 'hb-suiz', name: '随州市', province: 'H 湖北省' },
      { code: 'hb-jz', name: '荆州市', province: 'H 湖北省' },
      { code: 'hb-hg', name: '黄冈市', province: 'H 湖北省' },
      { code: 'hb-es', name: '恩施土家族苗族自治州', province: 'H 湖北省' },

      // H - 湖南省 (继续补充)
      { code: 'hn-hy', name: '衡阳市', province: 'H 湖南省' },
      { code: 'hn-shao', name: '邵阳市', province: 'H 湖南省' },
      { code: 'hn-yy', name: '岳阳市', province: 'H 湖南省' },
      { code: 'hn-cd', name: '常德市', province: 'H 湖南省' },
      { code: 'hn-zjj', name: '张家界市', province: 'H 湖南省' },
      { code: 'hn-yiyang', name: '益阳市', province: 'H 湖南省' },
      { code: 'hn-cz', name: '郴州市', province: 'H 湖南省' },
      { code: 'hn-yongz', name: '永州市', province: 'H 湖南省' },
      { code: 'hn-hh', name: '怀化市', province: 'H 湖省' },
      { code: 'hn-ld', name: '娄底市', province: 'H 湖南省' },
      { code: 'hn-xxxt', name: '湘西土家族苗族自治州', province: 'H 湖南省' },

      // J - 吉林省 (继续补充)
      { code: 'jl-ly', name: '辽源市', province: 'J 吉林省' },
      { code: 'jl-th', name: '通化市', province: 'J 吉林省' },
      { code: 'jl-bc', name: '白城市', province: 'J 吉林省' },
      { code: 'jl-bs', name: '白山市', province: 'J 吉林省' },
      { code: 'jl-yb', name: '延边朝鲜族自治州', province: 'J 吉林省' },

      // J - 江苏省 (继续补充)
      { code: 'js-cz', name: '常州市', province: 'J 江苏省' },
      { code: 'js-nt', name: '南通市', province: 'J 江苏省' },
      { code: 'js-lyg', name: '连云港市', province: 'J 江苏省' },
      { code: 'js-ha', name: '淮安市', province: 'J 江苏省' },
      { code: 'js-yc', name: '盐城市', province: 'J 江苏省' },
      { code: 'js-yz', name: '扬州市', province: 'J 江苏省' },
      { code: 'js-zj', name: '镇江市', province: 'J 苏省' },
      { code: 'js-tz', name: '泰州市', province: 'J 江苏省' },
      { code: 'js-sq', name: '宿迁市', province: 'J 江苏省' },

      // J - 江西省 (继续补充)
      { code: 'jx-px', name: '萍乡市', province: 'J 江西省' },
      { code: 'jx-xy', name: '新余市', province: 'J 江西省' },
      { code: 'jx-yt', name: '鹰潭市', province: 'J 江西省' },
      { code: 'jx-sr', name: '上饶市', province: 'J 江西省' },
      { code: 'jx-ja', name: '吉安市', province: 'J 江西省' },
      { code: 'jx-yc', name: '宜春市', province: 'J 江西省' },
      { code: 'jx-fu', name: '抚州市', province: 'J 江西省' },

      // Q - 青海省 (继续补充)
      { code: 'qh-ys', name: '玉树藏族自治州', province: 'Q 青海省' },
      { code: 'qh-hx', name: '海西蒙古族藏族自治州', province: 'Q 青海省' },
      { code: 'qh-hm', name: '黄南藏族自治州', province: 'Q 青海省' },

      // G - 甘肃省 (新增)
      { code: 'gs-lz', name: '兰州市', province: 'G 甘肃省' },
      { code: 'gs-jyg', name: '嘉峪关市', province: 'G 甘肃省' },
      { code: 'gs-jc', name: '金昌市', province: 'G 甘肃省' },
      { code: 'gs-by', name: '白银市', province: 'G 甘肃省' },
      { code: 'gs-ts', name: '天水市', province: 'G 甘肃省' },
      { code: 'gs-ww', name: '武威市', province: 'G 甘肃省' },
      { code: 'gs-zy', name: '张掖市', province: 'G 甘肃省' },
      { code: 'gs-pl', name: '平凉市', province: 'G 甘肃省' },
      { code: 'gs-jq', name: '酒泉市', province: 'G 甘肃省' },
      { code: 'gs-qy', name: '庆阳市', province: 'G 甘肃省' },
      { code: 'gs-dx', name: '定西市', province: 'G 甘肃省' },
      { code: 'gs-ln', name: '陇南市', province: 'G 甘肃省' },
      { code: 'gs-lx', name: '临夏回族自治州', province: 'G 甘肃省' },
      { code: 'gs-gn', name: '甘南藏族自治州', province: 'G 甘肃省' },

      // H - 海南省 (继续补充)
      { code: 'hi-sanya', name: '三亚市', province: 'H 海南省' },
      { code: 'hi-sansha', name: '三沙市', province: 'H 海南省' },
      { code: 'hi-danzhou', name: '儋州市', province: 'H 海南省' },
      { code: 'hi-wzs', name: '五指山市', province: 'H 海南省' },
      { code: 'hi-qh', name: '琼海市', province: 'H 海南省' },
      { code: 'hi-wc', name: '文昌市', province: 'H 海南省' },
      { code: 'hi-wn', name: '万宁市', province: 'H 海南省' },
      { code: 'hi-df', name: '东方市', province: 'H 海南省' },
      { code: 'hi-cm', name: '澄迈县', province: 'H 海南省' },
      { code: 'hi-da', name: '定安县', province: 'H 海南省' },
      { code: 'hi-tc', name: '屯昌县', province: 'H 海南省' },
      { code: 'hi-cj', name: '昌江黎族自治县', province: 'H 海南省' },
      { code: 'hi-ld', name: '乐东黎族自治县', province: 'H 海南省' },
      { code: 'hi-ls', name: '陵水黎族自治县', province: 'H 海南省' },
      { code: 'hi-bt', name: '保亭黎族苗族自治县', province: 'H 海南省' },
      { code: 'hi-qz', name: '琼中黎族苗族自治县', province: 'H 海南省' },
      { code: 'hi-baisha', name: '白沙黎族自治县', province: 'H 海南省' },

      // G - 甘肃省 (继续补充)
      { code: 'gs-dh', name: '敦煌市', province: 'G 甘肃省' },
      { code: 'gs-jq', name: '嘉峪关市', province: 'G 甘肃省' },
      { code: 'gs-pg', name: '平凉市', province: 'G 甘肃省' },
      { code: 'gs-qy', name: '庆阳市', province: 'G 甘肃省' },
      { code: 'gs-ln', name: '陇南市', province: 'G 甘肃省' },
      { code: 'gs-dx', name: '定西市', province: 'G 甘肃省' },
      { code: 'gs-lx', name: '临夏回族自治州', province: 'G 甘肃省' },
      { code: 'gs-gn', name: '甘南藏族自治州', province: 'G 甘肃省' },

      // J - 吉林省 (继续补充)
      { code: 'jl-sy', name: '松原市', province: 'J 吉林省' },
      { code: 'jl-bs', name: '白山市', province: 'J 吉林省' },
      { code: 'jl-yj', name: '延吉市', province: 'J 吉林省' },
      { code: 'jl-th', name: '通化市', province: 'J 吉林省' },

      // N - 内蒙古自治区 (继续补充)
      { code: 'nm-hlbe', name: '呼伦贝尔市', province: 'N 内蒙古自治区' },
      { code: 'nm-xam', name: '兴安盟', province: 'N 内蒙古自治区' },
      { code: 'nm-xlgl', name: '锡林郭勒盟', province: 'N 内蒙古自治区' },
      { code: 'nm-wlcb', name: '乌兰察布市', province: 'N 内蒙古自治区' },
      { code: 'nm-bynem', name: '巴彦淖尔市', province: 'N 内蒙古自治区' },
      { code: 'nm-alsm', name: '阿拉善盟', province: 'N 内蒙古自治区' },

      // Q - 青海省 (继续补充)
      { code: 'qh-hx', name: '海西蒙古族藏族自治州', province: 'Q 青海省' },
      { code: 'qh-hb', name: '海北藏族自治州', province: 'Q 青海省' },
      { code: 'qh-hn', name: '海南藏族自治州', province: 'Q 青海省' },
      { code: 'qh-gl', name: '果洛藏族自治州', province: 'Q 青海省' },
      { code: 'qh-ys', name: '玉树藏自治州', province: 'Q 青海省' },

      // T - 台湾省
      { code: 'tw-tb', name: '台北市', province: 'T 台湾省' },
      { code: 'tw-gx', name: '高雄市', province: 'T 台湾省' },
      { code: 'tw-tc', name: '台中市', province: 'T 台湾省' },
      { code: 'tw-tn', name: '台南市', province: 'T 台湾省' },
      { code: 'tw-tp', name: '新北市', province: 'T 台湾省' },
      { code: 'tw-ty', name: '桃园市', province: 'T 台湾省' },

      // X - 香港特别行政区
      { code: 'hk', name: '香港特别行政区', province: 'X 香港特别行政区' },

      // A - 澳门特别行政区
      { code: 'mo', name: '澳门特别行政区', province: 'A 澳门特别行政区' }
    ]);

    // 修改模板部分，处理省份字母显示
    const getProvinceDisplay = computed(() => (province: string) => {
      if (province === '直辖市' || 
          province === 'X 香港特别行政区' || 
          province === 'A 澳门特别行政区') {
        return {
          letter: '',
          name: province
        };
      }
      const [letter, ...rest] = province.split(' ');
      return {
        letter,
        name: rest.join(' ')
      };
    });

    // 修改分组逻辑，确保特别行政区正确显示
    const groupedCities = computed(() => {
      const groups: Record<string, City[]> = {};
      
      // 先添加直辖市分组
      groups['直辖市'] = allCities.value.filter(city => city.province === '直辖市');
      
      // 添加其他省份
      allCities.value.forEach((city: City) => {
        if (city.province !== '直辖市') {
          if (!groups[city.province]) {
            groups[city.province] = [];
          }
          groups[city.province].push(city);
        }
      });

      // 自定义排序：直辖市在前，其他按字母顺序排序
      return Object.keys(groups)
        .sort((a, b) => {
          if (a === '直辖市') return -1;
          if (b === '直辖市') return 1;
          return a.localeCompare(b);
        })
        .reduce((obj: Record<string, City[]>, key: string) => {
          obj[key] = groups[key];
          return obj;
        }, {});
    });

    // 城市搜索过滤
    const isCityMatch = (city: City): boolean => {
      if (!searchQuery.value) return true;
      return Boolean(city.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    };

    // 处理城市选择
    const handleCitySelect = (city: City) => {
      setCurrentCity(city);
      setTimeout(() => {
        router.push('/');
      }, 300);
    };

    // 初始化时从本地存储加载上次选择的城市
    const initSelectedCity = () => {
      const savedCity = localStorage.getItem('selectedCity');
      if (savedCity) {
        try {
          const city = JSON.parse(savedCity) as City;
          setCurrentCity(city);
        } catch (e) {
          console.error('Failed to parse saved city:', e);
        }
      }
    };

    // 在组件挂载时初始化
    onMounted(() => {
      initSelectedCity();
      // 如果需要，这里可以调用获取地理位置
      // getCurrentLocation();
    });

    return {
      currentCity,
      hotCities,
      groupedCities,
      searchQuery,
      isCityMatch,
      handleCitySelect,
      getProvinceDisplay
    };
  }
});
</script>
