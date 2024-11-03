import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/e-plantShopping/", // Updated to match your repository name
  plugins: [react()],
});