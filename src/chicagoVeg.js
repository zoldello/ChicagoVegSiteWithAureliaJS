
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
				nav: true
			},
			{
				href:'#/mission', 
				title:'Mission',
				route: "mission",
				"name": "mission",
				moduleId: "./mission/mission",
				nav: true
			},
			{
				href:'#/donate', 
				title:'Donate',
				route: "donate",
				"name": "donate",
				moduleId: "./donate/donate",
				nav: true 
			},
			{
				href:'#/classifications', 
				title:'Classifications',
				route: "classifications",
				"name": "classifications",
				moduleId: "./classifications/classifications",
				nav: true
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
				href:'#/outreach', 
				title:'Outreach',
				openNewPage: false,
				route:"outreach",
				"name": "outreach",
				moduleId: "./outreach/outreach",
				nav: true
			},
			{
				href:'#/cooking', 
				title:'Cooking',
				route:"cooking",
				"name": "cooking",
				moduleId: "./cooking/cooking",
				openNewPage: false,
				nav: true
			},
			{
				
				href:'#/singles', 
				title:'Singles',
				openNewPage: false,
				route:"singles",
				"name": "singles",
				moduleId: "./singles/singles",
				nav: true
			},
			{
				href:' #/family-kids', 
				title:'Family/Kids',
				openNewPage: false, 
				route:"family-kids",
				"name": "family-kids",
				moduleId:"./family-kids/family-kids",
				nav: true
			}
			]
		}
	},
	{
		href: 'http://www.meetup.com/ChicagoVeg/',
		route: "meetup",
		"name": "meetup",
		moduleId: "./meetup/meetup",
		title: "Meetup",
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
				title:'Restaurant Finder' ,
				openNewPage: true
			},
			{ 
				href:'http://www.meetup.com/ChicagoVeg/pages/ChicagoVeg_Choice_2015/', 
				title:'ChicagoVeg Choice',
				openNewPage: true
				
			}]
		}}, 
		{
			route: "contact",
			"name": "contact",
			moduleId: "./contact/contact",
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
		},
		{
			route: "outreach",
			"name": "outreach",
			moduleId: "./outreach/outreach",
			title: "Outreach",
			nav: false
		}, 		 		 
		{
			route: "cooking",
			"name": "cooking",
			moduleId: "./cooking/cooking",
			title: "Cooking",
			nav: false
		}, 
		{
			route: "singles",
			"name": "singles",
			moduleId: "./singles/singles",
			title: "Singles",
			nav: false
		},
		{
			route: "family-kids",
			"name": "family-kids",
			moduleId: "./family-kids/family-kids",
			title: "Family/kids",
			nav: false
		},
		{
			route: "donate",
			"name": "donate",
			moduleId: "./donate/donate",
			title: "Donate",
			nav: false
		},
		{
			route: "classifications",
			"name": "classifications",
			moduleId: "./classifications/classifications",
			title: "Classifications",
			nav: false
		}	 	 			 			 			 		 			 		 		 			 			 			 		 			 		 
		]);

		this.router = router; //save router reference
	}
}