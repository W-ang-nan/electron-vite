import { fileURLToPath, URL } from "node:url";

import { defineConfig, externalizeDepsPlugin } from 'electron-vite'


import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        // "@": resolve("src/renderer/src"),
      "@": fileURLToPath(new URL("/electron-vite/src/renderer/src", import.meta.url)),
        // '@': path.resolve(__dirname, 'src/renderer/src'),
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
        ],
      })
    ],
  }
})
