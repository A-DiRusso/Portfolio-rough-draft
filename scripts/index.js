// show and hide conde snippets
$('.one .code-button').click(function() {
    $('.one-code').slideToggle().css('float', 'right');
});
$('.two .code-button').click(function() {
    $('.two-code').slideToggle();
});
$('.three .code-button').click(function() {
    $('.three-code').slideToggle().css('float', 'right');
});
$('.four .code-button').click(function() {
    $('.four-code').slideToggle();
});
$('.portfolio').on('click', 'hide-button', function() {
    $('.code').slideUp();
});

//Tooltip Plug in
$('.tooltip').tooltipster({
    theme: 'tooltipster-shadow',
    animation: 'grow',
    side: 'bottom'
});


//Change highlighted nav item on scroll
$(window).scroll(function() {
    let navHeight = $('.nav').height(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height(),
        scroll = $(window).scrollTop(),
        about = $('#about').offset().top,
        portfolio = $('#portfolio').offset().top;

    if (scroll >= about - navHeight) {
        $('.menu li').removeClass('selected');
        
    }

})