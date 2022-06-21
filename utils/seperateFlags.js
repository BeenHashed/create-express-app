function seperateArgs(args) {
    let seperatedArgs = [];
    let seperateArgsIndex = -1;
    args.forEach(arg => {
        if (arg.includes("-") && arg.length === 2) {
            seperatedArgs.push([]);
            seperateArgsIndex++; 
        }

        seperatedArgs[seperateArgsIndex].push(arg)
    });

    return seperatedArgs;
}

module.exports = seperateArgs;