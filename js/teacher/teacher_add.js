define(['aside','header','loading', 'nprogress', 'jquery','template','jqueryForm'],
 function (undefined,undefined,undefined, nprogress, $,template,undefined) {

    var urlSearch = location.search.slice(1);
    var urlSearchArr = urlSearch.split('&');
    var urlSearchObj ={},temp;
    for(var i=0; i<urlSearchArr.length;i++){
        temp = urlSearchArr[i].split('=');
        urlSearchObj[temp[0]]=temp[1];
    }
    // 判断参数中有没有tc_id，有则认为是编辑，没有则添加
    if(urlSearchObj.hasOwnProperty('tc_id')){
        teacherEdit();
    }else{
        teacherAdd();
    }

    // 添加讲师列表
    function teacherAdd(){
        // 把模板渲染到页面中，因为不需要回显数据，所以传递一个空对象即可
        $('.teacher').html(template('teacher-add-edit-tpl',{}));

        // 因为表单是动态生成的 所以要使用事件委托的方式来监听事件
        $(document).on('submit', '#teacher-add-edit-form',function(){
            // alert(1);
            $.post('/v6/teacher/add',$(this).serialize(),function(data){
                location.href = '/html/teacher/teacher_list.html';
            });
            return false;
        });
    };

    // 回显，根据表单url传入的tc_id属性回去对应的讲师详情信息然后回显数据
    function teacherEdit(){
        $.get('/v6/teacher/edit',{ tc_id: urlSearchObj.tc_id },function(data){
            $('.teacher').html(template('teacher-add-edit-tpl',data.result));
        });

        $(document).on('submit','#teacher-add-edit-form',function(){
            $.post('/v6/teacher/update',$(this).serialize(),function(data){
                location.href='/html/teacher/teacher_list.html';
            });
            return false;
        })
    }




     nprogress.done(); //进度条结束































    // // 添加讲师
    // (function () {
    //     $('.add-info').on('click', function () {
    //         if($('input[name=tc_name]').val()=='' || $('input[name=tc_pass]').val()=='' || $('input[name=tc_join_date]').val() ==''){
    //             return alert('信息不全，请重新填完整信息');
    //         }
    //         var getForm = document.querySelector('.tc-form');
    //         $.ajax({
    //             url: '/v6/teacher/add',
    //             data: $(getForm).serialize(),
    //             success: function (data) {
    //                 if (data.code === 200) {
    //                     alert('添加成功');
    //                     location.href='/html/teacher/teacher_list.html';
    //                 }
    //             }
    //         });
    //     })
    // })();

   
});

