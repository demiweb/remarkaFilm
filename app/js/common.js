window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.querySelector(".header").classList.add('scrolled');
    } else {
        document.body.querySelector(".header").classList.remove('scrolled');
    }
}

document.onload = () => {
    scrollFunction();
}
let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();

let searchOpener = document.querySelector('.search-opener');
let searchBlock = document.querySelector('.search-block');
let searchContainer = document.querySelector('.search-container');
let searchClose = document.querySelector('.close-search');

function openSearch() {
    if (!searchOpener) {

    } else {
        searchOpener.addEventListener('click', () => {
            searchBlock.classList.add('visible');
            document.querySelector('.burger-btn').classList.add('no-events');
            setTimeout(() => {
                searchContainer.classList.add('visible');
            }, 300)

        });
        searchClose.addEventListener('click', () => {
            searchContainer.classList.remove('visible');
            document.querySelector('.burger-btn').classList.remove('no-events');
            setTimeout(() => {
                searchBlock.classList.remove('visible');
            }, 300)

        });
    }
}

openSearch();
let animationItems = [];

function addingClasses(item) {
    item.classList.add('loading');
    animationItems.push(item);
}

function removeLoaded(el) {
    setTimeout(() => {
        el.classList.remove('loading');
        el.classList.remove('loaded');
    }, 2000)

}

function startAnimation() {
    animationItems.forEach((itm) => {
        if (itm.classList.contains('header__container')) {
            setTimeout(() => {
                itm.classList.add('loaded');
            }, 700)
        } else {
            if (itm.classList.contains('header-container')) {
                setTimeout(() => {
                    itm.classList.add('loaded');
                }, 700)
            } else {
                itm.classList.add('loaded');
            }


        }
        removeLoaded(itm);

    })
}

function loadingContent() {
    let headerTop = document.querySelector('.header__top');
    addingClasses(headerTop);
    let headerLeft = document.querySelector('.header__left');
    addingClasses(headerLeft);

    let headerContainer = document.querySelector('.header__container');
    addingClasses(headerContainer);
    let headerContainerLeft = document.querySelector('.header-container');
    addingClasses(headerContainerLeft);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(startAnimation, 300)
});

loadingContent();


let menuHeaderClose = document.querySelector('.close-menu');
let burgerMenuBtn = document.querySelector('.burger-btn');
let menuHeaderBlock = document.querySelector('.header__big-menu');


function animMenuOpening(type, menu) {
    function startAnimationMenu(itm) {
        itm.classList.add('opening');
        setTimeout(() => {
            itm.classList.add('opened');
        }, 700)
    }

    function startAnimationMenuBack(itm) {
        itm.classList.remove('opened');
        setTimeout(() => {
            itm.classList.add('opening');
        }, 700)
    }

    let menuHeader = menu.querySelector('.big-menu__header');
    let menuFooter = menu.querySelector('.big-menu__footer');
    let menuColums = [...menu.querySelectorAll('.big-menu__column')];

    if (type === 'close') {
        startAnimationMenuBack(menuHeader);
        startAnimationMenuBack(menuFooter);
        menuColums.forEach((clm, i) => {
            setTimeout(startAnimationMenuBack(clm), i * 100);
        })
    } else {
        startAnimationMenu(menuHeader);
        startAnimationMenu(menuFooter);
        menuColums.forEach((clm, i) => {
            setTimeout(startAnimationMenu(clm), i * 100);
        })


    }
}

function menuManipulation() {
    if (!burgerMenuBtn) {

    } else {
        burgerMenuBtn.addEventListener('click', () => {
            animMenuOpening('open', menuHeaderBlock);
            menuHeaderBlock.classList.add('open');
            document.body.classList.add('no-scroll');

        });
        menuHeaderClose.addEventListener('click', () => {
            animMenuOpening('close', menuHeaderBlock);
            setTimeout(() => {
                menuHeaderBlock.classList.remove('open');
            }, 700);
            document.body.classList.remove('no-scroll');


        })
    }
}

menuManipulation();

let playBtns = [...document.querySelectorAll('.play-btn')];

function changeBgPlayBtn() {
    if (!playBtns.length) {

    } else {
        playBtns.forEach((btn) => {
            btn.addEventListener('mouseover', () => {
                btn.classList.remove('unhovered');
                btn.classList.add('hovered');

            });
            btn.addEventListener('mouseout', () => {
                btn.classList.add('unhovered');
                btn.classList.remove('hovered');
            })
        })
    }
}

changeBgPlayBtn();


//open midal video


let playBtnsVideo = [...document.querySelectorAll('.play-btn')];
let modalVideo = document.querySelector('.modal-window--video');

function ifHaveVideoModals() {
    if (!playBtnsVideo.length) {

    } else {
        playBtnsVideo.forEach((btn) => {
            btn.addEventListener('click', () => {
                let dataSrc = btn.dataset.videoSrc;
                modalVideo.classList.add('open');
                document.body.classList.add('no-scroll');
                modalVideo.querySelector('.video-content iframe').src = dataSrc;

            })
        })
    }
}

ifHaveVideoModals();

let showContactsMobile = document.querySelector('.show-contacts span');

function openMobContacts() {
    if (!showContactsMobile) {

    } else {
        showContactsMobile.addEventListener('click', () => {
            showContactsMobile.classList.toggle('open');
        })
    }
}

openMobContacts();


$(document).ready(function () {
    $('.slider-teachers').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: true,
        prevArrow: $('.button-slide--prev'),
        nextArrow: $('.button-slide--next'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
});

//change header-left colors
var elementBtns = [...document.querySelectorAll('.white-block')];
function checkIfWhiteVisible() {
    let whiteList = [...document.querySelectorAll('.visible-white')];
    if (!whiteList.length) {
        document.querySelector('.header__left').classList.remove('invert');

    } else {
        document.querySelector('.header__left').classList.add('invert');

    }
}
var Visible = function (target) {
    if (!elementBtns.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            target.classList.add('visible-white');
            checkIfWhiteVisible();
        } else {
            // Если элемент не видно, то запускаем этот код
            target.classList.remove('visible-white');
            checkIfWhiteVisible();
        };
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {

    elementBtns.forEach((btn) => {
        Visible(btn);
    })
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
elementBtns.forEach((btn) => {
    Visible(btn);
});


let tabsCoursesBtn = [...document.querySelectorAll('.courses-list__checkbox-tab')];
let coursesTabs = [...document.querySelectorAll('.courses-list__table')];

function ifCoursesTabs() {
    if (!tabsCoursesBtn.length) {

    } else {
        tabsCoursesBtn.forEach((btn, l) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('selected')) {

                } else {
                    document.querySelector('.courses-list__checkbox-tab.selected').classList.remove('selected');
                    btn.classList.add('selected');
                    document.querySelector('.courses-list__table.selected').classList.remove('selected');

                    coursesTabs[l].classList.add('selected');
                }


            })
        })
    }
}

ifCoursesTabs();


let mobContactsBot = document.querySelector('.footer');
var Visible2 = function (target) {
    if (!mobContactsBot) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.mobile-header-contacts').classList.add('unvisible');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        };
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {

    Visible2(mobContactsBot);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

Visible2(mobContactsBot);

