import { ToastEventBus } from "primevue";

export const notify = {
  error: (detail: string, summary = "Ошибка") =>
    ToastEventBus.emit("add", { severity: "error", summary, detail, life: 4000 }),
  success: (detail: string, summary = "Готово") =>
    ToastEventBus.emit("add", { severity: "success", summary, detail, life: 3000 }),
};
