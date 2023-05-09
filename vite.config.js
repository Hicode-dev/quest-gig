import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    build: {
    rollupOptions: {
      external: ['react','react-dom','react-icons'] // Add 'react-icons' to the external array
    },
   
  },

})
