define(['jquery'],function($){
    $('#logout').on('click',function(){
        // alert(111);
        $.post('/v6/logout',function(data){
            data.code == 200 && (location.href='/html/home/login.html');
        });
    });
})