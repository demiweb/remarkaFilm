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

            document.querySelector('.header__left').classList.add('no-events');
            setTimeout(() => {
                searchContainer.classList.add('visible');
            }, 300)

        });
        searchClose.addEventListener('click', () => {
            searchContainer.classList.remove('visible');
            document.querySelector('.header__left').classList.remove('no-events');
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
        if (window.innerWidth < 768) {

        } else {

        }
        setTimeout(() => {
            itm.classList.add('opened');
        }, 700)
    }

    function startAnimationMenuBack(itm) {
        itm.classList.remove('opened');
        if (window.innerWidth < 768) {
            setTimeout(() => {
                itm.classList.add('opening');
            }, 200)
        } else {
            setTimeout(() => {
                itm.classList.add('opening');
            }, 700)
        }

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
let courseMenuInfo = document.querySelector('.course-menu');
let dontForget = document.querySelector('.dont-forget');
//change header-left colors
var elementBtns = [...document.querySelectorAll('.white-block')];

function checkIfWhiteVisible() {
    let whiteList = [...document.querySelectorAll('.visible-white')];
    if (!whiteList.length) {
        document.querySelector('.header__left').classList.remove('invert');
        if (!courseMenuInfo) {

        } else {
            let btnOpenCourse = courseMenuInfo.querySelector('.hide-btn');
            btnOpenCourse.style.color = 'white';
        }
        } else {
        document.querySelector('.header__left').classList.add('invert');
        if (!courseMenuInfo) {

        } else {
            let btnOpenCourse = courseMenuInfo.querySelector('.hide-btn');
            btnOpenCourse.style.color = 'black';
        }
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
        }
        ;
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


function ifCourseMenuHave() {
    if (!courseMenuInfo) {

    } else {
        let btnOpenCourse = courseMenuInfo.querySelector('.hide-btn');
        btnOpenCourse.addEventListener('click', () => {

            courseMenuInfo.classList.toggle('hide');
            courseMenuInfo = document.querySelector('.course-menu');
            if (courseMenuInfo.classList.contains('hide')) {
                btnOpenCourse.innerHTML = btnOpenCourse.dataset.hide;
            } else {
                btnOpenCourse.innerHTML = btnOpenCourse.dataset.text;
            }
        })
        dontForget.addEventListener('click', () => {
            courseMenuInfo.classList.toggle('mob-on');
            courseMenuInfo = document.querySelector('.course-menu');
            if (courseMenuInfo.classList.contains('mob-on')) {
                dontForget.querySelector('.hide-btn').innerHTML = dontForget.querySelector('.hide-btn').dataset.hide;
            } else {
                dontForget.querySelector('.hide-btn').innerHTML = dontForget.querySelector('.hide-btn').dataset.text;
            }
        })
    }
}
ifCourseMenuHave();

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
            if (courseMenuInfo) {
                courseMenuInfo.classList.add('unvisible');
            }

            document.querySelector('.mobile-header-contacts').classList.add('unvisible');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
        ;
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    Visible2(mobContactsBot);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

Visible2(mobContactsBot);

$(".go-up-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("body").offset().top
    }, 600);
});
$(".go-down-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("main").offset().top
    }, 200);
});




let jsAnimBlocks = [...document.querySelectorAll('.js-anim')];
var Visible3 = function (target) {
    if (!jsAnimBlocks.length) {

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
            setTimeout(() => {
                target.classList.add('anim-start');
            }, 300)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        };
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimBlocks.forEach((el) => {
    Visible3(el);
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimBlocks.forEach((el) => {
    Visible3(el);
});


let openModalRequest = [...document.querySelectorAll('.open-modal--request')];
let modalRequestWindow = document.querySelector('.modal-window--request');

function modalRequest() {
    if (!openModalRequest.length) {

    } else {
        openModalRequest.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modalRequestWindow.classList.add('open');
                document.body.classList.add('no-scroll');

                modalRequestWindow.querySelector('.modal-request--bg').classList.add('move-anim');

            })
        })
    }
}

