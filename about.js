console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	const imageCat = document.querySelector('#image-pic')
	imageCat.addEventListener('mouseover', ()=> {alert('Compliment!')});
	alert('The form has been submitted successfully.');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);