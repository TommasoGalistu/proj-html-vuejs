import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

// Importa FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Aggiungi le icone che vuoi usare nella libreria
library.add(faArrowDown, faAngleDown);

const app = createApp(App);

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa il router
app.use(router);

// Monta l'app
app.mount('#app');