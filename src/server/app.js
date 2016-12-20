const http = require("http");
const util = require("util");
const url = require("url");

const sendFile = require("./modules/sendFile");

// PARAMS
const PORT = 8080;
//const PATTERN = /\/public\/.+/i; // path to public

/* 
 * TODO: 
 *  1. Получить параметры запроса
 *  2. Подготовить базовые заголовки
 *  3. Базовый файловый сервер (MIME type)
 *  4. Работа с веб сокетами (socket.io игровой сервер)
*/

var server = http.createServer();

server.on("request", (req, res) => {
    // пропарсим url
    var urlParsed = url.parse(req.url);


    // базовая обработка req
    // обработка ошибок
    // доступ только к публичным файлам
    // обработка http методов   

    // headers
    // отмена кеширования
    res.setHeader("Cache-control", "no-cache, no-store, must-revalidate");

    if (urlParsed.pathname === "/") {
        sendFile("index.html", __dirname, res);
    } else if (urlParsed.pathname === "/bla") {
        res.end("/bla");
    } else {
        res.statusCode = 404;
        res.end("Not found");
    }
});

server.listen(PORT, () => {
    console.log("SERVER: OK!\nPORT: %d\n", PORT);
});

