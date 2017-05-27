import React from 'react';
import Player from './player';

export default class Players extends React.Component {
	
	constructor() {
		super();
	}

	render(){
		return (
			<div>
				{
					this.props.players.map((item) => {
						return <Player name={item.name} id={item.id} img={item.img}/>
					})
				}
			</div>
		)
	}

}