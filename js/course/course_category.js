define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template'],
 function($,undefined,undefined,undefined,nprogress,loading,template) {
	
    $.get('/v6/category',function(data){
        if(data.code==200){
            $('#course-category-table').append(template('course-category-tpl',data));
        }
    });

     nprogress.done();//进度条结束
});
