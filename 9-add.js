function add(a, b) {
    return a + b;
};

const args = process.argv.slice(2); // Extract command line arguments skip the first two elements
console.log(add(parseInt(args[0]), parseInt(args[1]))); // Convert arguments to integers and call add function
