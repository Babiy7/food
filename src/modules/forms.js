import { closeModal } from './modals';
import { postData } from '../services/services';

function forms(formSelector) {
    const forms = document.querySelectorAll(formSelector);
   
    forms.forEach(form => sendData(form));

    function sendData(form) {
        form.addEventListener('submit', e => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
       
        const statusMessage = document.createElement('img');
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        
        const restMessages = {
            loading: 'img/form/original.svg',
            success: 'We will call you later!',
            failure: 'Something went wrong'
        }

        statusMessage.src = restMessages.loading;
        
        form.insertAdjacentElement('afterEnd', statusMessage);
        
        postData('http://localhost:3000/requests', json)
        .then(response => {
            statusMessage.innerText = restMessages.success;
            showMessageModal(restMessages.success); 
            console.log(response);
        })
        .catch(e => {
            statusMessage.innerText = restMessages.failure;
        })
        .finally(() => {
            form.reset();
            setTimeout(() => {
                closeModal('.modal');
                statusMessage.remove();
            }, 2000);
        });     
      });
    };

    function showMessageModal(message) {
        const content = document.querySelector('.modal__content');
        content.classList.add('hide');

        const newContent = document.createElement('div');
        newContent.classList.add('modal__content');

        newContent.innerHTML = `
            <div class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        `
        document.querySelector('.modal__dialog').append(newContent);

        setTimeout(() => {
            content.classList.remove('hide');
            newContent.remove();
        }, 2000);
    };
}

export default forms;
