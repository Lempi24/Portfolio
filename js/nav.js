let wasAtTop = true;

const nav = document.querySelector('#dynamic-island');
const pagesections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav__nav-item i');

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
};

nav.addEventListener('click', () => {
	if (window.scrollY === 0) return;
	setNavStyles('80%', '80px', '1', 'all', false);
});

document.addEventListener('click', (event) => {
	const isClickInsideNav = nav.contains(event.target);

	if (!isClickInsideNav && window.scrollY !== 0) {
		setNavStyles('', '', '0', 'none', true);
	}
});

// Funkcja do aktualizacji aktywnego przycisku nawigacyjnego
function updateActiveNavItem() {
	let currentIndex = sections.length;

	// Sprawdź, która sekcja jest obecnie widoczna
	while (
		--currentIndex &&
		window.scrollY + 50 < sections[currentIndex].offsetTop
	) {}

	// Usuń klasę 'active' ze wszystkich przycisków nawigacyjnych
	navItems.forEach((navItem) => navItem.classList.remove('active'));

	// Dodaj klasę 'active' do przycisku nawigacyjnego odpowiadającego obecnej sekcji
	navItems[currentIndex - 1].classList.add('active');
}

window.addEventListener('scroll', () => {
	const isAtTop = window.scrollY === 0;

	if (isAtTop) {
		nav.classList.remove('minimalized');
		setNavStyles('80%', '80px', '1', 'all', false);
		wasAtTop = true;
	} else {
		if (wasAtTop) {
			setNavStyles('', '', '0', 'none', true);
			wasAtTop = false;
		}
		nav.classList.add('minimalized');
	}
	updateActiveNavItem();
});
