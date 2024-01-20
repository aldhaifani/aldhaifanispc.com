const showMenu = (navId, toggleId, listId, burgerId, closeId) => {
	const nav = document.getElementById(navId);
	const toggle = document.getElementById(toggleId);
	const list = document.getElementById(listId);
	const burger = document.getElementById(burgerId);
	const close = document.getElementById(closeId);

	toggle.addEventListener('click', () => {
		if (burger.style.display == '' || burger.style.display == 'block') {
			nav.style.boxShadow = 'none';
			list.style.display = 'block';
			close.style.display = 'block';
			burger.style.display = 'none';
		} else if (close.style.display == '' || close.style.display == 'block') {
			nav.style.boxShadow = '0 2px 16px hsla(220, 32%, 8%, 0.3)';
			list.style.display = 'none';
			close.style.display = 'none';
			burger.style.display = 'block';
		}
	});
};

showMenu('nav', 'nav-toggle', 'nav-list', 'nav-burger', 'nav-close');
