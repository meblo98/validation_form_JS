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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate prenom
    if (prenomInput.value.length < 3 || prenomInput.value.length > 15) {
        prenomError.textContent = 'Le prénom doit avoir entre 3 et 15 caractères';
        isValid = false;
    } else {
        prenomError.textContent = '';
    }

    // Validate nom
    if (nomInput.value.length < 3 || nomInput.value.length > 15) {
        nomError.textContent = 'Le nom doit avoir entre 3 et 15 caractères';
        isValid = false;
    } else {
        nomError.textContent = '';
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'L\'adresse email est invalide';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Le mot de passe doit avoir au moins 8 caractères';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        successMessage.textContent = 'Succès! Le formulaire a été soumis avec succès.';
        form.style.display = 'none';
    }
});