import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set to root
  server: {
    open: true // Opens in default browser instead of Lovable
  }
})