import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import type { OutputOptions } from 'rollup';
import copy from 'rollup-plugin-copy';
import ElementPlus from 'unplugin-element-plus/vite';
import { type UserConfig, defineConfig } from 'vite';
import { getBundleCommonViteConfig } from '../../common/vite/vite-config-common.bundle';

export default defineConfig((): UserConfig => {
  const bundleCommonViteConfig = getBundleCommonViteConfig();
  return {
    ...bundleCommonViteConfig,
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
    ],
    build: {
      ...bundleCommonViteConfig.build,
      rollupOptions: {
        ...bundleCommonViteConfig.build?.rollupOptions,
        ...(
          bundleCommonViteConfig.build?.rollupOptions?.output as OutputOptions[]
        ).map((item: OutputOptions) => {
          if (item.format === 'umd') {
            item.name = 'SSMLEditorEditorVue';
          }
          return item;
        }),
        plugins: [
          copy({
            targets: [
              {
                src: '../../node_modules/highlight.js/styles/*.css',
                dest: 'dist/styles/highlight',
              },
            ],
            hook: 'writeBundle',
          }),
        ],
      },
    },
  };
});
