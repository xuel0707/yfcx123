import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import { Location, Menu as IconMenu, Fold, Expand, Present, Promotion, Finished } from '@element-plus/icons-vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Todo',
  components: {
    ribbon: Ribbon,
    Location: Location,
    IconMenu: IconMenu,
    Fold: Fold,
    Expand: Expand,
    Present: Present,
    Promotion: Promotion,
    Finished: Finished,
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

    const invokePerson = ref<string>(''); // 初始值为空字符串
    const sdate = ref<string>(''); // 初始值为空字符串
    const edate = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期

    return {
      t$: useI18n().t,
      isCollapse,
      toggleCollapse,
      handleSelect,
      activeIndex,
      invokePerson,
      sdate,
      edate,
      minDate,
      maxDate,
    };
  },
});
