// specific config for gh pages since the path prefix is needed
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/boilerplate_vite/",
  test: {
    // ...
  },
});
