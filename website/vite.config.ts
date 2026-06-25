import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Repo is served at https://ayush7614.github.io/aegis-mind/
export default defineConfig({
  base: "/aegis-mind/",
  plugins: [react(), tailwindcss()],
});
