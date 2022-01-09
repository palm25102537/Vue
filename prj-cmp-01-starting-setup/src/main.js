import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './component/UI/BaseCard.vue'
import BaseButton from './component/UI/BaseButton'
const app = createApp(App)

app.component('base-card',BaseCard)
app.component('base-button',BaseButton)

app.mount('#app');
