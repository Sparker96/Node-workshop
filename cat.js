const fs = require('fs'); 
module.exports = function (cmd, arg) {
    if (cmd === 'cat') {
        fs.readFile(`./${arg}`, 'utf8', (err, data) => {
            if (err) {
                throw err;
            } else {
                process.stdout.write(data);
                process.stdout.write('prompt > ');
            }
        });
        process.stdout.write('\nprompt > ');
    }
}