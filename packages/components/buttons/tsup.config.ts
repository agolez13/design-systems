import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  external: ["react"],
  format: ["esm", "cjs"],
  dts: true,
});
