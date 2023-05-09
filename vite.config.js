import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    build: {
    rollupOptions: {
      external: ['react','react-dom','react-icons'] // Add 'react-icons' to the external array
    },
   
  },
 // Other config options...
 resolve: {
  alias: {
    'react-icons': path.resolve(__dirname, 'node_modules/react-icons'),
  }
}
})
