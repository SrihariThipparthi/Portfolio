import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this line - should match your repository name
  root: './',  // Points to the root directory where index.html is located
  build: {
    outDir: 'dist'
  }
});
