var express = require('express');
var router = express.Router();
var User = require('../models/User');


//统一返回格式
var responseData;


router.use(function (req, res, next){ 
	responseData = { 
		code:0,
		message:''
	};
	next();
});

//设置路由处理用户的注册操作
router.post('/user/register',function (req, res, next){ 
	var username = req.body.regusername;
	var password = req.body.regpassword;
	var repassword = req.body.regrepassword;

	//判断两次密码是否一致
	if(password != repassword){ 
		responseData.code = 1;
		responseData.message = '两次密码不同!';
		res.json(responseData);
		return;
	}

	//将传递过来的用户信息作为条件到数据库中取查询看看是否有对应的结果
	User.findOne({ 
		username:username
	}).then(function (userInfo){ 
		if(userInfo){ 
			//用户名已存在
			responseData.code = 2;
			responseData.message = '用户名已存在!';
			res.json(responseData);
			return;
		}

		var user = new User({ 
			username:username,
			password:password
		});

		return user.save();
	}).then(function (newUserInfo){ 
		//注册成功
		responseData.message = '恭喜您，注册成功~（2秒后跳转）';
		responseData.go = 'ok';
		res.json(responseData);
	});


});



//设置路由处理用户的登录操作
router.post('/user/login',function (req, res, next){ 
	//接收前台传递过来的信息
	var username = req.body.username;
	var password = req.body.password;
	var checked = req.body.checked;

	//判断
	if(username == ''){ 
		responseData.code = 1;
		responseData.message = '账号不能为空!';
		responseData.entry = 'username';
		res.json(responseData);
		return;
	}

	if(password == ''){ 
		responseData.code = 2;
		responseData.message = '密码不能为空!';
		responseData.entry = 'password';
		res.json(responseData);
		return;
	}

	//查询数据库中是否包含用户传递过来的信息  如果存在则登陆成功
	User.findOne({ 
		username:username,
		password:password
	}).then(function (userInfo){
		//账号或密码错误提示
		if(!userInfo){ 
			responseData.code = 3;
			responseData.message = '账号或密码有误!';
			responseData.entry = 'password';
			res.json(responseData);
			return;
		}
		

		//输入正确操作
		responseData.userInfo = { 
			_id:userInfo._id,
			username:userInfo.username,
			password:userInfo.password,
			isAdmin:userInfo.isAdmin
		};


		console.log(responseData.userInfo);
		//将登录成功的信息写入cookie
		if(checked){ 
			req.cookies.set('userInfo',JSON.stringify({ 
				_id:userInfo._id,
				username:userInfo.username,
				userpassword:userInfo.password,
				isAdmin:userInfo.isAdmin
			}));
		}

		//console.log(res.code);

		res.json(responseData.userInfo);
		return;
	});
});

//用户退出操作
router.get('/user/logout', function (req, res, next) {

    //清空cookie中存放的登陆信息
    req.cookies.set('userInfo', null);
    res.json(responseData);

});

module.exports = router;

