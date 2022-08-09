import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// conditional config: https://vitejs.dev/config/#conditional-config
export default defineConfig(({ command, mode, ssrBuild }) => {
  const baseConfig =  {
    plugins: [react()],
    test: {
      // ...
    }
  };
  
  if (mode === 'ghpages') {
    return {...baseConfig, base: "/boilerplate_vite/" };
  }
  
  return baseConfig;
});
