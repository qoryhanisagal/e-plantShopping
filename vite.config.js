import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/e-plantShopping", // Ensure trailing slash is present
  plugins: [react()],
});