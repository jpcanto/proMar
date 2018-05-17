;
(function() {
    'use strict';

    var btn = document.querySelector('.mainNavigation__hamburgger');
    var html = document.querySelector('html');
    var menu = document.querySelector('#navMenu');
    var classMenu = 'menuOpened';
    var menuOpened = false;

    html.addEventListener('click', function(x){
        console.log(this);
        console.log(x.target);
        if(x.target === html && menuOpened){
            closeMenu();
        }
    })

    btn.addEventListener('click', toggleMenu);

    function toggleMenu(x) {
        if (menuOpened) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function closeMenu() {
        menuOpened = false;
        html.classList.remove(classMenu);
        btn.blur();
        menu.setAttribute('aria-expanded', false);
        btn.setAttribute('aria-expanded', false);
    }

    function openMenu() {
        menuOpened = true;
        html.classList.add(classMenu);
        menu.setAttribute('aria-expanded', true);
        btn.setAttribute('aria-expanded', true);
    }

}())