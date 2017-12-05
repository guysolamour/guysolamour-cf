
$(document).ready(function() {
    $('#header__icon').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache,.menu a').on('click', function() {
        $('body').removeClass('with--sidebar');
    })


    // $('.menu a').on('click', function(){
    //   $('body').removeClass('with--sidebar')
    // })

    //	Add return on top button
    /*$(".scroll").click(function() {
      var section = $("." + this.id);
      $(".site-content").animate({scrollTop: section.offset().top}, 'slow');
    });*/

    window.sr = ScrollReveal({reset: true});

    var fooContainer = document.querySelector('.site-content');
      sr.reveal('.html,.css,.js,.php,.mysql,.wp,.ps,.illus,.word,.excel,.jq,.git,.bs,.gulp', {
               container: fooContainer,
               origin: 'left',
               duration: 1000,
               distance: '100%'
           });

});

  $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');

  	//On button click, let's scroll up to top
  $('#returnOnTop').click( function() {
       $('.site-content').animate({scrollTop: 0}, 'slow');
  });


  $('.site-content').scroll(function() {
      //	If on top fade the bouton out, else fade it in
      if ( $(this).scrollTop() <= 1000 )
         $('#returnOnTop').fadeOut();
      else
         $('#returnOnTop').fadeIn();

  //jQuery('.menu').singlePageNav();
  //fancy
  $("[data-fancybox]").fancybox({
    // Options will go here
      loop: true,
      protect: true
  });
})
