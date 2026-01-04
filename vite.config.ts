import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  
  // Базовый путь для GitHub Pages
  base: '/intensive/',
  
  resolve: {
    alias: {
      // Заменили __dirname на process.cwd() для совместимости с GitHub Actions
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
}));
