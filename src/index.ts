import { $ } from "bun";
let pkgs = await $`scoop list`.quiet();

let stdout = pkgs.stdout.toString();

stdout = stdout.slice(285);

const rows = stdout.split('\n');

const firstColumn = rows.map(row => {
  const columns = row.split(' ');
  return columns[0];
});

const col = firstColumn.join(' ');

console.log(`Hello, Pail!\n\nYour Scoop Packages Are:  ${col}`);
