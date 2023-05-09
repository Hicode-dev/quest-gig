import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  import react from 'react';

export default {
  build: {
    rollupOptions: {
      external: [
        'react-icons/bs',
      ],
    },
  },
};

})
