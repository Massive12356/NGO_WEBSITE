import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ important for relative asset loading on Vercel
  build: {
    outDir: "dist", // default, but keep explicit for clarity
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
