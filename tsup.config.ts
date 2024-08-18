import { defineConfig } from "tsup";

export default defineConfig([
  // npm module (no bundling)
  {
    entry: ["./src/index.ts"],
    format: "esm",
    target: "esnext",
    dts: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
  },
  // es6 (bundled)
  {
    entry: {
      math: "./src/index.ts",
    },
    format: ["esm"],
    outDir: "dist",
    bundle: true,
    skipNodeModulesBundle: false,
    target: "esnext",
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    minify: true,
    outExtension() {
      return {
        js: ".esm.js",
      };
    },
    // noExternal: [/./],
  },
]);
