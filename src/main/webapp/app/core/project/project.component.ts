import { type ComputedRef, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Project',
  components: {
    ribbon: Ribbon,
  },

  setup() {
    const projectName = ref('');
    const options = [
      {
        value: 'qita',
        label: '其他项目',
      },
      {
        value: 'zhengfu',
        label: '政府部门科技项目',
      },
      {
        value: 'weituo',
        label: '其他企业委托研发',
      },
      {
        value: 'zishe',
        label: '本企业自设项目',
      },
      {
        value: 'jingwai',
        label: '境外项目',
      },
    ];
    const options1 = [
      {
        value: 'lixiang',
        label: '立项',
      },
      {
        value: 'shishi',
        label: '实施',
      },
      {
        value: 'zhongzhi',
        label: '中止',
      },
      {
        value: 'jieti',
        label: '结题',
      },
    ];
    const projectLeader = ref('');
    const projectManager = ref('');
    const developmentManager = ref('');
    const projectBudgetMin = ref('');
    const projectBudgetMax = ref('');
    const s1date = ref<string>(''); // 初始值为空字符串
    const s2date = ref<string>(''); // 初始值为空字符串
    const e1date = ref<string>(''); // 初始值为空字符串
    const e2date = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期

    return {
      t$: useI18n().t,
      projectName,
      options,
      options1,
      projectLeader,
      projectManager,
      developmentManager,
      projectBudgetMin,
      projectBudgetMax,
      s1date,
      s2date,
      e1date,
      e2date,
      minDate,
      maxDate,
    };
  },
});
