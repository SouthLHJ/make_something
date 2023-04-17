import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@container',
        replacement: resolve(__dirname, 'src/container'),
      },
      {
        find: '@lib',
        replacement: resolve(__dirname, 'src/lib'),
      },
    ],
  },
  plugins: [react(),tsconfigPaths()],
})
