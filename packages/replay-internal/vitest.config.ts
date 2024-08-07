import { defineConfig } from 'vitest/config';

import baseConfig from '../../vite/vite.config';

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    coverage: {},
    globals: true,
    setupFiles: ['./test.setup.ts'],
    reporters: ['default'],
    environment: 'jsdom',
  },
});
