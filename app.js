//加载express模块
var express = require('express');

//加载body-parser模块
var bodyParser = require('body-parser');

//加载cookies模块
var Cookies = require('cookies');

//创建app应用
var app = express();

//获取表结构模块
var User = require('./models/User');


//当用户访问的url是以/public开始,那么直接返回对应的__dirname+'/public'下的文件
app.use('/public',express.static(__dirname+'/public'));//项目设定

//加载处理模块
var swig = require('swig');

//加载mongoose模块
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

//定义当前使用的模块引擎
app.engine('html',swig.renderFile);

//设定模块存放目录
app.set('views','./views');

//定义当前要使用的引擎
app.set('view engine','html');

//在开发过程中 取消模板缓存
swig.setDefaults({cache:false});

app.use(bodyParser.urlencoded({extended:true}));

//配置cookies模块
app.use(function (req, res, next){ 
	req.cookies = new Cookies(req,res);

	//解析客户登录信息
	var userInfo = {};

	//如果存在cookie信息
	if(req.cookies.get('userInfo')){ 
		try{ 
			var cookieInfo = JSON.parse(req.cookies.get('userInfo'));
			req.userInfo = cookieInfo;

			//console.log(userInfo);

			//获取当前登录用户的类型是否为管理员
			User.findById(req.userInfo._id).then(function (userInfo){ 
				req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
				next();
			});
		} catch (e){ 
			next();
		}
	}else{ 
		next();
	}
});

//后台模块
app.use('/admin',require('./routers/admin'));

//逻辑模块
app.use('/api',require('./routers/api'));

//前台模块
app.use('/',require('./routers/main'));

//连接mongoDB数据库
mongoose.connect('mongodb://localhost:27017/test',function (err){ 
	if(err){ 
		console.log('数据库连接失败!');
	}else{ 
		console.log('数据库连接成功!');
		//设置监听端口
		app.listen(8089);
	}
})
