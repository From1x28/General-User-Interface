$(document).ready(function () {
    $('.lab-card').hide().fadeIn(400);

    $('.btn').hover(
        function () {
            $(this).addClass('shadow');
        },
        function () {
            $(this).removeClass('shadow');
        }
    );
});
