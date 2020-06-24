import { getData } from '../services/services';

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

export default cards;
