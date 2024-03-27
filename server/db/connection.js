const mysql= require("mysql2");

const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"ali03212509690",
    database:"crud",
    port:3306
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Db connected")
});

module.exports = conn;