import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    'types/index': 'types/index.ts',
    'utils/index': 'utils/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
})
