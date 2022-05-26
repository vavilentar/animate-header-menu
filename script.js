const menuItems = document.querySelectorAll('.header-menu_item');

menuItems.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
	})
})