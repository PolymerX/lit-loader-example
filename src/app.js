/* eslint-disable import/no-unassigned-import */

import {LitElement, html} from 'lit-element';

import './components/CounterElement.lit';

export default class LitApp extends LitElement {
	static get properties() {
		return {};
	}

	render() {
		return html`
			<div>
				<counter-element></counter-element>
			</div>
		`;
	}
}

window.customElements.define('lit-app', LitApp);
