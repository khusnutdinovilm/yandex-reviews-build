import { notify } from "@/shared/lib/notify";
import { isAxiosError } from "axios";
import { type App } from "vue";

export const registerErrorHandler = (app: App) => {
  app.config.errorHandler = (err) => {
    if (isAxiosError(err)) return;

    notify.error(err instanceof Error ? err.message : "Непредвиденная ошибка");
    console.error(err);
  };
};
