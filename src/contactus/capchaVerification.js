import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class CapchaVerification {
	constructor(http){
        this.http = http;
    }

   submit(name, email, message) {
   		this.http.fetch('form.php', {
   			method: 'post',  
   			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
  			body: JSON.stringify({
    			'name':  name,
    			'email': email,
    			'message': message,
    			'g-recaptcha-response': document.querySelector('g-recaptcha-response')
  			})
   		}).then(response => {
   			let x = 0;
   		});
   }
}


/*
fetch('/users', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
})


 this.http.fetch("form.php", {
            method: "post",
            body: json(contact)
 
        }).then(response => {
            this.isInserted = true;
            this.statusCode = response.status;
            this.textShowAll = "Show All";
        });
*/