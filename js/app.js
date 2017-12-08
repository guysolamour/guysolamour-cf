'use strict';

$(document).ready(function () {
    $('#header__icon').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache,.menu a').on('click', function () {
        $('body').removeClass('with--sidebar');
    });

    window.sr = ScrollReveal({ reset: true });

    var fooContainer = document.querySelector('.site-content');
    sr.reveal('.html,.css,.js,.php,.mysql,.wp,.ps,.illus,.word,.excel,.jq,.git,.bs,.gulp', {
        container: fooContainer,
        origin: 'left',
        duration: 1000,
        distance: '100%'
    });

    $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');

    //On button click, let's scroll up to top
    $('#returnOnTop').click(function () {
        $('.site-content').animate({ scrollTop: 0 }, 'slow');
    });
    $('.site-content').scroll(function () {
        //  If on top fade the bouton out, else fade it in
        if ($(this).scrollTop() <= 1000) $('#returnOnTop').fadeOut();else $('#returnOnTop').fadeIn();
    });
    //jQuery('.menu').singlePageNav();
    //fancy
    $("[data-fancybox]").fancybox({
        // Options will go here
        loop: true
        //protect: true
    });

    $('[data-confirm]').on('click', function (e) {
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
        }, function (isConfirm) {
            if (isConfirm) {
                //Si l'utilisateur clique sur Oui,
                //Il faudra le rediriger l'utilisateur vers la page
                //de suppression
                window.location.href = href;
            }
        });
    });
    // ce selecteur est à revoir "a[href^=#]"
    if ($('body').hasClass('with--sidebar')) {
        console.log('juste');
    }
    /*$(".menu a").on('click', function(ev){
     		ev.preventDefault()
      		//déclaration des variables
     		let cible,hauteur;
      		// recuperer l'attribut href du lien cliqué
     		cible = $(this).attr('href')
      		// verifier si l'attribut href selection
     		//correspon à l' id d'un élement dans la page
      		if($(cible).length >= 1){
     			hauteur = $(cible).offset().top
     		}
      		// animation du scroll
           $('.site-content').animate({
       			scrollTop: hauteur
       		},1000)
            // console.log($('body').hasClass('with--sidebar'))
    })*/
});

var form = document.getElementById('contact-form');

var inputs = form.querySelectorAll('input,textarea');

var input_error = false;
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
form.addEventListener('submit', function (ev) {
    if (this.name.value.length === 0) {
        ev.preventDefault();
        //this.name.nextElementSibling.innerHTML = ''
        this.name.classList.add('shake');
        //this.name.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
        this.name.style.backgroundColor = 'pink';
    }
    if (!regex.test(this.email.value)) {
        ev.preventDefault();
        //this.email.nextElementSibling.innerHTML = ''
        this.email.classList.add('shake');
        //  this.email.nextElementSibling.innerHTML = 'Veuillez saisir une adresse valide'
        this.email.style.backgroundColor = 'pink';
    }

    if (this.tel.value.length < 2) {
        ev.preventDefault();
        //this.tel.nextElementSibling.innerHTML = ''
        this.tel.classList.add('shake');
        //this.tel.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
        this.tel.style.backgroundColor = 'pink';
    }
    if (this.msg.value.length < 2) {
        ev.preventDefault();
        this.msg.classList.add('shake');
        //this.msg.nextElementSibling.innerHTML = ''
        //this.msg.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
        this.msg.style.backgroundColor = 'pink';
    }
});

inputs.forEach(function (input) {

    input.addEventListener('blur', function (ev) {
        var next = this.nextElementSibling;
        this.style.backgroundColor = 'white';
        if (this.value.length < 2) {
            //next.innerHTML = ''
            //next.innerHTML = 'Veuillez remplir ce champ'

            this.style.backgroundColor = 'pink';
        }
    });

    input.addEventListener('keyup', function (ev) {

        var next = this.nextElementSibling;
        if (this.value.length > 1) {
            //next.innerHTML = ''
            this.style.backgroundColor = '#fff';
        } else {
            //next.innerHTML = ''
            this.style.backgroundColor = '';
        }
    });
});