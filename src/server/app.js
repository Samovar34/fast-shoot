const http = require("http");
const util = require("util");
const fileToMime = require("./modules/fileToMime");
const url = require("url");

// PARAMS
const PORT = 8080;

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

    // end res
    var end = fileToMime(urlParsed.pathname);
    console.log(end);
    res.end(end);
    //console.log("Got %s request. Url:%s", req.method, urlParsed.pathname);
    //console.log(urlParsed);
});

server.listen(PORT, () => {
    console.log("SERVER: OK!\nPORT: %d\n", PORT);
});

