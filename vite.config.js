import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  plugins: [
    {
      name: 'copy-model-files',
      writeBundle() {
        // Copy model files to dist
        const modelDir = 'my-pose-model'
        const distModelDir = join('dist', modelDir)
        
        try {
          mkdirSync(distModelDir, { recursive: true })
          copyFileSync(join(modelDir, 'model.json'), join(distModelDir, 'model.json'))
          copyFileSync(join(modelDir, 'weights.bin'), join(distModelDir, 'weights.bin'))
          copyFileSync(join(modelDir, 'metadata.json'), join(distModelDir, 'metadata.json'))
          console.log('✅ Model files copied to dist/')
        } catch (error) {
          console.error('❌ Error copying model files:', error)
        }
      }
    }
  ]
})

