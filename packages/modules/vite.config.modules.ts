import { type UserConfig, defineConfig } from 'vite';
import { getModulesCommonViteConfig } from '../../common/vite/vite-config-common.modules';

export default defineConfig((): UserConfig => {
  const modulesCommonViteConfig = getModulesCommonViteConfig();
  return modulesCommonViteConfig;
});
