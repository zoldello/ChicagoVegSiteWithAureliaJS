export class ContactUs {
	created() {
		let this.grecaptcha.render('html_element', {
    		'sitekey' : '6LeFZxITAAAAAKt6qHypxwPLcvY78lA0IF4uXyvj'
  		});
	}

	formSubmit() {
		if(this.grecaptcha.getResponse() == "") {
			e.preventDefault();
			alert("You can't proceed!");
		} else {
			alert("Thank you");
		}
	}	
}