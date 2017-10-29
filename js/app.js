'use strict';

// (function() {
//     var scrollY = function() {
//         var supportPageOffset = window.pageXOffset !== undefined;
//         var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//         // var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
//         return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
//     }

//     var elements = document.querySelectorAll('[data-sticky]');
//     for (var i = 0; i < elements.length; i++) {
//         (function(element) {
//             var rect = element.getBoundingClientRect();
//             console.log(rect);
//             var offset = parseInt(element.getAttribute('data-offset') || 0, 10);
//             var top = rect.top + scrollY();
//             var fake = document.createElement('div');
//             fake.style.width = rect.width + 'px';
//             fake.style.height = rect.height + 'px';
//             //Functions
//             var onScroll = function() {
//                 var hasScroll = element.classList.contains('fixed');
//                 if (scrollY() > top - offset && !hasScroll) {
//                     element.classList.add('fixed');
//                     element.style.top = offset + 'px';
//                     element.style.width = rect.width + 'px';
//                     element.parentNode.insertBefore(fake, element);
//                 } else if (scrollY() < top - offset && hasScroll) {
//                     element.classList.remove('fixed');
//                     element.parentNode.removeChild(fake);
//                 }
//             }
//             var onResize = function() {
//                     element.style.width = 'auto';
//                     element.classList.remove('fixed');
//                     fake.style.display = 'none';
//                     rect = element.getBoundingClientRect();
//                     top = rect.top + scrollY();
//                     fake.style.width = rect.width + 'px';
//                     fake.style.height = rect.height + 'px';
//                     fake.style.display = 'block';
//                     onScroll();
//                 }
//                 // Listeners
//             window.addEventListener('scroll', onScroll);
//             window.addEventListener('resize', onResize);

//         })(elements[i]);
//     }
// })();
// let form = document.forms[0];
// // let username = document.querySelector('input[name=username]');
// // let email = document.querySelector('input[name=email]');
// // let age = document.querySelector('input[name=age]');
// // let password = document.querySelector('input[name=password]');

// let inputs = form.querySelectorAll('input')

// form.addEventListener('submit', (ev) => {
//     //ev.preventDefault()
//     let a = true;
//     if (this.name.value.length < 2 || this.username.value.length > 25) {
//         ev.preventDefault()
//         this.name.nextElementSibling.innerHTML = ''
//         this.name.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
//         this.name.style.backgroundColor = 'pink'
//         a = false
//     }
//     if (this.email.value.length < 2 || this.email.value.length > 25) {
//         ev.preventDefault()
//         this.email.nextElementSibling.innerHTML = ''
//         this.email.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
//         this.email.style.backgroundColor = 'pink'
//         a = false;
//     }

//     if (!a) {
//         ev.preventDefault()
//         alert('salut')
//     }

// })


// for (let i = 0; i < inputs.length; i++) {
//     let input = inputs[i]

//     input.addEventListener('blur', function(ev) {
//         let next = this.nextElementSibling;
//         if (this.value.length < 2 || this.value.length > 25) {
//             next.innerHTML = ''
//             next.innerHTML = 'Veuillez remplir ce champ'
//             this.style.backgroundColor = 'pink'
//             return false;
//         } else {
//             return true;
//         }
//     })

//     input.addEventListener('keyup', function(ev) {
//         let next = this.nextElementSibling;
//         if (this.value.length <= 3) {
//             next.innerHTML = ''
//             next.innerHTML = 'Ce champ doit faire plus de 3 caractères'
//             this.style.backgroundColor = 'pink'
//             return false;
//         } else {
//             next.innerHTML = ''
//             this.style.backgroundColor = 'lightgreen'
//             return true;
//         }
//     })
// }
var form = document.getElementById('contact-form');

var inputs = form.querySelectorAll('input,textarea');

var input_error = false;
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
form.addEventListener('submit', function (ev) {
    if (this.name.value.length === 0) {
        ev.preventDefault();
        this.name.nextElementSibling.innerHTML = '';
        this.name.classList.add('shake');
        this.name.nextElementSibling.innerHTML = 'Veuillez remplir ce champ';
        this.name.style.backgroundColor = 'pink';
    }
    if (!regex.test(this.email.value)) {
        ev.preventDefault();
        this.email.nextElementSibling.innerHTML = '';
        this.email.classList.add('shake');
        this.email.nextElementSibling.innerHTML = 'Veuillez saisir une adresse valide';
        this.email.style.backgroundColor = 'pink';
    }

    if (this.tel.value.length < 2) {
        ev.preventDefault();
        this.tel.nextElementSibling.innerHTML = '';
        this.tel.classList.add('shake');
        this.tel.nextElementSibling.innerHTML = 'Veuillez remplir ce champ';
        this.tel.style.backgroundColor = 'pink';
    }
    if (this.msg.value.length < 2) {
        ev.preventDefault();
        this.msg.classList.add('shake');
        this.msg.nextElementSibling.innerHTML = '';
        this.msg.nextElementSibling.innerHTML = 'Veuillez remplir ce champ';
        this.msg.style.backgroundColor = 'pink';
    }
});

inputs.forEach(function (input) {

    input.addEventListener('blur', function (ev) {
        var next = this.nextElementSibling;
        this.style.backgroundColor = 'white';
        if (this.value.length < 2) {
            next.innerHTML = '';
            next.innerHTML = 'Veuillez remplir ce champ';

            this.style.backgroundColor = 'pink';
        }
    });

    input.addEventListener('keyup', function (ev) {

        var next = this.nextElementSibling;
        if (this.value.length > 1) {
            next.innerHTML = '';
            this.style.backgroundColor = 'white';
        } else {
            next.innerHTML = '';
            this.style.backgroundColor = '';
        }
    });
});