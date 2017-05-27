import React from 'react';
import Color from './color';
import OnOffButton from './onOffButton';

const display = {
	display: "block",
	padding: "10px"
}

export default class Player extends React.Component {
	
	constructor() {
		super();
		this.state = {
			status: "on"
		}
	}

	changeStatus(){
		this.setState({status: this.state.status == "on"?"off":"on"})
	}

	render(){
		return (
			<span style={display}>
				ID: {this.props.id} Name: {this.props.name}
				<Color img={this.props.img}/>
				<OnOffButton change={this.changeStatus.bind(this)} status={this.state.status}/>
				<label> Estado: {this.state.status} </label>
			</span>
		)
	}

}