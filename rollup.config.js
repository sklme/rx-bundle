import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "src/operators/index.ts",
    output: {
      file: "dist/operators/index.js",
    },
    plugins: [
      resolve(),
      commonjs(),
      // typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];
