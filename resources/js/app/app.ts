import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import ToastService from "primevue/toastservice";
import "primeicons/primeicons.css";

import App from "./App.vue";
import "./styles/app.scss";
import { router } from "./router";

const app = createApp(App);

const AuraGreen = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{green.50}",
      100: "{green.100}",
      200: "{green.200}",
      300: "{green.300}",
      400: "{green.400}",
      500: "{green.500}",
      600: "{green.600}",
      700: "{green.700}",
      800: "{green.800}",
      900: "{green.900}",
      950: "{green.950}",
    },
  },
});

app
  .use(createPinia())
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: AuraGreen,
      options: {
        darkModeSelector: ".dark",
      },
    },
  })
  .use(ToastService)
  .mount("#app");
