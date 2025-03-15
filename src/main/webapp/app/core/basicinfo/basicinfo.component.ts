import { type ComputedRef, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import { pcaTextArr } from 'element-china-area-data';
import {
  Location,
  Menu as IconMenu,
  Fold,
  Expand,
  Present,
  Promotion,
  Finished,
  Delete,
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
  HomeFilled,
} from '@element-plus/icons-vue';
import type { UploadFile } from 'element-plus';
import { genFileId } from 'element-plus';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'BasicInfo',
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

    const companyName = ref('');
    const socialCreditCode = ref('');
    const entityLegalPerson = ref('');
    const detailedAddress = ref('');
    const companyContact = ref('');
    const mobileNumber = ref('');
    const selectedOptions = ref<any[]>([]); // 这里假设 selectedOptions 是一个数组

    const props1 = {
      checkStrictly: true,
    };

    const options = [
      {
        value: 'neizi',
        label: '内资企业',
        children: [
          {
            value: 'guoyou',
            label: '国有企业',
          },
          {
            value: 'jiti',
            label: '集体企业',
          },
          {
            value: 'gufenhezuo',
            label: '股份合作企业',
          },
          {
            value: 'lianying',
            label: '联营企业',
          },
          {
            value: 'youxianzeren',
            label: '有限责任公司',
          },
          {
            value: 'gufenyouxian',
            label: '股份有限公司',
          },
          {
            value: 'siying',
            label: '私有企业',
          },
          {
            value: 'qita',
            label: '其他企业',
          },
        ],
      },
      {
        value: 'gangaotai',
        label: '港澳台商投资企业',
        children: [
          {
            value: 'hezijingying',
            label: '合资经营企业（港或澳、台资）',
          },
          {
            value: 'hezuojingying',
            label: '合作经营企业（港或澳、台资）',
          },
          {
            value: 'duzijingying',
            label: '港澳台商独资企业',
          },
          {
            value: 'touzigufen',
            label: '港澳台商投资股份有限企业',
          },
        ],
      },
      {
        value: 'waishangtouzi',
        label: '外商投资企业',
        children: [
          {
            value: 'hezijingying',
            label: '中外合资经营企业',
          },
          {
            value: 'hezuojingying',
            label: '中外合作经营企业',
          },
          {
            value: 'waizi',
            label: '外资企业',
          },
          {
            value: 'touzigufen',
            label: '外商投资股份有限企业',
          },
        ],
      },
      {
        value: 'qita',
        label: '其他',
        children: [
          {
            value: 'qita',
            label: '其他企业',
          },
        ],
      },
    ];

    const options1 = [
      {
        value: 'nonglin',
        label: '农、林、牧、渔业',
      },
      {
        value: 'caikuang',
        label: '采矿业',
      },
      {
        value: 'zhizao',
        label: '制作业',
      },
      {
        value: 'dianli',
        label: '电力、热力、燃气及水生产和供应业',
      },
      {
        value: 'jianzhu',
        label: '建筑业',
      },
      {
        value: 'pifa',
        label: '批发和零售业',
      },
      {
        value: 'jiaotong',
        label: '交通运输、仓储和邮政业',
      },
      {
        value: 'zhusu',
        label: '住宿和餐饮业',
      },
      {
        value: 'xinxi',
        label: '信息传输、软件和信息技术服务业',
      },
      {
        value: 'zuling',
        label: '租赁和商务服务业',
      },
      {
        value: 'kexue',
        label: '科学研究和技术服务业',
      },
      {
        value: 'shuili',
        label: '水利、环境和公共设施管理业',
      },
      {
        value: 'jumin',
        label: '居民服务、修理和其他服务业',
      },
      {
        value: 'jiaoyu',
        label: '教育',
      },
      {
        value: 'weisheng',
        label: '卫生和社会工作',
      },
      {
        value: 'wenhua',
        label: '文化、体育和娱乐业',
      },
      {
        value: 'gonggongguanli',
        label: '公共管理、社会保障和社会组织',
      },
      {
        value: 'guoji',
        label: '国际组织',
      },
    ];

    const companyInfo = ref('');

    const dialogImageUrl = ref('');
    const dialogVisible = ref(false);
    const disabled = ref(false);

    const handleRemove = (file: UploadFile) => {
      console.log(file);
    };

    const handlePictureCardPreview = (file: UploadFile) => {
      dialogImageUrl.value = file.url!;
      dialogVisible.value = true;
    };

    const handleDownload = (file: UploadFile) => {
      console.log(file);
    };

    const upload = ref<UploadInstance>();

    const handleExceed: UploadProps['onExceed'] = files => {
      upload.value!.clearFiles();
      const file = files[0] as UploadRawFile;
      file.uid = genFileId();
      upload.value!.handleStart(file);
    };

    const submitUpload = () => {
      upload.value!.submit();
    };

    const departmentName = ref('');
    const departmentId = ref('');

    const employeeName = ref('');
    const employeeId = ref('');

    const options2 = [
      {
        value: 'gaoji',
        label: '高级职称',
      },
      {
        value: 'zhongji',
        label: '中级职称',
      },
      {
        value: 'chuji',
        label: '初级职称',
      },
      {
        value: 'gaojijigong',
        label: '高级技工',
      },
    ];

    const options3 = [
      {
        value: 'zhijieyanfa',
        label: '直接从事研发人员',
      },
      {
        value: 'yanfaguanl',
        label: '专门研发管理人员',
      },
      {
        value: 'jishufuwu',
        label: '直接技术服务人员',
      },
      {
        value: 'qita',
        label: '其他人员',
      },
    ];

    const jobPosition = ref('');

    const options4 = [
      {
        value: 'doctor',
        label: '博士',
      },
      {
        value: 'master',
        label: '硕士',
      },
      {
        value: 'bachelor',
        label: '本科',
      },
      {
        value: 'juniorCollegeAndBelow',
        label: '大专及以下',
      },
    ];

    const options5 = [
      {
        value: 'yes',
        label: '是',
      },
      {
        value: 'no',
        label: '否',
      },
    ];

    const options6 = [
      {
        value: 'yes',
        label: '是',
      },
      {
        value: 'no',
        label: '否',
      },
    ];

    const options7 = [
      {
        value: 'yes',
        label: '是',
      },
      {
        value: 'no',
        label: '否',
      },
    ];

    const options8 = [
      {
        value: 'yes',
        label: '是',
      },
      {
        value: 'no',
        label: '否',
      },
    ];

    const ruleName = ref('');
    const ruleId = ref('');
    const sdate = ref<string>(''); // 初始值为空字符串
    const edate = ref<string>(''); // 初始值为空字符串
    const minDate = '2020-01'; // 可选：限制最小可选日期
    const maxDate = '2030-12'; // 可选：限制最大可选日期

    const initYear = ref<string>(''); // 初始值为空字符串

    const materialName = ref('');
    const RDFixedAssetsName = ref('');
    const LongTermDeferredExpenseName = ref('');
    return {
      t$: useI18n().t,
      isCollapse,
      toggleCollapse,
      handleSelect,
      activeIndex,
      companyName,
      companyContact,
      socialCreditCode,
      mobileNumber,
      props1,
      options,
      entityLegalPerson,
      options1,
      pcaTextArr,
      selectedOptions,
      detailedAddress,
      companyInfo,
      dialogImageUrl,
      dialogVisible,
      disabled,
      handleRemove,
      handlePictureCardPreview,
      handleDownload,
      handleExceed,
      submitUpload,
      departmentName,
      departmentId,
      options2,
      employeeName,
      employeeId,
      options3,
      jobPosition,
      options4,
      options5,
      options6,
      options7,
      options8,
      ruleName,
      ruleId,
      sdate,
      edate,
      minDate,
      maxDate,
      initYear,
      materialName,
      RDFixedAssetsName,
      LongTermDeferredExpenseName,
    };
  },
});
