import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    middlewareMode: true,
    strictPort: true,
    cors: true,
    https: false,
    port: 3000,
    host: 'localhost',
    open: true,
    proxy: {},
    watch: {
      usePolling: true,
      interval: 1000,
    },
    fs: {
      strict: true,
      allow: ['*.js', '*.html', '*.css'],
      deny: ['*.json', '*.txt'],
    },
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
