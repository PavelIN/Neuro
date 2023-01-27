const fs = require("fs");

const os = require("os");

const userHomeDir = os.homedir();
const currentOs = os.type();
console.log("OS: ",currentOs)
console.log("Home dir: ",userHomeDir)


try {
   const data = fs.readFileSync("./text.txt", 'utf8');
   const reversedText = [...data].reverse().join("");
   fs.writeFileSync("./reversedText.txt", reversedText) 
  } catch (err) {
    console.error(err);
  }

