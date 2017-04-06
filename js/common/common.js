// define([],function(){
//     /**
//      * 判断用户有没有登录过，
//      * 没有的话就跳转到登录页面
//      */
//      var cookieArr = document.cookie.split('; ');//document.cookie获取的是所有的cookie
//      console.log(document.cookie);
//      var isLogin = false;
//      for(var i=0;i<cookieArr.length;i++){
//          //不全等于0表示没有登陆过，打到登录页面
//          //必须所有的cookie都没有PHPSESSID，才能算没有登录过
//         if(cookieArr[i].indexOf('PHPSESSID=')===0 ){
//             isLogin = true;
//             break;
//         }
//      }
//      !isLogin && (Location.href ='/html/home/login.html');//记得加括号
// });



// jqueryCookie搜索define定义的模块，但是像这种jquery插件,并没有返回东西，所有引入他们得到的返回值是undefine
define(['jquery','jqueryCookie'],function($,undefined){
    // 如果没有PHPSESSID这个cookie，证明没有登陆过，跳转到登陆页面
    if(!$.cookie('PHPSESSID')){
        location.href ='/html/home/login.html';
    }

});