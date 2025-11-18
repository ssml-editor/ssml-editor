import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import { type PluginOption, type UserConfig, defineConfig } from 'vite';
import { getModulesCommonViteConfig } from '../../common/vite/vite-config-common.modules';

export default defineConfig((): UserConfig => {
  const modulesCommonViteConfig = getModulesCommonViteConfig();
  return {
    ...modulesCommonViteConfig,
    plugins: (
      [
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
      ] as PluginOption[]
    ).concat(modulesCommonViteConfig.plugins),
  };
});
