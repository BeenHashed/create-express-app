const { execSync } = require("child_process");

function installPackages(path, type="mvc") {
    switch (type) {
        case "mvc":
             execSync(`cd ${path} && npm i && npm init -y`,  (error, stdout, stderr) => {
                if (error) throw error;
                if (stderr) throw error;
                console.log(stdout);
            });
            break;

            case "ejs":
                execSync(`cd ${path} && npm i express ejs && npm init -y`,  (error, stdout, stderr) => {
                   if (error || stderr) throw error;
                   console.log(stdout);
               });
               break;

            case "none":
                execSync(`cd ${path} && npm i express && npm init -y`,  (error, stdout, stderr) => {
                    if (error) throw error;
                    if (stderr) throw error;
                    console.log(stdout);
                });
                break;
    }
}

module.exports = installPackages;