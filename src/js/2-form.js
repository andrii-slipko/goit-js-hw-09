const formData = {
    email: "",
    message: ""
};


const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email');
const messageTextarea = document.querySelector('.message');


function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email;
        formData.message = parsedData.message;

        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
}


loadFromLocalStorage();


form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value;
    } else if (event.target.name === 'message') {
        formData.message = event.target.value;
    }
    saveToLocalStorage();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    formData.email = formData.email.trim();
    formData.message = formData.message.trim();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData.email = '';
        formData.message = '';
        emailInput.value = '';
        messageTextarea.value = '';
    }
});