// Exercise 4: Random Line from File
// Goal: read quotes.txt using a callback, split it into lines, ignore empty lines and print a random one.
// Required: fs.readFile(filePath, callback)
//
// Expected output (random on each run):
//   Random Line: Stay positive.
//
// Run: node ex04.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "quotes.txt");

// write your code here
fs.readFile(filePath,"utf8", (err, data) => {
    if(err) {
        console.log(err.message)
        return
    }

    const lines = data.split(/\r?\n/).filter(line => line.trim() !== "")
    if(lines.length === 0){
        console.log("No lines found.")
        return
    }

    const randomIndex = Math.floor(Math.random() * lines.length)
    const randomLine = lines[randomIndex]
    console.log(`Random Line: ${randomLine}`)
})
