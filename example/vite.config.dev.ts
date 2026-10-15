import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import {
  type ConfigEnv,
  type LogLevel,
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
  const { VITE_PORT, VITE_WEB_TITLE, VITE_PUBLIC_PATH, VITE_LOG_LEVEL } =
    loadEnv(mode, rootPath);
  return {
    base: VITE_PUBLIC_PATH,
    root: rootPath,
    logLevel: VITE_LOG_LEVEL as LogLevel,
    resolve: {
      alias,
    },
    plugins: [
      vue(),
      tailwindcss(),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_WEB_TITLE,
          },
        },
      }),
      ElementPlus({}),
    ] as PluginOption[],
    server: {
      port: parseFloat(VITE_PORT),
      host: '0.0.0.0',
    },
  };
});
