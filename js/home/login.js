// define(['jquery'], function ($) {
//     $('#login-form').on('submit', function () {
//         console.log(123);
//         console.log($(this).serialize());
//         $.ajax({
//             url: '/v6/login',
//             type: 'POST',
//             data: $(this).serialize(),
//             success: function (data) {
//                 console.log(data);
//                 if (data.code == 200) {
//                     localStorage.href = '/';

//                 };

//             },
//             error: function () {
//                 alert('输入错误');
//             }
//         })
//         return false; //阻止表单默认提交

//     })
// });
define(['jquery'], function($) {
    $('#login-form').on('submit',function () {
        console.log($(this).serialize());
        $.ajax({
                url:'/v6/login',
                type:'POST',
                data:$(this).serialize(),
                success:function (data) {
                    if(data.code == 200){
                        // location.href = '/';
                        console.log(123)
                    }
                },
                error:function () {
                    alert('账号密码不正确哦');
                }
            })
            return false;
    })
});

