import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class SiteRow extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render(){
		return (

				<p><Link to={`/site/${this.props.id}`}>{this.props.id}</Link></p>

		)
	}

}