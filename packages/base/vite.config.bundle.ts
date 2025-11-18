import type { OutputOptions } from 'rollup';
import { type UserConfig, defineConfig } from 'vite';
import { getBundleCommonViteConfig } from '../../common/vite/vite-config-common.bundle';

export default defineConfig((): UserConfig => {
  const bundleCommonViteConfig = getBundleCommonViteConfig();
  return {
    ...bundleCommonViteConfig,
    build: {
      ...bundleCommonViteConfig.build,
      rollupOptions: {
        ...bundleCommonViteConfig.build?.rollupOptions,
        ...(
          bundleCommonViteConfig.build?.rollupOptions?.output as OutputOptions[]
        ).map((item: OutputOptions) => {
          if (item.format === 'umd') {
            item.name = 'SSMLEditorBase';
          }
          return item;
        }),
      },
    },
  };
});
