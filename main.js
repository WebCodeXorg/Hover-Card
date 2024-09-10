function switchForm(formName) {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');

    if (formName === 'registration') {
        registrationForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else if (formName === 'login') {
        registrationForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}