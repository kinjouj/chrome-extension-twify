import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig((opt) => {
  return {
    root: 'src',
    publicDir: "../public",
    build: {
      outDir: '../build',
      emptyOutDir: true,
      copyPublicDir: true,
      rollupOptions: {
        input: {
          background: resolve(__dirname, 'src/app.ts'),
        },
        output: {
          entryFileNames: 'background.js',
        },
      },
    },
  }
});
