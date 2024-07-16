
import { createApp } from 'vue';
// importo la pagina
import App from './App.vue';

// importo router per la gestione dei link
import { router } from './router';



const app = createApp(App);
// collego il router per i link
app.use(router);
// monto l'app
app.mount('#app');