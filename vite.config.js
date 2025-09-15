import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/thanh-phat-portfolio/',
  plugins: [ react() ],
})