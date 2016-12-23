// core modules
const http = require("http");
const util = require("util");
const url = require("url");

// special modules
const sendFile = require("./modules/sendFile");

// PARAMS
const PORT = 8080;
const PATTERN = /\/public\/.+/i; // path to public

/* 
 * TODO: 
 *  1. Получить параметры запроса
 *  2. Подготовить базовые заголовки
 *  3. Базовый файловый сервер (MIME type)
 *  4. Работа с веб сокетами (socket.io игровой сервер)
*/

var server = http.createServer();

server.on("request", (req, res) => {
    let address = req.socket.address();
    console.log(`got req from ${address.address}:${address.port}`);

    // пропарсим url
    var urlParsed = url.parse(req.url);
    
    // index page
    if (urlParsed.pathname === "/") {
        sendFile("index.html", __dirname, res);

    // static resources
    } else if (PATTERN.test(urlParsed.pathname)) {
        sendFile(urlParsed.pathname, __dirname, res);

    // services
    } else if (urlParsed.pathname === "/service") {
        // отмена кеширования
        res.setHeader("Cache-control", "no-cache, no-store, must-revalidate");
        res.end("service");

    // not found
    } else {
        res.statusCode = 404;
        res.end(http.STATUS_CODES[res.statusCode]);
    }
    
});

server.listen(PORT, () => {
    console.log("SERVER: OK!\nPORT: %d\n", PORT);
});

