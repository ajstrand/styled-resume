import { defineConfig } from 'vite'
import path from 'node:path'
import preact from '@preact/preset-vite'
import { ecsstatic } from '@acab/ecsstatic/vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/preact/compat'),
      'react-dom': path.resolve(__dirname, './node_modules/preact/compat'),
      'react-dom/test-utils': path.resolve(
        __dirname,
        './node_modules/preact/test-utils'
      )
      //"react/jsx-runtime": "preact/jsx-runtime"
    }
  },
  plugins: [ecsstatic(), preact()],
  build: {
    minify: false
  }
})
