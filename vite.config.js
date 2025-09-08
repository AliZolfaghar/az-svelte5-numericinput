import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es'] // فقط ES Module کافی هست
    },
    rollupOptions: {
      external: ['svelte']
    }
  }
})
