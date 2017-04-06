define(['jquery', 'jqueryCookie'], function ($) {
    //   登录效验
    (function(){
        if($.cookie('PHPSESSID')){
            location.href='/';
        }
    })();



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
                    console.log(data);
                    location.href = '/'; //如果登录成功，跳转到首页
                }
            },
            error: function () {
                alert('账号或账号有误');
            }
        })
        return false;
    })
});