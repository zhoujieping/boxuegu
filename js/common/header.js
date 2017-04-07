define(['jquery'],function($){
    $('#logout').on('click',function(){
        // alert(111);
        $.post('/v6/logout',function(data){
            //接口文档code有问题，返回的是字符串，所以不能用===
            data.code == 200 && (location.href='/html/home/login.html');
        });
    });
})