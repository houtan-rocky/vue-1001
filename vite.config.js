// vite.config.js
// eslint-disable-next-line import/no-extraneous-dependencies
import checker from 'vite-plugin-checker';

export default {
  plugins: [
    checker({
      // e.g. use TypeScript check
      typescript: true,
      vueTsc: true,
      lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
    }),
  ],
};
