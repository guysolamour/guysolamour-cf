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