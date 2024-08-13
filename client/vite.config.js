import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Port for the Vite development server
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API requests to your Express server
    },
  },
  build: {
    outDir: '../client/dist', // Directory to output build files
    emptyOutDir: true, // Clear outDir before each build
  },
});
