import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  test: {
    include: ['src/**/*.test.ts'], // Example: Only include .test.ts files
  },
})
