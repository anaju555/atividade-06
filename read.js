var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "aluno",
    database: "mydb",
});

con.connect(function(err) {
    if (err)throw err;
    con.query("SELECT * FROM costumers",function (err, result, fields) {
      if (err) throw err;
        console.log(result)
  });
});
