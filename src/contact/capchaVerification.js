import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class CapchaVerification {
	constructor(http){
        this.http = http;
  }

   submit(name, email, message, verified) {
    let status;

   	this.http.fetch('src/contactus/form.php', {
   			method: 'POST',  
   			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
  			body: JSON.stringify({
    			'name':  name,
    			'email': email,
    			'message': message,
    			'g-recaptcha-response': document.querySelector('#contactFrame').contentWindow.document.querySelector('.g-recaptcha-response').value
  			})
   		}).then(response => {
          verified(response);
   		});
   }

   iscapchaImagesCorrectlyIdentified() {
      return !!document.querySelector('#contactFrame').contentWindow.document.querySelector('.g-recaptcha-response').value; 
   }
}