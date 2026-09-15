import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/js/app/styles/app.scss", "resources/js/app/app.ts"],
      refresh: true,
    }),
    vue(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "resources/js"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/shared/styles' as *;`,
      },
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    hmr: {
      host: "localhost",
    },
    watch: {
      usePolling: true,
    },
  },
});
