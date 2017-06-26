window.onload = function (){ 
	$(function (){

		//切换手机登录
		$('#right_btn').bind('click',function (){ 
			$('#switch').css('marginLeft','-296px');
			$(this).addClass('active').siblings().removeClass('active');
		});

		//切换正常登陆
		$('#left_btn').bind('click',function (){ 
			$('#switch').css('marginLeft','0px');
			$(this).addClass('active').siblings().removeClass('active');
		});

		//清除错误提示操作
		$('#username').focusin(function (){ 
			$('#und_name').css('display','none');
			$('#error_name').html('');
		}).blur(function (){ 
			$('#und_name').css('display','none');
			$('#error_name').html('');
		})

		$('#password').focusin(function (){ 
			$('#prompt_error').css('display','none');
			$('#error_pass').html('');
		}).blur(function (){ 
			$('#prompt_error').css('display','none');
			$('#error_pass').html('');
		})

		//跳转注册页面
		$('#skip').bind('click',function (){ 
			window.location.href = '/register';
		})


		//登录操作
		$('#entryBtn').bind('click',function(){
			$.ajax({ 
				type:'post',
				url:'/api/user/login',
				data:{ 
					username:$('#username').val(),
					password:$('#password').val(),
					checked:$('#check').attr('checked')
				},
				dataType:'json',
				success:function (res){
					if(res.entry == 'username'){
						$('#und_name').css('display','block');
						$('#error_name').html(res.message);
					}
					if(res.entry == 'password'){
						$('#prompt_error').css('display','block')
						$('#error_pass').html(res.message);
					}
					if(!res.code){
						console.log(111111);
						window.location.href = '/';
					}
				}
			})
		})
	})
}