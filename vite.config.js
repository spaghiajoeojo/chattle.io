/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import eslint from 'vite-plugin-eslint';
import manifest from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(manifest), eslint()],
});
