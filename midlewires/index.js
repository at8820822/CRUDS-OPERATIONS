const fs = require('fs');

function logReqRes(filename){

return (req, res, next) =>{
    fs.appendFile( filename, `Request method is ${req.method} and request time is
         ${Date.now()} ${req.path} \n`, (err, data) => {
        next();
    });
}
}
module.exports = {
    logReqRes,

};