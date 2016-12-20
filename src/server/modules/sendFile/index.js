const fileToMime = require("../fileToMime"),
      fs         = require("fs"),
      path       = require("path");

function send(pathToResource, base, res) {
    let fullPath = path.normalize(path.join(base, "public", pathToResource));
    var file = fs.createReadStream(fullPath);

    res.setHeader("Content-type", fileToMime(fullPath) + "; charset: utf-8");

    file.pipe(res);

    file.on("error", (err) => {
        console.log("MY CATCH %s", err.message);
        res.setHeader("Content-type", "texp/plain; charset: utf-8");
        res.statusCode = 400;
        res.end("Not found");
    });

    file.on("end", function () {
        res.end();
    });

    res.on("close", () => {
        file.destroy();
    });
}

module.exports = send;

