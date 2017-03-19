var fs = require('fs')

var fsp = {
  readFile: (file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err)
          reject(err);
        resolve(data);
      })
    })
  },
  writeFile: (file, text) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, text, (err) => {
        if (err)
          reject(err);
        resolve(text);
      })
    })
  },
  appendFile: (file, text) => {
    return new Promise((resolve, reject) => {
      fs.appendFile(file, text, (err) => {
        if (err)
          reject(err);
        resolve(fsp.readFile(file));
      })
    })
  }
}

module.exports = fsp
