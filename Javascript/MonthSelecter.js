$.fn.monthSelecter = function () {
    var monthDiv = '<div class="month">' +
                   '<table>' +
                   '<tr><td><input class="input_num" type="text" value="1" readonly /></td><td><input class="input_num" type="text" value="2" readonly /></td><td><input class="input_num" type="text" value="3" readonly /></td><td><input class="input_num" type="text" value="4" readonly /></td></tr>' +
                   '<tr><td><input class="input_num" type="text" value="5" readonly /></td><td><input class="input_num" type="text" value="6" readonly /></td><td><input class="input_num" type="text" value="7" readonly /></td><td><input class="input_num" type="text" value="8" readonly /></td></tr>' +
                   '<tr><td><input class="input_num" type="text" value="9" readonly /></td><td><input class="input_num" type="text" value="10" readonly /></td><td><input class="input_num" type="text" value="11" readonly /></td><td><input class="input_num" type="text" value="12" readonly /></td></tr>' +
                   '</table>' +
                   '<input type="button" name="" id="sure" value="确认" /><input type="button" name="" id="cancle" value="清空" />' +
                   '</div>';

    this.on("focus", function () {
        //先把之前显示的清除掉
        $('.month').remove();
        var this_ = $(this);
        //当前阶段后面追加月份选择容器
        this_.after(monthDiv);

        /*判断已选择的月份，开始*/
        var currentMonths = this_.val().split('月 '); //当前阶段已经选择的值
        //获取当前阶段已选中的月份
        currentMonths.forEach(function (e) {
            if (e > 0) {
                $('.input_num').each(function (index, ele) {
                    var now = $('.input_num').eq(index);
                    if (e == now.val()) {
                        now.addClass("active");
                    }
                });
            }
        });
        /*判断已选择的月份，结束*/

        /*判断不可选的月份，开始*/
        //其他阶段选择的月份，在此阶段不可选
        this_.siblings('.ms').each(function (index, ele) {
            currentMonths = $(ele).val().split('月 '); //当前阶段已经选择的值
            //获取当前阶段已选中的月份
            currentMonths.forEach(function (e) {
                if (e > 0) {
                    $('.input_num').each(function (index, ele) {
                        var now = $('.input_num').eq(index);
                        if (e == now.val()) {
                            now.prop('disabled', 'disabled');
                        }
                    });
                }
            });
        });
        /*判断不可选的月份，结束*/

        //某个月份被单击事件
        $('.input_num').on('click', function () {
            $(this).toggleClass('active'); //月份选中状态
            var textM = ""; //阶段显示值
            //遍历所有月份，获取选中的月份，并显示到阶段中
            $('.input_num').each(function (index, ele) {
                var now = $('.input_num').eq(index);
                if (now.attr('class').indexOf('active') > 0) {
                    textM += now.val() + "月 ";
                }
            });
            this_.val(textM);
        });

        $('#sure').on('click', function () {
            //遍历所有月份，获取选中的月份，并显示到阶段中
            $('.input_num').each(function (index, ele) {
                var now = $('.input_num').eq(index);
                if (now.attr('class').indexOf('active') > 0) {
                    console.log(now.val());
                }
            });
            $('.month').remove();
        });
    });

    function hide() {
        $('.month').remove();
    }
}