import {customAttribute, bindable, inject} from 'aurelia-framework';

@bindable('row')
@inject(Element)
@customAttribute('setup-dropdown')
export class SetUpDropdown {
	@bindable row;

	constructor(element) {
  		this.element = element;
	}	

	bind(binding) {
		var rowData = binding.row,
			submenu;

		if (!rowData || !this.element || !rowData.settings || !rowData.settings.subMenu) {
			return;
		}

		if (this.element.tagName === 'LI') {
			this.element.classList.add('dropdown');
		} 
	}

}