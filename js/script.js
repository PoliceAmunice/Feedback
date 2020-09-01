

document.addEventListener('DOMContentLoaded', function () {

	function removeMasseges() {
		let messages = form.querySelectorAll('.message')

		for (let i = 0; i < messages.length; i++) {
			messages[i].remove()
		}
	}

	function generateMassege(element, text) {
		element.style.border = "1px solid #F36363";
		element.previousElementSibling.style.color = "#F36363";

		//for changing watch already existing class in styles
		let message = document.createElement('div');
		message.className = 'message';
		message.innerHTML = text;
		element.parentElement.insertBefore(message, element.nextSibling);
	}

	function validInput(string) {
		//checking is this string an email or a phone value and setting suitable pattern
		let pattern = (string == email.value) ?
			/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ :
			/^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;

		if (pattern.test(string) == false) {
			return false
		} else {
			return true
		}
	}

	//vars for validate
	var form = document.querySelector(".feedback-form");
	var userName = document.getElementById("userName");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");
	var textarea = document.getElementById("textarea");

	//validation start
	form.addEventListener('submit', function () {
		event.preventDefault();

		removeMasseges()

		if (!userName.value) {
			generateMassege(userName, 'Данное поле обязательно для заполнения');
		}
		if (!textarea.value) {
			generateMassege(textarea, 'Данное поле обязательно для заполнения');
		}

		if (!phone.value && !email.value) {
			generateMassege(phone, 'Необходимо указать телефон или почту');
			generateMassege(email, 'Необходимо указать телефон или почту');
		}

		if (phone.value && !validInput(phone.value)) {
			generateMassege(phone, 'Телефон не соответствует формату');
		}

		if (email.value && !validInput(email.value)) {
			generateMassege(email, 'Почта не соответствует формату');
		}

	})

	//vars for modal
	var modal = document.getElementById('modal-block');
	var modalBtn = document.getElementById("modal-show-button-btn");
	var closeModalBtn = document.getElementsByClassName("close")[0];
	var background = document.body;

	modalBtn.onclick = function () {
		modal.style.display = "block";
		background.style.background = "#4d4d4d";
		modalBtn.style.display = "none";
	}

	closeModalBtn.onclick = function () {
		modal.style.display = "none";
		background.style.background = "#E5E5E5";
		modalBtn.style.display = "block";
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

});


