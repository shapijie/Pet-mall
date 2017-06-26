//引入express
var express = require('express');

var router = express.Router();

//创建路由访问规则
router.get('/register',function (req, res, next){ 
	res.render('main/register');
});
router.get('/switch',function (req, res, next){ 
	res.render('main/switch');
});
router.get('/', function (req, res, next) {

    //如果没有userInfo
    if (!req.userInfo) {
        res.render('main/index', {});
    } else {
        res.render('main/index', {
            userInfo: req.userInfo
        });
    }

});

//引入核心模块中
module.exports = router;