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



// jqueryCookie是define定义的模块，但是像这种jquery插件,并没有返回东西，所有引入他们得到的返回值是undefine
define(['jquery', 'jqueryCookie'], function ($, undefined ) {
    //登录校验
    (function () {
        // 如果没有PHPSESSID这个cookie，证明没有登陆过，跳转到登陆页面
        if (!$.cookie('PHPSESSID')) {
            location.href = '/html/home/login.html';
        }
    })();


    // 对外暴露一个对象
    return{
        // age:100 //测试


        // 把页面中的查询字符串转成为对象的形式
        parseSearch:function(searchName){
            // location.search;//当以get方式在url中传递了请求参数时，可以利用location的search属性提取参数的值,连问号也获取到
            var searchArr = location.search.slice(1).split('&');//得到一个数组
            var searchObj = {},tempArr;
            for(var i=0;i<searchArr.length;i++){
                   tempArr= searchArr[i].split('=');
                   searchObj[tempArr[0]] =tempArr[1];//searchObj[tempArr[0]]为key,tempArr[1]为value
            }
           // 如果没有传参，那么返回对象，传了，返回指定的参数值
            return (searchName==null)? searchObj:searchObj[searchName];
        }
    };
    
});