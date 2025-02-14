import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Points to the root directory where index.html is located
  build: {
    outDir: 'dist'
  }
});
