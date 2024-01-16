let currentSectionIndex = 0;
let isScrolling = false;
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
	const currentScrollPosition = window.pageYOffset;
	sections.forEach((section, index) => {
		if (
			section.offsetTop <= currentScrollPosition &&
			section.offsetTop + section.offsetHeight > currentScrollPosition
		) {
			currentSectionIndex = index;
		}
	});
});
window.addEventListener(
	'wheel',
	(e) => {
		e.preventDefault();
		if (isScrolling) return;
		isScrolling = true;
		setTimeout(() => {
			isScrolling = false;
		}, 500);
		if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
			currentSectionIndex++;
		} else if (e.deltaY < 0 && currentSectionIndex > 0) {
			currentSectionIndex--;
		}
		window.scrollTo({
			top: sections[currentSectionIndex].offsetTop,
			behavior: 'smooth',
		});
	},
	{ passive: false }
);
