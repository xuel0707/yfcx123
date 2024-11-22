import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMapMarkerAlt,
  faEye,
  faThumbsUp,
  faComment,
  faArrowRight,
  faClock,
  faRandom,
  faChartLine,
  faTools,
  faComments,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import type { App } from 'vue';

export function initFontAwesome(app: App) {
  // 添加图标到库
  library.add(
    faMapMarkerAlt,
    faEye,
    faThumbsUp,
    faComment,
    faArrowRight,
    faClock,
    faRandom,
    faChartLine,
    faTools,
    faComments,
    faCheck
  );

  // 注册全局组件
  app.component('font-awesome-icon', FontAwesomeIcon);
} 