import { createApp } from 'vue';
import App from './App.vue';
// Importa il router
import { router } from './router';

// Importa FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faAngleDown, faChartPie, faUsers as faUserSolid, faChartSimple, faBagShopping, faUserGroup, faBars, faPhone, faEnvelope, faLocationDot, faClock as faClockSolid, faHourglassEnd, faLock, faAppleWhole, faUserTie, faFolder, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {faUser as faUserRegular , faClock as faClockRegular} from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa il CSS di FontAwesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Disabilita l'inclusione automatica del CSS

// Aggiungi le icone che vuoi usare nella libreria
library.add(faArrowDown, faAngleDown, faChartPie, faUserSolid, faChartSimple, faBagShopping, faUserGroup, faBars, faPhone, faEnvelope, faLocationDot, faClockSolid, faHourglassEnd, faLock,  faAppleWhole, faUserTie, faUserRegular, faClockRegular, faFacebookF,faTwitter, faLinkedinIn, faFolder, faArrowRight );

const app = createApp(App);

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa il router
app.use(router);

// Monta l'app
app.mount('#app');