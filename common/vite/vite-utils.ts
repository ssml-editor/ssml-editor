import path from 'node:path';
import type { PreRenderedAsset } from 'rollup';

export const viteUtils = {
  pathResolve: (dir: string): string => {
    return path.resolve(process.cwd(), '.', dir);
  },
  generateAssetFileNames: ({ names }: PreRenderedAsset): string => {
    for (const name of names) {
      if (name.endsWith('.css')) {
        return 'styles/style.[ext]';
      }
    }
    return 'assets/[name].[ext]';
  },
};
