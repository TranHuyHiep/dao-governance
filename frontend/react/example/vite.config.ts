import inject from '@rollup/plugin-inject'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {...inject({Buffer: ['buffer/', 'Buffer'], process: 'process'}), enforce: 'post'}],
  define: {
    'process.env': {},
    'process': { env: {} }
  },
  optimizeDeps: {
    include: ['process'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
})
