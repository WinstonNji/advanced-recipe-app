import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/advanced-recipe-app/'  // Replace with your actual repo name
});
