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
  name: 'Costs',
  components: {
    ribbon: Ribbon,
  },
  setup() {
    const isCollapse = ref(false);
    const activeIndex = ref('1-1-1');

    const toggleCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };

    const handleSelect = (index: string) => {
      activeIndex.value = index;
    };

    const sdate = ref<string>(''); // 初始值为空字符串
    const edate = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期
    const options = [
      {
        value: '01',
        label: '应发工资',
      },
      {
        value: '02',
        label: '奖金',
      },
      {
        value: '03',
        label: '公司承担社会保险',
      },
      {
        value: '04',
        label: '公积金',
      },
      {
        value: '05',
        label: '福利费',
      },
      {
        value: '06',
        label: '补充医疗保险费',
      },
      {
        value: '07',
        label: '补充养老保险费',
      },
    ];
    const projectName = ref<string>(''); // 初始值为空字符串
    const options1 = [
      {
        value: '00',
        label: '全部',
      },
      {
        value: '01',
        label: '燃料费',
      },
      {
        value: '02',
        label: '动力费',
      },
    ];

    const options2 = [
      {
        value: '00',
        label: '全部',
      },
      {
        value: '01',
        label: '境内合作研发单位研发费',
      },
      {
        value: '02',
        label: '境内其他合作、委托形式研发费',
      },
      {
        value: '03',
        label: '委托境内个人研发费',
      },
      {
        value: '04',
        label: '境外委托研发单位研发费',
      },
      {
        value: '05',
        label: '委托境外机构研发费',
      },
      {
        value: '06',
        label: '委托境外个人研发费',
      },
    ];
    const entrustedUnit = ref<string>(''); // 初始值为空字符串
    const options3 = [
      {
        value: '01',
        label: '合作研发',
      },
      {
        value: '02',
        label: '委托研发',
      },
    ];
    const summary = ref<string>(''); // 初始值为空字符串
    const options4 = [
      {
        value: '01',
        label: '工资薪金-应发工资',
      },
      {
        value: '02',
        label: '工资薪金-奖金',
      },
      {
        value: '03',
        label: '五险一金-公司承担社会保险',
      },
      {
        value: '04',
        label: '工资薪金-公积金',
      },
      {
        value: '05',
        label: '外聘研发人员的劳务费用',
      },
      {
        value: '06',
        label: '材料费',
      },
      {
        value: '07',
        label: '燃料费',
      },
      {
        value: '08',
        label: '动力费-燃动费',
      },
      {
        value: '09',
        label: '动力费-费用报销',
      },
      {
        value: '10',
        label: '用于中间试验和产品试制的模具、工艺装备开发及制造费',
      },
      {
        value: '11',
        label: '用于不构成固定资产的样品、样机及一般测试手段购置费',
      },
      {
        value: '12',
        label: '用于试制产品的检验费',
      },
      {
        value: '13',
        label: '用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用',
      },
      {
        value: '14',
        label: '通过经营租赁方式租入的用于研发活动的固定资产租赁费',
      },
      {
        value: '15',
        label: '长期待摊费用-长期费用摊销',
      },
      {
        value: '16',
        label: '折旧费用-仪器',
      },
      {
        value: '17',
        label: '折旧费用-设备',
      },
      {
        value: '18',
        label: '折旧费用-运输设备',
      },
      {
        value: '19',
        label: '折旧费用-房屋及建筑物',
      },
      {
        value: '20',
        label: '折旧费用-其他设备',
      },
      {
        value: '21',
        label: '用于研发活动的软件的摊销费用',
      },
      {
        value: '22',
        label: '用于研发活动的专利权的摊销费用',
      },
      {
        value: '23',
        label: '非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用',
      },
      {
        value: '24',
        label: '其他无形资产摊销',
      },
      {
        value: '25',
        label: '设计费用',
      },
      {
        value: '26',
        label: '装备调试费',
      },
      {
        value: '27',
        label: '试验费用-新药研制的临床试验费',
      },
      {
        value: '28',
        label: '试验费用-勘探开发技术的现场试验费',
      },
      {
        value: '29',
        label: '技术图书资料费',
      },
      {
        value: '30',
        label: '资料翻译费',
      },
      {
        value: '31',
        label: '出版文献费',
      },
      {
        value: '32',
        label: '研发成果的检索、论证、评审、鉴定、验收费用',
      },
      {
        value: '33',
        label: '研发成果验收及知识产权费',
      },
      {
        value: '34',
        label: '研发人员培训费',
      },
      {
        value: '35',
        label: '福利费-工资薪金',
      },
      {
        value: '36',
        label: '福利费-费用报销',
      },
      {
        value: '37',
        label: '补充医疗保险费',
      },
      {
        value: '38',
        label: '补充养老保险费',
      },
      {
        value: '39',
        label: '会议费',
      },
      {
        value: '40',
        label: '差旅费',
      },
      {
        value: '41',
        label: '办公费',
      },
      {
        value: '42',
        label: '车辆使用费',
      },
      {
        value: '43',
        label: '专家咨询费',
      },
      {
        value: '44',
        label: '高科技研发保险费',
      },
      {
        value: '45',
        label: '通讯费',
      },
    ];
    const projectNo = ref<string>(''); // 初始值为空字符串
    const options5 = [
      {
        value: '01',
        label: '费用化',
      },
      {
        value: '02',
        label: '资本化',
      },
    ];
    const options6 = [
      {
        value: '01',
        label: '固定资产',
      },
      {
        value: '02',
        label: '领料',
      },
      {
        value: '03',
        label: '费用报销',
      },
      {
        value: '04',
        label: '无形资产',
      },
      {
        value: '05',
        label: '工资薪金',
      },
      {
        value: '06',
        label: '燃动费',
      },
      {
        value: '07',
        label: '委外费用',
      },
    ];
    const options7 = [
      {
        value: '01',
        label: '人员人工费用',
      },
      {
        value: '02',
        label: '直接投入费用',
      },
      {
        value: '03',
        label: '折旧费用与长期待摊费用',
      },
      {
        value: '04',
        label: '无形资产摊销费用',
      },
      {
        value: '05',
        label: '设计费用',
      },
      {
        value: '06',
        label: '装备调试费用与试验费用',
      },
      {
        value: '07',
        label: '其他费用',
      },
    ];
    const options8 = [
      {
        value: '01',
        label: '直接从事研发活动人员工资薪金',
      },
      {
        value: '02',
        label: '直接从事研发活动人员五险一金',
      },
      {
        value: '03',
        label: '外聘研发人员的劳务费用',
      },
      {
        value: '04',
        label: '研发活动直接消耗材料费用',
      },
      {
        value: '05',
        label: '研发活动直接消耗燃料费用',
      },
      {
        value: '06',
        label: '研发活动直接消耗动力费用',
      },
      {
        value: '07',
        label: '用于中间试验和产品试制的模具、工艺装备开发及制造费',
      },
      {
        value: '08',
        label: '用于不构成资产的样品、样机及一般测试手段购置费',
      },
      {
        value: '09',
        label: '用于试制产品的检验费',
      },
      {
        value: '10',
        label: '用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用',
      },
      {
        value: '11',
        label: '通过经营租赁方式租入的用于研发活动的仪器、设备租赁费',
      },
      {
        value: '12',
        label: '用于研发活动的仪器的折旧费',
      },
      {
        value: '13',
        label: '用于研发活动的设备的折旧费',
      },
      {
        value: '14',
        label: '用于研发活动的软件的摊销费',
      },
      {
        value: '15',
        label: '用于研发活动的专利权的摊销费',
      },
      {
        value: '16',
        label: '用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费',
      },
      {
        value: '17',
        label: '新产品设计费',
      },
      {
        value: '18',
        label: '新工艺规程制定费',
      },
      {
        value: '19',
        label: '新药研制的临床试验费',
      },
      {
        value: '20',
        label: '勘探开发技术的现场试验费',
      },
      {
        value: '21',
        label: '技术图书资料费、资料翻译费、专家咨询费、高新科技研发保险费',
      },
      {
        value: '22',
        label: '研发成果的检索、分析、评议、论证、鉴定、评审、评估、验收费用',
      },
      {
        value: '23',
        label: '知识产权的申请费、注册费、代理费',
      },
      {
        value: '24',
        label: '职工福利费、补充养老保险费、补充医疗保险费',
      },
      {
        value: '25',
        label: '差旅费、会议费',
      },
      {
        value: '26',
        label: '委托境内机构或个人进行研发活动所发生的费用',
      },
      {
        value: '27',
        label: '委托境外机构进行研发活动发生的费用',
      },
      {
        value: '28',
        label: '委托境外个人进行研发活动发生的费用',
      },
    ];
    const documentNo = ref<string>(''); // 初始值为空字符串
    const batchNo = ref<string>(''); // 初始值为空字符串
    const options9 = [
      {
        value: '01',
        label: '凭证登记',
      },
      {
        value: '02',
        label: '审批中',
      },
      {
        value: '03',
        label: '完成',
      },
      {
        value: '04',
        label: '不同意',
      },
    ];
    const productName = ref<string>(''); // 初始值为空字符串
    const materialName = ref<string>(''); // 初始值为空字符串
    const options10 = [
      {
        value: '01',
        label: '应发工资',
      },
      {
        value: '02',
        label: '奖金',
      },
      {
        value: '03',
        label: '公司承担社会保险',
      },
      {
        value: '04',
        label: '公积金',
      },
      {
        value: '05',
        label: '福利费',
      },
      {
        value: '06',
        label: '补充医疗保险',
      },
      {
        value: '07',
        label: '补充养老保险',
      },
    ];
    const s1date = ref<string>(''); // 初始值为空字符串
    const e1date = ref<string>(''); // 初始值为空字符串
    return {
      t$: useI18n().t,
      isCollapse,
      toggleCollapse,
      handleSelect,
      activeIndex,
      sdate,
      edate,
      minDate,
      maxDate,
      options,
      projectName,
      options1,
      options2,
      entrustedUnit,
      options3,
      summary,
      options4,
      projectNo,
      options5,
      options6,
      options7,
      options8,
      documentNo,
      batchNo,
      options9,
      productName,
      materialName,
      options10,
      s1date,
      e1date,
    };
  },
});
