import { type ComputedRef, defineComponent, inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import TopNavbar from '@/core/top-navbar/top-navbar.vue';
import MainNavbar from '@/core/main-navbar/main-navbar.vue';
import ToDo from '@/core/todo/todo.vue';
import BasicInfo from '@/core/basicinfo/basicinfo.vue';
import Project from '@/core/project/project.vue';
import Costs from '@/core/costs/costs.vue';
import Results from '@/core/results/results.vue';
import Hightech from '@/core/hightech/hightech.vue';
import Manage from '@/core/manage/manage.vue';
import Export from '@/core/export/export.vue';
import type LoginService from '@/account/login.service';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Home',
  components: {
    ribbon: Ribbon,
    'jhi-navbar': JhiNavbar,
    'top-navbar': TopNavbar,
    'main-navbar': MainNavbar,
    'todo-bar': ToDo,
    'basicinfo-bar': BasicInfo,
    'project-bar': Project,
    'costs-bar': Costs,
    'results-bar': Results,
    'hightech-bar': Hightech,
    'export-bar': Export,
    'manage-bar': Manage,
  },
  setup() {
    const loginService = inject<LoginService>('loginService');

    const authenticated = inject<ComputedRef<boolean>>('authenticated');
    const username = inject<ComputedRef<string>>('currentUsername');

    const currentIndex = ref('1');

    const openLogin = () => {
      loginService.openLogin();
    };

    // 处理子组件传递的 activeIndex
    const handleActiveIndexChange = (index: string) => {
      currentIndex.value = index;
    };

    return {
      authenticated,
      username,
      openLogin,
      t$: useI18n().t,
      handleActiveIndexChange,
      currentIndex,
    };
  },
});
