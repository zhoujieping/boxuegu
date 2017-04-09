define(['jquery', 'common','header','aside','nprogress','loading','template'], function($,undefined,undefined,undefined,nprogress,loading,template) {
	// 数据回显
    $.get('/v6/teacher/profile',function(data){
        if(data.code===200){
            $('.setting').html(template('setting-form-tpl',data.result));
        }
    })
});
