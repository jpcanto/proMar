;
(function() {
    'use strict';
    var btn = document.querySelector('mainNavigation__hamburgger');
    var html = document.querySelector('html');
    var menuOpened = false;

    function(closeMenu) {
        menuOpened = false;
        html.classList.remove('menu-opened');
    }

    function(openMenu) {
        menuOpened = false;
        html.classList.add('menu-opened');
    }

    function(toggleMenu) {
        if (menuOpened) {

        }
    }

}())