import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compress from 'vite-plugin-compression'; // enable compression to optimize assets

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compress()],
  server: {
    port: 3000, // Update default port to 3000
    open: true, // Open the browser on server start
  },
});
