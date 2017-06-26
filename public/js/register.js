window.onload = function (){ 
	//标志符
	var flag_tel = false;
	var flag_idenss = false;
	var flag_chit = false;
	var flag_name = false;
	var flag_pass = false;
	var flag_regpass = false;
	console.log(flag_tel,flag_idenss,flag_chit,flag_name,flag_pass,flag_regpass);

	//跳转登录页面
	$('#skip').bind('click',function (){ 
		window.location.href = '/switch';
	})

	/*手机号正则验证*/
	    $("#userphone").blur(function() {  
			var regphone = /^\d{11}$/;  
			var userphone = $(this).val();    
			if (userphone.length <= 0 || !regphone.test(userphone)) {
				flag_tel = false;
				$('#regBtn').css({background:'#ededed',color:'#fff'});
				$(this).next().next().css('display','none');
				$(this).next().css('display','block');
				$(this).css({border:'#ff6f4a solid 1px',color:'#ff6f4a'});
				$('#regBtn').unbind();
			}else{
				flag_tel = true;
				$(this).next().css('display','none');
				$(this).next().next().css('display','block');
				$(this).css({border:'#ddd solid 1px',color:'#999'});
				if(flag_tel && flag_idenss && flag_chit && flag_name && flag_pass && flag_regpass){ 
					$('#regBtn').css({background:'#33cb98',color:'#fff'});
					$(function (){
					//用户进行注册操作
						$('#regBtn').bind('click',function (){ 
							//ajax提交数据
							$.ajax({ 
								type:'post',
								url:'/api/user/register',
								data:{ 
									regusername:$('#username').val(),
									regpassword:$('#userpassword').val(),
									regrepassword:$('#regpassword').val()
								},
								dataType:'json',
								success:function (res){
									$('#regMess').css('display','block').html(res.message);
									if(res.go == 'ok'){
										setTimeout(function (){ 
											window.location.href = '/switch';
										},2000)
									}
								}
							})
						})
					});
				}
			}
		});

	/*验证码正则验证*/
		$("#identifying").blur(function() {  
			var regidentifying = /^\w{4}$/;  
			var identifying = $(this).val();    
			if (identifying.length <= 0 || !regidentifying.test(identifying)) {
				flag_idenss = false;
				$('#regBtn').css({background:'#ededed',color:'#fff'});
				$(this).next().next().next().css('display','none');
				$(this).next().next().css('display','block');
				$(this).css({border:'#ff6f4a solid 1px',color:'#ff6f4a'});
				$('#regBtn').unbind();
			}else{
				flag_idenss = true;
				$(this).next().next().css('display','none');
				$(this).next().next().next().css('display','block');
				$(this).css({border:'#ddd solid 1px',color:'#999'});
				if(flag_tel && flag_idenss && flag_chit && flag_name && flag_pass && flag_regpass){ 
					$('#regBtn').css({background:'#33cb98',color:'#fff'});
					$(function (){
					//用户进行注册操作
						$('#regBtn').bind('click',function (){ 
							//ajax提交数据
							$.ajax({ 
								type:'post',
								url:'/api/user/register',
								data:{ 
									regusername:$('#username').val(),
									regpassword:$('#userpassword').val(),
									regrepassword:$('#regpassword').val()
								},
								dataType:'json',
								success:function (res){
									$('#regMess').css('display','block').html(res.message);
									if(res.go == 'ok'){
										setTimeout(function (){ 
											window.location.href = '/switch';
										},2000)
									}
								}
							})
						})
					});
				}
			}
		});

	/*短信验证码正则验证*/
		$("#userchit").blur(function() {  
			var reguserchit = /^\d{6}$/;  
			var userchit = $(this).val();    
			if (userchit.length <= 0 || !reguserchit.test(userchit)) {
				flag_chit = false;
				$('#regBtn').css({background:'#ededed',color:'#fff'});
				$(this).next().next().next().css('display','none');
				$(this).next().next().css('display','block');
				$(this).css({border:'#ff6f4a solid 1px',color:'#ff6f4a'});
				$('#regBtn').unbind();
			}else{
				flag_chit = true;
				$(this).next().next().css('display','none');
				$(this).next().next().next().css('display','block');
				$(this).css({border:'#ddd solid 1px',color:'#999'});
				if(flag_tel && flag_idenss && flag_chit && flag_name && flag_pass && flag_regpass){ 
					$('#regBtn').css({background:'#33cb98',color:'#fff'});
					$(function (){
					//用户进行注册操作
						$('#regBtn').bind('click',function (){ 
							//ajax提交数据
							$.ajax({ 
								type:'post',
								url:'/api/user/register',
								data:{ 
									regusername:$('#username').val(),
									regpassword:$('#userpassword').val(),
									regrepassword:$('#regpassword').val()
								},
								dataType:'json',
								success:function (res){
									$('#regMess').css('display','block').html(res.message);
									if(res.go == 'ok'){
										setTimeout(function (){ 
											window.location.href = '/switch';
										},2000)
									}
								}
							})
						})
					});
				}
			}
		});

	/*用户名正则验证*/
	    $("#username").blur(function() {  
			var regname = /^\w{4,12}$/;  
			var username = $(this).val();    
			if (username.length <= 0 || !regname.test(username)) {
				flag_name = false;
				$('#regBtn').css({background:'#ededed',color:'#fff'});
				$(this).next().next().css('display','none');
				$(this).next().css('display','block');
				$(this).css({border:'#ff6f4a solid 1px',color:'#ff6f4a'});
				$('#regBtn').unbind();
			}else{
				flag_name = true;
				$(this).next().css('display','none');
				$(this).next().next().css('display','block');
				$(this).css({border:'#ddd solid 1px',color:'#999'});
				if(flag_tel && flag_idenss && flag_chit && flag_name && flag_pass && flag_regpass){ 
					$('#regBtn').css({background:'#33cb98',color:'#fff'});
					$(function (){
					//用户进行注册操作
						$('#regBtn').bind('click',function (){ 
							//ajax提交数据
							$.ajax({ 
								type:'post',
								url:'/api/user/register',
								data:{ 
									regusername:$('#username').val(),
									regpassword:$('#userpassword').val(),
									regrepassword:$('#regpassword').val()
								},
								dataType:'json',
								success:function (res){
									$('#regMess').css('display','block').html(res.message);
									if(res.go == 'ok'){
										setTimeout(function (){ 
											window.location.href = '/switch';
										},2000)
									}
								}
							})
						})
					});
				}
			}
		});

	/*密码正则验证*/
	    $("#userpassword").blur(function() {  
			var regpassword = /^\w{8,20}$/;  
			var userpassword = $(this).val();    
			if (userpassword.length <= 0 || !regpassword.test(userpassword)) {
				flag_pass = false;
				$('#regBtn').css({background:'#ededed',color:'#fff'});
				$(this).next().next().css('display','none');
				$(this).next().css('display','block');
				$(this).css({border:'#ff6f4a solid 1px',color:'#ff6f4a'});
				$('#regBtn').unbind();
			}else{
				flag_pass = true;
				$(this).next().css('display','none');
				$(this).next().next().css('display','block');
				$(this).css({border:'#ddd solid 1px',color:'#999'});
				if(flag_tel && flag_idenss && flag_chit && flag_name && flag_pass && flag_regpass){ 
					$('#regBtn').css({background:'#33cb98',color:'#fff'});
					$(function (){
					//用户进行注册操作
						$('#regBtn').bind('click',function (){ 
							//ajax提交数据
							$.ajax({ 
								type:'post',
								url:'/api/user/register',
								data:{ 
									regusername:$('#username').val(),
									regpassword:$('#userpassword').val(),
									regrepassword:$('#regpassword').val()
								},
								dataType:'json',
								success:function (res){
									$('#regMess').css('display','block').html(res.message);
									if(res.go == 'ok'){
										setTimeout(function (){ 
											window.location.href = '/switch';
										},2000)
									}
								}
							})
						})
					});
				}
			}
		});

	/*再次密码正则验证*/
	    $("#regpassword").blur(function() {  
			var regregpassword = /^\w{8,20}$/;  
			var regpassword = $(this).val();    
			if (regpassword.length <= 0 || !regregpassword.test(regpassword)) {
				flag_regpass = false;
				$('#regBtn').css({background:'#ededed',color:'#fff'});
				$(this).next().next().css('display','none');
				$(this).next().css('display','block');
				$(this).css({border:'#ff6f4a solid 1px',color:'#ff6f4a'});
				$('#regBtn').unbind();
			}else{
				flag_regpass = true;
				$(this).next().css('display','none');
				$(this).next().next().css('display','block');
				$(this).css({border:'#ddd solid 1px',color:'#999'});
				if(flag_tel && flag_idenss && flag_chit && flag_name && flag_pass && flag_regpass){ 
					$('#regBtn').css({background:'#33cb98',color:'#fff'});
					$(function (){
					//用户进行注册操作
						$('#regBtn').bind('click',function (){ 
							//ajax提交数据
							$.ajax({ 
								type:'post',
								url:'/api/user/register',
								data:{ 
									regusername:$('#username').val(),
									regpassword:$('#userpassword').val(),
									regrepassword:$('#regpassword').val()
								},
								dataType:'json',
								success:function (res){
									$('#regMess').css('display','block').html(res.message);
									if(res.go == 'ok'){
										setTimeout(function (){ 
											window.location.href = '/switch';
										},2000)
									}
								}
							})
						})
					});
				}
			}
		});

	/*开启确定按钮*/
	/*
		if(flag_tel && flag_idenss && flag_chit && flag_name && flag_pass && flag_regpass){ 
			$('#regBtn').css({background:'#33cb98',color:'#fff'});
			$(function (){
			//用户进行注册操作
				$('#regBtn').bind('click',function (){ 
					//ajax提交数据
					$.ajax({ 
						type:'post',
						url:'/api/user/register',
						data:{ 
							regusername:$('#username').val(),
							regpassword:$('#userpassword').val(),
							regrepassword:$('#regpassword').val()
						},
						dataType:'json',
						success:function (res){
							$('#regMess').css('display','block').html(res.message);
							if(res.go == 'ok'){
								setTimeout(function (){ 
									window.location.href = '/switch';
								},2000)
							}
						}
					})
				})
			});
		}
	*/

	//取消密码不同提示
	$("#userphone").bind('focusin',function (){ 
		$('#regMess').css('display','none');
	})
	$("#identifying").bind('focusin',function (){ 
		$('#regMess').css('display','none');
	})
	$("#userchit").bind('focusin',function (){ 
		$('#regMess').css('display','none');
	})
	$("#username").bind('focusin',function (){ 
		$('#regMess').css('display','none');
	})
	$("#userpassword").bind('focusin',function (){ 
		$('#regMess').css('display','none');
	})
	$("#regpassword").bind('focusin',function (){ 
		$('#regMess').css('display','none');
	})



	/*注册验证*/
	/*
		$(function (){
			//用户进行注册操作
			$('#regBtn').bind('click',function (){ 
				//ajax提交数据
				$.ajax({ 
					type:'post',
					url:'/api/user/register',
					data:{ 
						regusername:$('#username').val(),
						regpassword:$('#userpassword').val(),
						regrepassword:$('#regpassword').val()
					},
					dataType:'json',
					success:function (res){
						$('#regMess').css('display','block').html(res.message);
						if(res.go == 'ok'){
							setTimeout(function (){ 
								window.location.href = '/switch';
							},2000)
						}
					}
				})
			})
		});
	*/
}