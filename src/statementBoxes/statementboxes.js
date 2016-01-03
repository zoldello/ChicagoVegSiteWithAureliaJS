import {bindable} from 'aurelia-framework';
import 'font-awesome';

export class StatementBoxes {
	constructor() {
		this.boxes = 
			[{
				"header": "Our Mission",
				"boxStyle": "stbox missionStatement",
				"logoStyle": "fa fa-leaf fa-4x",
				"message": "Support all vegans/vegetarians and educate the public about advantageous of a plant-based diet.",
				"url": "#mission"
			},
			{
				"header": "Donate",
				"boxStyle": "stbox donateStatement",
				"logoStyle": "fa fa-hand-paper-o fa-4x",
				"message": "Help us promote vegans/vegetarians. Support can be financiall or gifts in kind",
				"url": "#donate"
			},
			 {
				"header": "Our Programs",
				"boxStyle": "stbox programStatement",
				"logoStyle": "fa fa-level-down fa-4x",
				"message": "We host a variety of events.",
				"url": "#programs"
			}];
	}
}