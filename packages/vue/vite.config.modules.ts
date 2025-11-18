import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
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
        vueJsx(),
        tailwindcss(),
      ] as PluginOption[]
    ).concat(modulesCommonViteConfig.plugins),
  };
});
