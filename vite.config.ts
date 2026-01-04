import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  // Базовый путь для GitHub Pages
  base: '/intensive/', 
  
  plugins: [react()],
  resolve: {
    alias: {
      // Это более надежный способ указания пути
      "@": resolve(__dirname, "./src"),
    },
  },
  // Если ошибка повторится, мы попробуем еще более простой вариант
})
