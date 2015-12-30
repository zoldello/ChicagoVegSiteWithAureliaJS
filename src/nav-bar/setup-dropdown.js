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



/*
 <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">Messages <b class="caret"></b></a>
                    <ul role="menu" class="dropdown-menu">
                        <li><a href="#">Inbox</a></li>
                        <li><a href="#">Drafts</a></li>
                        <li><a href="#">Sent Items</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Trash</a></li>
                    </ul>
                </li>
  */