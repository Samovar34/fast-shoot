const http = require("http");
const util = require("util");

// PARAMS
const PORT = 8080;

/* 
 * TODO: 
 *  1. Получить параметры запроса
 *  2. Подготовить базовые заголовки
 *  3. Базовый файловый сервер (MIME type)
 *  4. Работа с веб сокетами (socket.io игровой сервер)
*/

http.createServer((req, res) => {
    var path = req.url;

    // базовая обработка req
    // обработка ошибок
    // доступ только к публичным файлам
    // обработка http методов

    

    // end res
    res.end(path);
    console.log("Got %s request. Url:%s", req.method, req.url);
}).listen(PORT);

console.log("SERVER: OK!\nPORT: %d\n", PORT);