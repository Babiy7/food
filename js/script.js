import tabs from '../src/modules/tabs';
import timer from '../src/modules/timer';
import modals from '../src/modules/modals';
import cards from '../src/modules/cards';
import forms from '../src/modules/forms';
import slider from '../src/modules/slider';
import calc from '../src/modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    tabs(['.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active']);
    timer('2020-06-27');
    modals('.modal', '[data-modal]');
    cards();
    forms('form');
    slider();
    calc();
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
