const form = document.getElementById('myForm');
const prenomInput = document.getElementById('prenom');
const nomInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const prenomError = document.getElementById('prenomError');
const nomError = document.getElementById('nomError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const doneIcon = document.createElement('div');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
 
    // validation prenom
    if (prenomInput.value.length < 3 || prenomInput.value.length > 15) {
        prenomError.textContent = 'Le prénom doit avoir entre 3 et 15 caractères';
        prenomError.style.color = 'red';
        isValid = false;
    } else {
        prenomError.textContent = '';
    }

    // validation nom
    if (nomInput.value.length < 3 || nomInput.value.length > 15) {
        nomError.textContent = 'Le nom doit avoir entre 3 et 15 caractères';
        nomError.style.color = 'red';
        isValid = false;
    } else {
        nomError.textContent = '';
    }

    // validation email
    const emailVerif = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailVerif.test(emailInput.value)) {
        emailError.textContent = 'L\'adresse email est invalide';
        emailError.style.color = 'red';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // validation password
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Le mot de passe doit avoir au moins 8 caractères';
        passwordError.style.color = 'red';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        // successMessage.textContent = 'Le formulaire a été soumis avec succès !!!! ';
        // form.style.display = 'none';
        // successMessage.style.color = 'green';
        // successMessage.style.backgroundColor = 'white';
        let textContent = Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Le formulaire a été soumis avec succès !!!!",
            showConfirmButton: false,
            timer: 15000
          });
        ;
        // successMessage.appendChild(textContent);
    }
});