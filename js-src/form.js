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

});
$(document).ready(function(){
  $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');

  //	On button click, let's scroll up to top
  $('#returnOnTop').click( function() {
       $('.site-content').animate({scrollTop: 0}, 'slow');
  });


  $('.site-content').scroll(function() {
      //	If on top fade the bouton out, else fade it in
      if ( $(this).scrollTop() <=1000 )
         $('#returnOnTop').fadeOut();
      else
         $('#returnOnTop').fadeIn();

  });
})
