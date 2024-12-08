import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const createConfig = (minify = true) =>
  defineConfig({
    plugins: [react()],
    build: {
      minify: minify,
      rollupOptions: {
        output: {
          dir: minify ? "dist/minified" : "dist/unminified",
        },
      },
    },
  });

export default ({ mode }) => {
  if (mode === "production-unminified") {
    return createConfig(false);
  }
  return createConfig(true);
};
