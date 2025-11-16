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
        allowedHosts: ["finalproject-8-39n0.onrender.com"]
      }
    }
  }

})
