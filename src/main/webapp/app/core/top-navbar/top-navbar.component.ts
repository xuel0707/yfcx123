import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { HomeFilled, Edit, CopyDocument, DataBoard, Coin, Files, Service, ReadingLamp, Operation } from '@element-plus/icons-vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'TopNavbar',
  components: {
    HomeFilled: HomeFilled,
    Edit: Edit,
    CopyDocument: CopyDocument,
    DataBoard: DataBoard,
    Coin: Coin,
    Files: Files,
    Service: Service,
    ReadingLamp: ReadingLamp,
    Operation: Operation,
  },
  emits: ['active-index-change'], // 声明自定义事件
  setup(props, { emit }) {
    // 响应式的activeIndex
    const activeIndex = ref('1'); // 默认选中第一个

    // 语言国际化
    const t$ = useI18n().t;

    // 处理选中事件
    const handleSelect = (index: string) => {
      activeIndex.value = index; // 更新选中的索引
      emit('active-index-change', index);
    };

    return {
      t$: useI18n().t,
      activeIndex,
      handleSelect, // 返回handleSelect方法
    };
  },
});
