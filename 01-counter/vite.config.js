import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSvgIcons from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [react(), viteSvgIcons()],
});
