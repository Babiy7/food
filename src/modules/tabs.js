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

export default tabs;
