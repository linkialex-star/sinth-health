import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages publica este projeto no caminho /sinth-health/.
  base: "/sinth-health/",
  plugins: [react()],
});
