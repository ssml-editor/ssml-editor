import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import {
  type ConfigEnv,
  type PluginOption,
  type UserConfig,
  defineConfig,
  loadEnv,
} from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteUtils } from '../common/vite/vite-utils';

const rootPath: string = process.cwd();

const alias: Record<string, string> = {
  '@': viteUtils.pathResolve('src'),
};

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const { VITE_PUBLIC_PATH, VITE_WEB_TITLE } = loadEnv(mode, rootPath);
  return {
    base: VITE_PUBLIC_PATH,
    root: rootPath,
    resolve: {
      alias,
    },
    plugins: [
      vue({
        isProduction: true,
        script: {
          hoistStatic: false,
        },
        template: {
          compilerOptions: {
            hoistStatic: false,
            cacheHandlers: false,
          },
        },
      }),
      tailwindcss(),
      ElementPlus({}),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_WEB_TITLE,
          },
        },
      }),
    ] as PluginOption[],
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
      },
    },
    build: {
      target: 'esnext',
      sourcemap: true,
      chunkSizeWarningLimit: 10000,
      minify: true,
      rollupOptions: {
        input: {
          index: viteUtils.pathResolve('index.html'),
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});
