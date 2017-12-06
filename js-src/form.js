
$(document).ready(function() {
    $('#header__icon').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache,.menu a').on('click', function() {
        $('body').removeClass('with--sidebar');
    })


  

    window.sr = ScrollReveal({reset: true});

    var fooContainer = document.querySelector('.site-content');
      sr.reveal('.html,.css,.js,.php,.mysql,.wp,.ps,.illus,.word,.excel,.jq,.git,.bs,.gulp', {
               container: fooContainer,
               origin: 'left',
               duration: 1000,
               distance: '100%'
           });


    $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');

    //On button click, let's scroll up to top
    $('#returnOnTop').click( function() {
         $('.site-content').animate({scrollTop: 0}, 'slow');
    });
    $('.site-content').scroll(function() {
      //  If on top fade the bouton out, else fade it in
      if ( $(this).scrollTop() <= 1000 )
         $('#returnOnTop').fadeOut();
      else
         $('#returnOnTop').fadeIn();
    })
    //jQuery('.menu').singlePageNav();
  //fancy
    $("[data-fancybox]").fancybox({
      // Options will go here
        loop: true,
        protect: true
    });
  
    
     $('[data-confirm]').on('click', function(e) {
           e.preventDefault();
           //Annuler l'action par dÃ©faut
           //RÃ©cupÃ©rer la valeur de l'attribut href
           var href = $(this).attr('href');

           //On aurait pu Ã©crire aussi
           //var message = $(this).attr('data-confirm');
           //Afficher la popup SweetAlert
           swal({
               title: "Envoi de message",
               text: "Voulez vous envoyer un message à cette adresse", //Utiliser la valeur de data-confirm comme text
               type: "warning",
               showCancelButton: true,
               cancelButtonText: "Annuler",
               confirmButtonText: "Oui, Envoyer!",
               confirmButtonColor: "green"
           }, function(isConfirm) {
               if (isConfirm) {
                   //Si l'utilisateur clique sur Oui,
                   //Il faudra le rediriger l'utilisateur vers la page
                   //de suppression
                   window.location.href = href;
               }
           });
       });

})
  

  
  


