import { $ } from "bun";
let pkgs = await $`scoop list`.quiet();
console.log('Hello, Pail!\n');

console.log(`${pkgs.stdout}`);
