/*
 *  Модуль возвращает MIME тип, в зависимости от расширения файла
 */

const MIME = {
    "css": "text/css",
    "html": "text/html",
    "htm": "text/html",
    "js": "text/javascript",
    "mp4": "audio/mp4", // TODO: уточнить расширение файла
    "mp3": "audio/mpeg",
    "ogg": "audio/ogg",
    "json": "application/json",
    "gif": "image/gif",
    "jpeg": "image/jpeg",
    "png": "image/png"
};


/** * Возвращает MIME тип либо null * 
* @param {string|Buffer} path путь к файлу 
* @return {string|null} mime type 
*/
module.exports = (path) => {
    console.log(path);
    if (typeof path !== "string" && !(path instanceof Buffer))  {
        return false;
    };

    if (path instanceof Buffer) {
        path = path.toString("utf8");
    }

   var result = path.match(/\.(\w*)$/i);

   if (result == null) {
       return null;
   } else {
       return (MIME[result[1]] || null);
   }
};