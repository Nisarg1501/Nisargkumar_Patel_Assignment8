const fs = require('fs').promises;

const filename = process.argv[2];

if(!filename){
    console.error("Please provide filename as argument.")
    process.exit(1);
}

const runScript = process.argv[1];
console.log("Script : " + runScript);

const readFile = async(filename) => {
    const fileData = await fs.readFile(filename, "utf8");
    console.log("Filename : " + filename + '\n================================\n' + fileData);
}
readFile(filename);