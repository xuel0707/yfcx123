import { type ComputedRef, defineComponent, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import { HomeFilled, Edit, CopyDocument, DataBoard, Coin, Files, Service, ReadingLamp, Operation} from '@element-plus/icons-vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'TopNavbar',
  components: {
    'HomeFilled': HomeFilled,
    'Edit': Edit,
    'CopyDocument': CopyDocument,
    'DataBoard': DataBoard,
    'Coin': Coin,
    'Files': Files,
    'Service': Service,
    'ReadingLamp': ReadingLamp,
    'Operation': Operation,
  },

  setup() {

    return {

      t$: useI18n().t,
    };
  },
});
