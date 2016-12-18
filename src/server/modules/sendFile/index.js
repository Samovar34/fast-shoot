const fileToMime = require("../fileToMime"),
      fs         = require("fs");

module.exports = (path, res) => {
    var file = fs.createReadStream(path);
}