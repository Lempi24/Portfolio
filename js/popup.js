const xmark = document.querySelector('#xmark');
const popup = document.querySelector('.popup');
xmark.addEventListener('click', () => {
	if (popup.classList.contains('show')) {
		popup.classList.remove('show');
	}
});
function showPopup() {
	popup.classList.add('show');
}
