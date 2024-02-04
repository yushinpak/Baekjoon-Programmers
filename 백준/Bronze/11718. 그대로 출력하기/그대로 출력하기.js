const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "11718/input.txt"
    )
    .toString()
    .trim()
    .split("\n"); 

    console.log(input.join('\n'));