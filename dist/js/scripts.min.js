let searchOpener = document.querySelector('.search-opener');
let searchBlock = document.querySelector('.search-block');
let searchContainer = document.querySelector('.search-container');
let searchClose = document.querySelector('.close-search');

function openSearch() {
    if (!searchOpener) {

    } else {
        searchOpener.addEventListener('click', () => {
            searchBlock.classList.add('visible');
            setTimeout(() => {
                searchContainer.classList.add('visible');
            }, 300)

        });
        searchClose.addEventListener('click', () => {
            searchContainer.classList.remove('visible');
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

