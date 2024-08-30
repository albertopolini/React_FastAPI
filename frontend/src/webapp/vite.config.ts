import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true, // utile se sei su WSL o Docker
    },
  },
  preview: {
      host: true,
      port: 3000
      
  },
  
})
