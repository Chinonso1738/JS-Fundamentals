// Print square using X and size
let size = process.argv.slice(2)[0];
size = parseInt(size);
if (isNaN(size)) {
    console.log('Missing size');
}
const width = size;

while (size > 0) {
    let line = '';
    for (let i = 0; i < width; i++) {
        line += 'X';
    }
    console.log(line);
    size--;
};
