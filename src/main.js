import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

library.add(faChevronDown, faCartShopping, faCircleUser, faMagnifyingGlass, faArrowRightLong, faRulerCombined, faGlobe, faBook, faFileLines, faUser, faCalendar, faEye);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
