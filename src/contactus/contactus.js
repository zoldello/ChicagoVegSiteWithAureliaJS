import {inject} from 'aurelia-framework';
import {CapchaVerification} from './capchaVerification';

@inject(CapchaVerification)
export class ContactUs {
	constructor(capchaVerification) {
		this.capchaVerification = capchaVerification;
		this.name; 
		this.email;
		this.message;
	}

	form_clicked() {
		let result = this.capchaVerification.submit(this.name, 
			this.email,
			this.message);
		let x = 0;
	}
}