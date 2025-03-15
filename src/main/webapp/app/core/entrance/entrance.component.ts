import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import { useRouter } from 'vue-router';

// 从 @element-plus/icons-vue 包中按需导入
import { User, Lock } from '@element-plus/icons-vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Entrance',
  components: {
    ribbon: Ribbon,
  },
  setup() {
    const router = useRouter();

    return {
      t$: useI18n().t,
    };
  },
});
