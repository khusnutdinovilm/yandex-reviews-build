import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primeicons/primeicons.css";

import App from "./App.vue";
import "./styles/app.scss";
import { router } from "./router";
import { AuraGreen } from "./providers/theme";
import { registerErrorHandler } from "./providers/error-handler";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: AuraGreen,
    options: {
      darkModeSelector: ".dark",
    },
  },
});

app.use(ToastService);

registerErrorHandler(app);

app.use(createPinia());

app.use(router);

app.mount("#app");
