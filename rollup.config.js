import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import posthtml from "rollup-plugin-posthtml-template";
import css from "rollup-plugin-css-only";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";


const production = !process.env.ROLLUP_WATCH;

export default defineConfig({
  input: "src/index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "dist/bundle.js",
  },
  plugins: [
    commonjs(),
    resolve({
      browser: true,
      dedupe: ["dativejs"],
    }),
    posthtml({
      include: ["**/*.{dative.html}"],
    }),
    production && terser(),
      !production &&
      serve({
        port: 4100,
        contentBase: ".",
      }),
    !production && livereload(),
    css({ output: "bundle.css" }),
  ],
});
