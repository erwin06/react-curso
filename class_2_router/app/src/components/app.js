import React from 'react';
import SiteDetail from './SiteDetail';
import SiteRow from './SiteRow';
import SiteList from './SiteList';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<BrowserRouter>
					<div>
						<SiteList/>
						<SiteDetail/>
					</div>
				</BrowserRouter>
			</div>
		)
	}

}