import terser from '@rollup/plugin-terser';
import { type UserConfig } from 'vite';
import { getCommonViteConfig } from './vite-config-common';
import { viteUtils } from './vite-utils';

export function getBundleCommonViteConfig(): UserConfig {
  const commonViteConfig = getCommonViteConfig();
  return {
    ...commonViteConfig,
    build: {
      ...commonViteConfig.build,
      lib: {
        entry: viteUtils.pathResolve('src/index.ts'),
      },
      rollupOptions: {
        ...commonViteConfig.build?.rollupOptions,
        output: [
          {
            dir: 'dist',
            entryFileNames: '[name].full.[format].js',
            exports: 'named',
            assetFileNames: viteUtils.generateAssetFileNames,
          },
          {
            dir: 'dist',
            entryFileNames: '[name].full.[format].min.js',
            exports: 'named',
            plugins: [terser()],
            assetFileNames: viteUtils.generateAssetFileNames,
          },
          {
            dir: 'dist',
            entryFileNames: '[name].full.[format].js',
            exports: 'named',
            format: 'cjs',
            assetFileNames: viteUtils.generateAssetFileNames,
          },
          {
            dir: 'dist',
            entryFileNames: '[name].full.[format].min.js',
            exports: 'named',
            format: 'cjs',
            plugins: [terser()],
            assetFileNames: viteUtils.generateAssetFileNames,
          },
          {
            dir: 'dist',
            entryFileNames: '[name].full.[format].js',
            exports: 'named',
            format: 'umd',
            assetFileNames: viteUtils.generateAssetFileNames,
            globals: {
              '@ssml-editor/base': 'SSMLEditorBase',
              '@ssml-editor/core': 'SSMLEditorCore',
              '@ssml-editor/modules': 'SSMLEditorModules',
              '@ssml-editor/utils': 'SSMLEditorUtils',
              '@ssml-editor/vue': 'SSMLEditorVue',
              '@ssml-editor/editor-vue': 'SSMLEditorEditorVue',
              '@element-plus/icons-vue': 'ElementPlusIconsVue',
              'element-plus': 'ElementPlus',
              vue: 'Vue',
            },
          },
          {
            dir: 'dist',
            entryFileNames: '[name].full.[format].min.js',
            exports: 'named',
            format: 'umd',
            plugins: [terser()],
            assetFileNames: viteUtils.generateAssetFileNames,
            globals: {
              '@ssml-editor/base': 'SSMLEditorBase',
              '@ssml-editor/core': 'SSMLEditorCore',
              '@ssml-editor/modules': 'SSMLEditorModules',
              '@ssml-editor/utils': 'SSMLEditorUtils',
              '@ssml-editor/vue': 'SSMLEditorVue',
              '@ssml-editor/editor-vue': 'SSMLEditorEditorVue',
              '@element-plus/icons-vue': 'ElementPlusIconsVue',
              'element-plus': 'ElementPlus',
              vue: 'Vue',
            },
          },
        ],
      },
    },
  };
}
