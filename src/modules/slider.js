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

export default slider;
