import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  
  if (command === 'serve') {
    // ✔ Only for local development
    return {
      plugins: [react()],
      server: {
        host: "0.0.0.0",
        port: 5000,
        allowedHosts: ["finalproject-7-4xqc.onrender.com"]
      }
    }
  }

  // ✔ Production build (Render uses this)
  return {
    plugins: [react()]
  }
})
