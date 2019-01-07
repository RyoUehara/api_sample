var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'root',
  database : 'app'
});


/* サンプルAPI① 
 * http://localhost:3000/api にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function(req, res, next) {
  //var param = {"値":"これはサンプルAPIです"};
  //res.header('Content-Type', 'application/json; charset=utf-8')
  //res.send(param);
  connection.query('select * from users', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

/* サンプルAPI② 
 * http://localhost:3000/api/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', function(req, res, next) {
  var param = {"result":"Hello World !"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;