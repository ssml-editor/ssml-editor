import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import type { OutputOptions } from 'rollup';
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
      vueJsx(),
      tailwindcss(),
    ],
    build: {
      ...bundleCommonViteConfig.build,
      rollupOptions: {
        ...bundleCommonViteConfig.build?.rollupOptions,
        ...(
          bundleCommonViteConfig.build?.rollupOptions?.output as OutputOptions[]
        ).map((item: OutputOptions) => {
          if (item.format === 'umd') {
            item.name = 'SSMLEditorVue';
          }
          return item;
        }),
      },
    },
  };
});
