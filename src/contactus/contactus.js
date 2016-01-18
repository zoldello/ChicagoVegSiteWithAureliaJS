import {inject} from 'aurelia-framework';
import {CapchaVerification} from './capchaVerification';

@inject(CapchaVerification)
export class ContactUs {
	constructor(capchaVerification) {
		this.capchaVerification = capchaVerification;
		this.name = ""; 
		this.email = "";
		this.message = "";

		this.messageSent = false; 
		this.messageNotSent = false; 
		this.messageInPreparation = true; 
	}

	activate() {
		this.reprepareMessage();
	}

	form_clicked() {
		if (!this.capchaVerification.iscapchaImagesCorrectlyIdentified()) {
			alert('Captcha images need to be correctly identified');
			return;
		}


		this.capchaVerification.submit(this.name, 
			this.email,
			this.message, 
			(this.verified).bind(this));
	}

	verified(response) {
		if (response.status === 200) {
			this.messageSuccessful();
		} else {
			this.messageSentUnsuccessfully();
		}
	}

	messageSuccessful() {
		this.messageSent = true; 
		this.messageInPreparation = false; 
		this.messageNotSent = false; 
	}

	messageSentUnsuccessfully() {
		this.messageSent = false; 
		this.messageInPreparation = false; 
		this.messageNotSent = true; 
	}

	reprepareMessage() {
		this.messageSent = false; 
		this.messageInPreparation = true; 
		this.messageNotSent = false;
	}
}