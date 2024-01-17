import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite"


export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
    imports: [
      "vue",
      'vitest',
      // could add 'vue-router' or 'vitest', whatever else you need.
    ]
   
  }),],
  
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
