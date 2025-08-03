import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Tetap '/' untuk root domain (misalnya yourname.vercel.app)
  assetsInclude: ['**/*.glb'], // jika kamu menggunakan file 3D
});
