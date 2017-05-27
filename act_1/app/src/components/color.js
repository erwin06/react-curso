import React from 'react';

const divStyle = {
  width: '20px'
};

export default class Color extends React.Component {
	
	constructor() {
		super();
	}


	render(){
		return (
			<img style={divStyle} src={this.props.img} />
		)
	}

}