import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from 'rollup-plugin-babel';
import svg from 'rollup-plugin-svg';

const packageJson = require("./package.json");

export default [
  {
    input: "components/index.ts",
    external: ['react', 'styled-components'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        globals: { 'styled-components': 'styled' }
      },
    ],
    plugins: [
      svg(),
      resolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        plugins: ['babel-plugin-styled-components'],
        exclude: 'node_modules/**'
      }),
      commonjs(),
    ],
  },
];
