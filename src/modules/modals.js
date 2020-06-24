
export function openModal(modalSelector, showModal) {
    const modal = document.querySelector(modalSelector);
    const body = document.body;

    modal.classList.toggle('show');
    body.style.overflow = 'hidden';

    if(showModal) {    
        clearTimeout(showModal);
    }
}

export function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    const body = document.body;

    modal.classList.toggle('show');
    body.style.overflow = 'auto';
}

function modals(modalSelector, btnsSelector) {
    const modal = document.querySelector(modalSelector);
    const btns =  document.querySelectorAll(btnsSelector);
    const showModal = setTimeout(() => openModal(modalSelector), 3000);
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, showModal));
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27 && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function openModalByScroll() {
        const { documentElement } = document;

        if(window.pageYOffset + documentElement.clientHeight >= documentElement.scrollHeight) {
            openModal(modalSelector, showModal);        
            window.removeEventListener('scroll', openModalByScroll);
        }   
    }

    window.addEventListener('scroll', openModalByScroll);
}

export default modals;
