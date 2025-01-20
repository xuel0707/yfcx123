import { type ComputedRef, defineComponent, inject } from 'vue';
import { useI18n } from 'vue-i18n';


export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Main',
  components: {

  },

  setup() {

    return {

      t$: useI18n().t,
    };
  },
});
