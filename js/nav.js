const nav = document.querySelector('#dynamic-island');

const setNavStyles = (
	width,
	height,
	opacity,
	eventPointer,
	immediate = false
) => {
	nav.style.width = width;
	nav.style.height = height;

	const navItems = Array.from(nav.querySelectorAll('.nav__nav-item'));

	if (immediate) {
		navItems.forEach((element) => {
			element.style.transition = 'opacity 0.3s 0s';
		});
	} else {
		navItems.forEach((element) => {
			element.style.transition = 'opacity 0.5s 0.75s';
		});
	}

	navItems.forEach((element) => {
		element.style.opacity = opacity;
		element.style.pointerEvents = eventPointer;
	});
	console.log(immediate);
};

nav.addEventListener('click', () => {
	setNavStyles('60%', '80px', '1', 'all', false);
});

document.addEventListener('click', (event) => {
	const isClickInsideNav = nav.contains(event.target);

	if (!isClickInsideNav) {
		setNavStyles('', '', '0', 'none', true);
	}
});

window.addEventListener('scroll', () => {
	const isAtTop = window.scrollY === 0;

	if (isAtTop) {
		nav.classList.remove('minimalized');
	} else {
		nav.classList.add('minimalized');
	}
});
