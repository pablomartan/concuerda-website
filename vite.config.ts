import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    build: {
      outDir: "build",
    },
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/concuerda-website/";
  }

  return config;
});
