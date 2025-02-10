import { type ComputedRef, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import { ElMessageBox } from 'element-plus';

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
  name: 'Manage',
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

    const account = ref<string>(''); // 初始值为空字符串
    const name = ref<string>(''); // 初始值为空字符串
    const mobilePhone = ref<string>(''); // 初始值为空字符串
    const options = [
      {
        value: '01',
        label: '全部',
      },
      {
        value: '02',
        label: '已正常使用',
      },
      {
        value: '03',
        label: '已冻结',
      },
    ];
    const table_2 = [
      { roleName: '企业角色', roleCode: 'unit_role', remark: '企业角色' },
      { roleName: '企业管理员', roleCode: 'unit_admin', remark: '企业管理员' },
      { roleName: '企业领导', roleCode: 'unit_leader', remark: '企业领导' },
      { roleName: '研发部门经理', roleCode: 'dept_manager', remark: '研发部门经理' },
      { roleName: '研发项目负责人', roleCode: 'pro_leader', remark: '研发项目负责人' },
      { roleName: '普通研发人员', roleCode: 'common_person', remark: '普通研发人员' },
      { roleName: '科研财务助理', roleCode: 'fin_assistant', remark: '科研财务助理' },
      { roleName: '项目辅助人员', roleCode: 'pro_support', remark: '项目辅助人员' },
      { roleName: '人力资源相关人员', roleCode: 'others', remark: '人力资源相关人员' },
    ];
    // 表格操作方法
    const handleEdit = (row: any) => {
      console.log('编辑角色：', row);
      // 这里可以增加跳转到角色编辑页面的逻辑，例如：
      // this.$router.push({ name: 'EditRole', params: { roleId: row.roleCode } });
      // 或者弹出一个编辑对话框，把 row 数据传递进去
    };

    const handleDelete = (row: any) => {
      ElMessageBox.confirm('此操作将永久删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          // 处理确认删除逻辑
        })
        .catch(() => {
          // 处理取消删除逻辑
        });
    };

    const handleAuthorize = (row: any) => {
      console.log('授权角色：', row);
      // 这里可以增加跳转到菜单授权页面的逻辑，例如：
      // this.$router.push({ name: 'MenuAuthorize', params: { roleId: row.roleCode } });
      // 或者弹出一个授权对话框，把 row 数据传递进去
    };
    return {
      t$: useI18n().t,
      isCollapse,
      toggleCollapse,
      handleSelect,
      activeIndex,
      account,
      name,
      mobilePhone,
      options,
      table_2,
      handleEdit,
      handleDelete,
      handleAuthorize,
    };
  },
});
