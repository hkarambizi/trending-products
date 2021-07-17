const chalk = require('chalk');
var path = require('path');

// custom logger
const logger = (filename) => {
    const location = path.basename(filename); // print location of the message
    return {
    error:(msg) => console.log(chalk.bold.red('[%s]: ⚠️  %s'), location, msg),
    success: (msg) => console.log(chalk.bold.cyanBright('[%s]: ✅  %s'), location, msg),
    log: (msg) => console.log(chalk.magentaBright('[%s]: %s'), location, msg),
    db: (msg) => console.log(chalk.italic.greenBright('[%s]: %s'), location, msg),
    progress: (msg) => console.log(chalk.bold.yellow('[%s] ⏳  %s'), location, msg)
    }
}

module.exports = logger;
