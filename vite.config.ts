import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const pathResolver = (importPath: string) => path.resolve(__dirname, importPath)

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    build: {
      target: 'es2015',
      outDir: 'build',
      minify: 'terser',
      cssMinify: true,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: '[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    resolve: {
      alias: {
        '@components': pathResolver('./src/components'),
        '@utils': pathResolver('./src/utils'),
        '@assets': pathResolver('./src/assets'),
        '@pages': pathResolver('./src/pages'),
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 3000,
    },
  }
})
