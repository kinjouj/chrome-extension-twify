import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig((opt) => {
  return {
    root: 'src',
    build: {
      outDir: '../build',
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/app.ts'),
        },
        output: {
          entryFileNames: 'background.js',
        },
      },
    },
  }
});
