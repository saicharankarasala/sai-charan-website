import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [],
        babelrc: true,
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    force: true
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-scroll',
      'react-icons',
      'react-vertical-timeline-component',
    ],
    exclude: [
      '@vercel/analytics',
      '@vercel/speed-insights',
      'framer-motion'
    ]
  },
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/api'
    }
  }
}) 