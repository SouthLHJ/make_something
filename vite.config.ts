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
        replacement: resolve(__dirname, 'src/component'),
      },
      {
        find: '@container',
        replacement: resolve(__dirname, 'src/container'),
      },
      {
        find: '@lib',
        replacement: resolve(__dirname, 'src/lib'),
      },
      {
        find: '@path',
        replacement: resolve(__dirname, 'src/path'),
      },
    ],
  },
  plugins: [react(),tsconfigPaths()],
})
