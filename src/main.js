import { createApp } from 'vue';
import App from './App.vue';
// Importa il router
import { router } from './router';

// Importa FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faAngleDown, faChartPie, faUsers, faChartSimple, faBagShopping, faUserGroup, faBars, faPhone, faEnvelope, faLocationDot, faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa il CSS di FontAwesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Disabilita l'inclusione automatica del CSS

// Aggiungi le icone che vuoi usare nella libreria
library.add(faArrowDown, faAngleDown, faChartPie, faUsers, faChartSimple, faBagShopping, faUserGroup, faBars, faPhone, faEnvelope, faLocationDot, faClock );

const app = createApp(App);

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa il router
app.use(router);

// Monta l'app
app.mount('#app');