/// view needs this for thinks like menu dropdown in mobile
import $ from 'github:components/jquery@2.1.4';
import bootstrap from 'twbs/bootstrap';
import {bindable} from 'aurelia-framework'

export class NavBar {
	@bindable router = null;
}