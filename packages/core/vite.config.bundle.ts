import tailwindcss from '@tailwindcss/vite';
import type { OutputOptions } from 'rollup';
import { type UserConfig, defineConfig } from 'vite';
import { getBundleCommonViteConfig } from '../../common/vite/vite-config-common.bundle';

export default defineConfig((): UserConfig => {
  const bundleCommonViteConfig = getBundleCommonViteConfig();
  return {
    ...bundleCommonViteConfig,
    plugins: [tailwindcss()],
    build: {
      ...bundleCommonViteConfig.build,
      rollupOptions: {
        ...bundleCommonViteConfig.build?.rollupOptions,
        ...(
          bundleCommonViteConfig.build?.rollupOptions?.output as OutputOptions[]
        ).map((item: OutputOptions) => {
          if (item.format === 'umd') {
            item.name = 'SSMLEditorCore';
          }
          return item;
        }),
      },
    },
  };
});
