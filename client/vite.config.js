import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // Make sure this matches your server's static file directory
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  base: '/', // Adjust if needed
});
