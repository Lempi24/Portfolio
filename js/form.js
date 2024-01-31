// Funkcja do walidacji e-maila
function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

// Funkcja do obsługi walidacji przy każdym wpisaniu znaku
function handleEmailInput() {
	const emailInput = document.getElementById('mail');
	if (!validateEmail(emailInput.value)) {
		// Jeżeli e-mail jest nieprawidłowy, zmień kolor obramowania
		emailInput.classList.add('input-error');
	} else {
		// Jeżeli e-mail jest prawidłowy, usuń kolor obramowania
		emailInput.classList.remove('input-error');
	}
}

// Funkcja do obsługi walidacji i wysyłania formularza
function validateAndSubmit() {
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('mail');
	const titleInput = document.getElementById('message');

	// Walidacja danych
	if (
		nameInput.value.trim() === '' ||
		!validateEmail(emailInput.value) ||
		titleInput.value.trim() === ''
	) {
		alert('Please fill in all fields correctly.');
		return;
	}

	// Jeżeli wszystko jest w porządku, wysyłanie formularza
	alert('Message sent!');
	// Tutaj można dodać kod do rzeczywistego wysłania formularza
}

// Dodanie obsługi zdarzenia dla wpisywania e-maila
document.getElementById('mail').addEventListener('input', handleEmailInput);
