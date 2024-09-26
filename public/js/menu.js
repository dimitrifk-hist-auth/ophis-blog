'use strict';

(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu__btn');
	var	menu = document.querySelector('.menu__list');

	function toggleMenu() {
		menu.classList.toggle('menu__list--active');
		menu.classList.toggle('menu__list--transition');
		this.classList.toggle('menu__btn--active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	function removeMenuTransition() {
		this.classList.remove('menu__list--transition');
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);
	}
}(document, window));

// javascript code for search button on main menu, delete if problem arises
document.getElementById('search-btn').addEventListener('click', function() {
    var modal = document.getElementById('search-modal');
    modal.style.display = 'block';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('search-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
