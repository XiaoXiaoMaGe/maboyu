const mysql = require("mysql");
console.log(666);
let db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'project_user',
    port:3306
});
db.connect(function (err) {
    if(!err){
        console.log("连接成功");
    }
});

module.exports = db;