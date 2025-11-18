import { type UserConfig } from 'vite';
import { viteUtils } from './vite-utils';

export function getCommonViteConfig(): UserConfig {
  const rootPath: string = process.cwd();
  const alias: Record<string, string> = {
    '@': viteUtils.pathResolve('src'),
  };
  return {
    root: rootPath,
    resolve: {
      alias,
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
      },
    },
    build: {
      target: 'esnext',
      sourcemap: true,
      chunkSizeWarningLimit: 10000,
      cssCodeSplit: false,
      minify: false,
      rollupOptions: {
        external: [
          '@ssml-editor/base',
          '@ssml-editor/core',
          '@ssml-editor/modules',
          '@ssml-editor/utils',
          '@ssml-editor/vue',
          '@ssml-editor/editor-vue',
          '@element-plus/icons-vue',
          'element-plus',
          'vue',
        ],
      },
    },
  };
}
