const express = require('express');
const app = express();
const sever = require('http').createServer(app);
const port = 3622
sever.listen(port);

var router = require('./controller');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public',express.static('public'));

var path = require('path');
var template = require('art-template');//引入art-template包
var express_template = require('express-art-template');//引入express-art-template包
app.set('views', path.join(__dirname, 'views'));//设置views文件夹为模板文件夹
app.engine('html', express_template);//设置.html后缀的文件为模板文件
app.set('view engine', 'html');//设置express模art-template板引擎


app.get('/',router.showIndex);

app.use(router.showAll);