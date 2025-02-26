const CloseModal = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

window.addEventListener('load', () => {
    if (getCookie('modal') === 'close') {
        modal.classList.remove('modal_active');
    }
})

CloseModal.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modal', 'close');

})

function setCookie(name, value) {
    document.cookie = name + '=' + value;
}

function getCookie(name) {
    const value = '; ${document.cookie} ';
    let parts = value.split('; ${name}=');
    if (parts.length === 2) {
        return parts.pop();
    }
}