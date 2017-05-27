import React from 'react';
import SiteRow from './SiteRow';

export default class SiteList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			sites: null
		}
	}

	componentDidMount(){
		fetch('https://api.mercadolibre.com/sites')
		.then(res => res.json())
		.then(sites => this.setState({
			sites
		}))
	}

	render(){
		return (
			this.state.sites ? 
				<div> { this.state.sites.map( (x, i) => <SiteRow key={i} id={x.id}/> ) } </div> 
			: <div>"Cargando sites..."</div>
		)
	}

}