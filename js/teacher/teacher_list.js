define(['bootstrap', 'aside', 'header', 'loading', 'nprogress', 'jquery', 'template'], function (undefined, undefined, undefined, undefined, nprogress, $, template) {

    (function () {
        // 渲染讲师列表
        /**
         * 1.发送请求获取讲师列表
         * 2.请求成功后调用template方法得到讲师列表html
         * 3.将html添加到页面中即可
         */

        $.get('/v6/teacher', function (data) {
            if (data.code === 200) {
                $('.table-teacher-list').append(template('teacher-list-tpl', data));
            }
        });

    })();

    // 渲染讲师详情
    (function () {
        // 事件委托，给document注册事件，但是不会作用到document上
        $(document).on('click', '.teacher-view', function () {
            $.get('/v6/teacher/view', {
                tc_id: $(this).data('teacher-id')
            }, function (data) {
                if (data.code === 200) {
                    $('#teacher-modal').html(template('teacher-view-tpl', data.result));
                }
            });
        });
    })();



    // 注销/启用讲师
    (function(){
        // 事件委托
        $(document).on('click','.teacher-handle',function(){
            var self=this;
            $.post('/v6/teacher/handle',{
                    tc_id:$(this).data('teacher-id'),
                    tc_status:$(this).data('teacher-status')
            },function(data){
                if(data.code===200){
                    if(data.result.tc_status==0){// 状态为0代表开启状态，按钮的自定义属性为当前状态，但是按钮文字是与状态相反的
                        $(self).data('teacher-status',0);//传2个值代表设置属性
                        $(self).html('注销');
                    }else{
                        $(self).data('teacher-status',1);
                        $(self).html('启用');
                    }
                }
            });
        });
    })();

   

    nprogress.done(); //进度条结束
});