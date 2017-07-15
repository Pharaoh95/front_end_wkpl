const express = require('express');
const app = express();
const db = require('./config/db.json');
// 配置静态文件路径
app.use(express.static('../public/'));

// 配置请求
app.get('/personal', function(req, res) {
    res.send(db);
})

const server = app.listen(8080, function() {
    console.log("server run on：http://localhost:8080");
})
