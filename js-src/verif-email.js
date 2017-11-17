let form = document.getElementById('contact-form');

let inputs = form.querySelectorAll('input,textarea')

let input_error = false;
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
form.addEventListener('submit', function(ev) {
    if (this.name.value.length === 0) {
        ev.preventDefault()
        //this.name.nextElementSibling.innerHTML = ''
        this.name.classList.add('shake')
        //this.name.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
        this.name.style.backgroundColor = 'pink'
    }
    if (!regex.test(this.email.value)) {
        ev.preventDefault()
        //this.email.nextElementSibling.innerHTML = ''
        this.email.classList.add('shake')
      //  this.email.nextElementSibling.innerHTML = 'Veuillez saisir une adresse valide'
        this.email.style.backgroundColor = 'pink'
    }

    if (this.tel.value.length < 2) {
        ev.preventDefault()
        //this.tel.nextElementSibling.innerHTML = ''
        this.tel.classList.add('shake')
        //this.tel.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
        this.tel.style.backgroundColor = 'pink'
    }
    if (this.msg.value.length < 2) {
        ev.preventDefault()
        this.msg.classList.add('shake')
        //this.msg.nextElementSibling.innerHTML = ''
        //this.msg.nextElementSibling.innerHTML = 'Veuillez remplir ce champ'
        this.msg.style.backgroundColor = 'pink'
    }


})



inputs.forEach(function(input) {


    input.addEventListener('blur', function(ev) {
        let next = this.nextElementSibling;
        this.style.backgroundColor = 'white'
        if (this.value.length < 2) {
            //next.innerHTML = ''
            //next.innerHTML = 'Veuillez remplir ce champ'

            this.style.backgroundColor = 'pink'
        }
    })

    input.addEventListener('keyup', function(ev) {

        let next = this.nextElementSibling;
        if (this.value.length > 1) {
            //next.innerHTML = ''
            this.style.backgroundColor = '#fff'
        } else {
            //next.innerHTML = ''
            this.style.backgroundColor = ''
        }
    })
})
