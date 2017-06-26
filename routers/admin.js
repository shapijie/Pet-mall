//引入express
var express = require('express');

var router = express.Router();
var User = require('../models/User');

router.get('/',function (req, res, next){ 
	res.render('admin/index',{ 
		userInfo:req.userInfo
	});
});

router.use(function (req, res, next){ 
	if(!req.userInfo.isAdmin){ 
		res.send('对不起,您不能进入!');
		return;
	}
	next();
});

router.get('/head_module',function (req, res, next){ 
	res.render('admin/head_module',{ 
		userInfo:req.userInfo
	});
});

router.get('/section',function (req, res, next){ 
	res.render('admin/section',{ 
		userInfo:req.userInfo
	});
});

router.get('/user_module',function (req, res, next){ 
	res.render('admin/user_module',{ 
		userInfo:req.userInfo
	});
});



//处理后台用户显示逻辑


module.exports = router;