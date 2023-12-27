const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function greetUser(name) {
    console.log("Hello,", name + "!");
}

readline.question("Enter your name: ", (name) => {
    greetUser(name);
    readline.close();
});
