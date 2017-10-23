$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	$('.m2-cont li:nth-child(2)').click(function () {
		$('.m2-yingyu').show()
    })
    $('.m2-yingyu').click(function () {
		$(this).hide()
    })
    //main5选项卡
    $('.m5-btn-box li').each(function (index) {
        $(this).click(function () {
            for(var i=0;i<4;i++){
                $('.m5-btn-box li').eq(i).css({'background-image':'url("images/m5-1.png")','background-size':'4.25rem 1.475rem'})
            }
            $(this).css({'background-image':'url("images/m5-1-2.png")','background-size':'4.25rem 1.75rem'})
            $('.m5-show').hide().eq(index).show()
        })
    })
    //main1预约弹框显示与隐藏
    $(".m1-form input[type='button']").click(function () {
        $('.tankuang1').show(0,function () {
            $('.tankuang1 img').click(function () {
                $(this).parent().hide()
            })
        })
    })
    //main9预约弹框显示与隐藏
    $(".m9-form input[type='button']").click(function () {
        $('.tankuang2').show(0,function () {
            $('.tankuang2 img').click(function () {
                $(this).parent().hide()
            })
        })
    })
})