import { type ComputedRef, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import { ElDatePicker } from 'element-plus';

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
import zhCn from 'element-plus/dist/locale/zh-cn';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Hightech',
  components: {
    ribbon: Ribbon,
  },

  setup() {
    const isCollapse = ref(false);
    const activeIndex = ref('1');

    const toggleCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };

    const handleSelect = (index: string) => {
      activeIndex.value = index;
    };
    const highQualityServiceId = ref<string>(''); // 初始值为空字符串
    const highQualityServiceName = ref<string>(''); // 初始值为空字符串
    const year = ref<string>(''); // 初始值为空字符串

    const productName = ref<string>(''); // 初始值为空字符串
    const credentialNo = ref<string>(''); // 初始值为空字符串
    const clientName = ref<string>(''); // 初始值为空字符串

    const sdate = ref<string>(''); // 初始值为空字符串
    const edate = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期
    const serviceName = ref<string>(''); // 初始值为空字符串

    return {
      t$: useI18n().t,
      isCollapse,
      toggleCollapse,
      handleSelect,
      activeIndex,
      highQualityServiceId,
      highQualityServiceName,
      year,
      locale: zhCn,
      productName,
      credentialNo,
      clientName,
      sdate,
      edate,
      minDate,
      maxDate,
      serviceName,
    };
  },
});
