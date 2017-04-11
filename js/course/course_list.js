define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template'], 

function($,undefined,undefined,undefined,nprogress,loading,template) {
    // 定义一个helper函数，这个函数也叫过滤器
    template.helper('random', function(source, param) {
		// param是一个字符串，里面包含两个信息：最小值和最大值，需要我们利用定好规则劈开得到不同的值
		var params = param.split(', ');
        // 随机数范围：最大值减去最小值，再加上最小值，得到一个随机范围
		return Math.ceil(Math.random() * (params[1] - params[0]) + params[0]);
	});

	$.get('/v6/course',function(data){
        if(data.code==200){
            $('.courses').append(template('course-list-tpl',data));
        }
    });

    nprogress.done();//进度条结束
});
