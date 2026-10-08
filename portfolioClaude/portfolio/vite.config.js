import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' gera caminhos relativos: o mesmo build funciona na raiz de um
// domínio (Vercel, domínio próprio) e em subpasta (GitHub Pages /nome-do-repo/).
export default defineConfig({
    base: './',
    plugins: [react()],
})
