/*
* Модуль отсылает файл клиенту
*/
const fileToMime = require("../fileToMime"),
      fs         = require("fs"),
      path       = require("path");

function send(pathToResource, base, res) {
    var resourceRoot = (pathToResource === "index.html") ? "public" : "";
    let fullPath = path.normalize(path.join(base, resourceRoot, pathToResource));
    var file = fs.createReadStream(fullPath);

    file.on("open", () => {
        res.setHeader("Content-type", fileToMime(fullPath) + "; charset: utf-8");
        file.pipe(res);
    });
    
    file.on("error", (err) => {
        res.setHeader("Content-type", "text/plain; charset: utf-8");
        res.statusCode = 404;
        res.end("Not found");
    });

    file.on("end", function () {
        res.end();
    });

    // если клиент разорвал соединение, то уничтожить поток чтения
    res.on("close", () => {
        file.destroy();
    });
}

module.exports = send;

