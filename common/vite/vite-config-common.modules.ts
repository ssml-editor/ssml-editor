import { globSync } from 'glob';
import path from 'node:path';
import { type UserConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { getCommonViteConfig } from './vite-config-common';
import { viteUtils } from './vite-utils';

export function getModulesCommonViteConfig(): UserConfig {
  const commonViteConfig = getCommonViteConfig();
  return {
    ...commonViteConfig,
    plugins: [
      dts({
        entryRoot: viteUtils.pathResolve('src'),
        outDir: ['es', 'cjs'],
        tsconfigPath: './tsconfig.json',
        insertTypesEntry: false,
      }),
    ],
    build: {
      ...commonViteConfig.build,
      lib: {
        entry: Object.fromEntries(
          globSync(['src/**/*.{ts,tsx,vue}']).map((file: string) => {
            return [
              // 这里将删除 `src/` 以及每个文件的扩展名。
              // 因此，例如 src/nested/foo.js 会变成 nested/foo
              path.relative(
                'src',
                file.slice(0, file.length - path.extname(file).length),
              ),
              viteUtils.pathResolve(file),
            ];
          }),
        ),
      },
      rollupOptions: {
        ...commonViteConfig.build?.rollupOptions,
        output: [
          {
            dir: 'es',
            entryFileNames: '[name].js',
            format: 'es',
            preserveModules: true,
            preserveModulesRoot: 'src',
          },
          {
            dir: 'cjs',
            entryFileNames: '[name].js',
            exports: 'named',
            format: 'cjs',
            preserveModules: true,
            preserveModulesRoot: 'src',
          },
        ],
      },
    },
  };
}
