import { defineConfig } from "tsup";
import packageJson from "./package.json";

const banner = `/*! ${packageJson.name}@${packageJson.version} by ${packageJson.author} - ${packageJson.license} */`;

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
    banner: {
      js: banner,
    },
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
    banner: {
      js: banner,
    },
    // noExternal: [/./],
  },
]);
