$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $(".maintext");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".container").css('background', 'rgba(0,0,0,.75)');
            } else {
                $('.container').css('background', 'transparent');
            }
        });
    }
});