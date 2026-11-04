import react, { /* reactCompilerPreset */ } from '@vitejs/plugin-react';
// import babel from "@rolldown/plugin-babel";
// import reactCompiler from "babel-plugin-react-compiler";
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import svgr from 'vite-plugin-svgr'
import { resolve } from "node:path";
import dts from 'vite-plugin-dts'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["src/components"],
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/components/index.ts"),
      formats: ["es"],
      fileName: "index",
      cssFileName: "style"
    },
    rollupOptions: {
      external: (id) =>
        id === "react" ||
        id.startsWith("react/") ||
        id === "react-dom" ||
        id.startsWith("react-dom/")
    }
  }
})
