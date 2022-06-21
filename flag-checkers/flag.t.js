// Users will choose their templates using the -t arg .
const installPackages = require("../utils/installPackages");
const cpf = require("../utils/cpf");

function argTChcecker(arg, path) {
     if (arg[0] != "-t") return false; // returns false because I want to check if I have to install the packages in cli.js
     if (arg.length > 2) throw "Incorrect syntax for -t!";

     const templates = ["ejs", "mvc", "none"];
     const template = arg[1]; 
     if (!templates.includes(template)) throw "Unknown Template!";  
     
     cpf(path, template); 
     installPackages(path,  template);
     return true; // Opposite of last comment 
}

module.exports = argTChcecker;