import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-icons/bs',
        'react-icons/ri',
      ],
    },
  },
})
