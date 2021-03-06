import {bindable} from 'aurelia-framework';
import 'font-awesome';

export class StatementBoxes {
	constructor() {
		this.boxes = 
			[{
				"header": "News & Events",
				"boxStyle": "stbox missionStatement",
				"logoStyle": "fa fa-calendar fa-2x",
				"message": "Support all vegans/vegetarians and educate the public about the advantages of a plant-based diet.",
				"url": "#mission"
			},
			{
				"header": "Donate",
				"boxStyle": "stbox donateStatement",
				"logoStyle": "fa fa-money fa-2x",
				"message": "Help us promote vegans/vegetarians. Support can be financiall or gifts in kind",
				"url": "#donate"
			},
			 {
				"header": "Our Programs",
				"boxStyle": "stbox programStatement",
				"logoStyle": "fa fa-leaf fa-2x",
				"message": "We host a variety of events.",
				"url": "#programs"
			}];
	}
}