import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chunkSplitPlugin({
    strategy: 'single-vendor',
    customChunk: (args) => {
      // files into pages directory is export in single files
      let { file } = args;
      if (file.startsWith('src')) {
        file = file.substring(4);
        file = file.replace(/\.[^.$]+$/, '');
        return file;
      }
    }
  })],
});

