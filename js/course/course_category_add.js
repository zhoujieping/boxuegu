define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template', 'jqueryForm'], 
	function($, common, undefined, undefined, nprogress, loading, template, undefined) {
        // define可以return一个返回值，return的话就可以得到一个返回值，在common.js中return一个值
        //  测试返回值
        //  console.log(100); 
        // 现在把这块独立成一个公共的模块，放在common.js中


        // 不管是添加还是编辑，都要获取一个回显的数据，这个数据对添加来说就是空对象，对编辑来说就不是空对象，但不管怎样都要有这个数据
        // 有这个数据就要通过模板渲染出来，最后都是添加，，添加时候用一个插件
    /**
     * 对代码封装：
	 * 1、通过search区分是添加还是编辑
	 * 2、不同页面功能采取不同的方式获取页面回显数据
	 * 2.1、添加页面直接给个空对象，但是仍然需要请求接口获取顶级分类，然后把结果添加到这个空对象中
	 * 2.2、编辑页面需要请求接口获取
	 * 3、通过模版引擎把数据渲染到页面中
	 * 4、通过表单提交插件初始化表单提交功能
	 * */        

  // 如果查询字符串cg_id不等于null和undefined，那么就认为存在这个值,存在就是编辑，否则就是添加
  // console.log(common.parseSearch());//查询
    // console.log(common.parseSearch('cg_id'));//传参数得到具体的参数值
    var cg_id =common.parseSearch('cg_id');
     if(cg_id != null){
        $.get('/v6/category/edit',{
            cg_id:cg_id
        },function(data){
            if(data.code==200){
                render(data.result);//调用下面封装的方法将数据渲染到页面
            }
        })
     }else{
        $.get('/v6/category/top',function(data){
             if(data.code==200){
                 // 为了使用和编辑相同的模版，所以传入的对象，
				// 用于和编辑一样的数据结构，都有一个top属性存储所有的顶级分类。
                 //  var obj ={};                
                // obj.top = data.result;
                render({top: data.result});//调用下面封装的方法将数据渲染到页面
            }
        });
     }

    //  通过传入的数据渲染到页面
    function render(data){
        $('.category-add').html(template('course-category-edit-tpl',data));
    }
    

    // 通过表单提供的插件，初始化表单提交功能，记得依赖引入插件
    (function initForm(){
        $('#course-category-edit-form').ajaxForm({
            delegation:true,// 配置委托方式绑定事件，这样即使form不存在是动态创建的也没有关系
            success:function(data){
                if(data.code==200){
                    location.href='/html/course/course_category.html';
                }
            }
        })
    })();
    nprogress.done();//进度条结束
});

