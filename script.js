let form = document.querySelector('form');
let text = document.querySelector('form input');
let resetBtn = document.querySelector('.resetBtn');
let imgurl = document.querySelector('.myimg');

form.addEventListener('input', (e) => {
    e.preventDefault();
    if (text.value.length > 25) {
        alert('Kamroq belgi kiriting');
        text.setAttribute('disabled', 'disabled');
    } else {
        let url = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + text.value;
        imgurl.href = url;
        imgurl.children[0].src = url;
    }
});

resetBtn.addEventListener('click', () => {
    text.value = '';
    imgurl.href = '#';
    imgurl.children[0].src = '#';
    text.removeAttribute('disabled', 'disabled');
});