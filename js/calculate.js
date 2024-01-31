function calculate() {
	const frontEndHours = document.querySelector(
		'input[name="front-end-hours"]'
	).value;
	const frontEndRate = 50;
	const backEndHours = document.querySelector(
		'input[name="back-end-hours"]'
	).value;
	const backEndRate = 75;
	const uxUiHours = document.querySelector('input[name="ux-ui-hours"]').value;
	const uxUiRate = 15;
	const testerHours = document.querySelector(
		'input[name="tester-hours"]'
	).value;
	const testerRate = 25;

	const frontEndTotal = frontEndHours * frontEndRate;
	const backEndTotal = backEndHours * backEndRate;
	const uxUiTotal = uxUiHours * uxUiRate;
	const testerTotal = testerHours * testerRate;

	const total = frontEndTotal + backEndTotal + uxUiTotal + testerTotal;

	document.querySelector(
		'#result'
	).textContent = `Przynależność wynosi ${total}$`;
	console.log(total);
}
