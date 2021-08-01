import type { Options } from "tsup";
export const tsup: Options = {
  splitting: false,
  sourcemap: true,
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
  entryPoints: ["src/index.ts"],
};
