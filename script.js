let isAuthenticated = false;
let userName = 'David';
let greetingSpan;
let button;
// Använd id på knappen om det finns fler att välja på

window.addEventListener('load', () => {
	button = document.querySelector('header button');
	greetingSpan = document.querySelector('#greetingText');
	loadFromLocalStorage();
	console.log('isAuthenticated: ' + isAuthenticated +', userName: ' + userName);

	refreshHeader();

	button.addEventListener('click', event => {
		isAuthenticated = !isAuthenticated;
		saveToLocalStorage();
		refreshHeader();
	})
})
function refreshHeader() {
	if( isAuthenticated ) {
		button.innerText = 'Logga ut';
		greetingSpan.innerText = 'Välkommen ' + userName;
	} else {
		button.innerText = 'Logga in';
		greetingSpan.innerText = 'Välkommen gäst';
	}
}

const LOGIN_INFO = 'loginInfo';

function saveToLocalStorage() {
	console.log('localStorage.setItem');
	let objectToSave = {
		isAuthenticated: isAuthenticated,
		userName: userName
	}
	let data = JSON.stringify(objectToSave);
	localStorage.setItem(LOGIN_INFO, data);
}

function loadFromLocalStorage() {
	console.log('localStorage.getItem');
	let data = localStorage.getItem(LOGIN_INFO);
	if( !data )
		return;

	console.log('data:', data);
	let object = JSON.parse(data);
	isAuthenticated = object.isAuthenticated;
	userName = object.userName;
}












//
