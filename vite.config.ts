import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "", // empty string ensures correct relative paths
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
