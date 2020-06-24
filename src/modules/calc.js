function calc() {
    let sex = getItemFromStorage('sex', 'female'), 
    height, 
    weight, 
    age, 
    ratio = getItemFromStorage('ratio', 1.375);

    const activeClasse = 'calculating__choose-item_active';
    const result = document.querySelector('.calculating__result span');

    getStaticElements('#gender', activeClasse);
    getStaticElements('.calculating__choose_big', activeClasse);
    getDynamicElements('.calculating__choose_medium');
    initCalc('#gender', activeClasse);
    initCalc('.calculating__choose_big', activeClasse);

    calcCalories();

    function getItemFromStorage(key, defaultValue) {
        return localStorage.getItem(key) ? localStorage.getItem(key) : defaultValue
    }

    function calcFemaleCalories() {
        return Math.round(((9.247 * weight) + (3.098 * height) - (4.330 * age ) + 447.593) * ratio);   
    }

    function calcMaleCalories() {
        return Math.round(((13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362) * ratio);   
    }

    function calcCalories() {
        if(sex && height && weight && age && ratio
            && typeof height === 'number'
            && typeof weight === 'number'
            && typeof age === 'number'
        ) {
            result.innerText = sex === 'female' ? calcFemaleCalories(): calcMaleCalories(); 
        } else {
            result.innerText = '____';
        }
    }

    function validationInput(value) {
        if(value === '') {
            return true;
        }

        if(/\d/g.test(value)) {
            return true;
        }

        return false;
    }

    function getDynamicElements(parent) {
            const inputs = document.querySelectorAll(`${parent} input`);

            inputs.forEach(input => {
            input.addEventListener('input', (e) => {

                if(validationInput(input.value)) {
                    input.style.border = '';
                } else {
                    input.style.border = 'red solid 1px';
                }

                switch(input.getAttribute('id')) {
                    case 'height': {
                        height = +input.value;
                        break;
                    }
                    case 'weight': {
                        weight = +input.value;
                        break;
                    }
                    case 'age': {
                        age = +input.value;
                        break;
                    }
                }
                calcCalories();
            });
        });
    }

    function removeAllClasses(elements, className) {
        elements.forEach(element => element.classList.remove(className));
    }

    function initCalc(selector, className) {
        const elements = document.querySelectorAll(`${selector} div`);
        elements.forEach(element => {
            if(localStorage.getItem('sex') || localStorage.getItem('ratio')) {
                if(element.getAttribute('id') === localStorage.getItem('sex')) {
                    removeAllClasses(elements, className);
                    element.classList.add(className);
                }
                
                if(localStorage.getItem('ratio') && element.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                    removeAllClasses(elements, className);
                    element.classList.add(className);
                }    
            }
        });      
    }

    function getStaticElements(parent, className) {
        const elements = document.querySelectorAll(`${parent} div`);
        elements.forEach(element => {
            element.addEventListener('click', () => {  
                removeAllClasses(elements, className);
                element.classList.add(className);

                if(element.getAttribute('data-ratio')) {
                    ratio = +element.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = element.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }
                calcCalories();
            });
        });
    }
}

export default calc;
