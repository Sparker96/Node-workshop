const fs = require('fs'); 
module.exports = (done, arg) => {
  fs.readFile(`./${arg}`, 'utf8', (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(data);
    }
  });
};