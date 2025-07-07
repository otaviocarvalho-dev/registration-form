const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const errorIcon = '<i class="bi bi-exclamation-circle"></i>';

    const name = document.querySelector('#name');
    const inputBox = name.closest('.input-box');
    const nameValue = name.value;

    const errorSpan = inputBox.querySelector('.error');
    errorSpan.innerHTML = '';

    if (isEmpty(nameValue)) {
        errorSpan.innerHTML = `${errorIcon} Este campo é obrigatório`;
        inputBox.classList.add('invalid');
        return;
    } else {
        inputBox.classList.remove('invalid');
    }
})

function isEmpty(value) {
    return value === '';
}

const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('bi-eye');
    })
})