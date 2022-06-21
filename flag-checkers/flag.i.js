const { execSync } = require("child_process");
const fs = require("fs");

function argIChecker(arg, projectPath) {
    if (arg[0] != "-i") return;
    const packages = arg.slice(1);
    if (packages.length === 0) throw "No packages names provided"; 
    if (!fs.existsSync(projectPath)) fs.mkdirSync(projectPath, { recursive: true });
    for(let package of packages) {
        execSync(`npm install --prefix ${projectPath} ${package}`, (err, stdout, stderr) => {
            if (err || stderr) throw error;
            console.log(stdout);
        });
    }
}

module.exports = argIChecker;