import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import SvgLoader from 'vite-svg-loader'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs'
  },
  plugins: [
    vue(),
    SvgLoader(),
    ElementPlus({}),
  ],
})
