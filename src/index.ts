import { $ } from "bun";

let pkgs = await $`scoop list`.quiet();
let stdout = pkgs.stdout.toString();

const lines = stdout.split('\n');

const trimmedLines = lines.map(line => line.trim()).filter(line => line.length > 0);

const headerIndex = trimmedLines.findIndex(line => line.includes('Name'));

if (headerIndex === -1) {
  console.error('Header not found in scoop list output.');
  process.exit(1);
}

const rows = trimmedLines.slice(headerIndex + 2).filter(line => line.length > 0);

const firstColumn = rows.map(row => {
  const columns = row.split(/\s{1,}/);
  return columns[0];
});

const col = firstColumn.join(' ');

console.log(`Hello, Pail!\n\nYour Scoop Packages Are:  ${col}`);
