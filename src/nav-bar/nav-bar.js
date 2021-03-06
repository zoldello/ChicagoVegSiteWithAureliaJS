/// view needs this for thinks like menu dropdown in mobile
import $ from 'jquery';
import bootstrap from 'twbs/bootstrap';
import {bindable} from 'aurelia-framework'

//TODO: Figure out a nicer way to add a drop down
export class NavBar {
	@bindable router = null;
	@bindable row = null; 

	hasSubMenu(row) {
		return !this.hasNoSubMenu(row);
	}

	hasNoSubMenu(row) {
		return !row || !row.settings || !row.settings.subMenu;
	}

	openNewPage(item) {
		if (!item) {
			return;
		}

		return (item.openNewPage || item.title === 'Meetup') ? '_blank' : '_self'; // TODO: move to custom attribute, plus, it seems hacky
	}

}
