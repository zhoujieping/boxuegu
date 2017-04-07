define(['jquery'], function ($) {
    //ajax-loading
    (function () {
        // jquery会在document上触发事件
        $(document).on('ajaxStart', function () {
            $('.overlay').show();
        }).on('ajaxStop', function () {
            $('.overlay').hide();
        });

    })();

    
})
