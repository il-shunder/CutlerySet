function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

const headerBurger = document.querySelector('.header__burger');
const headerBody = document.querySelector('.header__body');
if (headerBurger) {
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active');
        headerBody.classList.toggle('active');
        document.body.classList.toggle('_lock');
    });
}

const setgold_info = document.querySelector('.setgold-info');
setgoldInfo(setgold_info);
function setgoldInfo(el) {
    let width = document.body.clientWidth;
    let conWidth = el.closest('.setgold').querySelector('.container').clientWidth;

    let res = (width - conWidth) / 2 + 100;
    el.querySelector('.setgold-info__block').style.minWidth = res + 'px';
    el.querySelector('.setgold-info__block').style.maxWidth = res + 'px';
}

window.addEventListener(`resize`, () => {
    setgoldInfo(setgold_info);
});

new Swiper('.setgold__slider', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    effect: 'flip',
    speed: 700,
});

new Swiper('.about__slider', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    speed: 400,
});

new Swiper('.setsilver__slider', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    effect: 'flip',
    speed: 700,
});

new Swiper('.setblack__slider', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    effect: 'flip',
    speed: 700,
});

const scrollLinks = document.querySelectorAll('a[href*="#"]');
if (scrollLinks.length > 0) {
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function (e) {
            e.preventDefault();

            const scrollID = scrollLinks[i].getAttribute('href').substr(1);
            if (scrollID.length > 0) {
                const scrollTarget = document.getElementById(scrollID);

                const scrollTopOffset = 0;
                const scrollElementPosition = scrollTarget.getBoundingClientRect().top;
                const scrollOffsetPosition = scrollElementPosition - scrollTopOffset;

                if (scrollLinks[i].classList.contains('.header-top__link')) {
                    headerBurger.classList.remove('active');
                    document.body.classList.remove('_lock');
                    headerBody.classList.remove('active');
                }

                window.scrollBy({
                    top: scrollOffsetPosition,
                    behavior: 'smooth',
                });
            }
        });
    }
}

const animItems = document.querySelectorAll('.anim-item');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add('anim');
            } else {
                if (!animItem.classList.contains('anim-no-repeat')) {
                    animItem.classList.remove('anim');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
