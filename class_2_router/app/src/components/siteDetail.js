import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default class siteDetail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			site: null
		}
	}

	// componentDidMount(){
	// 	fetch(`https://api.mercadolibre.com/sites/${this.props.id}`)
	// 	.then(res => res.json())
	// 	.then(site => this.setState({
	// 		site
	// 	}));
	// }

	render(){
		return (
			<div>
				"cbnm,.-"
			
			
				<Route path="/site/:siteId" render={({match}) => {
							return <h1> dfghjkl </h1>
						}}/>

			</div>
		)
	}

}