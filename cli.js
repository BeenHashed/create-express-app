#!/usr/bin/env node
const fs = require("fs");
const cpf = require("./utils/cpf");
const extractFlags = require("./utils/extractFlags");
const extractName = require("./utils/extractName");
const seperateFlags = require("./utils/seperateFlags");
const installPackages = require("./utils/installPackages");

const flagTChcecker = require("./flag-checkers/flag.t"); // Changes Templates
const flagAChecker = require("./flag-checkers/flag.a"); // Adds extra folders
const flagFChecker = require("./flag-checkers/flag.f"); // Adds extra files
const flagIChecker = require("./flag-checkers/flag.i"); // Adds extra packages



let args = process.argv.splice(2);

if (args.length === 0) {
    console.log("Please provide a name for your project");
    process.exit(1);
}

// We check to see if it has args to see if we just make the default project for them or we have to do some config
const hasArgs = args.some(arg => arg.includes("-") && arg.length === 2); 

if (!hasArgs) {
    const projectName = args.join("-");
    if (projectName.startsWith("/")) {
        console.log("Your project name can't start with a slash!"); 
        process.exit(1);
    }
    
    if (projectName.length === 1 && projectName[0] == ".") { 
        cpf(process.cwd());
        installPackages(process.cwd());
    } else {
        fs.mkdirSync(projectName, (err) => console.error(err)); 
        cpf(`${process.cwd()}/${projectName}`);
        installPackages(`${process.cwd()}/${projectName}`);
    }

    console.log(`Project created!`);
    process.exit(0);
} 

args.map((arg, index) => args[index] = arg.toLowerCase()); // sets all args in lowercase so everything is easier to deal with

const projectName = extractName(args); 
extractFlags(args); // This modifies the original array so there's no need to return anything
args = seperateFlags(args);

const projectPath = `${process.cwd()}/${projectName}`;
let installed = false;

args.forEach(arg => {
    installed = flagTChcecker(arg, projectPath);
    flagAChecker(arg, projectPath);
    flagFChecker(arg, projectPath);
    flagIChecker(arg, projectPath);
})

if (!installed) {
    cpf(projectPath);
    installPackages(projectPath);
}

console.log("Project created!");