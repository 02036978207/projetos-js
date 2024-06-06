document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const valor = document.getElementById('valor');
    const buttonCta = document.getElementById('button-cta');
    const containerPassword = document.getElementById('container-password');
    const passwordField = document.getElementById('password');

    // Update the slider value display
    slider.oninput = function() {
        valor.textContent = this.value;
    };

    // Generate and display password on button click
    buttonCta.addEventListener('click', () => {
        const length = slider.value;
        const password = generatePassword(length);
        passwordField.textContent = password;
        containerPassword.classList.remove('hide');
    });

    // Copy password to clipboard on click
    passwordField.addEventListener('click', () => {
        navigator.clipboard.writeText(passwordField.textContent).then(() => {
            alert('Senha copiada para a área de transferência!');
        });
    });

    // Password generation function
    function generatePassword(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});