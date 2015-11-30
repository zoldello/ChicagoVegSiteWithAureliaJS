
export class ChicagoVeg {
	constructor() {
		// viewmodel's model
		this.router = null;
	}

	configureRouter(config, router) {
		config.title = 'ChicagoVeg';
		this.router = router;

		// need default router: https://github.com/aurelia/router/issues/62
		config.map([
			{ route: ['', 'home'], 'name':"home", moduleId: './home/home', title: 'Home', nav: true },
			{ route:  'mission', 'name':"mission", moduleId: './mission/mission', title: 'Mission', nav: true },
			{ route: 'news', 'name':"news", moduleId: './news/news', title: 'News', nav: true }, 
			{ route: 'resources', 'name':"resources", moduleId: './resources/resources', title: 'Resources', nav: true },
			{ route: 'donate', 'name':"donate", moduleId: './donate/donate', title: 'Donate', nav: true }, 
			{ route: 'contactus', 'name':"contactus", moduleId: './contactus/contactus', title: 'Contact Us', nav: true },  
			{ route: 'about', 'name':"about", moduleId: './about/about', title: 'About', nav: true }  
			]);
	}
}