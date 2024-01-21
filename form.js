let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    let email = document.querySelector('#email')

    if(email.value == '') {
        email.classList.remove('success')
        email.classList.add('wrong')
        console.log('Invalide !')
    } else {
        email.classList.remove('wrong')
        email.classList.add('success')
        console.log('Valide !')
    }

    
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    let prenom = document.querySelector('#prenom')

    if(prenom.value == ''){

        errorContainer.classList.add('visible')
        prenom.classList.remove('success')


        let err = document.createElement('li')
        prenom.classList.add('wrong')
        err.innerText = "Le champ prénom ne peut pas être vide"

        errorList.appendChild(err)

    } else {
        prenom.classList.add('success')
    }
    /*-------------------------------*/
    let nom = document.querySelector('#nom')

    if(nom.value == ''){

        errorContainer.classList.add('visible')
        nom.classList.remove('success')


        let err = document.createElement('li')
        nom.classList.add('wrong')
        err.innerText = "Le champ nom ne peut pas être vide"

        errorList.appendChild(err)

    } else {
        nom.classList.add('success')
    }
    /*------------------------------*/

    if(email.value == ''){

        errorContainer.classList.add('visible')
        email.classList.remove('success')


        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut pas être vide"

        errorList.appendChild(err)
    } else {
        email.classList.add('success')
    }
    
    /*------------------------------*/
    let password = document.querySelector('#password')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])"
    )

    if(password.value == ''){

        errorContainer.classList.add('visible')
        password.classList.remove('success')


        let err = document.createElement('li')
        password.classList.add('wrong')
        err.innerText = "Le champ mot de passe ne peut pas être vide"

        errorList.appendChild(err)
    } else {
        if(password.value.length < 10 || passCheck.test(password.value) == false){
            errorContainer.classList.add('visible')
            password.classList.remove('success')

            let err =document.createElement('li')
            password.classList.add('wrong')
            err.innerText = "Le mot de passe doit faire 10 caractères minimumu, contenir minuscule, majuscule,chiffre, caractère spécial"

            errorList.appendChild(err)
        } else {
            password.classList.add('success')
        }
    }
    
    /*------------------------------*/
    let password2 = document.querySelector('#password2')

    if(password2.value == ''){

        errorContainer.classList.add('visible')
        password2.classList.remove('success')


        let err = document.createElement('li')
        err.innerText = "Le champ validation du mot de passe ne peut pas être vide"
        password2.classList.add('wrong')
        errorList.appendChild(err)
    } else {
        password2.classList.add('success')
    }

    /*--------------------------*/
    let passwordInitial = document.querySelector('#password')
    let passwordReapeat = document.querySelector('#password2')

    if(passwordInitial.value != passwordReapeat.value){

        errorContainer.classList.add('visible')
        passwordReapeat.classList.remove('success')


        let err = document.createElement('li')
        passwordReapeat.classList.add('wrong')
        err.innerText = "Les mots de passes sont différents"

        errorList.appendChild(err)

    } else {
        if (passwordReapeat.value == ''){
            passwordReapeat.classList.add('wrong')
        } else {
            passwordReapeat.classList.add('success')
        }
        
    } 
    /*-------------------------------*/
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if(
        prenom.classList.contains('success') &&
        nom.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        passwordReapeat.classList.contains('success')
    ){
        successContainer.classList.add('visible')
    }


})
