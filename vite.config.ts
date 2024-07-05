import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-ignore
  test: {
    include: ['src/**/*.test.ts'], // Example: Only include .test.ts files
  },
})
