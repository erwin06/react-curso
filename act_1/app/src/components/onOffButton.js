import React from 'react';

const display = {
	display: "block"
}

export default class OnOffButton extends React.Component {
	
	constructor() {
		super();
	}

	render(){
		return (
			<button onClick={this.props.change}>{this.props.status == "on"?"off":"on"}</button>
		)
	}

}