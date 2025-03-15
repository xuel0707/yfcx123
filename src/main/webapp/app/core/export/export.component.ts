import { type ComputedRef, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Export',
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

    const syear = ref<string>(''); // 初始值为空字符串
    const eyear = ref<string>(''); // 初始值为空字符串
    const options = [
      {
        value: '01',
        label: '立项',
      },
      {
        value: '02',
        label: '实施',
      },
      {
        value: '03',
        label: '变更',
      },
      {
        value: '04',
        label: '中止',
      },
    ];
    const tableData_2_2 = [
      {
        metricName: '一、研究开发人员情况',
        measurementUnit: '—',
        amount: '—',
        metricName2: '六、研究开发产出及相关情况',
        measurementUnit2: '—',
        amount2: '—',
      },
      {
        metricName: '研发开发人员合计',
        measurementUnit: '人',
        amount: '18',
        metricName2: '(一)专利情况',
        measurementUnit2: '—',
        amount2: '—',
      },
      {
        metricName: '其中：管理和服务人员',
        measurementUnit: '人',
        amount: '9',
        metricName2: '当年专利申请数',
        measurementUnit2: '件',
        amount2: '0',
      },
      { metricName: '其中：女性', measurementUnit: '人', amount: '0', metricName2: '其中：发明专利', measurementUnit2: '件', amount2: '0' },
      {
        metricName: '其中：全职人员',
        measurementUnit: '人',
        amount: '18',
        metricName2: '期末有效发明专利数',
        measurementUnit2: '件',
        amount2: '6',
      },
      {
        metricName: '其中：本科毕业及以上人员',
        measurementUnit: '人',
        amount: '1',
        metricName2: '其中：已被实施',
        measurementUnit2: '件',
        amount2: '6',
      },
      {
        metricName: '其中：外聘人员',
        measurementUnit: '人',
        amount: '0',
        metricName2: '专利所有权转让及许可数',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '二、研究开发费用情况',
        measurementUnit: '—',
        amount: '—',
        metricName2: '专利所有权转让及许可收入',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '研究开发费用合计',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '(二)新产品情况',
        measurementUnit2: '—',
        amount2: '—',
      },
      {
        metricName: '1.人员人工费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '*新产品销售收入',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '2.直接投入费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '*其中：出口',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '3.折旧费用与长期待摊费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '(三)其他情况',
        measurementUnit2: '—',
        amount2: '—',
      },
      {
        metricName: '4.无形资产摊销费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '*期末拥有注册商标',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '5.设计费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '*发表科技论文',
        measurementUnit2: '篇',
        amount2: '0',
      },
      {
        metricName: '6.装备调试费用与试验费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '拥有软件著作权',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '7.委托外部研究开发费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '其中：当年获得软件著作权',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '①委托境内研究机构',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '其拥有集成电路布图',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '②委托境内高等学校',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '其中：当年获得集成电路布图',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '③委托境内企业',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '拥有植物新品种',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '④委托境外机构',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '其中：当年获得植物新品种',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '8.其他费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '拥有国家一类新药品种',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '三、研究开发资产情况',
        measurementUnit: '—',
        amount: '—',
        metricName2: '其中：当年获得国家一类新药证书',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '当年形成用于研究开发的固定资产',
        measurementUnit: '千元',
        amount: '10',
        metricName2: '拥有国家一级中药保护品种',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '其中：仪器和设备',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '其中：当年获得国家一级中药保护品种证书',
        measurementUnit2: '件',
        amount2: '0',
      },
      {
        metricName: '四、政府经费及相关政策落实情况',
        measurementUnit: '—',
        amount: '—',
        metricName2: '累计形成国际标准',
        measurementUnit2: '项',
        amount2: '0',
      },
      {
        metricName: '来自政府部门的研究开发经费',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '其中：当年形成国际标准',
        measurementUnit2: '项',
        amount2: '0',
      },
      {
        metricName: '研究开发费用加计扣除减免税',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '形成国家或行业标准',
        measurementUnit2: '项',
        amount2: '0',
      },
      {
        metricName: '高新技术企业减免税',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '其中：当年形成国家或行业标准',
        measurementUnit2: '项',
        amount2: '0',
      },
      {
        metricName: '五、企业办研究开发机构（境内）情况',
        measurementUnit: '—',
        amount: '—',
        metricName2: '当年获得国家科技奖励',
        measurementUnit2: '项',
        amount2: '0',
      },
      {
        metricName: '期末机构数',
        measurementUnit: '个',
        amount: '0',
        metricName2: '七、其他相关情况',
        measurementUnit2: '—',
        amount2: '—',
      },
      {
        metricName: '机构研究开发人员',
        measurementUnit: '人',
        amount: '18',
        metricName2: '(一)技术改造和技术获取情况',
        measurementUnit2: '—',
        amount2: '—',
      },
      {
        metricName: '其中：博士毕业',
        measurementUnit: '人',
        amount: '1',
        metricName2: '*技术改造经费支出',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '硕士毕业',
        measurementUnit: '人',
        amount: '0',
        metricName2: '*购买境内技术经费支出',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '机构研究开发费用',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '*引进境外技术经费支出',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '期末仪器和设备原价',
        measurementUnit: '千元',
        amount: '0',
        metricName2: '*引进境外技术的消化吸收经费支出',
        measurementUnit2: '千元',
        amount2: '0',
      },
      {
        metricName: '',
        measurementUnit: '',
        amount: '',
        metricName2: '(二)企业办研究开发机构（境外）情况',
        measurementUnit2: '—',
        amount2: '—',
      },
      {
        metricName: '',
        measurementUnit: '',
        amount: '',
        metricName2: '期末企业在境外设立的研究开发机构数',
        measurementUnit2: '千元',
        amount2: '0',
      },
    ];
    const sdate = ref<string>(''); // 初始值为空字符串
    const edate = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期
    const projectName = ref<string>(''); // 初始值为空字符串
    const options2 = [
      {
        value: '01',
        label: '立项',
      },
      {
        value: '02',
        label: '实施',
      },
      {
        value: '03',
        label: '结题',
      },
      {
        value: '04',
        label: '结题阶段',
      },
      {
        value: '05',
        label: '中止',
      },
    ];
    return {
      t$: useI18n().t,
      isCollapse,
      toggleCollapse,
      handleSelect,
      activeIndex,
      syear,
      eyear,
      options,
      tableData_2_2,
      sdate,
      edate,
      minDate,
      maxDate,
      projectName,
      options2,
    };
  },
});
