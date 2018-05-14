;
(function() {
    'use strict';

    var btn = document.querySelector('.mainNavigation__hamburgger');
    var html = document.querySelector('html');
    var menuOpened = false;

    btn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (menuOpened) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function closeMenu() {
        menuOpened = false;
        html.classList.remove('menu-opened');
    }

    function openMenu() {
        menuOpened = true;
        html.classList.add('menu-opened');
    }

}())