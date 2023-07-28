import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         "colorPrimary": "#f79000", // 全局主色
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  resolve: {
    // 别名
    alias: {
      "@": resolve(__dirname, "src"),
      "*": resolve(__dirname, "src/typings/*"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
