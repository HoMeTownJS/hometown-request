import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./packages/index.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  treeshake: true,
  external: ['axios', 'qs', 'form-data']
});
