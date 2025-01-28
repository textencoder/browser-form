const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const newPassword = document.getElementById('new-password');
const confirmNewPassword = document.getElementById('confirm-new-password');
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');

form.addEventListener("submit", (event) => {

    document.querySelectorAll('input').forEach(input => {
        if (input.validity.valueMissing) {
            event.preventDefault();
            return;
        }
    })

    if (newPassword.value != confirmNewPassword.value) {
        event.preventDefault();
        newPassword.style.border = '1px solid crimson';
        confirmNewPassword.style.border = '1px solid crimson';
        return;
    }
});

