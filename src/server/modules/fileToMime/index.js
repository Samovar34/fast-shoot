/*
 *  Модуль возвращает MIME тип, в зависимости от расширения файла
 */

const MIME = {
    // BASIC
    "css": "text/css",
    "html": "text/html",
    "htm": "text/html",
    "js": "text/javascript",

    // AUDIO
    "mp4": "audio/mp4", // TODO: уточнить расширение файла
    "mp3": "audio/mpeg",
    "ogg": "audio/ogg",

    // IMG
    "gif": "image/gif",
    "jpeg": "image/jpeg",
    "png": "image/png",

    // SPECIAL
    "json": "application/json",

    // DEFAULT
    "txt": "text/plain"
};


/** * Возвращает MIME тип либо null * 
* @param {string|Buffer} path путь к файлу 
* @return {string|null} mime type 
*/
module.exports = (path) => {

    if (typeof path !== "string" && !(path instanceof Buffer))  {
        return false;
    };

    if (path instanceof Buffer) {
        path = path.toString("utf8");
    }

   var result = path.match(/\.(\w*)$/i);

   if (result == null) {
       return MIME["txt"];
   } else {
       return (MIME[result[1]] || MIME["txt"]);
   }
};