const http = require("http");
const util = require("util");

// PARAMS
const PORT = 8080;

http.createServer((req, res) => {
    res.end(req.url);
    //console.log(util.inspect(req));
    console.log("Got %s request. Url:%s", req.method, req.url);
}).listen(PORT);

console.log("SERVER: OK!\nPORT: %d\n", PORT);