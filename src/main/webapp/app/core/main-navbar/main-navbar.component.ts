import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Search, Refresh } from '@element-plus/icons-vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Main',
  components: {
    Search: Search,
    Refresh: Refresh,
  },

  setup() {
    const sdate = ref<string>(''); // 初始值为空字符串
    const edate = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期

    return {
      sdate,
      edate,
      minDate,
      maxDate,
      t$: useI18n().t,
    };
  },
});
