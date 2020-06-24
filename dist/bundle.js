/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/tabs */ "./src/modules/tabs.js");
/* harmony import */ var _src_modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/timer */ "./src/modules/timer.js");
/* harmony import */ var _src_modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/modals */ "./src/modules/modals.js");
/* harmony import */ var _src_modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/cards */ "./src/modules/cards.js");
/* harmony import */ var _src_modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/modules/forms */ "./src/modules/forms.js");
/* harmony import */ var _src_modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/modules/slider */ "./src/modules/slider.js");
/* harmony import */ var _src_modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/modules/calc */ "./src/modules/calc.js");








window.addEventListener('DOMContentLoaded', () => {
    Object(_src_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(['.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active']);
    Object(_src_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('2020-06-27');
    Object(_src_modules_modals__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal', '[data-modal]');
    Object(_src_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_src_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form');
    Object(_src_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_src_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

    // prevSlide.addEventListener('click', prev);
    // nextSlide.addEventListener('click', next);

    // showSlide();
    // showTotalSlides(slides.length);

        // function next() {
    //     ++slideIndex;
    //     showSlide();
    // }
    
    // function prev() {
    //     --slideIndex;
    //     showSlide();
    // }

    // function showSlide() {
    //     if(slideIndex < 1) {
    //         slideIndex = slides.length;
    //     }

    //     if(slideIndex > slides.length) {
    //         slideIndex = 1;
    //     }

    //     slides.forEach(slide =>  slide.classList.add('hide'));
    //     showCurrentSlide(slideIndex);
    //     slides[slideIndex - 1].classList.remove('hide');
    //     slides[slideIndex - 1].classList.add('show');
    // }

// class User {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     #surname = 'Babiy';

//     set name(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set age(age) {
//         this._age = age;
//     }

//     get age() {
//         return this._age;
//     }

//     toString = () => {
//         return `${this._name} ${this.#surname} ${this._age}`;
//     }
// }

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.setAge = function(age) {
//         if(typeof age === 'number' && age >= 0 && age <= 110) {
//             userAge = age;
//         } else {
//             console.log('incorect value');
//         }
//     }

//     this.getAge = function() {
//         return userAge;
//     }
// };

// const user = (function(){
//     const privateFunction = function() {
//         console.log('I am privat')
//     };

//     const notPublic = function() {
//         console.log(`you don't see me`);
//     }

//     notPublic();

//     return {
//         print: privateFunction
//     }
// }());

// user.print();

//fdsfds


/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (calc);


/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/services/services.js");


function cards() {

    class Card {
        constructor(src, alt, title, desc, price, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price * 27;
            this.classes = classes;
        }

        render(querySelector) {
            const element = document.createElement('div');
            const parent = document.querySelector(querySelector);
            element.classList.add('menu__item');

            if(this.classes.length) {
                this.classes.forEach(className => element.classList.add(className));
            } 

            element.innerHTML = `    
                <img src="${this.src}" alt="${this.alt}" />
                <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                <div class="menu__item-descr">
                   ${this.desc}
                </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            parent.append(element);
            
        }
    }

    // getData('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new Card(img, altimg, title, descr, price).render('#menu');
    //         });
    //     }).catch(e => {
    //         console.error(e);
    //         const menu = document.querySelector('#menu');
    //         menu.innerText = 'We have got an error';
    //         menu.style.cssText = `
    //             display: flex;
    //             justify-content: center;
    //             color: red;
    //             font-size: 30px;
    //         `;
    //     });

    axios.get('http://localhost:3000/menu')
    .then(response => {
        response.data.forEach(({img, altimg, title, descr, price}) => {
                new Card(img, altimg, title, descr, price).render('#menu');
        });
    }).catch(e => {
        console.error(e);
        const menu = document.querySelector('#menu');
        menu.innerText = 'We have got an error';
        menu.style.cssText = `
            display: flex;
            justify-content: center;
            color: red;
            font-size: 30px;
        `;
    });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);


/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./src/modules/modals.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/services/services.js");



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
        
        Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
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
                Object(_modals__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
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

/* harmony default export */ __webpack_exports__["default"] = (forms);


/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/*! exports provided: openModal, closeModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });

function openModal(modalSelector, showModal) {
    const modal = document.querySelector(modalSelector);
    const body = document.body;

    modal.classList.toggle('show');
    body.style.overflow = 'hidden';

    if(showModal) {    
        clearTimeout(showModal);
    }
}

function closeModal(modalSelector) {
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

/* harmony default export */ __webpack_exports__["default"] = (modals);


/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
    const slides = document.querySelectorAll('.offer__slide');
    const prevSlide = document.querySelector('.offer__slider-prev');
    const nextSlide = document.querySelector('.offer__slider-next');
    const sliderWrapper = document.querySelector('.offer__slider-wrapper');
    const sliderInner = document.querySelector('.offer__slider-inner');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');
    const indicators = document.querySelector('.carousel-indicators');
    const width = getWidth(sliderWrapper);
    let slideIndex = 1;
    let offSet = 0;
   
    slides.forEach(slide => slide.style.width = `${width}px`);
    initDots(slides, indicators, slideIndex);
    
    sliderInner.style.display = 'flex';
    sliderInner.style.width = 100 * slides.length + '%';
    sliderInner.style.transition = 'all 0.4s ease';
    
    sliderWrapper.style.overflow = 'hidden';

    showTotalSlides(slides.length);
    showCurrentSlide(slideIndex);

    nextSlide.addEventListener('click', next);
    prevSlide.addEventListener('click', prev);

    function next() {
        if(offSet === -(width * (slides.length - 1))) {
            offSet = 0;
            slideIndex = 1;
            showCurrentSlide(slideIndex);
            showActive(slideIndex);
        } else {
            showCurrentSlide(++slideIndex);
            showActive(slideIndex);
            offSet -= width;
        }
        setTranslate(offSet);
    }

    function prev() {
        if(offSet === 0) {
            offSet = -(width * (slides.length - 1));
            slideIndex = slides.length;
            showCurrentSlide(slideIndex);
            showActive(slideIndex);
        } else {
            showCurrentSlide(--slideIndex);
            showActive(slideIndex);
            offSet += width;
        }
        setTranslate(offSet);
    }
    
    function setTranslate(offSet) {
        sliderInner.style.transform = `translateX(${offSet}px)`;
    }

    function getWidth(element) {
        const result = window.getComputedStyle(element).width;
        return +result.match(/\d/g).join('');
    }

    function moveSlide(dot) {
        const index = dot.getAttribute('data-slide-index');
        offSet = -(width * (index - 1));
        slideIndex = index;
        setTranslate(offSet);
        showActive(index);
        showCurrentSlide(index);
    }

    function showActive(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if(++i === +index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function initDots(slides, indicators, slideIndex) {
        slides.forEach((_, i) => {
            const index = i + 1;
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-index', i + 1);
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                moveSlide(dot);
            });
        
            if (index === slideIndex) {
                dot.classList.add('active');
            }
            indicators.append(dot);
        });
    }

    function showTotalSlides(length) {
        total.innerText = getZero(length);
    }

    function showCurrentSlide(index) {
        current.innerText = getZero(index);
    }

    function getZero(number) {
        if(number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }

    console.log('object');
}

/* harmony default export */ __webpack_exports__["default"] = (slider);


/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(selectors) {
    const items = document.querySelectorAll(selectors[0]),
    tabContents = document.querySelectorAll(selectors[1]),
    tabHeader = document.querySelector(selectors[2]);


    function hideTabContents() {
        tabContents.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('fide');
        });

        items.forEach(item => {
            item.classList.remove(selectors[3]);
        });
    }

    function showTabContent(i = 0) {
        tabContents[i].classList.remove('hide');
        tabContents[i].classList.add('show', 'fide');
        items[i].classList.add(selectors[3]);
    }

    hideTabContents();
    showTabContent();

    tabHeader.addEventListener('click', (e) => {
        const { target } = e;

        items.forEach((item, i) => {
            if(item === target) {
                hideTabContents();
                showTabContent(i);
            }
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);


/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(deadline) {
   
    function getDateEnd(endDate) {
        const t = Date.parse( new Date(endDate)) - new Date();
        const day = Math.floor(t / 1000 / 60 / 60 / 24);
        const hours = (Math.floor((t / 1000 / 60 / 60) % 24) - 2);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            timestamp: t,
            day,
            hours,
            minutes,
            seconds
        }
    }

    const interval = setInterval(setClock, 1000);

    setClock();

    function setClock() {
        const endTime = getDateEnd(deadline);
        const days = document.getElementById('days');
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
        
        if(endTime.timestamp <= 0) {
            clearInterval(interval);
        } else {
            days.innerText = getZero(endTime.day);
            hours.innerText = getZero(endTime.hours);
            minutes.innerText = getZero(endTime.minutes);
            seconds.innerText = getZero(endTime.seconds);
        }
    }

    function getZero(number) {
        if(number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (timer);


/***/ }),

/***/ "./src/services/services.js":
/*!**********************************!*\
  !*** ./src/services/services.js ***!
  \**********************************/
/*! exports provided: postData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    return await res.json(); 
}

const getData = async url => {
    const res = await fetch(url);

    if(!res.ok) {
       throw new Error(`Could not fetch ${url} status ${res.status}`);
    }

    return await res.json(); 
}




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map