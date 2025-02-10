import { type ComputedRef, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';

import {
  Location,
  Menu as IconMenu,
  Fold,
  Expand,
  Present,
  Promotion,
  Finished,
  View,
  Delete,
  Edit,
  Download,
  Plus,
  Refresh,
  ZoomIn,
  Files,
  Paperclip,
  Money,
  Coin,
  DataAnalysis,
  Timer,
  Tickets,
  Box,
  House,
  User,
  Setting,
} from '@element-plus/icons-vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Results',
  components: {
    ribbon: Ribbon,
  },
  setup() {
    const isCollapse = ref(false);
    const activeIndex = ref('1-1');

    const toggleCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };

    const handleSelect = (index: string) => {
      activeIndex.value = index;
    };

    const resultName = ref<string>(''); // 初始值为空字符串
    const options = [
      {
        value: '01',
        label: '全部',
      },
      {
        value: '02',
        label: '知识产权',
      },
      {
        value: '03',
        label: '诀窍',
      },
      {
        value: '04',
        label: '标准',
      },
    ];
    const sdate = ref<string>(''); // 初始值为空字符串
    const edate = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期

    const options1 = [
      {
        value: '01',
        label: '自主研发',
      },
      {
        value: '02',
        label: '受赠',
      },
      {
        value: '03',
        label: '受让',
      },
      {
        value: '04',
        label: '其他',
      },
    ];
    const projectName = ref<string>(''); // 初始值为空字符串
    const ipName = ref<string>(''); // 初始值为空字符串
    const options2 = [
      {
        value: '01',
        label: '自主研发',
      },
      {
        value: '02',
        label: '受赠',
      },
      {
        value: '03',
        label: '受让',
      },
      {
        value: '04',
        label: '其他',
      },
    ];
    const options3 = [
      {
        value: '01',
        label: '发明专利',
      },
      {
        value: '02',
        label: '国防专利',
      },
      {
        value: '03',
        label: '植物新品种',
      },
      {
        value: '04',
        label: '国际一级中药保护品种',
      },
      {
        value: '05',
        label: '国家级农作物品种',
      },
      {
        value: '06',
        label: '国家一类新药',
      },
      {
        value: '07',
        label: '集成电路布图设计',
      },
      {
        value: '08',
        label: '软件著作权',
      },
      {
        value: '09',
        label: '国家实用新型专利',
      },
      {
        value: '10',
        label: '外观设计专利',
      },
    ];
    const trickName = ref<string>(''); // 初始值为空字符串
    const options4 = [
      {
        value: '01',
        label: '新产品',
      },
      {
        value: '02',
        label: '新技术应用',
      },
      {
        value: '03',
        label: '新装置/设备',
      },
      {
        value: '04',
        label: '样品/样机',
      },
    ];
    const relatedRD = ref<string>(''); // 初始值为空字符串
    const relatedIP = ref<string>(''); // 初始值为空字符串
    const relatedPS = ref<string>(''); // 初始值为空字符串
    return {
      t$: useI18n().t,
      isCollapse,
      toggleCollapse,
      handleSelect,
      activeIndex,
      resultName,
      options,
      sdate,
      edate,
      minDate,
      maxDate,
      options1,
      projectName,
      ipName,
      options2,
      options3,
      trickName,
      options4,
      relatedRD,
      relatedIP,
      relatedPS,
    };
  },
});
