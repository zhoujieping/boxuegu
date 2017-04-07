define(['jquery', 'jqueryCookie', 'template'], function ($, undefined, template) {
    (function () {
        /**
         * 1、获取本地存储的用户信息
         * 2、把用户信息解析为js对象方便使用
         * 3、拼接用户信息模版字符串
         * 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
         * 5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
         * 6、最后把这个html替换到页面指定位置
         * */
        // 1、获取本地存储的用户信息,cookie获取的是字符串
        var userInfoStr = $.cookie('userInfo');
        // 2、拼接用户信息模版字符串
        var userInfoObj;
        try {
            userInfoObj = JSON.parse(userInfoStr);
        } catch (e) {
            userInfoObj = {};
        }

        // 3、拼接用户信息模版字符串
        var prifileTpl =
            '<div class="profile">' +
            '<div class="avatar img-circle">' +
            '<img src={{ tc_avatar? tc_avatar : "/img/default.png" }}>' +
            '</div>' +
            '<h4>{{ tc_name }}</h4>' +
            '</div>';

        // 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
        var userInfoRender = template.compile(prifileTpl);
        // console.log(userInfoRender);
        //  5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
        var userInfoHTML = userInfoRender(userInfoObj);
        // 6、最后把这个html替换到页面指定位置
        $('.aside').prepend(userInfoHTML);

    })();

    //     // // 导航栏下拉列表
    (function () {
        // 点击具有下拉功能的a标签，显示隐藏对应的ul列表
        $('#navSlide').on('click', function () {
            // alert(1);
            $(this).next().slideToggle();
        });
    })();


    // 根据页面定义左侧焦点，鼠标移上去背景变色
    (function () {
        /**
         * 1.获取当前页面的路径
         * 2.移除所有a标签的active类名
         * 3.把路径当做属性选择器选择页面对应的a标签，给对应的a标签单独添加
         */
        var patHref = {
            '/html/teacher/teacher_add.html': '/html/teacher/teacher_list.html'
        };
        var pathname = location.pathname;
        //属性选择器
        var aHref = patHref[pathname] ? patHref[pathname] : pathname;
        $('.navs a').removeClass('active').filter('[href="' + aHref + '"]').addClass('active');
    })();

});