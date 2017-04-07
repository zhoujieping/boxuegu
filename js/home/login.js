define(['jquery', 'jqueryCookie','nprogress'], function ($,undefined,nprogress) {
    //   登录效验
    (function () {
        if ($.cookie('PHPSESSID')) {
            location.href = '/';
        }
    })();



    (function () {
        // 表单提交
        $('#login-form').on('submit', function () {
            // console.log($(this).serialize());
            // console.log($(this).serializeArray());
            $.ajax({
                url: '/v6/login', //已经配置好反向代理解决跨域错误
                type: 'POST',
                // 这里的this是form表单的原生对象，对form进行包装才可以调用jq方法
                data: $(this).serialize(), //传入这种类型的值，jquery也可以处理的
                success: function (data) {
                    if (data.code == 200) {
                        // 登录成功后立刻将获取的数据储存在cookie中方便登录之后的其他页面从cookie中获取数据
                        $.cookie('userInfo', JSON.stringify(data.result), { //cookie存的是字符串，而获取回来的数据是对象，所以要调用方法转换成字符串
                            path: '/'  //注意设置path属性，不然默认为当前路径，其他页面无法使用
                        });
                        console.log(data);
                        location.href = '/'; //如果登录成功，跳转到首页
                    }
                },
                error: function () {
                    alert('账号或账号有误');
                }
            })
            return false;
        });
    })();

    // 页面所有代码执行完毕，进度条结束
	nprogress.done();
});