
export class ChicagoVeg {
	constructor() {
		// viewmodel's model
		this.router = null;
	}

	configureRouter(config, router) {
		config.title = 'ChicagoVeg';
		
		
		// need default router: https://github.com/aurelia/router/issues/62
		// submenu idea from: https://gist.github.com/adarshpastakia/5d8462b5bc8d958d5cb3
		config.map([	
		{
			route: ["", "home"],
			"name": "home",
			moduleId: "./home/home",
			title: "Home",
			nav: true
		},
		{
			route: "aboutus",
			"name": "aboutus",
			moduleId: "./aboutus/aboutus",
			title: "About Us",
			nav: true, 
			settings:{
      			subMenu:[
        			{	href:'#/history', 
        				title:'History',
        				route: "history",
						"name": "history",
						moduleId: "./history/history",
						title: "History",
						nav: true, 
        			},
        			{
        				href:'#/mission', 
        				title:'Mision',
        				route: "mission",
						"name": "mission",
						moduleId: "./mission/mission",
						title: "Mision", 
						nav: true, 
					}
      			]
    		}
		},

		{
			route: "programs",
			"name": "programs",
			moduleId: "./programs/programs",
			title: "Programs",
			nav: true, 
			settings:{
      			subMenu:[
        			{
        				href:'http://www.google.com', 
        				title:'Outreach',
        				openNewPage: true
        			},
        			{
        				href:'http://www.google.com', 
        				title:'Cooking',
        				openNewPage: true},
        			{
        				href:'http://www.google.com', 
        				title:'Singles',
        				openNewPage: true
        			},
        			{
        				href:'http://www.google.com', 
        				title:'Family/Kids',
        				openNewPage: true
        			}
      			]
    		}
		},
		{
			route: "news",
			"name": "news",
			moduleId: "./news/news",
			title: "News",
			nav: true
		}, {
			route: "resources",
			"name": "resources",
			moduleId: "./resources/resources",
			title: "Resources",
			nav: true
		}, {
			route: "restaurants",
			"name": "restaurants",
			moduleId: "./restaurants/restaurants",
			title: "Restaurants",
			nav: true, 
			settings:{
      			subMenu:[
        			{ 
        				href:'http://restaurants.chicagoveg.com', 
        				title:'Finder' ,
        				openNewPage: true
        			},
        			{ 
        				href:'http://www.meetup.com/ChicagoVeg/pages/ChicagoVeg_Choice_2015/', 
        				title:'ChicagoVeg Choice',
        				openNewPage: true}
      			]
    		}
		}, {
			route: "contactus",
			"name": "contactus",
			moduleId: "./contactus/contactus",
			title: "Contact Us",
			nav: true
			},
			{
			route: "history",
			"name": "history",
			moduleId: "./history/history",
			title: "History",
			nav: false
			},
			{
			route: "mission",
			"name": "mission",
			moduleId: "./mission/mission",
			title: "Mision",
			nav: false
		}		 		 		 		 
		]);

		this.router = router; //save router reference
	}
}