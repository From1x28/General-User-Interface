$(document).ready(function () {
    // Плавна поява карток при відкритті сторінки
    $('.lab-card').hide().fadeIn(400);

    // Підсвітка кнопки при наведенні
    $('.btn').hover(
        function () {
            $(this).addClass('shadow');
        },
        function () {
            $(this).removeClass('shadow');
        }
    );
});