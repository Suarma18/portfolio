import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['episode-resolved-sanded.ngrok-free.dev'],
  },
  preview: {
    allowedHosts: ['episode-resolved-sanded.ngrok-free.dev'],
  },
  build: {
    assetsInlineLimit: (filePath) => (filePath.endsWith('.svg') ? true : undefined),
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
  },
});
