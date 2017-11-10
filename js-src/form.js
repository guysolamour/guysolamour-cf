$(document).ready(function() {
    $('#header--icon').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').on('click', function() {
        $('body').removeClass('with--sidebar');
    })
});
$('body').css('backgoundColor', 'red')