modalRequest();

let closeModalBtn = [...document.querySelectorAll('.close-modal')];

function closeMdlBtn() {
    if (!closeModalBtn.length) {

    } else {
        closeModalBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('open');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('modal-window--request')) {
                    btn.closest('.modal-window').querySelector('.modal-request--bg').classList.remove('move-anim');
                }
            })
        })
    }
}
closeMdlBtn();


let btnThanksModal = [...document.querySelectorAll('.contacts__form .go-link')];
let modalThanksWindow = document.querySelector('.modal-window--thanks');

function thanksModalF() {
    if(!btnThanksModal.length) {

    } else {
        btnThanksModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (document.querySelector('.modal-window.open')) {
                    document.querySelector('.modal-window.open').classList.remove('open');
                }
                modalThanksWindow.classList.add('open');
                document.body.classList.add('no-scroll');
                modalThanksWindow.querySelector('.modal-request--bg').classList.add('move-anim');
            })
        })
    }
}

thanksModalF();



let sectionMainBlock = document.querySelector('main');
// let totalBlocksForMenuCourse = [sectionHero, mobContactsBot];

var Visible5 = function (target) {
    if (!courseMenuInfo) {

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
            courseMenuInfo.classList.remove('unvisible');

        } else {
            // Если элемент не видно, то запускаем этот код

            courseMenuInfo.classList.add('unvisible');

        };
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {

    Visible5(sectionMainBlock);

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

Visible5(sectionMainBlock);

//open more text course

let coursePText = document.querySelector('.about-course__left');

function openCourseText() {
    if (!coursePText) {

    } else {
        let pText = coursePText.querySelector('p');
        let btnText = coursePText.querySelector('.load-more');

        btnText.addEventListener('click', () => {
            btnText.classList.toggle('open');
            pText.classList.toggle('open');
            btnText = document.querySelector('.about-course__left .load-more');
            if (btnText.classList.contains('open')) {
                btnText.innerHTML = btnText.dataset.hide;
            } else {
                btnText.innerHTML = btnText.dataset.text;
            }
        })
    }

}
openCourseText();


let videoPLayPlay = [...document.querySelectorAll('.welcome_video')];

function playVideoWelcome() {
    if (!videoPLayPlay.length) {

    } else {
        videoPLayPlay.forEach((block) => {
            let btn = block.querySelector('.play-video');
            btn.addEventListener('click', () => {
                block.classList.add('play');
            })
        })
    }
}
playVideoWelcome();

function createNewBtnHideComment(li) {
    let newBtn = document.createElement('div');
    newBtn.classList.add('comment-btn');
    let newImg = document.createElement('img');
    newImg.src = './img/coomment-btn.svg';
    newBtn.appendChild(newImg);
    li.appendChild(newBtn);
    newBtn.addEventListener('click', () => {
        li.classList.toggle('active');
    })
}
let commentsList = [...document.querySelectorAll('.single-comment')];

function ifTextMoreHeight() {

    if (!commentsList.length) {

    } else {
        commentsList.forEach((li, k) => {
            let pText = li.querySelector('p');

            let textPHeight = pText.offsetHeight;
            console.log(textPHeight);
            if (textPHeight > 136) {
                li.classList.add('hidden');
                let newcommentsList = [...document.querySelectorAll('.single-comment')];

                if (newcommentsList[k].querySelector('.comment-btn')) {
                    // console.log('have btn')
                } else {
                    // console.log('tutochki')
                    createNewBtnHideComment(li);
                }



            } else {
                // console.log('lol why')
                li.classList.remove('hidden');


                let btnHave = li.querySelector('.comment-btn');
                // console.log(btnHave);
                if (btnHave) {
                    btnHave.remove();
                } else {

                }
            }
            commentsList = [...document.querySelectorAll('.single-comment')];
            return commentsList;
        })
    }
}

ifTextMoreHeight();

window.addEventListener('resize',() => {
    ifTextMoreHeight();
})




